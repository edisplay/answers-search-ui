/** @module Component */

import { Renderers } from '../rendering/const';

import DOM from '../dom/dom';
import State from './state';
import { AnalyticsReporter } from '../../core'; // eslint-disable-line no-unused-vars
import AnalyticsEvent from '../../core/analytics/analyticsevent';

/**
 * Component is an abstraction that encapsulates state, behavior,
 * and view for a particular chunk of functionality on the page.
 *
 * The API exposes event life cycle hooks for when things are rendered,
 * mounted, created, etc.
 */
export default class Component {
  constructor (type, config = {}) {
    // Simple facade pattern to enable the user to pass a single object
    // containing all the necessary options and settings
    if (typeof type === 'object') {
      config = type;
      type = config.type;
    }

    this.moduleId = null;

    /**
     * Unique name of this component instance
     * Used to distinguish between other components of the same type
     * @type {String}
     */
    this.name = config.name || this.constructor.name;

    /**
     * Cache the options so that we can propogate properly to child components
     * @type {Object}
     */
    this._config = config;

    /**
     * An identifier used to classify the type of component.
     * The component manager uses this information in order to persist and organize components
     * @type {string|ComponentType}
     */
    this._type = this.constructor.name;

    /**
     * A local reference to the parent component, if exists
     * @type {Component}
     */
    this._parent = config.parent || null;

    /**
     * A container for all the child components
     * @type {Component[]}
     */
    this._children = [];

    /**
     * The state (data) of the component to be provided to the template for rendering
     * @type {object}
     */
    this._state = new State(config.state);

    /**
     * TODO(billy) This should be 'services'
     */
    this.core = config.core || null;

    /**
     * A local reference to the component manager, which contains all of the component classes
     * eligible to be created
     * @type {ComponentManager}
     */
    this.componentManager = config.componentManager || null;

    /**
     * A local reference to the analytics reporter, used to report events for this component
     * @type {AnalyticsReporter}
     */
    this.analyticsReporter = config.analyticsReporter || null;

    /**
     * Options to include with all analytic events sent by this component
     * @type {object}
     * @private
     */
    this._analyticsOptions = config.analyticsOptions || {};

    /**
     * A reference to the DOM node that the component will be appended to when mounted/rendered.
     * @type {HTMLElement}
     */
    if (this._parent === null) {
      if (typeof config.container !== 'string') {
        throw new Error('Missing `container` option for component configuration. Must be of type `string`.');
      }
      this._container = DOM.query(config.container) || null;
    } else {
      this._container = DOM.query(this._parent._container, config.container);

      // If we have a parent, and the container is missing from the DOM,
      // we construct the container and append it to the parent
      if (this._container === null) {
        this._container = DOM.createEl('div', {
          class: config.container.substring(1, config.container.length)
        });
        DOM.append(this._parent._container, this._container);
      }
    }

    if (this._container === null) {
      throw new Error('Cannot find container DOM node: ' + config.container);
    }

    /**
     * A custom class to be applied to {this._container} node
     * @type {string}
     */
    this._className = config.class || 'component';

    /**
     * A custom render function to be used instead of using the default renderer
     * @type {Renderer}
     */
    this._render = config.render || null;

    /**
     * A local reference to the default {Renderer} that will be used for rendering the template
     * @type {Renderer}
     */
    this._renderer = config.renderer || Renderers.Handlebars;

    /**
     * The template string to use for rendering the component
     * If this is left empty, we lookup the template the base templates using the templateName
     * @type {string}
     */
    this._template = config.template ? this._renderer.compile(config.template) : null;

    /**
     * The templateName to use for rendering the component.
     * This is only used if _template is empty.
     * @type {string}
     */
    this._templateName = config.templateName || this.constructor.defaultTemplateName(config);

    /**
     * An internal state indicating whether or not the component has been mounted to the DOM
     * @type {boolean}
     */
    this._isMounted = false;

    /**
     * A local reference to the callback, thats used to transform the internal data
     * models of the components, before it gets applied to the component state.
     * By default, no transformation happens.
     * @type {function}
     */
    this.transformData = config.transformData || this.transformData || function () {};

    /**
     * The a local reference to the callback that will be invoked when a component is created.
     * @type {function}
     */
    this.onCreate = config.onCreate || this.onCreate || function () {};

    /**
     * The a local reference to the callback that will be invoked when a component is Mounted.
     * @type {function}
     */
    this.onMount = config.onMount || this.onMount || function () { };

    /**
     * The a local reference to the callback that will be invoked when a components state is updated.
     * @type {function}
     */
    this.onUpdate = config.onUpdate || this.onUpdate || function () { };
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'default';
  }

  static get type () {
    return 'Component';
  }

  static areDuplicateNamesAllowed () {
    return false;
  }

  init (opts) {
    this.setState(opts.data || opts.state || {});
    this.onCreate();
    this._state.on('update', () => {
      this.onUpdate();
      this.mount();
    });

    DOM.addClass(this._container, this._className);
    return this;
  }

  setState (data) {
    const newState = Object.assign({}, { _config: this._config }, data);
    this._state.set(newState);
    return this;
  }

  getState (prop) {
    return this._state.get(prop);
  }

  hasState (prop) {
    return this._state.has(prop);
  }

  transformData (data) {
    return data;
  }

  addChild (data, type, opts) {
    let childComponent = this.componentManager.create(
      type,
      Object.assign({
        name: data.name,
        parent: this,
        data: data
      }, opts || {}, {
        _parentOpts: this._config
      })
    );

    this._children.push(childComponent);
    return childComponent;
  }

  /**
   * Set the render method to be used for rendering the component
   * @param {Function} render
   * @return {string}
   */
  setRender (render) {
    this._render = render;
    return this;
  }

  /**
   * Set the renderer for the component
   * @param {RendererType} renderer
   */
  setRenderer (renderer) {
    this._renderer = Renderers[renderer];
    return this;
  }

  /**
   * Sets the template for the component to use when rendering
   * @param {string} template
   */
  setTemplate (template) {
    this._template = this._renderer.compile(template);
  }

  unMount () {
    DOM.empty(this._container);
  }

  mount () {
    if (!this._container) {
      return this;
    }

    this.unMount();
    if (this.beforeMount() === false) {
      return this;
    }

    DOM.append(this._container, this.render(this._state.asJSON()));

    this._isMounted = true;
    this._onMount();

    // Attach analytics hooks as necessary
    if (this.analyticsReporter) {
      let domHooks = DOM.queryAll(this._container, '[data-eventtype]:not([data-is-analytics-attached])');
      domHooks.forEach(this._createAnalyticsHook.bind(this));
    }

    return this;
  }

  _onMount () {
    this.onMount(this);
    if (this._children.length === 0) {
      return;
    }

    this._children.forEach(child => {
      child._onMount();
    });
  }

  /**
   * render the template using the {Renderer} with the current state and template of the component
   * @returns {string}
   */
  render (data = this._state.get()) {
    this.beforeRender();
    data = this.transformData(data);

    let html = '';
    // Use either the custom render function or the internal renderer
    // dependant on the component configuration
    if (typeof this._render === 'function') {
      html = this._render(data);
      if (typeof html !== 'string') {
        throw new Error('Render method must return HTML as type {string}');
      }
    } else {
      // Render the existing templates as a string
      html = this._renderer.render({
        template: this._template,
        templateName: this._templateName
      }, data);
    }

    // We create an HTML Document fragment with the rendered string
    // So that we can query it for processing of sub components
    let el = DOM.create(html);

    // Process the DOM to determine if we should create
    // in-memory sub-components for rendering
    let domComponents = DOM.queryAll(el, '[data-component]');
    domComponents.forEach(c => this._createSubcomponent(c, data));

    this.afterRender();
    return el.innerHTML;
  }

  _createSubcomponent (domComponent, data) {
    let dataset = domComponent.dataset;
    let type = dataset.component;
    let prop = dataset.prop;
    let opts = dataset.opts ? JSON.parse(dataset.opts) : {};

    // Rendering a sub component should be within the context,
    // of the node that we processed it from
    opts = Object.assign(opts, {
      container: domComponent
    });

    let childData = data[prop];

    // TODO(billy) Right now, if we provide an array as the data prop,
    // the behavior is to create many components for each item in the array.
    // THAT interface SHOULD change to use a different property that defines
    // whether to array data should be used for a single component or
    // to create many components for each item.
    // Overloading and having this side effect is unintuitive and WRONG
    if (!Array.isArray(childData)) {
      let childComponent = this.addChild(childData, type, opts);
      DOM.append(domComponent, childComponent.render());
      return;
    }

    // Otherwise, render the component as expected
    let childHTML = [];
    for (let i = 0; i < childData.length; i++) {
      let childComponent = this.addChild(childData[i], type, opts);
      childHTML.push(childComponent.render());
    }

    DOM.append(domComponent, childHTML.join(''));
  }

  _createAnalyticsHook (domComponent) {
    domComponent.dataset.isAnalyticsAttached = true;
    const dataset = domComponent.dataset;
    const type = dataset.eventtype;
    const label = dataset.eventlabel;
    const options = dataset.eventoptions ? JSON.parse(dataset.eventoptions) : {};

    DOM.on(domComponent, 'click', e => {
      const event = new AnalyticsEvent(type, label);
      event.addOptions(this._analyticsOptions);
      event.addOptions(options);
      this.analyticsReporter.report(event);
    });
  }

  /**
   * onCreate is triggered when the component is constructed
   * @param {function} the callback to invoke upon emit
   */
  onCreate (cb) {

  }

  /**
   * onUpdate is triggered when the state of the component changes
   * @param {function} the callback to invoke upon emit
   */
  onUpdate (cb) {

  }

  /**
   * beforeRender event is triggered before the component is rendered
   * @param {function} the callback to invoke upon emit
   */
  beforeRender (cb) {

  }

  /**
   * afterRender event is triggered after the component is rendered
   * @param {function} the callback to invoke upon emit
   */
  afterRender (cb) {

  }

  /**
   * onMount is triggered when the component is appended to the DOM
   * @param {function} the callback to invoke upon emit
   */
  onMount (cb) {

  }

  /**
   * onUnMount is triggered when the component is removed from the DOM
   * @param {function} the callback to invoke upon emit
   */
  onUnMount (cb) {

  }

  /**
   * beforeMount is triggered before the component is mounted to the DOM
   * @param {function} the callback to invoke upon emit
   */
  beforeMount (cb) {

  }

  /**
   * onDestroy is triggered when the component is destroyed
   * @param {function} the callback to invoke upon emit
   */
  onDestroy (cb) {

  }
}
