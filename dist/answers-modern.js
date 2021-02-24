(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ANSWERS = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /** @module SearchStates */

  /**
   * SearchStates is an ENUM for the various stages of searching,
   * used to show different templates
   * @enum {string}
   */
  var SearchStates = {
    PRE_SEARCH: 'pre-search',
    SEARCH_LOADING: 'search-loading',
    SEARCH_COMPLETE: 'search-complete'
  };

  /** @module Result */
  var Result = function Result() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Result);

    /**
     * The raw profile data
     * @type {Object}
     * @private
     */
    this._raw = data.raw || null;
    /**
     * The formatted profile data
     * @type {Object}
     * @private
     */

    this._formatted = data.formatted;
    /**
     * The highlighted profile data with highlights applied to applicable fields
     * @type {Object}
     * @private
     */

    this._highlighted = data.highlighted;
    /**
     * The index number of the result
     * @type {Number}
     */

    this.ordinal = data.ordinal || null;
    /**
     * The title of the result card
     * @type {string|null}
     */

    this.title = data.title || null;
    /**
     * The body of the details section of the result card, can contain HTML
     * @type {string| null}
     */

    this.details = data.details || null;
    /**
     * The destination link for the title of the result card
     * @type {string|null}
     */

    this.link = data.link || null;
    /**
     * The Entity ID, or other unique identifier, used for to power interactivity
     * @type {string|null}
     */

    this.id = data.id || null;
    /**
     * The subtitle on the result card
     * @type {string|null}
     */

    this.subtitle = data.subtitle || null;
    /**
     * The class modifier, usually derived from the vertical configuration ID
     * Used to apply different styling to different result card types
     * @type {string|null}
     */

    this.modifier = data.modifier || null;
    /**
     * A large date, of the format { month: 'Jan', day: '01' }
     * @type {Object|null}
     */

    this.bigDate = data.bigDate || null;
    /**
     * An image profile object, expected to have a url property
     * @type {Object|null}
     */

    this.image = data.image || null;
    /**
     * An array of calls to action, of the format:
     * { icon: '', url: '', text: '', eventType: '', eventOptions: {}}
     * @type {Array}
     */

    this.callsToAction = data.callsToAction || [];
    /**
     * Determines if an accordian result should be collapsed by default
     * @type {boolean}
     */

    this.collapsed = data.collapsed === undefined ? true : data.collapsed;
    /**
     * @type {number}
     */

    this.distance = data.distance || null;
    /**
     * @type {number}
     */

    this.distanceFromFilter = data.distanceFromFilter || null;
  };

  /** @module HighlightedValue */

  /**
   * Model representing a highlighted value.
   */
  var HighlightedValue =
  /*#__PURE__*/
  function () {
    function HighlightedValue() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, HighlightedValue);

      this.value = data.value || data.shortValue || '';
      this.matchedSubstrings = data.matchedSubstrings || [];
    }
    /**
     * get highlighted value string
     * @returns {string}
     */


    _createClass(HighlightedValue, [{
      key: "get",
      value: function get() {
        this._sortMatchedSubstrings();

        return this.buildHighlightedValue(this.value, this.matchedSubstrings);
      }
      /**
       * get inverted highlighted value string
       * @returns {string}
       */

    }, {
      key: "getInverted",
      value: function getInverted() {
        this._sortMatchedSubstrings();

        var invertedSubstrings = this._getInvertedSubstrings(this.matchedSubstrings, this.value.length);

        return this.buildHighlightedValue(this.value, invertedSubstrings);
      }
      /**
       * introduces highlighting to input data according to highlighting specifiers
       *
       * @param {Object} val input object to apply highlighting to
       *
       *  example object :
       *  {
       *    name: 'ATM',
       *    featuredMessage: {
       *      description: 'Save time & bank on your terms at over 1,800 ATMs'
       *    }
       *  }
       *
       * @param {Object} highlightedSubstrings highlighting specifiers to apply to input object
       *
       *  example object :
       *  {
       *    name: {
       *      matchedSubstrings: [{
       *        length: 3,
       *        offset: 0
       *      }],
       *      value: 'ATM'
       *    },
       *    featuredMessage: {
       *      description: {
       *        matchedSubstrings: [{
       *          length: 4,
       *          offset: 45
       *        }],
       *        value: 'Save time & bank on your terms at over 1,800 ATMs'
       *      }
       *    }
       *  }
       *
       * @returns {string} copy of input value with highlighting applied
       *
       *  example object :
       *  {
       *    name: '<strong>ATM</strong>',
       *    featuredMessage: {
       *      description: 'Save time & bank on your terms at over 1,800 <strong>ATMs</strong>'
       *    }
       *  }
       *
       */

    }, {
      key: "buildHighlightedValue",
      value: function buildHighlightedValue(val, highlightedSubstrings) {
        var highlightedValue = '';
        var nextStart = 0;

        if (highlightedSubstrings.length === 0) {
          return val;
        }

        for (var j = 0; j < highlightedSubstrings.length; j++) {
          var start = Number(highlightedSubstrings[j].offset);
          var end = start + highlightedSubstrings[j].length;
          highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

          if (j === highlightedSubstrings.length - 1 && end < val.length) {
            highlightedValue += val.slice(end);
          }

          nextStart = end;
        }

        return highlightedValue;
      }
    }, {
      key: "_sortMatchedSubstrings",
      value: function _sortMatchedSubstrings() {
        this.matchedSubstrings.sort(function (a, b) {
          if (a.offset < b.offset) {
            return -1;
          }

          if (a.offset > b.offset) {
            return 1;
          }

          return 0;
        });
      }
    }, {
      key: "_getInvertedSubstrings",
      value: function _getInvertedSubstrings(matchedSubstrings, valueLength) {
        var invertedSubstrings = [];

        for (var i = 0; i < matchedSubstrings.length; i++) {
          var substring = matchedSubstrings[i];
          var nextOffset = substring.offset + substring.length;

          if (i === 0 && substring.offset !== 0) {
            invertedSubstrings.push({
              offset: 0,
              length: substring.offset
            });
          }

          if (valueLength > nextOffset) {
            invertedSubstrings.push({
              offset: nextOffset,
              length: i < matchedSubstrings.length - 1 ? matchedSubstrings[i + 1].offset - nextOffset : valueLength - nextOffset
            });
          }
        }

        return invertedSubstrings;
      }
    }]);

    return HighlightedValue;
  }();

  /** @module Errors */

  /**
   * AnswersBaseError is an extension of the base Error object.
   * This is the object that is used to when reporting to the server.
   * @extends Error
   *
   * Error codes fall into one of four categories:
   * 1XX errors: Basic errors
   * 2XX errors: UI errors
   * 3XX errors: Endpoint errors
   * 4XX errors: Core errors
   */
  var AnswersBaseError =
  /*#__PURE__*/
  function (_Error) {
    _inherits(AnswersBaseError, _Error);

    function AnswersBaseError(errorCode, message) {
      var _this;

      var boundary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';
      var causedBy = arguments.length > 3 ? arguments[3] : undefined;

      _classCallCheck(this, AnswersBaseError);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AnswersBaseError).call(this, message));
      _this.errorCode = errorCode;
      _this.errorMessage = message;
      _this.boundary = boundary;
      _this.reported = false;

      if (causedBy) {
        _this.causedBy = causedBy instanceof AnswersBaseError ? causedBy : AnswersBaseError.from(causedBy);
        _this.stack = "".concat(_this.stack, "\nCaused By: ").concat(_this.causedBy.stack);
      }

      return _this;
    }

    _createClass(AnswersBaseError, [{
      key: "toJson",
      value: function toJson() {
        return JSON.stringify(this);
      }
    }, {
      key: "toString",
      value: function toString() {
        var string = "".concat(this.errorMessage, " (").concat(this.boundary, ")");

        if (this.causedBy) {
          string += "\n  Caused By: ".concat(this.causedBy.toString());
        }

        return string;
      }
    }], [{
      key: "from",
      value: function from(builtinError, boundary) {
        var error = new AnswersBasicError(builtinError.message, boundary);
        error.stack = builtinError.stack;
        return error;
      }
    }]);

    return AnswersBaseError;
  }(_wrapNativeSuper(Error));
  /**
   * AnswersBasicError is a wrapper around all the built-in errors
   * e.g. undefined variables, incorrect syntax, types, missing methods, etc.
   * @extends AnswersBaseError
   */

  var AnswersBasicError =
  /*#__PURE__*/
  function (_AnswersBaseError) {
    _inherits(AnswersBasicError, _AnswersBaseError);

    function AnswersBasicError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersBasicError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersBasicError).call(this, 100, message, boundary, causedBy));
    }

    return AnswersBasicError;
  }(AnswersBaseError);
  /**
   * AnswersUiError used for things like DOM errors.
   * @extends AnswersBaseError
   */

  var AnswersConfigError =
  /*#__PURE__*/
  function (_AnswersBaseError2) {
    _inherits(AnswersConfigError, _AnswersBaseError2);

    function AnswersConfigError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersConfigError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersConfigError).call(this, 101, message, boundary, causedBy));
    }

    return AnswersConfigError;
  }(AnswersBaseError);
  /**
   * AnswersComponentError is used for Component oriented errors
   * e.g. failure to render, or catching unknowns.
   * @extends AnswersBaseError
   */

  var AnswersComponentError =
  /*#__PURE__*/
  function (_AnswersBaseError4) {
    _inherits(AnswersComponentError, _AnswersBaseError4);

    function AnswersComponentError(message, component, causedBy) {
      _classCallCheck(this, AnswersComponentError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersComponentError).call(this, 201, message, component, causedBy));
    }

    return AnswersComponentError;
  }(AnswersBaseError);
  /**
   * AnswersEndpointError represents all network related errors.
   * @extends AnswersBaseError
   */

  var AnswersEndpointError =
  /*#__PURE__*/
  function (_AnswersBaseError5) {
    _inherits(AnswersEndpointError, _AnswersBaseError5);

    function AnswersEndpointError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersEndpointError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersEndpointError).call(this, 300, message, boundary, causedBy));
    }

    return AnswersEndpointError;
  }(AnswersBaseError);
  /**
   * AnswersCoreError represents errors for precondition failures in the core library
   * @extends AnswersBaseError
   */

  var AnswersCoreError =
  /*#__PURE__*/
  function (_AnswersBaseError6) {
    _inherits(AnswersCoreError, _AnswersBaseError6);

    function AnswersCoreError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersCoreError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersCoreError).call(this, 400, message, boundary, causedBy));
    }

    return AnswersCoreError;
  }(AnswersBaseError);
  /**
   * AnswersStorageError represents storage related errors
   * @extends AnswersBaseError
   */

  var AnswersStorageError =
  /*#__PURE__*/
  function (_AnswersBaseError7) {
    _inherits(AnswersStorageError, _AnswersBaseError7);

    function AnswersStorageError(message, storageKey, data, causedBy) {
      var _this2;

      _classCallCheck(this, AnswersStorageError);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AnswersStorageError).call(this, 401, message, 'Storage', causedBy));
      _this2.storageKey = storageKey;
      _this2.data = data;
      return _this2;
    }

    return AnswersStorageError;
  }(AnswersBaseError);
  /**
   * AnswersAnalyticsError is used for errors when reporting analytics
   * @extends AnswersBaseError
   */

  var AnswersAnalyticsError =
  /*#__PURE__*/
  function (_AnswersBaseError8) {
    _inherits(AnswersAnalyticsError, _AnswersBaseError8);

    function AnswersAnalyticsError(message, event, causedBy) {
      var _this3;

      _classCallCheck(this, AnswersAnalyticsError);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AnswersAnalyticsError).call(this, 402, message, 'Analytics', causedBy));
      _this3.event = event;
      return _this3;
    }

    return AnswersAnalyticsError;
  }(AnswersBaseError);

  var ResultFactory =
  /*#__PURE__*/
  function () {
    function ResultFactory() {
      _classCallCheck(this, ResultFactory);
    }

    _createClass(ResultFactory, null, [{
      key: "from",

      /**
       * Converts an API result object into a Result view model.
       * Includes default mappings of GoogleCustomSearchEngine results to
       * the fields exposed by the template.
       * @param resultsData  {Array} expected format: { data: { ... }, highlightedFields: { ... }}
       * @param {Object.<string, function>} formatters The formatters to apply to the result
       * @param {string} verticalId The vertical of these results
       * @param {string} source Backend source of these results
       * @returns {Result[]}
       */
      value: function from(resultsData, formatters, verticalId, source) {
        var results = [];

        for (var i = 0; i < resultsData.length; i++) {
          var data = resultsData[i].data || resultsData[i];
          var distance = resultsData[i].distance;
          var distanceFromFilter = resultsData[i].distanceFromFilter;

          switch (source) {
            case 'GOOGLE_CSE':
              results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
              break;

            case 'BING_CSE':
              results.push(ResultFactory.fromBingCustomSearchEngine(data));
              break;

            case 'ZENDESK':
              results.push(ResultFactory.fromZendeskSearchEngine(data));
              break;

            case 'ALGOLIA':
              results.push(ResultFactory.fromAlgoliaSearchEngine(data));
              break;

            case 'KNOWLEDGE_MANAGER':
              var highlightedFields = resultsData[i].highlightedFields || {};
              results.push(ResultFactory.fromKnowledgeManager(data, formatters, verticalId, highlightedFields, i, distance, distanceFromFilter));
              break;

            default:
              results.push(ResultFactory.fromGeneric(data, i));
          }
        }

        return results;
      }
      /**
       * Applies field formatters to Knowledge Manager Entity Profile Data
       *
       * @param {Object} entityProfileData Entity Profile Data
       * @param {Object} formatters Developer specified Field Formatters
       * @param {string} verticalId Identifier for Vertical
       * @param {Object} highlightedEntityProfileData Subset of Entity Profile Data with highlighting applied
       * @returns {Object} Subset of Entity Profile Data Fields with field formatters applied
       */

    }, {
      key: "computeFormattedData",
      value: function computeFormattedData(entityProfileData, formatters, verticalId, highlightedEntityProfileData) {
        // if no field formatters specified, nothing to format
        if (Object.keys(formatters).length === 0) {
          return {};
        }

        var formattedData = {};
        Object.entries(entityProfileData).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              fieldName = _ref2[0],
              fieldVal = _ref2[1];

          // check if a field formatter exists for the current entity profile field
          if (formatters[fieldName] === undefined) {
            return;
          } // verify the field formatter provided is a formatter function as expected


          if (typeof formatters[fieldName] !== 'function') {
            throw new AnswersCoreError('Field formatter is not of expected type function', 'ResultFactory');
          } // if highlighted version of field value is available, make it available to field formatter


          var highlightedFieldVal = null;

          if (highlightedEntityProfileData && highlightedEntityProfileData[fieldName]) {
            highlightedFieldVal = highlightedEntityProfileData[fieldName];
          } // call formatter function associated with the field name
          // the input object defines the interface that field formatter functions work with


          formattedData[fieldName] = formatters[fieldName]({
            entityProfileData: entityProfileData,
            entityFieldValue: fieldVal,
            highlightedEntityFieldValue: highlightedFieldVal,
            verticalId: verticalId,
            isDirectAnswer: false
          });
        });
        return formattedData;
      }
      /**
       * Applies highlighting to substrings within Knowledge Manager Entity Field Values
       * according to highlighting specifiers returned from the Knowledge Manager Search Backend
       *
       * @param {Object} entityProfileData Entity Profile Data
       * @param {Object} highlightedFields KM specified highlighting instructions to highlight certain Fields
       * @returns {Object} Subset of Entity Profile Data Fields with highlighting applied
       */

    }, {
      key: "computeHighlightedData",
      value: function computeHighlightedData(entityProfileData, highlightedFields) {
        // if no highlighted fields specified, nothing to highlight
        if (Object.keys(highlightedFields).length === 0) {
          return {};
        }

        var highlightedData = {}; // iterate through entity fields that have highlighting instructions

        Object.entries(highlightedFields).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
              highlightedFieldName = _ref4[0];

          // verify that the highlighted field name corresponds to an existing entity profile field
          if (entityProfileData[highlightedFieldName] === undefined) {
            throw new AnswersCoreError('Highlighted Field Name does not exist in Entity Profile', 'ResultFactory');
          }

          var highlightedField = highlightedFields[highlightedFieldName]; // check for nested fields

          if (_typeof(highlightedField) === 'object' && Object.keys(highlightedField).length > 0 && highlightedField['matchedSubstrings'] === undefined) {
            // recurse to children fields
            highlightedData[highlightedFieldName] = ResultFactory.computeHighlightedData(entityProfileData[highlightedFieldName], highlightedFields[highlightedFieldName]);
          } else {
            var highlightedDataValue = new HighlightedValue(entityProfileData).buildHighlightedValue(highlightedField.value, highlightedField.matchedSubstrings);
            highlightedData[highlightedFieldName] = highlightedDataValue;
          }
        });
        return highlightedData;
      }
      /**
       * Converts an API result object into a generic result view model.
       * @param {Object} data
       * @param {number} index
       * @returns {Result}
       */

    }, {
      key: "fromGeneric",
      value: function fromGeneric(data, index) {
        return new Result({
          raw: data,
          title: data.name,
          details: this.truncate(data.description),
          link: data.website,
          id: data.id,
          ordinal: index + 1
        });
      }
      /**
       * Converts an API result object into a Knowledge Manager result view model.
       * @param {Object} data
       * @param {Object} formatters
       * @param {string} verticalId
       * @param {Object} highlightedFields
       * @param {number} index
       * @param {number} distance
       * @param {number} distanceFromFilter
       * @returns {Result}
       */

    }, {
      key: "fromKnowledgeManager",
      value: function fromKnowledgeManager(data, formatters, verticalId, highlightedFields, index, distance, distanceFromFilter) {
        // compute highlighted entity profile data
        var highlightedEntityProfileData = ResultFactory.computeHighlightedData(data, highlightedFields); // compute formatted entity profile data

        var formattedEntityProfileData = ResultFactory.computeFormattedData(data, formatters, verticalId, highlightedEntityProfileData); // set result details checking the following in order of priority : formatted, highlighted, raw

        var resultDetails = null;

        if (formattedEntityProfileData.description !== undefined) {
          resultDetails = formattedEntityProfileData.description;
        } else if (highlightedEntityProfileData.description !== undefined) {
          resultDetails = this.truncate(highlightedEntityProfileData.description);
        } else {
          resultDetails = this.truncate(data.description);
        }

        return new Result({
          raw: data,
          formatted: formattedEntityProfileData,
          highlighted: highlightedEntityProfileData,
          title: formattedEntityProfileData.name || data.name,
          details: resultDetails,
          link: data.website,
          id: data.id,
          ordinal: index + 1,
          distance: distance,
          distanceFromFilter: distanceFromFilter
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Google Custom Search Engine object.
       * @param {Object} data
       * @returns {Result}
       */

    }, {
      key: "fromGoogleCustomSearchEngine",
      value: function fromGoogleCustomSearchEngine(data) {
        return new Result({
          raw: data,
          title: data.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
          details: data.htmlSnippet,
          link: data.link
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Bing Custom Search Engine object.
       * @param {Object} data
       * @returns {Result}
       */

    }, {
      key: "fromBingCustomSearchEngine",
      value: function fromBingCustomSearchEngine(data) {
        return new Result({
          raw: data,
          title: data.name,
          details: data.snippet,
          link: data.url
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Zendesk Search Engine object.
       * @param {Object} data
       * @returns {Result}
       */

    }, {
      key: "fromZendeskSearchEngine",
      value: function fromZendeskSearchEngine(data) {
        return new Result({
          raw: data,
          title: data.title,
          details: data.snippet,
          link: data.html_url
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Algolia Search Engine object.
       * Details field is set to objectID since response has only one general field objectID.
       * @param {Object} data
       * @returns {Result}
       */

    }, {
      key: "fromAlgoliaSearchEngine",
      value: function fromAlgoliaSearchEngine(data) {
        return new Result({
          raw: data,
          details: data.objectID,
          id: data.objectID
        });
      }
      /**
       * Truncates strings to 250 characters, attempting to preserve whole words
       * @param str {string} the string to truncate
       * @param limit {Number} the maximum character length to return
       * @param trailing {string} a trailing string to denote truncation, e.g. '...'
       * @param sep {string} the word separator
       * @returns {string}
       */

    }, {
      key: "truncate",
      value: function truncate(str) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
        var trailing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
        var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';

        if (!str || str.length <= limit) {
          return str;
        } // TODO (bmcginnis): split punctuation too so we don't end up with "foo,..."


        var words = str.split(sep);
        var max = limit - trailing.length;
        var truncated = '';

        for (var i = 0; i < words.length; i++) {
          var word = words[i];

          if (truncated.length + word.length > max || i !== 0 && truncated.length + word.length + sep.length > max) {
            truncated += trailing;
            break;
          }

          truncated += i === 0 ? word : sep + word;
        }

        return truncated;
      }
    }]);

    return ResultFactory;
  }();

  var Section =
  /*#__PURE__*/
  function () {
    function Section(data, url, formatters) {
      _classCallCheck(this, Section);

      this.searchState = SearchStates.SEARCH_COMPLETE;
      this.verticalConfigId = data.verticalConfigId || null;
      this.resultsCount = data.resultsCount || 0;
      this.encodedState = data.encodedState || '';
      this.appliedQueryFilters = AppliedQueryFilter.from(data.appliedQueryFilters);
      this.facets = data.facets || null;
      this.results = ResultFactory.from(data.results, formatters, this.verticalConfigId, data.source);
      this.map = Section.parseMap(data.results);
      this.verticalURL = url || null;
      this.resultsContext = data.resultsContext;
    }

    _createClass(Section, null, [{
      key: "parseMap",
      value: function parseMap(results) {
        var mapMarkers = [];
        var centerCoordinates = {};

        for (var j = 0; j < results.length; j++) {
          // TODO(billy) Remove legacy fallback from all data format
          var result = results[j].data || results[j];

          if (result && result.yextDisplayCoordinate) {
            if (!centerCoordinates.latitude) {
              centerCoordinates = {
                latitude: result.yextDisplayCoordinate.latitude,
                longitude: result.yextDisplayCoordinate.longitude
              };
            }

            mapMarkers.push({
              item: result,
              label: mapMarkers.length + 1,
              latitude: result.yextDisplayCoordinate.latitude,
              longitude: result.yextDisplayCoordinate.longitude
            });
          }
        }

        return {
          'mapCenter': centerCoordinates,
          'mapMarkers': mapMarkers
        };
      }
      /**
       * Create a section from the provided data
       * @param {Object|Array} modules The result modules
       * @param {Object} urls The tab urls
       * @param {Object.<string, function>} formatters Field formatters for results
       */

    }, {
      key: "from",
      value: function from(modules, urls, formatters) {
        var sections = [];

        if (!modules) {
          return sections;
        }

        if (!Array.isArray(modules)) {
          return new Section(modules, null, formatters);
        } // Our sections should contain a property of mapMarker objects


        for (var i = 0; i < modules.length; i++) {
          sections.push(new Section(modules[i], urls[modules[i].verticalConfigId], formatters));
        }

        return sections;
      }
    }]);

    return Section;
  }();

  var AppliedQueryFilter =
  /*#__PURE__*/
  function () {
    // Support legacy model and new model until fully migrated.
    // TODO(billy) Remove the left expression during assignment when migrated.
    // TODO(SPR-2394): convert this into a FilterNode here instead of in VerticalResults
    function AppliedQueryFilter(appliedQueryFilter) {
      _classCallCheck(this, AppliedQueryFilter);

      this.key = appliedQueryFilter.key || appliedQueryFilter.displayKey;
      this.value = appliedQueryFilter.value || appliedQueryFilter.displayValue;
      this.filter = appliedQueryFilter.filter;
      this.fieldId = Object.keys(appliedQueryFilter.filter)[0];
    }

    _createClass(AppliedQueryFilter, null, [{
      key: "from",
      value: function from(appliedQueryFilters) {
        var filters = [];

        for (var i = 0; i < appliedQueryFilters.length; i++) {
          filters.push(new AppliedQueryFilter(appliedQueryFilters[i]));
        }

        return filters;
      }
    }]);

    return AppliedQueryFilter;
  }();

  var UniversalResults =
  /*#__PURE__*/
  function () {
    function UniversalResults(data) {
      _classCallCheck(this, UniversalResults);

      this.queryId = data.queryId || null;
      this.sections = data.sections || [];
      /**
       * The current state of the search, used to render different templates before, during,
       * and after loading
       * @type {string}
       */

      this.searchState = data.searchState || SearchStates.SEARCH_COMPLETE;
    }
    /**
     * Create universal results from server data
     * @param {Object} response The server response
     * @param {Object} urls The tab urls
     * @param {Object.<string, function>} formatters The field formatters to use
     */


    _createClass(UniversalResults, null, [{
      key: "from",
      value: function from(response, urls, formatters) {
        return new UniversalResults({
          queryId: response.queryId,
          sections: Section.from(response.modules, urls, formatters)
        });
      }
      /**
       * Construct a UnivervalResults object representing loading results
       * @return {UniversalResults}
       */

    }, {
      key: "searchLoading",
      value: function searchLoading() {
        return new UniversalResults({
          searchState: SearchStates.SEARCH_LOADING
        });
      }
    }]);

    return UniversalResults;
  }();

  /** @module DirectAnswer */
  var DirectAnswer =
  /*#__PURE__*/
  function () {
    function DirectAnswer() {
      var directAnswer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DirectAnswer);

      Object.assign(this, directAnswer);
      Object.freeze(this);
    }
    /**
     * Create a DirectAnswer model from the given server data and formatters
     * @param {Object} response The server direct answer
     * @param {Object.<string, function>} formatters The formatters to apply to this direct answer
     */


    _createClass(DirectAnswer, null, [{
      key: "from",
      value: function from(response, formatters) {
        var data = _objectSpread({}, response);

        var answer = data.answer,
            relatedItem = data.relatedItem;

        if (answer && formatters[answer.fieldApiName]) {
          answer.value = formatters[answer.fieldApiName](answer.value, relatedItem.data.fieldValues, relatedItem.verticalConfigId, true);
        }

        return new DirectAnswer(data);
      }
    }]);

    return DirectAnswer;
  }();

  /** @module Navigation */
  var Navigation =
  /*#__PURE__*/
  function () {
    function Navigation(tabOrder) {
      _classCallCheck(this, Navigation);

      this.tabOrder = tabOrder || [];
      Object.freeze(this);
    }

    _createClass(Navigation, null, [{
      key: "from",
      value: function from(modules) {
        var nav = [];

        if (!modules || !Array.isArray(modules)) {
          return nav;
        }

        for (var i = 0; i < modules.length; i++) {
          nav.push(modules[i].verticalConfigId);
        }

        return new Navigation(nav);
      }
    }]);

    return Navigation;
  }();

  var VerticalResults =
  /*#__PURE__*/
  function () {
    function VerticalResults() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, VerticalResults);

      Object.assign(this, {
        searchState: SearchStates.SEARCH_COMPLETE
      }, data);
      /**
       * The context of the results, used to provide more information about why
       * these specific results were returned.
       * @type {ResultsContext}
       */

      this.resultsContext = data.resultsContext;
      Object.freeze(this);
    }
    /**
     * Append the provided results to the current results
     * @param {VerticalResults} results the results to append to the current results
     */


    _createClass(VerticalResults, [{
      key: "append",
      value: function append(results) {
        if (results.resultsContext !== this.resultsContext) {
          throw new AnswersCoreError('Cannot merge results with different contexts', 'VerticalResults');
        }

        var merged = _objectSpread({}, this);

        merged.resultsContext = this.resultsContext;
        merged.results = this.results.concat(results.results);
        merged.map.mapMarkers = this.map.mapMarkers.concat(results.map.mapMarkers);
        return new VerticalResults(merged);
      }
      /**
       * Create vertical results from server data
       * @param {Object} response The server response
       * @param {Object.<string, function>} formatters The field formatters to use
       * @param {string} verticalKey the vertical key
       */

    }], [{
      key: "from",
      value: function from(response, formatters, verticalKey) {
        var data = Section.from(response, null, formatters);
        return new VerticalResults(_objectSpread({}, data, {
          verticalConfigId: verticalKey
        }));
      }
      /**
       * Construct a VerticalResults object representing loading results
       * @return {VerticalResults}
       */

    }, {
      key: "searchLoading",
      value: function searchLoading() {
        return new VerticalResults({
          searchState: SearchStates.SEARCH_LOADING
        });
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }]);

    return VerticalResults;
  }();

  /** @module SpellCheck */

  /**
   * SpellCheck is the core state model
   * to power the SpellCheck component
   */
  var SpellCheck =
  /*#__PURE__*/
  function () {
    function SpellCheck(data) {
      _classCallCheck(this, SpellCheck);

      /**
       * The original query
       * @type {string}
       */
      this.query = data.query || null;
      /**
       * The corrected query
       * @type {string}
       */

      this.correctedQuery = data.correctedQuery || null;
      /**
       * The spell check type
       * @type {string}
       */

      this.type = data.type || null;
      /**
       * Should show spell check or not
       * @type {boolean}
       */

      this.shouldShow = this.correctedQuery !== null;
    }
    /**
     * Create a spell check model from the provided data
     * @param {Object} response The spell check response
     */


    _createClass(SpellCheck, null, [{
      key: "from",
      value: function from(response) {
        if (!response) {
          return {};
        }

        return new SpellCheck({
          query: response.originalQuery,
          correctedQuery: response.correctedQuery,
          type: response.type
        });
      }
    }]);

    return SpellCheck;
  }();

  /** @module StorageKeys */

  /**
   * StorageKeys is an ENUM are considered the root context
   * for how data is stored and scoped in the storage.
   *
   * @enum {string}
   */
  var StorageKeys = {
    NAVIGATION: 'navigation',
    UNIVERSAL_RESULTS: 'universal-results',
    VERTICAL_RESULTS: 'vertical-results',
    ALTERNATIVE_VERTICALS: 'alternative-verticals',
    AUTOCOMPLETE: 'autocomplete',
    DIRECT_ANSWER: 'direct-answer',
    FILTER: 'filter',
    // DEPRECATED
    STATIC_FILTER_NODE: 'static-filter-node',
    QUERY: 'query',
    QUERY_ID: 'query-id',
    FACET_FILTER_NODE: 'facet-filter-node',
    DYNAMIC_FILTERS: 'dynamic-filters',
    PARAMS: 'params',
    GEOLOCATION: 'geolocation',
    INTENTS: 'intents',
    QUESTION_SUBMISSION: 'question-submission',
    SEARCH_CONFIG: 'search-config',
    SEARCH_OFFSET: 'search-offset',
    SPELL_CHECK: 'spell-check',
    LOCATION_BIAS: 'location-bias',
    SESSIONS_OPT_IN: 'sessions-opt-in',
    VERTICAL_PAGES_CONFIG: 'vertical-pages-config',
    LOCALE: 'locale',
    SORT_BYS: 'sort-bys',
    NO_RESULTS_CONFIG: 'no-results-config',
    LOCATION_RADIUS: 'location-radius',
    RESULTS_HEADER: 'results-header',
    API_CONTEXT: 'context',
    REFERRER_PAGE_URL: 'referrerPageUrl',
    QUERY_TRIGGER: 'queryTrigger'
  };

  /** @module DynamicFilters */

  /**
   * Model representing a set of dynamic filters
   */
  var DynamicFilters =
  /*#__PURE__*/
  function () {
    function DynamicFilters(data) {
      _classCallCheck(this, DynamicFilters);

      /**
       * The list of filters this model holds
       * @type {{label: string, fieldId: string, options: object[]}}
       */
      this.filters = data.filters || [];
      /**
       * The {@link ResultsContext} of the facets.
       * @type {ResultsContext}
       */

      this.resultsContext = data.resultsContext;
      Object.freeze(this);
    }
    /**
     * Organize 'facets' from the api response into dynamic filters
     * @param {Object} response dynamic filter response from the api
     * @returns {DynamicFilters}
     */


    _createClass(DynamicFilters, null, [{
      key: "from",
      value: function from(response) {
        var facets = response.facets || [];
        var dynamicFilters = facets.map(function (f) {
          return {
            label: f['displayName'],
            fieldId: f['fieldId'],
            options: f.options.map(function (o) {
              return {
                label: o['displayName'],
                countLabel: o['count'],
                selected: o['selected'],
                filter: o['filter']
              };
            })
          };
        });
        return new DynamicFilters({
          filters: dynamicFilters,
          resultsContext: response.resultsContext
        });
      }
    }]);

    return DynamicFilters;
  }();

  /** @module SearchIntents */
  var SearchIntents =
  /*#__PURE__*/
  function () {
    function SearchIntents(intents) {
      _classCallCheck(this, SearchIntents);

      /**
       * The intent to find results based on the user's location
       * @type {boolean}
       */
      this.nearMe = intents.nearMe;
      Object.freeze(this);
    }
    /**
     * Create SearchIntents from server response
     * @param {Object} response The server response intents
     * @returns {SearchIntents}
     */


    _createClass(SearchIntents, null, [{
      key: "from",
      value: function from(response) {
        var intents = response || [];
        return new SearchIntents({
          nearMe: intents.includes('NEAR_ME')
        });
      }
    }]);

    return SearchIntents;
  }();

  /** @module LocationBias */

  /**
   * LocationBias is the core state model
   * to power the LocationBias component
   */
  var LocationBias =
  /*#__PURE__*/
  function () {
    function LocationBias(data) {
      _classCallCheck(this, LocationBias);

      /**
       * The location bias accuracy which are IP, DEVICE and UNKNWON
       * @type {string}
       */
      this.accuracy = data.accuracy || null;
      /**
       * The latitude used for location bias
       * @type {number}
       */

      this.latitude = data.latitude || null;
      /**
       * The longitude used for location bias
       * @type {number}
       */

      this.longitude = data.longitude || null;
      /**
       * The location display name
       * @type {string}
       */

      this.locationDisplayName = data.locationDisplayName || null;
    }
    /**
     * Create a location bias model from the provided data
     * @param {Object} response The location bias response
     */


    _createClass(LocationBias, null, [{
      key: "from",
      value: function from(response) {
        if (!response) {
          return new LocationBias({
            accuracy: 'UNKNOWN'
          });
        }

        return new LocationBias({
          accuracy: response.accuracy,
          latitude: response.latitude,
          longitude: response.longitude,
          locationDisplayName: response.locationDisplayName
        });
      }
    }]);

    return LocationBias;
  }();

  var AlternativeVerticals =
  /*#__PURE__*/
  function () {
    function AlternativeVerticals(data) {
      _classCallCheck(this, AlternativeVerticals);

      /**
       * Alternative verticals that have results for the current query
       * @type {Section}
       */
      this.alternativeVerticals = data || [];
    }
    /**
     * Create alternative verticals from server data
     * @param {Object} response The server response
     * @param {Object.<string, function>} formatters The field formatters to use
     */


    _createClass(AlternativeVerticals, null, [{
      key: "from",
      value: function from(response, formatters) {
        var alternativeVerticals = response.alternativeVerticals;

        if (!alternativeVerticals || !alternativeVerticals.modules) {
          return new AlternativeVerticals();
        }

        return new AlternativeVerticals(Section.from(alternativeVerticals.modules, {}, formatters));
      }
    }]);

    return AlternativeVerticals;
  }();

  /** @module ResultsContext */

  /**
   * ResultsContext is an ENUM that provides context
   * for the results that we are storing from server
   * data
   * @enum {string}
   */
  var ResultsContext = {
    NORMAL: 'normal',
    NO_RESULTS: 'no-results'
  };

  /**
   * A Data Transformer that takes the response object from a Search request
   * And transforms in to a front-end oriented data structure that our
   * component library and core storage understand.
   */

  var SearchDataTransformer =
  /*#__PURE__*/
  function () {
    function SearchDataTransformer() {
      _classCallCheck(this, SearchDataTransformer);
    }

    _createClass(SearchDataTransformer, null, [{
      key: "transform",
      value: function transform(data) {
        var _ref;

        var urls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var formatters = arguments.length > 2 ? arguments[2] : undefined;
        var response = data.response;
        return _ref = {}, _defineProperty(_ref, StorageKeys.QUERY_ID, response.queryId), _defineProperty(_ref, StorageKeys.NAVIGATION, Navigation.from(response.modules)), _defineProperty(_ref, StorageKeys.DIRECT_ANSWER, DirectAnswer.from(response.directAnswer, formatters)), _defineProperty(_ref, StorageKeys.UNIVERSAL_RESULTS, UniversalResults.from(response, urls, formatters)), _defineProperty(_ref, StorageKeys.INTENTS, SearchIntents.from(response.searchIntents)), _defineProperty(_ref, StorageKeys.SPELL_CHECK, SpellCheck.from(response.spellCheck)), _defineProperty(_ref, StorageKeys.LOCATION_BIAS, LocationBias.from(response.locationBias)), _ref;
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data, formatters, verticalKey) {
        var _ref2;

        var response = SearchDataTransformer._parseVerticalResponse(data.response);

        return _ref2 = {}, _defineProperty(_ref2, StorageKeys.QUERY_ID, response.queryId), _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(response, formatters, verticalKey)), _defineProperty(_ref2, StorageKeys.DYNAMIC_FILTERS, DynamicFilters.from(response)), _defineProperty(_ref2, StorageKeys.INTENTS, SearchIntents.from(response.searchIntents)), _defineProperty(_ref2, StorageKeys.SPELL_CHECK, SpellCheck.from(response.spellCheck)), _defineProperty(_ref2, StorageKeys.ALTERNATIVE_VERTICALS, AlternativeVerticals.from(response, formatters)), _defineProperty(_ref2, StorageKeys.LOCATION_BIAS, LocationBias.from(response.locationBias)), _ref2;
      }
      /**
       * Form response as if the results from `allResultsForVertical` were the actual
       * results in `results`
       * @param {Object} response The server response
       */

    }, {
      key: "_parseVerticalResponse",
      value: function _parseVerticalResponse(response) {
        var hasResults = response.results && response.resultsCount > 0;
        var resultsContext = hasResults ? ResultsContext.NORMAL : ResultsContext.NO_RESULTS;

        if (resultsContext === ResultsContext.NO_RESULTS) {
          var _ref3 = response.allResultsForVertical || {},
              results = _ref3.results,
              resultsCount = _ref3.resultsCount,
              facets = _ref3.facets;

          return _objectSpread({}, response, {
            results: results || [],
            resultsCount: resultsCount || 0,
            resultsContext: resultsContext,
            facets: facets
          });
        }

        return _objectSpread({}, response, {
          resultsContext: resultsContext
        });
      }
    }]);

    return SearchDataTransformer;
  }();

  /** @module QuestionSubmission */

  /**
   * QuestionSubmission is the core state model
   * to power the QuestionSubmission component
   */
  var QuestionSubmission =
  /*#__PURE__*/
  function () {
    function QuestionSubmission() {
      var question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var errors = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, QuestionSubmission);

      /**
       * The author of the question
       * @type {string}
       */
      this.name = question.name || null;
      /**
       * The email address of the question
       * @type {string}
       */

      this.email = question.email || null;
      /**
       * True if the privacy policy was approved
       * @type {boolean}
       */

      this.privacyPolicy = question.privacyPolicy || null;
      /**
       * The question to be sent to the server
       * @type {string}
       */

      this.questionText = question.questionText || null;
      /**
       * Alternative question meta information
       * @type {string}
       */

      this.questionDescription = question.questionDescription || null;
      /**
       * Whether the form is expanded or not. Defaults to true.
       */

      this.questionExpanded = typeof question.expanded !== 'boolean' || question.expanded;
      /**
       * Contains any errors about the question submission
       * @type {object}
       */

      this.errors = errors || null;
      /**
       * Whether the form has been submitted or not. Defaults to false.
       */

      this.questionSubmitted = question.submitted || false;
      Object.freeze(this);
    }

    _createClass(QuestionSubmission, null, [{
      key: "submitted",
      value: function submitted() {
        return {
          questionSubmitted: true,
          questionExpanded: true
        };
      }
    }, {
      key: "errors",
      value: function errors(question, _errors) {
        return QuestionSubmission(question, _errors);
      }
    }]);

    return QuestionSubmission;
  }();

  /** @module QueryTriggers */

  /**
   * QueryTriggers is an ENUM of the possible triggers for a
   * query update.
   *
   * @enum {string}
   */
  var QueryTriggers = {
    INITIALIZE: 'initialize',
    QUERY_PARAMETER: 'query-parameter'
  };

  /**
   * Model for the analytics event type
   */
  var AnalyticsEvent =
  /*#__PURE__*/
  function () {
    function AnalyticsEvent(type, label) {
      _classCallCheck(this, AnalyticsEvent);

      /**
       * The type of event to report
       * @type {string}
       */
      this.eventType = type.toUpperCase();
      /**
       * An optional label to be provided for the event
       * @type {string}
       */

      if (label) {
        this.label = label;
      }
    }
    /**
     * Adds the provided options to the event
     * @param {object} options Additional options for the event
     */


    _createClass(AnalyticsEvent, [{
      key: "addOptions",
      value: function addOptions(options) {
        Object.assign(this, options);
        return this;
      }
      /**
       * Return the event in the api format, typically for reporting to the api
       */

    }, {
      key: "toApiEvent",
      value: function toApiEvent() {
        return Object.assign({}, this);
      }
      /**
       * Creating an analytics event from raw data.
       * @param {Object} data
       */

    }], [{
      key: "fromData",
      value: function fromData(data) {
        var type = data.type,
            label = data.label,
            eventOptions = _objectWithoutProperties(data, ["type", "label"]);

        var analyticsEvent = new AnalyticsEvent(type, label);
        analyticsEvent.addOptions(eventOptions);
        return analyticsEvent;
      }
    }]);

    return AnalyticsEvent;
  }();

  /** @module FilterCombinators */

  /**
   * FilterCombinators are enums for valid ways to combine {@link Filter}s.
   */
  var FilterCombinators = {
    AND: '$and',
    OR: '$or'
  };

  /**
   * Represents an api filter and provides static methods for easily constructing Filters.
   * See https://developer.yext.com/docs/api-reference/#operation/listEntities for structure details
   */

  var Filter =
  /*#__PURE__*/
  function () {
    function Filter() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Filter);

      Object.assign(this, data);
      Object.freeze(this);
    }
    /**
     * A filter should have exactly ONE key. That key is EITHER the field name to filter by, or
     * a special string such as $or or $and.
     * @type {string}
     */


    _createClass(Filter, [{
      key: "getFilterKey",
      value: function getFilterKey() {
        if (Object.keys(this).length > 0) {
          return Object.keys(this)[0];
        }
      }
      /**
       * Create an empty filter
       */

    }], [{
      key: "empty",
      value: function empty() {
        return new Filter();
      }
      /**
       * Wrap filter data in a Filter class
       * @param {Object} filter
       */

    }, {
      key: "from",
      value: function from(filter) {
        return new Filter(filter);
      }
      /**
       * Parse a JSON format filter returned from the server into a Filter
       * @param {*} responseFilter A filter in JSON format returned from the backend
       * @returns {Filter}
       */

    }, {
      key: "fromResponse",
      value: function fromResponse(responseFilter) {
        return new Filter(JSON.parse(responseFilter));
      }
      /**
       * Return a new Filter representing the OR of all provided filters
       * @param  {...Filter} filters The filters to OR together
       * @returns {Filter}
       */

    }, {
      key: "or",
      value: function or() {
        for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
          filters[_key] = arguments[_key];
        }

        return new Filter(_defineProperty({}, FilterCombinators.OR, filters));
      }
      /**
       * Return a new Filter representing the AND of all provided filters
       * @param  {...Filter} filters The filters to AND together
       * @returns {Filter}
       */

    }, {
      key: "and",
      value: function and() {
        for (var _len2 = arguments.length, filters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          filters[_key2] = arguments[_key2];
        }

        return new Filter(_defineProperty({}, FilterCombinators.AND, filters));
      }
      /**
       * Helper method for creating a range filter
       * @param {string} field field id of the filter
       * @param {number|string} min minimum value
       * @param {number|string} max maximum value
       * @param {boolean} isExclusive whether this is an inclusive or exclusive range
       * @returns {Filter}
       */

    }, {
      key: "range",
      value: function range(field, min, max, isExclusive) {
        var falsyMin = min === null || min === undefined || min === '';
        var falsyMax = max === null || max === undefined || max === '';

        if (falsyMin && falsyMax) {
          return Filter.empty();
        } else if (falsyMax) {
          return isExclusive ? Filter.greaterThan(field, min) : Filter.greaterThanEqual(field, min);
        } else if (falsyMin) {
          return isExclusive ? Filter.lessThan(field, max) : Filter.lessThanEqual(field, max);
        } else if (min === max) {
          return isExclusive ? Filter.empty() : Filter.equal(field, min);
        }

        return isExclusive ? Filter.exclusiveRange(field, min, max) : Filter.inclusiveRange(field, min, max);
      }
      /**
       * Create a new "equal to" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be equal to
       * @returns {Filter}
       */

    }, {
      key: "equal",
      value: function equal(field, value) {
        return Filter._fromMatcher(field, '$eq', value);
      }
      /**
       * Create a new "less than" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be less than
       * @returns {Filter}
       */

    }, {
      key: "lessThan",
      value: function lessThan(field, value) {
        return Filter._fromMatcher(field, '$lt', value);
      }
      /**
       * Create a new "less than or equal to" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be less than or equal to
       * @returns {Filter}
       */

    }, {
      key: "lessThanEqual",
      value: function lessThanEqual(field, value) {
        return Filter._fromMatcher(field, '$le', value);
      }
      /**
       * Create a new "greater than" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be greater than
       * @returns {Filter}
       */

    }, {
      key: "greaterThan",
      value: function greaterThan(field, value) {
        return Filter._fromMatcher(field, '$gt', value);
      }
      /**
       * Create a new "greater than or equal to" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be greater than or equal to
       * @returns {Filter}
       */

    }, {
      key: "greaterThanEqual",
      value: function greaterThanEqual(field, value) {
        return Filter._fromMatcher(field, '$ge', value);
      }
      /**
       * Create a new inclusive range filter
       * @param {string} field The subject field of the filter
       * @param {*} min The minimum value
       * @param {*} max The maximum value
       * @returns {Filter}
       */

    }, {
      key: "inclusiveRange",
      value: function inclusiveRange(field, min, max) {
        return new Filter(_defineProperty({}, field, {
          '$ge': min,
          '$le': max
        }));
      }
      /**
       * Create a new exclusive range filter
       * @param {string} field The subject field of the filter
       * @param {*} min The minimum value
       * @param {*} max The maximum value
       * @returns {Filter}
       */

    }, {
      key: "exclusiveRange",
      value: function exclusiveRange(field, min, max) {
        return new Filter(_defineProperty({}, field, {
          '$gt': min,
          '$lt': max
        }));
      }
      /**
       * Create a new position filter
       * @param {number} lat The latitude of the position
       * @param {number} lng The longitude of the position
       * @param {number} radius The search radius (in meters)
       */

    }, {
      key: "position",
      value: function position(lat, lng, radius) {
        return Filter._fromMatcher('builtin.location', '$near', {
          lat: lat,
          lng: lng,
          radius: radius
        });
      }
      /**
       * Create a new filter with the given matcher
       * @private
       * @param {string} field The subject field of the filter
       * @param {string} matcher The matcher for the filer
       * @param {*} value The value for the filter
       * @returns {Filter}
       */

    }, {
      key: "_fromMatcher",
      value: function _fromMatcher(field, matcher, value) {
        return new Filter(_defineProperty({}, field, _defineProperty({}, matcher, value)));
      }
    }]);

    return Filter;
  }();

  /** @module FilterTypes */

  /**
   * FilterType is an ENUM for the different types of filters in the SDK.
   * @enum {string}
   */
  var FilterType = {
    STATIC: 'filter-type-static',
    FACET: 'filter-type-facet',
    RADIUS: 'filter-type-radius',
    NLP: 'filter-type-nlp'
  };

  /**
   * FilterMetadata is a container for additional display data for a {@link Filter}.
   */

  var FilterMetadata = function FilterMetadata() {
    var metadata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FilterMetadata);

    var fieldName = metadata.fieldName,
        displayValue = metadata.displayValue,
        filterType = metadata.filterType;
    /**
     * The display name for the field being filtered on.
     * @type {string}
     */

    this.fieldName = fieldName;
    /**
     * The display value for the values being filtered on.
     * Even if there are multiple values within the data of a filter,
     * there should only be one display value for the whole filter.
     * @type {string}
     */

    this.displayValue = displayValue;
    /**
     * What type of filter this is.
     * @type {FilterType}
     */

    this.filterType = filterType || FilterType.STATIC;
    Object.freeze(this);
  };

  /** @module FilterNode */

  /**
   * A FilterNode represents a single node in a filter tree.
   * Each filter node has an associated filter, containing the filter
   * data to send in a request, any additional filter metadata for display,
   * and any children nodes.
   *
   * Implemented by {@link SimpleFilterNode} and {@link CombinedFilterNode}.
   */
  var FilterNode =
  /*#__PURE__*/
  function () {
    function FilterNode() {
      _classCallCheck(this, FilterNode);
    }

    _createClass(FilterNode, [{
      key: "getFilter",

      /**
       * Returns this node's filter.
       * @returns {Filter}
       */
      value: function getFilter() {}
      /**
       * Returns the metadata for this node's filter.
       * @returns {FilterMetadata}
       */

    }, {
      key: "getMetadata",
      value: function getMetadata() {}
      /**
       * Returns the children of this node.
       * @returns {Array<FilterNode>}
       */

    }, {
      key: "getChildren",
      value: function getChildren() {}
      /**
       * Recursively get all of the leaf SimpleFilterNodes.
       * @returns {Array<SimpleFilterNode>}
       */

    }, {
      key: "getSimpleDescendants",
      value: function getSimpleDescendants() {}
      /**
       * Remove this FilterNode from the FilterRegistry.
       */

    }, {
      key: "remove",
      value: function remove() {}
    }]);

    return FilterNode;
  }();

  /**
   * A SimpleFilterNode represents a single, atomic filter.
   * An atomic filter is a filter that filters by a single value on a single field id,
   * and does not contain any children filters.
   */

  var SimpleFilterNode =
  /*#__PURE__*/
  function (_FilterNode) {
    _inherits(SimpleFilterNode, _FilterNode);

    function SimpleFilterNode() {
      var _this;

      var filterNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SimpleFilterNode);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleFilterNode).call(this));
      var filter = filterNode.filter,
          metadata = filterNode.metadata,
          remove = filterNode.remove;
      /**
       * The filter data.
       * @type {Filter}
       */

      _this.filter = Filter.from(filter);
      /**
       * Display metadata associated with the filter data.
       * @type {FilterMetadata}
       */

      _this.metadata = new FilterMetadata(metadata);
      /**
       * Remove callback function.
       * @type {Function}
       */

      _this._remove = remove || function () {};

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }
    /**
     * Returns the filter associated with this node.
     * @type {Filter}
     */


    _createClass(SimpleFilterNode, [{
      key: "getFilter",
      value: function getFilter() {
        return this.filter;
      }
      /**
       * Returns the children associated with this node (no children).
       * @returns {Array<FilterNode>}
       */

    }, {
      key: "getChildren",
      value: function getChildren() {
        return [];
      }
      /**
       * Returns the filter metadata for this node's filter.
       * @returns {FilterMetadata}
       */

    }, {
      key: "getMetadata",
      value: function getMetadata() {
        return this.metadata;
      }
      /**
       * Recursively get all of the leaf SimpleFilterNodes.
       * Since SimpleFilterNodes have no children this just returns itself.
       * @returns {Array<SimpleFilterNode>}
       */

    }, {
      key: "getSimpleDescendants",
      value: function getSimpleDescendants() {
        return this;
      }
      /**
       * Removes this filter node from the FilterRegistry.
       */

    }, {
      key: "remove",
      value: function remove() {
        this._remove();
      }
      /**
       * Returns whether this SimpleFilterNode's filter is equal to another SimpleFilterNode's
       * @param {SimpleFilterNode} node
       * @returns {boolean}
       */

    }, {
      key: "hasSameFilterAs",
      value: function hasSameFilterAs(otherNode) {
        var thisFilter = this.getFilter();
        var otherFilter = otherNode.getFilter();
        var thisFieldId = thisFilter.getFilterKey();
        var otherFieldId = otherFilter.getFilterKey();

        if (thisFieldId !== otherFieldId) {
          return false;
        }

        var thisMatchersToValues = thisFilter[thisFieldId];
        var otherMatchersToValues = otherFilter[otherFieldId];
        var thisMatchers = Object.keys(thisMatchersToValues);
        var otherMatchers = Object.keys(otherMatchersToValues);

        if (thisMatchers.length !== otherMatchers.length) {
          return false;
        }

        return thisMatchers.every(function (m) {
          return otherMatchersToValues.hasOwnProperty(m) && otherMatchersToValues[m] === thisMatchersToValues[m];
        });
      }
    }]);

    return SimpleFilterNode;
  }(FilterNode);

  /**
   * A CombinedFilterNode represents a combined filter.
   * A combined filter is a set of filters combined with a {@link FilterCombinators}
   * ($and or $or). Since a combined filter is just a set of other filters,
   * it does not have its own {@link FilterMetadata}, and its filter is dervied from
   * its children.
   */

  var CombinedFilterNode =
  /*#__PURE__*/
  function (_FilterNode) {
    _inherits(CombinedFilterNode, _FilterNode);

    function CombinedFilterNode() {
      var _this;

      var filterNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CombinedFilterNode);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CombinedFilterNode).call(this));
      var combinator = filterNode.combinator,
          children = filterNode.children;
      /**
       * @type {string}
       */

      _this.combinator = combinator;
      /**
       * @type {Array<FilterNode>}
       */

      _this.children = children || [];
      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }
    /**
     * Returns the filter created by combining this node's children.
     * @type {Filter}
     */


    _createClass(CombinedFilterNode, [{
      key: "getFilter",
      value: function getFilter() {
        var filters = this.children.map(function (childNode) {
          return childNode.getFilter();
        });

        switch (this.combinator) {
          case FilterCombinators.AND:
            return Filter.and.apply(Filter, _toConsumableArray(filters));

          case FilterCombinators.OR:
            return Filter.or.apply(Filter, _toConsumableArray(filters));
        }

        return Filter.empty();
      }
      /**
       * Returns the metadata associated with this node's filter.
       * Because a combined filter's purpose is solely to join together other filters,
       * and does not have its own filter, this value is always null.
       * @returns {null}
       */

    }, {
      key: "getMetadata",
      value: function getMetadata() {
        return null;
      }
      /**
       * Returns this node's children.
       * @returns {Array<FilterNode>}
       */

    }, {
      key: "getChildren",
      value: function getChildren() {
        return this.children;
      }
      /**
       * Recursively get all of the leaf SimpleFilterNodes.
       * @returns {Array<SimpleFilterNode>}
       */

    }, {
      key: "getSimpleDescendants",
      value: function getSimpleDescendants() {
        return this.getChildren().flatMap(function (fn) {
          return fn.getSimpleDescendants();
        });
      }
      /**
       * Removes this filter node from the FilterRegistry by calling remove on each of its
       * child FilterNodes.
       */

    }, {
      key: "remove",
      value: function remove() {
        this.children.forEach(function (child) {
          child.remove();
        });
      }
    }]);

    return CombinedFilterNode;
  }(FilterNode);

  /**
   * FilterNodeFactory is a class containing static helper methods for
   * generating FilterNodes.
   */

  var FilterNodeFactory =
  /*#__PURE__*/
  function () {
    function FilterNodeFactory() {
      _classCallCheck(this, FilterNodeFactory);
    }

    _createClass(FilterNodeFactory, null, [{
      key: "and",

      /**
       * Create an AND filter node, with specified children.
       * @param  {...FilterNode} childrenNodes
       * @returns {FilterNode}
       */
      value: function and() {
        for (var _len = arguments.length, childrenNodes = new Array(_len), _key = 0; _key < _len; _key++) {
          childrenNodes[_key] = arguments[_key];
        }

        return FilterNodeFactory._combine(FilterCombinators.AND, childrenNodes);
      }
      /**
       * Create an OR filter node, with specified children.
       * @param  {...FilterNode} childrenNodes
       * @returns {FilterNode}
       */

    }, {
      key: "or",
      value: function or() {
        for (var _len2 = arguments.length, childrenNodes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          childrenNodes[_key2] = arguments[_key2];
        }

        return FilterNodeFactory._combine(FilterCombinators.OR, childrenNodes);
      }
      /**
       * Creates a combined filter node with the given combinator and children.
       * @param {string} combinator
       * @param {Array<FilterNode>} filterNodes
       * @returns {FilterNode}
       * @private
       */

    }, {
      key: "_combine",
      value: function _combine(combinator, filterNodes) {
        var children = filterNodes.filter(function (fn) {
          return fn.getFilter().getFilterKey();
        });

        if (!children.length) {
          return new SimpleFilterNode();
        }

        if (children.length === 1) {
          return children[0];
        }

        return new CombinedFilterNode({
          combinator: combinator,
          children: children
        });
      }
      /**
       * Creates a filterNode from the given data.
       * @param {Object|FilterNode} filterNode
       * @returns {FilterNode}
       */

    }, {
      key: "from",
      value: function from() {
        var filterNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (filterNode.children && filterNode.children.length) {
          return new CombinedFilterNode(filterNode);
        }

        return new SimpleFilterNode(filterNode);
      }
    }]);

    return FilterNodeFactory;
  }();

  /** @module Facet */

  /**
   * Model representing a facet filter with the format of
   * {
   *   "field_name": [ Filters... ],
   *   ...
   * }
   *
   * @see {@link Filter}
   */
  var Facet =
  /*#__PURE__*/
  function () {
    function Facet() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Facet);

      Object.assign(this, data);
      Object.freeze(this);
    }
    /**
     * Create a facet filter from a list of Filters
     * @param {Array<string>} availableFieldIds array of expected field ids
     * @param  {...Filter} filters The filters to use in this facet
     * @returns {Facet}
     */


    _createClass(Facet, null, [{
      key: "fromFilters",
      value: function fromFilters(availableFieldIds) {
        var groups = {};
        availableFieldIds.forEach(function (fieldId) {
          groups[fieldId] = [];
        });

        for (var _len = arguments.length, filters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          filters[_key - 1] = arguments[_key];
        }

        var flatFilters = filters.flatMap(function (f) {
          return f.$or || f;
        });
        flatFilters.forEach(function (f) {
          var key = f.getFilterKey();

          if (!groups[key]) {
            groups[key] = [];
          }

          groups[key].push(f);
        });
        return new Facet(groups);
      }
    }]);

    return Facet;
  }();

  /**
   * FilterRegistry is a structure that manages static {@link Filter}s and {@link Facet} filters.
   *
   * Static filters and facet filters are stored within global storage using FilterNodes.
   */

  var FilterRegistry =
  /*#__PURE__*/
  function () {
    function FilterRegistry(globalStorage) {
      var availableFieldIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      _classCallCheck(this, FilterRegistry);

      /**
       * FilterRegistry uses {@link GlobalStorage} for storing FilterNodes.
       * Each node is given a unique key in global storage.
       */
      this.globalStorage = globalStorage;
      /**
       * All available field ids for the current facet filters, including
       * field ids for unused but available filters.
       * @type {Array<string>}
       */

      this.availableFieldIds = availableFieldIds;
    }
    /**
     * Returns an array containing all of the filternodes stored in global storage.
     * @returns {Array<FilterNode>}
     */


    _createClass(FilterRegistry, [{
      key: "getAllFilterNodes",
      value: function getAllFilterNodes() {
        var globalStorageFilterNodes = [].concat(_toConsumableArray(this.getStaticFilterNodes()), _toConsumableArray(this.getFacetFilterNodes()));
        var locationRadiusFilterNode = this.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS);

        if (locationRadiusFilterNode) {
          globalStorageFilterNodes.push(locationRadiusFilterNode);
        }

        return globalStorageFilterNodes;
      }
      /**
       * Get all of the {@link FilterNode}s for static filters.
       * @returns {Array<FilterNode>}
       */

    }, {
      key: "getStaticFilterNodes",
      value: function getStaticFilterNodes() {
        return this.globalStorage.getAll(StorageKeys.STATIC_FILTER_NODE);
      }
      /**
       * Get all of the active {@link FilterNode}s for facets.
       * @returns {Array<FilterNode>}
       */

    }, {
      key: "getFacetFilterNodes",
      value: function getFacetFilterNodes() {
        return this.globalStorage.getState(StorageKeys.FACET_FILTER_NODE) || [];
      }
      /**
       * Gets the filter string to send in a search query.
       * TODO: move payload method logic into core.js, since it is only used there.
       * @returns {string}
       */

    }, {
      key: "getStaticFilterPayload",
      value: function getStaticFilterPayload() {
        return JSON.stringify(this._getStaticFilterPayload());
      }
    }, {
      key: "_getStaticFilterPayload",
      value: function _getStaticFilterPayload() {
        var filterNodes = this.getStaticFilterNodes();
        var totalNode = FilterNodeFactory.and.apply(FilterNodeFactory, _toConsumableArray(filterNodes));
        return totalNode.getFilter();
      }
      /**
       * Gets the facet filter string to send in a search query.
       * @returns {string}
       */

    }, {
      key: "getFacetFilterPayload",
      value: function getFacetFilterPayload() {
        return JSON.stringify(this._getFacetFilterPayload());
      }
    }, {
      key: "_getFacetFilterPayload",
      value: function _getFacetFilterPayload() {
        var getFilters = function getFilters(fn) {
          return fn.getChildren().length ? fn.getChildren().flatMap(getFilters) : fn.getFilter();
        };

        var filters = this.getFacetFilterNodes().flatMap(getFilters);
        return Facet.fromFilters.apply(Facet, [this.availableFieldIds].concat(_toConsumableArray(filters)));
      }
      /**
       * Get the FilterNode with the corresponding key. Defaults to null.
       * @param {string} key
       */

    }, {
      key: "getFilterNodeByKey",
      value: function getFilterNodeByKey(key) {
        return this.globalStorage.getState(key);
      }
      /**
       * Sets the specified {@link FilterNode} under the given key.
       * Will replace a preexisting node if there is one.
       * @param {string} key
       * @param {FilterNode} filterNode
       */

    }, {
      key: "setStaticFilterNodes",
      value: function setStaticFilterNodes(key, filterNode) {
        this.globalStorage.set("".concat(StorageKeys.STATIC_FILTER_NODE, ".").concat(key), filterNode);
      }
      /**
       * Sets the filter nodes used for the current facet filters.
       *
       * Because the search response only sends back one
       * set of facet filters, there can only be one active facet filter node
       * at a time.
       * @param {Array<string>} availableFieldIds
       * @param {Array<FilterNode>} filterNodes
       */

    }, {
      key: "setFacetFilterNodes",
      value: function setFacetFilterNodes() {
        var availableFieldIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var filterNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        this.availableFieldIds = availableFieldIds;
        this.globalStorage.set(StorageKeys.FACET_FILTER_NODE, filterNodes);
      }
      /**
       * Sets the locationRadius filterNode. There may only be one locationRadius active
       * at a time.
       * @param {FilterNode} filterNode
       */

    }, {
      key: "setLocationRadiusFilterNode",
      value: function setLocationRadiusFilterNode(filterNode) {
        this.globalStorage.set(StorageKeys.LOCATION_RADIUS, filterNode);
      }
      /**
       * Remove the static FilterNode with this namespace.
       * @param {string} key
       */

    }, {
      key: "clearStaticFilterNode",
      value: function clearStaticFilterNode(key) {
        this.globalStorage["delete"]("".concat(StorageKeys.STATIC_FILTER_NODE, ".").concat(key));
      }
      /**
       * Remove all facet FilterNodes.
       */

    }, {
      key: "clearFacetFilterNodes",
      value: function clearFacetFilterNodes() {
        this.globalStorage["delete"](StorageKeys.FACET_FILTER_NODE);
      }
    }]);

    return FilterRegistry;
  }();

  /** @typedef {import('./services/searchservice').default} SearchService */

  /** @typedef {import('./services/autocompleteservice').default} AutoCompleteService */

  /** @typedef {import('./services/questionanswerservice').default} QuestionAnswerService */

  /**
   * Core is the main application container for all of the network and storage
   * related behaviors of the application.
   */

  var Core =
  /*#__PURE__*/
  function () {
    function Core() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Core);

      /**
       * A reference to the client API Key used for all requests
       * @type {string}
       * @private
       */
      this._apiKey = config.apiKey;
      /**
       * A reference to the client Answers Key used for all requests
       * @type {string}
       * @private
       */

      this._experienceKey = config.experienceKey;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * A reference to the client locale used for all requests. If not specified, defaults to "en" (for
       * backwards compatibility).
       * @type {string}
       * @private
       */

      this._locale = config.locale;
      /**
       * A map of field formatters used to format results, if present
       * @type {Object.<string, function>}
       * @private
       */

      this._fieldFormatters = config.fieldFormatters || {};
      /**
       * A reference to the core data storage that powers the UI
       * @type {GlobalStorage}
       * @private
       */

      this.globalStorage = config.globalStorage;
      /**
       * A reference to the core persistent storage
       * @type {PersistentStorage}
       * @private
       */

      this.persistentStorage = config.persistentStorage;
      /**
       * The filterRegistry is in charge of setting, removing, and retrieving filters
       * and facet filters from global storage.
       * @type {FilterRegistry}
       */

      this.filterRegistry = new FilterRegistry(this.globalStorage);
      /**
       * An abstraction containing the integration with the RESTful search API
       * For both vertical and universal search
       * @type {SearchService}
       * @private
       */

      this._searcher = config.searchService;
      /**
       * An abstraction containing the integration with the RESTful autocomplete API
       * For filter search, vertical autocomplete, and universal autocomplete
       * @type {AutoCompleteService}
       * @private
       */

      this._autoComplete = config.autoCompleteService;
      /**
       * An abstraction for interacting with the Q&A rest interface
       * @type {QuestionAnswerService}
       * @private
       */

      this._questionAnswer = config.questionAnswerService;
      /**
       * A local reference to the analytics reporter, used to report events for this component
       * @type {AnalyticsReporter}
       */

      this._analyticsReporter = config.analyticsReporter;
      /**
       * A user-given function that returns an analytics event to fire after a universal search.
       * @type {Function}
       */

      this.onUniversalSearch = config.onUniversalSearch || function () {};
      /**
       * A user-given function that returns an analytics event to fire after a vertical search.
       * @type {Function}
       */


      this.onVerticalSearch = config.onVerticalSearch || function () {};
    }
    /**
     * Search in the context of a vertical
     * @param {string} verticalKey vertical ID for the search
     * @param {Object} options additional settings for the search.
     * @param {Object} query The query details
     * @param {string} query.input The input to search for
     * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
     * @param {boolean} query.append If true, adds the results of this query to the end of the current results, defaults false
     */


    _createClass(Core, [{
      key: "verticalSearch",
      value: function verticalSearch(verticalKey) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        window.performance.mark('yext.answers.verticalQueryStart');

        if (!query.append) {
          this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
          this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
          this.globalStorage.set(StorageKeys.LOCATION_BIAS, {});
        }

        var resetPagination = options.resetPagination,
            useFacets = options.useFacets;

        if (resetPagination) {
          this.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);
          this.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);
        }

        if (!useFacets) {
          this.filterRegistry.setFacetFilterNodes([], []);
        }

        var setQueryParams = options.setQueryParams;
        var context = this.globalStorage.getState(StorageKeys.API_CONTEXT);
        var referrerPageUrl = this.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);

        if (setQueryParams) {
          if (context) {
            this.persistentStorage.set(StorageKeys.API_CONTEXT, context, true);
          }

          if (referrerPageUrl !== null) {
            this.persistentStorage.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl, true);
          }
        }

        var searchConfig = this.globalStorage.getState(StorageKeys.SEARCH_CONFIG) || {};

        if (!searchConfig.verticalKey) {
          this.globalStorage.set(StorageKeys.SEARCH_CONFIG, _objectSpread({}, searchConfig, {
            verticalKey: verticalKey
          }));
        }

        var locationRadiusFilterNode = this.getLocationRadiusFilterNode();
        var queryTrigger = this.getQueryTriggerForSearchApi(this.globalStorage.getState(StorageKeys.QUERY_TRIGGER));
        return this._searcher.verticalSearch(verticalKey, _objectSpread({
          limit: this.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit,
          geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
          input: this.globalStorage.getState(StorageKeys.QUERY) || ''
        }, query, {
          filter: this.filterRegistry.getStaticFilterPayload(),
          facetFilter: this.filterRegistry.getFacetFilterPayload(),
          offset: this.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0,
          isDynamicFiltersEnabled: this._isDynamicFiltersEnabled,
          skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
          queryTrigger: queryTrigger,
          sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN),
          sortBys: this.globalStorage.getState(StorageKeys.SORT_BYS),
          locationRadius: locationRadiusFilterNode ? locationRadiusFilterNode.getFilter().value : null,
          context: context,
          referrerPageUrl: referrerPageUrl
        })).then(function (response) {
          return SearchDataTransformer.transformVertical(response, _this._fieldFormatters, verticalKey);
        }).then(function (data) {
          _this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);

          _this.globalStorage.set(StorageKeys.ALTERNATIVE_VERTICALS, data[StorageKeys.ALTERNATIVE_VERTICALS]);

          if (query.append) {
            var mergedResults = _this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS).append(data[StorageKeys.VERTICAL_RESULTS]);

            _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
          } else {
            _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
          }

          if (data[StorageKeys.DYNAMIC_FILTERS]) {
            _this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);

            _this.globalStorage.set(StorageKeys.RESULTS_HEADER, data[StorageKeys.DYNAMIC_FILTERS]);
          }

          if (data[StorageKeys.SPELL_CHECK]) {
            _this.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
          }

          if (data[StorageKeys.LOCATION_BIAS]) {
            _this.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);
          }

          _this.globalStorage["delete"]('skipSpellCheck');

          _this.globalStorage["delete"](StorageKeys.QUERY_TRIGGER);

          var exposedParams = {
            verticalKey: verticalKey,
            queryString: query.input,
            resultsCount: _this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS).resultsCount,
            resultsContext: data[StorageKeys.VERTICAL_RESULTS].resultsContext
          };

          var analyticsEvent = _this.onVerticalSearch(exposedParams);

          if (_typeof(analyticsEvent) === 'object') {
            _this._analyticsReporter.report(AnalyticsEvent.fromData(analyticsEvent));
          }

          window.performance.mark('yext.answers.verticalQueryResponseRendered');
        });
      }
    }, {
      key: "clearResults",
      value: function clearResults() {
        this.globalStorage.set(StorageKeys.QUERY, null);
        this.globalStorage.set(StorageKeys.QUERY_ID, '');
        this.globalStorage.set(StorageKeys.RESULTS_HEADER, {});
        this.globalStorage.set(StorageKeys.SPELL_CHECK, {}); // TODO has a model but not cleared w new

        this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, {}); // TODO has a model but not cleared w new

        this.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, new QuestionSubmission({}));
        this.globalStorage.set(StorageKeys.INTENTS, new SearchIntents({}));
        this.globalStorage.set(StorageKeys.NAVIGATION, new Navigation());
        this.globalStorage.set(StorageKeys.ALTERNATIVE_VERTICALS, new AlternativeVerticals({}));
        this.globalStorage.set(StorageKeys.DIRECT_ANSWER, new DirectAnswer({}));
        this.globalStorage.set(StorageKeys.LOCATION_BIAS, new LocationBias({}));
        this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, new VerticalResults({}));
        this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, new UniversalResults({}));
      }
      /**
       * Page within the results of the last query
       * TODO: Should id be in all searches? Currently is only in searches done by the pagination
       * component
       * @param {string} verticalKey The vertical key to use in the search
       */

    }, {
      key: "verticalPage",
      value: function verticalPage(verticalKey) {
        this.verticalSearch(verticalKey, {
          useFacets: true,
          setQueryParams: true
        }, {
          id: this.globalStorage.getState(StorageKeys.QUERY_ID)
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        window.performance.mark('yext.answers.universalQueryStart');
        var setQueryParams = options.setQueryParams;
        var context = this.globalStorage.getState(StorageKeys.API_CONTEXT);
        var referrerPageUrl = this.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);

        if (setQueryParams) {
          if (context) {
            this.persistentStorage.set(StorageKeys.API_CONTEXT, context, true);
          }

          if (referrerPageUrl !== null) {
            this.persistentStorage.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl, true);
          }
        }

        this.globalStorage.set(StorageKeys.DIRECT_ANSWER, {});
        this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
        this.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, {});
        this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
        this.globalStorage.set(StorageKeys.LOCATION_BIAS, {});
        var queryTrigger = this.getQueryTriggerForSearchApi(this.globalStorage.getState(StorageKeys.QUERY_TRIGGER));
        return this._searcher.universalSearch(queryString, {
          geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
          skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
          queryTrigger: queryTrigger,
          sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN),
          context: context,
          referrerPageUrl: referrerPageUrl
        }).then(function (response) {
          return SearchDataTransformer.transform(response, urls, _this2._fieldFormatters);
        }).then(function (data) {
          _this2.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this2.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this2.globalStorage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);

          _this2.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);

          _this2.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);

          _this2.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);

          _this2.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);

          _this2.globalStorage["delete"]('skipSpellCheck');

          _this2.globalStorage["delete"](StorageKeys.QUERY_TRIGGER);

          var exposedParams = _this2._getOnUniversalSearchParams(data[StorageKeys.UNIVERSAL_RESULTS].sections, queryString);

          var analyticsEvent = _this2.onUniversalSearch(exposedParams);

          if (_typeof(analyticsEvent) === 'object') {
            _this2._analyticsReporter.report(AnalyticsEvent.fromData(analyticsEvent));
          }

          window.performance.mark('yext.answers.universalQueryResponseRendered');
        });
      }
      /**
       * Builds the object passed as a parameter to onUniversalSearch. This object
       * contains information about the universal search's query and result counts.
       *
       * @param {Array<Section>} sections The sections of results.
       * @param {string} queryString The search query.
       * @return {Object<string, ?>}
       */

    }, {
      key: "_getOnUniversalSearchParams",
      value: function _getOnUniversalSearchParams(sections, queryString) {
        var resultsCountByVertical = sections.reduce(function (resultsCountMap, section) {
          var verticalConfigId = section.verticalConfigId,
              resultsCount = section.resultsCount,
              results = section.results;
          resultsCountMap[verticalConfigId] = {
            totalResultsCount: resultsCount,
            displayedResultsCount: results.length
          };
          return resultsCountMap;
        }, {});
        var exposedParams = {
          queryString: queryString,
          sectionsCount: sections.length,
          resultsCountByVertical: resultsCountByVertical
        };
        return exposedParams;
      }
      /**
       * Given an input, query for a list of similar results and set into storage
       *
       * @param {string} input     the string to autocomplete
       * @param {string} namespace the namespace to use for the storage key
       */

    }, {
      key: "autoCompleteUniversal",
      value: function autoCompleteUniversal(input, namespace) {
        var _this3 = this;

        return this._autoComplete.queryUniversal(input).then(function (data) {
          _this3.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);

          return data;
        });
      }
      /**
       * Given an input, query for a list of similar results in the provided vertical
       * and set into storage
       *
       * @param {string} input       the string to autocomplete
       * @param {string} namespace the namespace to use for the storage key
       * @param {string} verticalKey the vertical key for the experience
       */

    }, {
      key: "autoCompleteVertical",
      value: function autoCompleteVertical(input, namespace, verticalKey) {
        var _this4 = this;

        return this._autoComplete.queryVertical(input, verticalKey).then(function (data) {
          _this4.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);

          return data;
        });
      }
      /**
       * Given an input, provide a list of suitable filters for autocompletion
       *
       * @param {string} input  the string to search for filters with
       * @param {object} config  the config to serach for filters with
       * @param {string} config.namespace  the namespace to use for the storage key
       * @param {string} config.verticalKey the vertical key for the config
       * @param {object} config.searchParameters  the search parameters for the config v2
       */

    }, {
      key: "autoCompleteFilter",
      value: function autoCompleteFilter(input, config) {
        var _this5 = this;

        return this._autoComplete.queryFilter(input, config).then(function (data) {
          _this5.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(config.namespace), data);
        });
      }
      /**
       * Submits a question to the server and updates the underlying question model
       * @param {object} question The question object to submit to the server
       * @param {number} question.entityId The entity to associate with the question (required)
       * @param {string} question.lanuage The language of the question
       * @param {string} question.site The "publisher" of the (e.g. 'FIRST_PARTY')
       * @param {string} question.name The name of the author
       * @param {string} question.email The email address of the author
       * @param {string} question.questionText The question
       * @param {string} question.questionDescription Additional information about the question
       */

    }, {
      key: "submitQuestion",
      value: function submitQuestion(question) {
        var _this6 = this;

        return this._questionAnswer.submitQuestion(question).then(function (data) {
          _this6.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, QuestionSubmission.submitted());
        });
      }
      /**
       * Stores the given sortBy into storage, to be used for the next search
       * @param {Object} sortByOptions
       */

    }, {
      key: "setSortBys",
      value: function setSortBys() {
        for (var _len = arguments.length, sortByOptions = new Array(_len), _key = 0; _key < _len; _key++) {
          sortByOptions[_key] = arguments[_key];
        }

        var sortBys = sortByOptions.map(function (option) {
          return {
            type: option.type,
            field: option.field,
            direction: option.direction
          };
        });
        this.globalStorage.set(StorageKeys.SORT_BYS, JSON.stringify(sortBys));
      }
      /**
       * Clears the sortBys key in global storage.
       */

    }, {
      key: "clearSortBys",
      value: function clearSortBys() {
        this.globalStorage["delete"](StorageKeys.SORT_BYS);
      }
      /**
       * Stores the given query into storage, to be used for the next search
       * @param {string} query the query to store
       */

    }, {
      key: "setQuery",
      value: function setQuery(query) {
        this.globalStorage.set(StorageKeys.QUERY, query);
      }
      /**
       * Stores the provided query ID, to be used in analytics
       * @param {string} queryId The query id to store
       */

    }, {
      key: "setQueryId",
      value: function setQueryId(queryId) {
        this.globalStorage.set(StorageKeys.QUERY_ID, queryId);
      }
      /**
       * Get all of the {@link FilterNode}s for static filters.
       * @returns {Array<FilterNode>}
       */

    }, {
      key: "getStaticFilterNodes",
      value: function getStaticFilterNodes() {
        return this.filterRegistry.getStaticFilterNodes();
      }
      /**
       * Get all of the active {@link FilterNode}s for facets.
       * @returns {Array<FilterNode>}
       */

    }, {
      key: "getFacetFilterNodes",
      value: function getFacetFilterNodes() {
        return this.filterRegistry.getFacetFilterNodes();
      }
      /**
       * Get the {@link FilterNode} affecting the locationRadius url parameter.
       * @returns {FilterNode}
       */

    }, {
      key: "getLocationRadiusFilterNode",
      value: function getLocationRadiusFilterNode() {
        return this.filterRegistry.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS);
      }
      /**
       * Sets the filter nodes used for the current facet filters.
       *
       * Because the search response only sends back one
       * set of facet filters, there can only be one active facet filter node
       * at a time.
       * @param {Array<string>} availableFieldIds
       * @param {Array<FilterNode>} filterNodes
       */

    }, {
      key: "setFacetFilterNodes",
      value: function setFacetFilterNodes() {
        var availableFieldids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var filterNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        this.filterRegistry.setFacetFilterNodes(availableFieldids, filterNodes);
      }
      /**
       * Sets the specified {@link FilterNode} under the given key.
       * Will replace a preexisting node if there is one.
       * @param {string} namespace
       * @param {FilterNode} filterNode
       */

    }, {
      key: "setStaticFilterNodes",
      value: function setStaticFilterNodes(namespace, filterNode) {
        this.filterRegistry.setStaticFilterNodes(namespace, filterNode);
      }
      /**
       * Sets the locationRadius filterNode.
       * @param {FilterNode} filterNode
       */

    }, {
      key: "setLocationRadiusFilterNode",
      value: function setLocationRadiusFilterNode(filterNode) {
        this.filterRegistry.setLocationRadiusFilterNode(filterNode);
      }
      /**
       * Remove the static FilterNode with this namespace.
       * @param {string} namespace
       */

    }, {
      key: "clearStaticFilterNode",
      value: function clearStaticFilterNode(namespace) {
        this.filterRegistry.clearStaticFilterNode(namespace);
      }
      /**
       * Remove all facet FilterNodes.
       */

    }, {
      key: "clearFacetFilterNodes",
      value: function clearFacetFilterNodes() {
        this.filterRegistry.clearFacetFilterNodes();
      }
      /**
       * Clears the locationRadius filterNode.
       */

    }, {
      key: "clearLocationRadiusFilterNode",
      value: function clearLocationRadiusFilterNode() {
        this.filterRegistry.clearLocationRadiusFilterNode();
      }
      /**
       * Returns the query trigger for the search API given the SDK query trigger
       * @param {QueryTriggers} queryTrigger SDK query trigger
       * @returns {QueryTriggers} query trigger if accepted by the search API, null o/w
       */

    }, {
      key: "getQueryTriggerForSearchApi",
      value: function getQueryTriggerForSearchApi(queryTrigger) {
        if (queryTrigger === QueryTriggers.QUERY_PARAMETER) {
          return null;
        }

        return queryTrigger;
      }
    }, {
      key: "enableDynamicFilters",
      value: function enableDynamicFilters() {
        this._isDynamicFiltersEnabled = true;
      }
    }, {
      key: "on",
      value: function on(evt, moduleId, cb) {
        return this.globalStorage.on(evt, moduleId, cb);
      }
    }]);

    return Core;
  }();

  /*!
   * css-vars-ponyfill
   * v2.3.1
   * https://jhildenbiddle.github.io/css-vars-ponyfill/
   * (c) 2018-2020 John Hildenbiddle <http://hildenbiddle.com>
   * MIT license
   */
  function _extends() {
      _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                  }
              }
          }
          return target;
      };
      return _extends.apply(this, arguments);
  }

  function _toConsumableArray$1(arr) {
      return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray$1(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
  }

  function _nonIterableSpread$1() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /*!
   * get-css-data
   * v1.8.0
   * https://github.com/jhildenbiddle/get-css-data
   * (c) 2018-2020 John Hildenbiddle <http://hildenbiddle.com>
   * MIT license
   */ function getUrls(urls) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var settings = {
          mimeType: options.mimeType || null,
          onBeforeSend: options.onBeforeSend || Function.prototype,
          onSuccess: options.onSuccess || Function.prototype,
          onError: options.onError || Function.prototype,
          onComplete: options.onComplete || Function.prototype
      };
      var urlArray = Array.isArray(urls) ? urls : [ urls ];
      var urlQueue = Array.apply(null, Array(urlArray.length)).map((function(x) {
          return null;
      }));
      function isValidCss() {
          var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var isHTML = cssText.trim().charAt(0) === "<";
          return !isHTML;
      }
      function onError(xhr, urlIndex) {
          settings.onError(xhr, urlArray[urlIndex], urlIndex);
      }
      function onSuccess(responseText, urlIndex) {
          var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
          responseText = returnVal === false ? "" : returnVal || responseText;
          urlQueue[urlIndex] = responseText;
          if (urlQueue.indexOf(null) === -1) {
              settings.onComplete(urlQueue);
          }
      }
      var parser = document.createElement("a");
      urlArray.forEach((function(url, i) {
          parser.setAttribute("href", url);
          parser.href = String(parser.href);
          var isIElte9 = Boolean(document.all && !window.atob);
          var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];
          if (isIElte9CORS) {
              var isSameProtocol = parser.protocol === location.protocol;
              if (isSameProtocol) {
                  var xdr = new XDomainRequest;
                  xdr.open("GET", url);
                  xdr.timeout = 0;
                  xdr.onprogress = Function.prototype;
                  xdr.ontimeout = Function.prototype;
                  xdr.onload = function() {
                      if (isValidCss(xdr.responseText)) {
                          onSuccess(xdr.responseText, i);
                      } else {
                          onError(xdr, i);
                      }
                  };
                  xdr.onerror = function(err) {
                      onError(xdr, i);
                  };
                  setTimeout((function() {
                      xdr.send();
                  }), 0);
              } else {
                  console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
                  onError(null, i);
              }
          } else {
              var xhr = new XMLHttpRequest;
              xhr.open("GET", url);
              if (settings.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(settings.mimeType);
              }
              settings.onBeforeSend(xhr, url, i);
              xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                      if (xhr.status === 200 && isValidCss(xhr.responseText)) {
                          onSuccess(xhr.responseText, i);
                      } else {
                          onError(xhr, i);
                      }
                  }
              };
              xhr.send();
          }
      }));
  }

  /**
   * Gets CSS data from <style> and <link> nodes (including @imports), then
   * returns data in order processed by DOM. Allows specifying nodes to
   * include/exclude and filtering CSS data using RegEx.
   *
   * @preserve
   * @param {object}   [options] The options object
   * @param {object}   [options.rootElement=document] Root element to traverse for
   *                   <link> and <style> nodes.
   * @param {string}   [options.include] CSS selector matching <link> and <style>
   *                   nodes to include
   * @param {string}   [options.exclude] CSS selector matching <link> and <style>
   *                   nodes to exclude
   * @param {object}   [options.filter] Regular expression used to filter node CSS
   *                   data. Each block of CSS data is tested against the filter,
   *                   and only matching data is included.
   * @param {boolean}  [options.skipDisabled=true] Determines if disabled
   *                   stylesheets will be skipped while collecting CSS data.
   * @param {boolean}  [options.useCSSOM=false] Determines if CSS data will be
   *                   collected from a stylesheet's runtime values instead of its
   *                   text content. This is required to get accurate CSS data
   *                   when a stylesheet has been modified using the deleteRule()
   *                   or insertRule() methods because these modifications will
   *                   not be reflected in the stylesheet's text content.
   * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
   *                   1) the XHR object, 2) source node reference, and 3) the
   *                   source URL as arguments.
   * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
   *                   1) CSS text, 2) source node reference, and 3) the source
   *                   URL as arguments.
   * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
   *                   object for inspection, 2) soure node reference, and 3) the
   *                   source URL that failed (either a <link> href or an @import)
   *                   as arguments
   * @param {function} [options.onComplete] Callback after all nodes have been
   *                   processed. Passes 1) concatenated CSS text, 2) an array of
   *                   CSS text in DOM order, and 3) an array of nodes in DOM
   *                   order as arguments.
   *
   * @example
   *
   *   getCssData({
   *     rootElement : document,
   *     include     : 'style,link[rel="stylesheet"]',
   *     exclude     : '[href="skip.css"]',
   *     filter      : /red/,
   *     skipDisabled: true,
   *     useCSSOM    : false,
   *     onBeforeSend(xhr, node, url) {
   *       // ...
   *     }
   *     onSuccess(cssText, node, url) {
   *       // ...
   *     }
   *     onError(xhr, node, url) {
   *       // ...
   *     },
   *     onComplete(cssText, cssArray, nodeArray) {
   *       // ...
   *     }
   *   });
   */ function getCssData(options) {
      var regex = {
          cssComments: /\/\*[\s\S]+?\*\//g,
          cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
      };
      var settings = {
          rootElement: options.rootElement || document,
          include: options.include || 'style,link[rel="stylesheet"]',
          exclude: options.exclude || null,
          filter: options.filter || null,
          skipDisabled: options.skipDisabled !== false,
          useCSSOM: options.useCSSOM || false,
          onBeforeSend: options.onBeforeSend || Function.prototype,
          onSuccess: options.onSuccess || Function.prototype,
          onError: options.onError || Function.prototype,
          onComplete: options.onComplete || Function.prototype
      };
      var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter((function(node) {
          return !matchesSelector(node, settings.exclude);
      }));
      var cssArray = Array.apply(null, Array(sourceNodes.length)).map((function(x) {
          return null;
      }));
      function handleComplete() {
          var isComplete = cssArray.indexOf(null) === -1;
          if (isComplete) {
              var cssText = cssArray.join("");
              settings.onComplete(cssText, cssArray, sourceNodes);
          }
      }
      function handleSuccess(cssText, cssIndex, node, sourceUrl) {
          var returnVal = settings.onSuccess(cssText, node, sourceUrl);
          cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
          resolveImports(cssText, node, sourceUrl, (function(resolvedCssText, errorData) {
              if (cssArray[cssIndex] === null) {
                  errorData.forEach((function(data) {
                      return settings.onError(data.xhr, node, data.url);
                  }));
                  if (!settings.filter || settings.filter.test(resolvedCssText)) {
                      cssArray[cssIndex] = resolvedCssText;
                  } else {
                      cssArray[cssIndex] = "";
                  }
                  handleComplete();
              }
          }));
      }
      function parseImportData(cssText, baseUrl) {
          var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var importData = {};
          importData.rules = (cssText.replace(regex.cssComments, "").match(regex.cssImports) || []).filter((function(rule) {
              return ignoreRules.indexOf(rule) === -1;
          }));
          importData.urls = importData.rules.map((function(rule) {
              return rule.replace(regex.cssImports, "$1");
          }));
          importData.absoluteUrls = importData.urls.map((function(url) {
              return getFullUrl(url, baseUrl);
          }));
          importData.absoluteRules = importData.rules.map((function(rule, i) {
              var oldUrl = importData.urls[i];
              var newUrl = getFullUrl(importData.absoluteUrls[i], baseUrl);
              return rule.replace(oldUrl, newUrl);
          }));
          return importData;
      }
      function resolveImports(cssText, node, baseUrl, callbackFn) {
          var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
          var importData = parseImportData(cssText, baseUrl, __errorRules);
          if (importData.rules.length) {
              getUrls(importData.absoluteUrls, {
                  onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                      settings.onBeforeSend(xhr, node, url);
                  },
                  onSuccess: function onSuccess(cssText, url, urlIndex) {
                      var returnVal = settings.onSuccess(cssText, node, url);
                      cssText = returnVal === false ? "" : returnVal || cssText;
                      var responseImportData = parseImportData(cssText, url, __errorRules);
                      responseImportData.rules.forEach((function(rule, i) {
                          cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);
                      }));
                      return cssText;
                  },
                  onError: function onError(xhr, url, urlIndex) {
                      __errorData.push({
                          xhr: xhr,
                          url: url
                      });
                      __errorRules.push(importData.rules[urlIndex]);
                      resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
                  },
                  onComplete: function onComplete(responseArray) {
                      responseArray.forEach((function(importText, i) {
                          cssText = cssText.replace(importData.rules[i], importText);
                      }));
                      resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
                  }
              });
          } else {
              callbackFn(cssText, __errorData);
          }
      }
      if (sourceNodes.length) {
          sourceNodes.forEach((function(node, i) {
              var linkHref = node.getAttribute("href");
              var linkRel = node.getAttribute("rel");
              var isLink = node.nodeName === "LINK" && linkHref && linkRel && linkRel.toLowerCase().indexOf("stylesheet") !== -1;
              var isSkip = settings.skipDisabled === false ? false : node.disabled;
              var isStyle = node.nodeName === "STYLE";
              if (isLink && !isSkip) {
                  getUrls(linkHref, {
                      mimeType: "text/css",
                      onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                          settings.onBeforeSend(xhr, node, url);
                      },
                      onSuccess: function onSuccess(cssText, url, urlIndex) {
                          var sourceUrl = getFullUrl(linkHref);
                          handleSuccess(cssText, i, node, sourceUrl);
                      },
                      onError: function onError(xhr, url, urlIndex) {
                          cssArray[i] = "";
                          settings.onError(xhr, node, url);
                          handleComplete();
                      }
                  });
              } else if (isStyle && !isSkip) {
                  var cssText = node.textContent;
                  if (settings.useCSSOM) {
                      cssText = Array.apply(null, node.sheet.cssRules).map((function(rule) {
                          return rule.cssText;
                      })).join("");
                  }
                  handleSuccess(cssText, i, node, location.href);
              } else {
                  cssArray[i] = "";
                  handleComplete();
              }
          }));
      } else {
          settings.onComplete("", []);
      }
  }

  function getFullUrl(url, base) {
      var d = document.implementation.createHTMLDocument("");
      var b = d.createElement("base");
      var a = d.createElement("a");
      d.head.appendChild(b);
      d.body.appendChild(a);
      b.href = base || document.baseURI || (document.querySelector("base") || {}).href || location.href;
      a.href = url;
      return a.href;
  }

  function matchesSelector(elm, selector) {
      var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
      return matches.call(elm, selector);
  }

  var balancedMatch = balanced;

  function balanced(a, b, str) {
      if (a instanceof RegExp) a = maybeMatch(a, str);
      if (b instanceof RegExp) b = maybeMatch(b, str);
      var r = range(a, b, str);
      return r && {
          start: r[0],
          end: r[1],
          pre: str.slice(0, r[0]),
          body: str.slice(r[0] + a.length, r[1]),
          post: str.slice(r[1] + b.length)
      };
  }

  function maybeMatch(reg, str) {
      var m = str.match(reg);
      return m ? m[0] : null;
  }

  balanced.range = range;

  function range(a, b, str) {
      var begs, beg, left, right, result;
      var ai = str.indexOf(a);
      var bi = str.indexOf(b, ai + 1);
      var i = ai;
      if (ai >= 0 && bi > 0) {
          begs = [];
          left = str.length;
          while (i >= 0 && !result) {
              if (i == ai) {
                  begs.push(i);
                  ai = str.indexOf(a, i + 1);
              } else if (begs.length == 1) {
                  result = [ begs.pop(), bi ];
              } else {
                  beg = begs.pop();
                  if (beg < left) {
                      left = beg;
                      right = bi;
                  }
                  bi = str.indexOf(b, i + 1);
              }
              i = ai < bi && ai >= 0 ? ai : bi;
          }
          if (begs.length) {
              result = [ left, right ];
          }
      }
      return result;
  }

  function parseCss(css) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaults = {
          preserveStatic: true,
          removeComments: false
      };
      var settings = _extends({}, defaults, options);
      var errors = [];
      function error(msg) {
          throw new Error("CSS parse error: ".concat(msg));
      }
      function match(re) {
          var m = re.exec(css);
          if (m) {
              css = css.slice(m[0].length);
              return m;
          }
      }
      function open() {
          return match(/^{\s*/);
      }
      function close() {
          return match(/^}/);
      }
      function whitespace() {
          match(/^\s*/);
      }
      function comment() {
          whitespace();
          if (css[0] !== "/" || css[1] !== "*") {
              return;
          }
          var i = 2;
          while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
              i++;
          }
          if (!css[i]) {
              return error("end of comment is missing");
          }
          var str = css.slice(2, i);
          css = css.slice(i + 2);
          return {
              type: "comment",
              comment: str
          };
      }
      function comments() {
          var cmnts = [];
          var c;
          while (c = comment()) {
              cmnts.push(c);
          }
          return settings.removeComments ? [] : cmnts;
      }
      function selector() {
          whitespace();
          while (css[0] === "}") {
              error("extra closing bracket");
          }
          var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
          if (m) {
              return m[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (function(m) {
                  return m.replace(/,/g, "‌");
              })).split(/\s*(?![^(]*\)),\s*/).map((function(s) {
                  return s.replace(/\u200C/g, ",");
              }));
          }
      }
      function declaration() {
          if (css[0] === "@") {
              return at_rule();
          }
          match(/^([;\s]*)+/);
          var comment_regexp = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
          var prop = match(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
          if (!prop) {
              return;
          }
          prop = prop[0].trim();
          if (!match(/^:\s*/)) {
              return error("property missing ':'");
          }
          var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
          var ret = {
              type: "declaration",
              property: prop.replace(comment_regexp, ""),
              value: val ? val[0].replace(comment_regexp, "").trim() : ""
          };
          match(/^[;\s]*/);
          return ret;
      }
      function declarations() {
          if (!open()) {
              return error("missing '{'");
          }
          var d;
          var decls = comments();
          while (d = declaration()) {
              decls.push(d);
              decls = decls.concat(comments());
          }
          if (!close()) {
              return error("missing '}'");
          }
          return decls;
      }
      function keyframe() {
          whitespace();
          var vals = [];
          var m;
          while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
              vals.push(m[1]);
              match(/^,\s*/);
          }
          if (vals.length) {
              return {
                  type: "keyframe",
                  values: vals,
                  declarations: declarations()
              };
          }
      }
      function at_keyframes() {
          var m = match(/^@([-\w]+)?keyframes\s*/);
          if (!m) {
              return;
          }
          var vendor = m[1];
          m = match(/^([-\w]+)\s*/);
          if (!m) {
              return error("@keyframes missing name");
          }
          var name = m[1];
          if (!open()) {
              return error("@keyframes missing '{'");
          }
          var frame;
          var frames = comments();
          while (frame = keyframe()) {
              frames.push(frame);
              frames = frames.concat(comments());
          }
          if (!close()) {
              return error("@keyframes missing '}'");
          }
          return {
              type: "keyframes",
              name: name,
              vendor: vendor,
              keyframes: frames
          };
      }
      function at_page() {
          var m = match(/^@page */);
          if (m) {
              var sel = selector() || [];
              return {
                  type: "page",
                  selectors: sel,
                  declarations: declarations()
              };
          }
      }
      function at_page_margin_box() {
          var m = match(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);
          if (m) {
              var name = "".concat(m[1], "-").concat(m[2]) + (m[3] ? "-".concat(m[3]) : "");
              return {
                  type: "page-margin-box",
                  name: name,
                  declarations: declarations()
              };
          }
      }
      function at_fontface() {
          var m = match(/^@font-face\s*/);
          if (m) {
              return {
                  type: "font-face",
                  declarations: declarations()
              };
          }
      }
      function at_supports() {
          var m = match(/^@supports *([^{]+)/);
          if (m) {
              return {
                  type: "supports",
                  supports: m[1].trim(),
                  rules: rules()
              };
          }
      }
      function at_host() {
          var m = match(/^@host\s*/);
          if (m) {
              return {
                  type: "host",
                  rules: rules()
              };
          }
      }
      function at_media() {
          var m = match(/^@media([^{]+)*/);
          if (m) {
              return {
                  type: "media",
                  media: (m[1] || "").trim(),
                  rules: rules()
              };
          }
      }
      function at_custom_m() {
          var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
          if (m) {
              return {
                  type: "custom-media",
                  name: m[1].trim(),
                  media: m[2].trim()
              };
          }
      }
      function at_document() {
          var m = match(/^@([-\w]+)?document *([^{]+)/);
          if (m) {
              return {
                  type: "document",
                  document: m[2].trim(),
                  vendor: m[1] ? m[1].trim() : null,
                  rules: rules()
              };
          }
      }
      function at_x() {
          var m = match(/^@(import|charset|namespace)\s*([^;]+);/);
          if (m) {
              return {
                  type: m[1],
                  name: m[2].trim()
              };
          }
      }
      function at_rule() {
          whitespace();
          if (css[0] === "@") {
              var ret = at_x() || at_fontface() || at_media() || at_keyframes() || at_supports() || at_document() || at_custom_m() || at_host() || at_page() || at_page_margin_box();
              if (ret && !settings.preserveStatic) {
                  var hasVarFunc = false;
                  if (ret.declarations) {
                      hasVarFunc = ret.declarations.some((function(decl) {
                          return /var\(/.test(decl.value);
                      }));
                  } else {
                      var arr = ret.keyframes || ret.rules || [];
                      hasVarFunc = arr.some((function(obj) {
                          return (obj.declarations || []).some((function(decl) {
                              return /var\(/.test(decl.value);
                          }));
                      }));
                  }
                  return hasVarFunc ? ret : {};
              }
              return ret;
          }
      }
      function rule() {
          if (!settings.preserveStatic) {
              var balancedMatch$1 = balancedMatch("{", "}", css);
              if (balancedMatch$1) {
                  var hasVarDecl = /:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre) && /--\S*\s*:/.test(balancedMatch$1.body);
                  var hasVarFunc = /var\(/.test(balancedMatch$1.body);
                  if (!hasVarDecl && !hasVarFunc) {
                      css = css.slice(balancedMatch$1.end + 1);
                      return {};
                  }
              }
          }
          var sel = selector() || [];
          var decls = settings.preserveStatic ? declarations() : declarations().filter((function(decl) {
              var hasVarDecl = sel.some((function(s) {
                  return /:(?:root|host)(?![.:#(])/.test(s);
              })) && /^--\S/.test(decl.property);
              var hasVarFunc = /var\(/.test(decl.value);
              return hasVarDecl || hasVarFunc;
          }));
          if (!sel.length) {
              error("selector missing");
          }
          return {
              type: "rule",
              selectors: sel,
              declarations: decls
          };
      }
      function rules(core) {
          if (!core && !open()) {
              return error("missing '{'");
          }
          var node;
          var rules = comments();
          while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
              if (node.type) {
                  rules.push(node);
              }
              rules = rules.concat(comments());
          }
          if (!core && !close()) {
              return error("missing '}'");
          }
          return rules;
      }
      return {
          type: "stylesheet",
          stylesheet: {
              rules: rules(true),
              errors: errors
          }
      };
  }

  function parseVars(cssData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaults = {
          parseHost: false,
          store: {},
          onWarning: function onWarning() {}
      };
      var settings = _extends({}, defaults, options);
      var reVarDeclSelectors = new RegExp(":".concat(settings.parseHost ? "host" : "root", "$"));
      if (typeof cssData === "string") {
          cssData = parseCss(cssData, settings);
      }
      cssData.stylesheet.rules.forEach((function(rule) {
          if (rule.type !== "rule" || !rule.selectors.some((function(s) {
              return reVarDeclSelectors.test(s);
          }))) {
              return;
          }
          rule.declarations.forEach((function(decl, i) {
              var prop = decl.property;
              var value = decl.value;
              if (prop && prop.indexOf("--") === 0) {
                  settings.store[prop] = value;
              }
          }));
      }));
      return settings.store;
  }

  function stringifyCss(tree) {
      var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var renderMethods = {
          charset: function charset(node) {
              return "@charset " + node.name + ";";
          },
          comment: function comment(node) {
              return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
          },
          "custom-media": function customMedia(node) {
              return "@custom-media " + node.name + " " + node.media + ";";
          },
          declaration: function declaration(node) {
              return node.property + ":" + node.value + ";";
          },
          document: function document(node) {
              return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
          },
          "font-face": function fontFace(node) {
              return "@font-face" + "{" + visit(node.declarations) + "}";
          },
          host: function host(node) {
              return "@host" + "{" + visit(node.rules) + "}";
          },
          import: function _import(node) {
              return "@import " + node.name + ";";
          },
          keyframe: function keyframe(node) {
              return node.values.join(",") + "{" + visit(node.declarations) + "}";
          },
          keyframes: function keyframes(node) {
              return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
          },
          media: function media(node) {
              return "@media " + node.media + "{" + visit(node.rules) + "}";
          },
          namespace: function namespace(node) {
              return "@namespace " + node.name + ";";
          },
          page: function page(node) {
              return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
          },
          "page-margin-box": function pageMarginBox(node) {
              return "@" + node.name + "{" + visit(node.declarations) + "}";
          },
          rule: function rule(node) {
              var decls = node.declarations;
              if (decls.length) {
                  return node.selectors.join(",") + "{" + visit(decls) + "}";
              }
          },
          supports: function supports(node) {
              return "@supports " + node.supports + "{" + visit(node.rules) + "}";
          }
      };
      function visit(nodes) {
          var buf = "";
          for (var i = 0; i < nodes.length; i++) {
              var n = nodes[i];
              if (cb) {
                  cb(n);
              }
              var txt = renderMethods[n.type](n);
              if (txt) {
                  buf += txt;
                  if (txt.length && n.selectors) {
                      buf += delim;
                  }
              }
          }
          return buf;
      }
      return visit(tree.stylesheet.rules);
  }

  function walkCss(node, fn) {
      node.rules.forEach((function(rule) {
          if (rule.rules) {
              walkCss(rule, fn);
              return;
          }
          if (rule.keyframes) {
              rule.keyframes.forEach((function(keyframe) {
                  if (keyframe.type === "keyframe") {
                      fn(keyframe.declarations, rule);
                  }
              }));
              return;
          }
          if (!rule.declarations) {
              return;
          }
          fn(rule.declarations, node);
      }));
  }

  var VAR_PROP_IDENTIFIER = "--";

  var VAR_FUNC_IDENTIFIER = "var";

  function transformCss(cssData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaults = {
          preserveStatic: true,
          preserveVars: false,
          variables: {},
          onWarning: function onWarning() {}
      };
      var settings = _extends({}, defaults, options);
      if (typeof cssData === "string") {
          cssData = parseCss(cssData, settings);
      }
      walkCss(cssData.stylesheet, (function(declarations, node) {
          for (var i = 0; i < declarations.length; i++) {
              var decl = declarations[i];
              var type = decl.type;
              var prop = decl.property;
              var value = decl.value;
              if (type !== "declaration") {
                  continue;
              }
              if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
                  declarations.splice(i, 1);
                  i--;
                  continue;
              }
              if (value.indexOf(VAR_FUNC_IDENTIFIER + "(") !== -1) {
                  var resolvedValue = resolveValue(value, settings);
                  if (resolvedValue !== decl.value) {
                      resolvedValue = fixNestedCalc(resolvedValue);
                      if (!settings.preserveVars) {
                          decl.value = resolvedValue;
                      } else {
                          declarations.splice(i, 0, {
                              type: type,
                              property: prop,
                              value: resolvedValue
                          });
                          i++;
                      }
                  }
              }
          }
      }));
      return stringifyCss(cssData);
  }

  function fixNestedCalc(value) {
      var reCalcVal = /calc\(([^)]+)\)/g;
      (value.match(reCalcVal) || []).forEach((function(match) {
          var newVal = "calc".concat(match.split("calc").join(""));
          value = value.replace(match, newVal);
      }));
      return value;
  }

  function resolveValue(value) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var __recursiveFallback = arguments.length > 2 ? arguments[2] : undefined;
      if (value.indexOf("var(") === -1) {
          return value;
      }
      var valueData = balancedMatch("(", ")", value);
      function resolveFunc(value) {
          var name = value.split(",")[0].replace(/[\s\n\t]/g, "");
          var fallback = (value.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
          var match = Object.prototype.hasOwnProperty.call(settings.variables, name) ? String(settings.variables[name]) : undefined;
          var replacement = match || (fallback ? String(fallback) : undefined);
          var unresolvedFallback = __recursiveFallback || value;
          if (!match) {
              settings.onWarning('variable "'.concat(name, '" is undefined'));
          }
          if (replacement && replacement !== "undefined" && replacement.length > 0) {
              return resolveValue(replacement, settings, unresolvedFallback);
          } else {
              return "var(".concat(unresolvedFallback, ")");
          }
      }
      if (!valueData) {
          if (value.indexOf("var(") !== -1) {
              settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
          }
          return value;
      } else if (valueData.pre.slice(-3) === "var") {
          var isEmptyVarFunc = valueData.body.trim().length === 0;
          if (isEmptyVarFunc) {
              settings.onWarning("var() must contain a non-whitespace string");
              return value;
          } else {
              return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);
          }
      } else {
          return valueData.pre + "(".concat(resolveValue(valueData.body, settings), ")") + resolveValue(valueData.post, settings);
      }
  }

  var isBrowser = typeof window !== "undefined";

  var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");

  var counters = {
      group: 0,
      job: 0
  };

  var defaults = {
      rootElement: isBrowser ? document : null,
      shadowDOM: false,
      include: "style,link[rel=stylesheet]",
      exclude: "",
      variables: {},
      onlyLegacy: true,
      preserveStatic: true,
      preserveVars: false,
      silent: false,
      updateDOM: true,
      updateURLs: true,
      watch: null,
      onBeforeSend: function onBeforeSend() {},
      onError: function onError() {},
      onWarning: function onWarning() {},
      onSuccess: function onSuccess() {},
      onComplete: function onComplete() {},
      onFinally: function onFinally() {}
  };

  var regex = {
      cssComments: /\/\*[\s\S]+?\*\//g,
      cssKeyframes: /@(?:-\w*-)?keyframes/,
      cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
      cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
      cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
      cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
      cssVarFunc: /var\(\s*--[\w-]/,
      cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
  };

  var variableStore = {
      dom: {},
      job: {},
      user: {}
  };

  var cssVarsIsRunning = false;

  var cssVarsObserver = null;

  var cssVarsSrcNodeCount = 0;

  var debounceTimer = null;

  var isShadowDOMReady = false;

  /**
   * Fetches, parses, and transforms CSS custom properties from specified
   * <style> and <link> elements into static values, then appends a new <style>
   * element with static values to the DOM to provide CSS custom property
   * compatibility for legacy browsers. Also provides a single interface for
   * live updates of runtime values in both modern and legacy browsers.
   *
   * @preserve
   * @param {object}   [options] Options object
   * @param {object}   [options.rootElement=document] Root element to traverse for
   *                   <link> and <style> nodes
   * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
   *                   and <style> nodes will be processed.
   * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
   *                   matching <link re="stylesheet"> and <style> nodes to
   *                   process
   * @param {string}   [options.exclude] CSS selector matching <link
   *                   rel="stylehseet"> and <style> nodes to exclude from those
   *                   matches by options.include
   * @param {object}   [options.variables] A map of custom property name/value
   *                   pairs. Property names can omit or include the leading
   *                   double-hyphen (—), and values specified will override
   *                   previous values
   * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
   *                   only generate legacy-compatible CSS in browsers that lack
   *                   native support (i.e., legacy browsers)
   * @param {boolean}  [options.preserveStatic=true] Determines if CSS
   *                   declarations that do not reference a custom property will
   *                   be preserved in the transformed CSS
   * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
   *                   property declarations will be preserved in the transformed
   *                   CSS
   * @param {boolean}  [options.silent=false] Determines if warning and error
   *                   messages will be displayed on the console
   * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
   *                   update the DOM after processing CSS custom properties
   * @param {boolean}  [options.updateURLs=true] Determines if the ponyfill will
   *                   convert relative url() paths to absolute urls
   * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
   *                   be created that will execute the ponyfill when a <link> or
   *                   <style> DOM mutation is observed
   * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
   *                   1) the XHR object, 2) source node reference, and 3) the
   *                   source URL as arguments
   * @param {function} [options.onError] Callback after a CSS parsing error has
   *                   occurred or an XHR request has failed. Passes 1) an error
   *                   message, and 2) source node reference, 3) xhr, and 4 url as
   *                   arguments.
   * @param {function} [options.onWarning] Callback after each CSS parsing warning
   *                   has occurred. Passes 1) a warning message as an argument.
   * @param {function} [options.onSuccess] Callback after CSS data has been
   *                   collected from each node and before CSS custom properties
   *                   have been transformed. Allows modifying the CSS data before
   *                   it is transformed by returning any string value (or false
   *                   to skip). Passes 1) CSS text, 2) source node reference, and
   *                   3) the source URL as arguments.
   * @param {function} [options.onComplete] Callback after all CSS has been
   *                   processed, legacy-compatible CSS has been generated, and
   *                   (optionally) the DOM has been updated. Passes 1) a CSS
   *                   string with CSS variable values resolved, 2) an array of
   *                   output <style> node references that have been appended to
   *                   the DOM, 3) an object containing all custom properies names
   *                   and values, and 4) the ponyfill execution time in
   *                   milliseconds.
   * @param {function} [options.onFinally] Callback in modern and legacy browsers
   *                   after the ponyfill has finished all tasks. Passes 1) a
   *                   boolean indicating if the last ponyfill call resulted in a
   *                   style change, 2) a boolean indicating if the current
   *                   browser provides native support for CSS custom properties,
   *                   and 3) the ponyfill execution time in milliseconds.
   * @example
   *
   *   cssVars({
   *     rootElement   : document,
   *     shadowDOM     : false,
   *     include       : 'style,link[rel="stylesheet"]',
   *     exclude       : '',
   *     variables     : {},
   *     onlyLegacy    : true,
   *     preserveStatic: true,
   *     preserveVars  : false,
   *     silent        : false,
   *     updateDOM     : true,
   *     updateURLs    : true,
   *     watch         : false,
   *     onBeforeSend(xhr, node, url) {},
   *     onError(message, node, xhr, url) {},
   *     onWarning(message) {},
   *     onSuccess(cssText, node, url) {},
   *     onComplete(cssText, styleNode, cssVariables, benchmark) {},
   *     onFinally(hasChanged, hasNativeSupport, benchmark)
   *   });
   */ function cssVars() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var msgPrefix = "cssVars(): ";
      var settings = _extends({}, defaults, options);
      function handleError(message, sourceNode, xhr, url) {
          if (!settings.silent && window.console) {
              console.error("".concat(msgPrefix).concat(message, "\n"), sourceNode);
          }
          settings.onError(message, sourceNode, xhr, url);
      }
      function handleWarning(message) {
          if (!settings.silent && window.console) {
              console.warn("".concat(msgPrefix).concat(message));
          }
          settings.onWarning(message);
      }
      function handleFinally(hasChanged) {
          settings.onFinally(Boolean(hasChanged), isNativeSupport, getTimeStamp() - settings.__benchmark);
      }
      if (!isBrowser) {
          return;
      }
      if (settings.watch) {
          settings.watch = defaults.watch;
          addMutationObserver(settings);
          cssVars(settings);
          return;
      } else if (settings.watch === false && cssVarsObserver) {
          cssVarsObserver.disconnect();
          cssVarsObserver = null;
      }
      if (!settings.__benchmark) {
          if (cssVarsIsRunning === settings.rootElement) {
              cssVarsDebounced(options);
              return;
          }
          settings.__benchmark = getTimeStamp();
          settings.exclude = [ cssVarsObserver ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', settings.exclude ].filter((function(selector) {
              return selector;
          })).join(",");
          settings.variables = fixVarNames(settings.variables);
          if (!cssVarsObserver) {
              var outNodes = Array.apply(null, settings.rootElement.querySelectorAll('[data-cssvars="out"]'));
              outNodes.forEach((function(outNode) {
                  var dataGroup = outNode.getAttribute("data-cssvars-group");
                  var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup, '"]')) : null;
                  if (!srcNode) {
                      outNode.parentNode.removeChild(outNode);
                  }
              }));
              if (cssVarsSrcNodeCount) {
                  var srcNodes = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');
                  if (srcNodes.length < cssVarsSrcNodeCount) {
                      cssVarsSrcNodeCount = srcNodes.length;
                      variableStore.dom = {};
                  }
              }
          }
      }
      if (document.readyState !== "loading") {
          if (isNativeSupport && settings.onlyLegacy) {
              var hasVarChange = false;
              if (settings.updateDOM) {
                  var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
                  Object.keys(settings.variables).forEach((function(key) {
                      var varValue = settings.variables[key];
                      hasVarChange = hasVarChange || varValue !== getComputedStyle(targetElm).getPropertyValue(key);
                      targetElm.style.setProperty(key, varValue);
                  }));
              }
              handleFinally(hasVarChange);
          } else if (!isShadowDOMReady && (settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host)) {
              getCssData({
                  rootElement: defaults.rootElement,
                  include: defaults.include,
                  exclude: settings.exclude,
                  skipDisabled: false,
                  onSuccess: function onSuccess(cssText, node, url) {
                      cssText = cssText.replace(regex.cssComments, "").replace(regex.cssMediaQueries, "");
                      cssText = (cssText.match(regex.cssVarDeclRules) || []).join("");
                      return cssText || false;
                  },
                  onComplete: function onComplete(cssText, cssArray, nodeArray) {
                      parseVars(cssText, {
                          store: variableStore.dom,
                          onWarning: handleWarning
                      });
                      isShadowDOMReady = true;
                      cssVars(settings);
                  }
              });
          } else {
              cssVarsIsRunning = settings.rootElement;
              getCssData({
                  rootElement: settings.rootElement,
                  include: settings.include,
                  exclude: settings.exclude,
                  skipDisabled: false,
                  onBeforeSend: settings.onBeforeSend,
                  onError: function onError(xhr, node, url) {
                      var responseUrl = xhr.responseURL || getFullUrl$1(url, location.href);
                      var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
                      var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
                      handleError(errorMsg, node, xhr, responseUrl);
                  },
                  onSuccess: function onSuccess(cssText, node, url) {
                      var returnVal = settings.onSuccess(cssText, node, url);
                      cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
                      if (settings.updateURLs) {
                          cssText = fixRelativeCssUrls(cssText, url);
                      }
                      return cssText;
                  },
                  onComplete: function onComplete(cssText, cssArray) {
                      var nodeArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                      var currentVars = _extends({}, variableStore.dom, variableStore.user);
                      var hasVarChange = false;
                      variableStore.job = {};
                      nodeArray.forEach((function(node, i) {
                          var nodeCSS = cssArray[i];
                          if (regex.cssVars.test(nodeCSS)) {
                              try {
                                  var cssTree = parseCss(nodeCSS, {
                                      preserveStatic: settings.preserveStatic,
                                      removeComments: true
                                  });
                                  parseVars(cssTree, {
                                      parseHost: Boolean(settings.rootElement.host),
                                      store: variableStore.dom,
                                      onWarning: handleWarning
                                  });
                                  node.__cssVars = {
                                      tree: cssTree
                                  };
                              } catch (err) {
                                  handleError(err.message, node);
                              }
                          }
                      }));
                      _extends(variableStore.job, variableStore.dom);
                      if (settings.updateDOM) {
                          _extends(variableStore.user, settings.variables);
                          _extends(variableStore.job, variableStore.user);
                      } else {
                          _extends(variableStore.job, variableStore.user, settings.variables);
                          _extends(currentVars, settings.variables);
                      }
                      hasVarChange = counters.job > 0 && Boolean(Object.keys(variableStore.job).length > Object.keys(currentVars).length || Boolean(Object.keys(currentVars).length && Object.keys(variableStore.job).some((function(key) {
                          return variableStore.job[key] !== currentVars[key];
                      }))));
                      if (hasVarChange) {
                          resetCssNodes(settings.rootElement);
                          cssVars(settings);
                      } else {
                          var outCssArray = [];
                          var outNodeArray = [];
                          var hasKeyframesWithVars = false;
                          if (settings.updateDOM) {
                              counters.job++;
                          }
                          nodeArray.forEach((function(node, i) {
                              var isSkip = !node.__cssVars;
                              if (node.__cssVars) {
                                  try {
                                      transformCss(node.__cssVars.tree, _extends({}, settings, {
                                          variables: variableStore.job,
                                          onWarning: handleWarning
                                      }));
                                      var outCss = stringifyCss(node.__cssVars.tree);
                                      if (settings.updateDOM) {
                                          var nodeCSS = cssArray[i];
                                          var hasCSSVarFunc = regex.cssVarFunc.test(nodeCSS);
                                          if (!node.getAttribute("data-cssvars")) {
                                              node.setAttribute("data-cssvars", "src");
                                          }
                                          if (outCss.length && hasCSSVarFunc) {
                                              var dataGroup = node.getAttribute("data-cssvars-group") || ++counters.group;
                                              var outCssNoSpaces = outCss.replace(/\s/g, "");
                                              var outNode = settings.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(dataGroup, '"]')) || document.createElement("style");
                                              hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);
                                              if (settings.preserveStatic) {
                                                  node.sheet.disabled = true;
                                              }
                                              if (!outNode.hasAttribute("data-cssvars")) {
                                                  outNode.setAttribute("data-cssvars", "out");
                                              }
                                              if (outCssNoSpaces === node.textContent.replace(/\s/g, "")) {
                                                  isSkip = true;
                                                  if (outNode && outNode.parentNode) {
                                                      node.removeAttribute("data-cssvars-group");
                                                      outNode.parentNode.removeChild(outNode);
                                                  }
                                              } else if (outCssNoSpaces !== outNode.textContent.replace(/\s/g, "")) {
                                                  [ node, outNode ].forEach((function(n) {
                                                      n.setAttribute("data-cssvars-job", counters.job);
                                                      n.setAttribute("data-cssvars-group", dataGroup);
                                                  }));
                                                  outNode.textContent = outCss;
                                                  outCssArray.push(outCss);
                                                  outNodeArray.push(outNode);
                                                  if (!outNode.parentNode) {
                                                      node.parentNode.insertBefore(outNode, node.nextSibling);
                                                  }
                                              }
                                          }
                                      } else {
                                          if (node.textContent.replace(/\s/g, "") !== outCss) {
                                              outCssArray.push(outCss);
                                          }
                                      }
                                  } catch (err) {
                                      handleError(err.message, node);
                                  }
                              }
                              if (isSkip) {
                                  node.setAttribute("data-cssvars", "skip");
                              }
                              if (!node.hasAttribute("data-cssvars-job")) {
                                  node.setAttribute("data-cssvars-job", counters.job);
                              }
                          }));
                          cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length;
                          if (settings.shadowDOM) {
                              var elms = [ settings.rootElement ].concat(_toConsumableArray$1(settings.rootElement.querySelectorAll("*")));
                              for (var i = 0, elm; elm = elms[i]; ++i) {
                                  if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                                      var shadowSettings = _extends({}, settings, {
                                          rootElement: elm.shadowRoot
                                      });
                                      cssVars(shadowSettings);
                                  }
                              }
                          }
                          if (settings.updateDOM && hasKeyframesWithVars) {
                              fixKeyframes(settings.rootElement);
                          }
                          cssVarsIsRunning = false;
                          settings.onComplete(outCssArray.join(""), outNodeArray, JSON.parse(JSON.stringify(variableStore.job)), getTimeStamp() - settings.__benchmark);
                          handleFinally(outNodeArray.length);
                      }
                  }
              });
          }
      } else {
          document.addEventListener("DOMContentLoaded", (function init(evt) {
              cssVars(options);
              document.removeEventListener("DOMContentLoaded", init);
          }));
      }
  }

  cssVars.reset = function() {
      counters.job = 0;
      counters.group = 0;
      cssVarsIsRunning = false;
      if (cssVarsObserver) {
          cssVarsObserver.disconnect();
          cssVarsObserver = null;
      }
      cssVarsSrcNodeCount = 0;
      debounceTimer = null;
      isShadowDOMReady = false;
      for (var prop in variableStore) {
          variableStore[prop] = {};
      }
  };

  function addMutationObserver(settings) {
      function isDisabled(node) {
          var isDisabledAttr = node.hasAttribute("disabled");
          var isDisabledSheet = (node.sheet || {}).disabled;
          return isDisabledAttr || isDisabledSheet;
      }
      function isLink(node) {
          var isStylesheet = node.tagName === "LINK" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
          return isStylesheet && !isDisabled(node);
      }
      function isStyle(node) {
          return node.tagName === "STYLE" && !isDisabled(node);
      }
      function isValidAddMutation(mutationNodes) {
          return Array.apply(null, mutationNodes).some((function(node) {
              var isElm = node.nodeType === 1;
              var hasAttr = isElm && node.hasAttribute("data-cssvars");
              var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);
              var isValid = !hasAttr && (isLink(node) || isStyleWithVars);
              return isValid;
          }));
      }
      function isValidRemoveMutation(mutationNodes) {
          return Array.apply(null, mutationNodes).some((function(node) {
              var isElm = node.nodeType === 1;
              var isOutNode = isElm && node.getAttribute("data-cssvars") === "out";
              var isSrcNode = isElm && node.getAttribute("data-cssvars") === "src";
              var isValid = isSrcNode;
              if (isSrcNode || isOutNode) {
                  var dataGroup = node.getAttribute("data-cssvars-group");
                  var orphanNode = settings.rootElement.querySelector('[data-cssvars-group="'.concat(dataGroup, '"]'));
                  if (isSrcNode) {
                      resetCssNodes(settings.rootElement);
                      variableStore.dom = {};
                  }
                  if (orphanNode) {
                      orphanNode.parentNode.removeChild(orphanNode);
                  }
              }
              return isValid;
          }));
      }
      if (!window.MutationObserver) {
          return;
      }
      if (cssVarsObserver) {
          cssVarsObserver.disconnect();
          cssVarsObserver = null;
      }
      cssVarsObserver = new MutationObserver((function(mutations) {
          var hasValidMutation = mutations.some((function(mutation) {
              var isValid = false;
              if (mutation.type === "attributes") {
                  isValid = isLink(mutation.target);
              } else if (mutation.type === "childList") {
                  isValid = isValidAddMutation(mutation.addedNodes) || isValidRemoveMutation(mutation.removedNodes);
              }
              return isValid;
          }));
          if (hasValidMutation) {
              cssVars(settings);
          }
      }));
      cssVarsObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: [ "disabled", "href" ],
          childList: true,
          subtree: true
      });
  }

  function cssVarsDebounced(settings) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout((function() {
          settings.__benchmark = null;
          cssVars(settings);
      }), delay);
  }

  function fixKeyframes(rootElement) {
      var animationNameProp = [ "animation-name", "-moz-animation-name", "-webkit-animation-name" ].filter((function(prop) {
          return getComputedStyle(document.body)[prop];
      }))[0];
      if (animationNameProp) {
          var allNodes = rootElement.getElementsByTagName("*");
          var keyframeNodes = [];
          var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";
          for (var i = 0, len = allNodes.length; i < len; i++) {
              var node = allNodes[i];
              var animationName = getComputedStyle(node)[animationNameProp];
              if (animationName !== "none") {
                  node.style[animationNameProp] += nameMarker;
                  keyframeNodes.push(node);
              }
          }
          void document.body.offsetHeight;
          for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
              var nodeStyle = keyframeNodes[_i].style;
              nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
          }
      }
  }

  function fixRelativeCssUrls(cssText, baseUrl) {
      var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
      cssUrls.forEach((function(cssUrl) {
          var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
          var newUrl = getFullUrl$1(oldUrl, baseUrl);
          cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
      }));
      return cssText;
  }

  function fixVarNames() {
      var varObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var reLeadingHyphens = /^-{2}/;
      return Object.keys(varObj).reduce((function(obj, value) {
          var key = reLeadingHyphens.test(value) ? value : "--".concat(value.replace(/^-+/, ""));
          obj[key] = varObj[value];
          return obj;
      }), {});
  }

  function getFullUrl$1(url) {
      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
      var d = document.implementation.createHTMLDocument("");
      var b = d.createElement("base");
      var a = d.createElement("a");
      d.head.appendChild(b);
      d.body.appendChild(a);
      b.href = base;
      a.href = url;
      return a.href;
  }

  function getTimeStamp() {
      return isBrowser && (window.performance || {}).now ? window.performance.now() : (new Date).getTime();
  }

  function resetCssNodes(rootElement) {
      var resetNodes = Array.apply(null, rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
      resetNodes.forEach((function(node) {
          return node.setAttribute("data-cssvars", "");
      }));
  }

  /** @module DOM */

  /* global HTMLElement, HTMLDocument, Window, Element */
  var document$1 = window.document;
  /**
   * Static interface for interacting with the DOM API.
   * @namespace
   */

  var DOM =
  /*#__PURE__*/
  function () {
    function DOM() {
      _classCallCheck(this, DOM);
    }

    _createClass(DOM, null, [{
      key: "setup",
      value: function setup(d, p) {
        document$1 = d;
      }
      /**
       * create a HTMLElement from and HTML string
       * @param {string} html The HTML to parse to a DOM node.
       * @return {HTMLElement}
       */

    }, {
      key: "create",
      value: function create(html) {
        if ('createRange' in document$1) {
          // prefer this implementation as it has wider browser support
          // and it's better performing.
          // see https://davidwalsh.name/convert-html-stings-dom-nodes
          var container = document$1.createElement('div');
          var frag = document$1.createRange().createContextualFragment(html);
          container.appendChild(frag);
          return container;
        } // fallback to this because of a bug in jsdom that causes tests to fail
        // see: https://github.com/jsdom/jsdom/issues/399


        return new DOMParser().parseFromString(html, 'text/html').body;
      }
      /**
       * query the DOM for a given css selector
       * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
       * @param {string} selector the CSS selector to query for
       *
       * @returns {HTMLElement} the FIRST node it finds, if any
       */

    }, {
      key: "query",
      value: function query(parent, selector) {
        // Facade, shifting the selector to the parent argument if only one
        // argument is provided
        if (selector === undefined) {
          selector = parent;
          parent = document$1;
        }

        if (selector instanceof HTMLElement || selector instanceof Window || selector instanceof HTMLDocument) {
          return selector;
        }

        return parent.querySelector(selector);
      }
      /**
       * query the DOM for a given css selector
       * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
       * @param {string} selector the CSS selector to query for
       *
       * @returns {Array} the FIRST node it finds, if any
       */

    }, {
      key: "queryAll",
      value: function queryAll(parent, selector) {
        // Facade, shifting the selector to the parent argument if only one
        // argument is provided
        if (selector === undefined) {
          selector = parent;
          parent = document$1;
        } // handle the case where client code is using a pointer to a dom node and it's null, e.g. this._container


        if (parent == null) {
          parent = document$1;
        }

        if (selector instanceof HTMLElement || selector instanceof HTMLDocument || selector instanceof Window) {
          return [selector];
        }

        return Array.from(parent.querySelectorAll(selector));
      }
    }, {
      key: "onReady",
      value: function onReady(cb) {
        if (document$1.readyState === 'complete' || document$1.readyState === 'loaded' || document$1.readyState === 'interactive') {
          cb();
          return;
        }

        DOM.on(document$1, 'DOMContentLoaded', cb);
      }
      /**
       * createEle will create a {HTMLElement} and apply the properties attributes through an object provided.
       * @param {string} el The element `tag` name to construct
       * @param {Object} opts_data Optional attributes to apply to the new HTMLElement
       */

    }, {
      key: "createEl",
      value: function createEl(el) {
        var opts_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var node = document$1.createElement(el);
        var props = Object.keys(opts_data);

        for (var i = 0; i < props.length; i++) {
          if (props[i] === 'class') {
            DOM.addClass(node, opts_data[props[i]]);
            continue;
          }

          node[props[i]] = opts_data[props[i]];
        }

        return node;
      }
    }, {
      key: "append",
      value: function append(parent, node) {
        if (node === undefined) {
          node = parent;
          parent = document$1;
        }

        if (typeof parent === 'string') {
          parent = DOM.query(parent);
        } // Support HTML injection as well as HTMLElement appends


        if (typeof node === 'string') {
          parent.insertAdjacentHTML('afterBegin', node);
        } else {
          parent.appendChild(node);
        }
      }
    }, {
      key: "addClass",
      value: function addClass(node, className) {
        if (!node) {
          return;
        }

        var classes = className.split(',');
        var len = classes.length;

        for (var i = 0; i < len; i++) {
          node.classList.add(classes[i]);
        }
      }
    }, {
      key: "empty",
      value: function empty(parent) {
        parent.innerHTML = '';
      }
    }, {
      key: "css",
      value: function css(selector, styles) {
        var node = DOM.query(selector);

        for (var prop in styles) {
          node.style[prop] = styles[prop];
        }
      }
    }, {
      key: "attr",
      value: function attr(selector, _attr, val) {
        DOM.query(selector).setAttribute(_attr, val);
      }
    }, {
      key: "attributes",
      value: function attributes(selector, attrs) {
        var _this = this;

        Object.entries(attrs).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              attr = _ref2[0],
              val = _ref2[1];

          return _this.attr(selector, attr, val);
        });
      }
    }, {
      key: "trigger",
      value: function trigger(selector, event, settings) {
        var e = DOM._customEvent(event, settings);

        DOM.query(selector).dispatchEvent(e);
      } // TODO (agrow) investigate removing this
      // Event constructor polyfill

    }, {
      key: "_customEvent",
      value: function _customEvent(event, settings) {
        var _settings = _objectSpread({
          bubbles: true,
          cancelable: true,
          detail: null
        }, settings);

        var evt = document$1.createEvent('CustomEvent');
        evt.initCustomEvent(event, _settings.bubbles, _settings.cancelable, _settings.detail);
        return evt;
      }
    }, {
      key: "on",
      value: function on(selector, evt, handler) {
        DOM.query(selector).addEventListener(evt, handler);
      }
    }, {
      key: "once",
      value: function once(selector, evt, handler) {
        DOM.query(selector).addEventListener(evt, handler, {
          once: true
        });
      }
    }, {
      key: "off",
      value: function off(selector, evt, handler) {
        DOM.query(selector).removeEventListener(evt, handler);
      }
    }, {
      key: "delegate",
      value: function delegate(ctxt, selector, evt, handler) {
        var el = DOM.query(ctxt);
        el.addEventListener(evt, function (event) {
          var target = event.target;

          while (!target.isEqualNode(el)) {
            if (DOM.matches(target, selector)) {
              handler(event, target);
              break;
            }

            target = target.parentNode;
          }
        });
      } // TODO (agrow) investigate removing this
      // Element.matches polyfill

    }, {
      key: "matches",
      value: function matches(element, potentialMatch) {
        if (Element.prototype.matches) {
          return element.matches(potentialMatch);
        }

        if (Element.prototype.msMatchesSelector) {
          return element.msMatchesSelector(potentialMatch);
        }

        if (Element.prototype.webkitMatchesSelector) {
          return element.webkitMatchesSelector(potentialMatch);
        }
      }
    }]);

    return DOM;
  }();

  /** @module SearchParams */

  /* global window */

  /**
   * SearchParams is a class to get the search params in a URL.
   * It is a replacement for URL.searchParams and URLSearchParams for browsers like IE11
   */
  var SearchParams =
  /*#__PURE__*/
  function () {
    function SearchParams(url) {
      _classCallCheck(this, SearchParams);

      /**
       * Mapping of all query parameters in the given url, query param -> value
       * Only used if URLSearchParams does not exist in the window
       * @type {Object}
       * @private
       */
      this._params = {};

      if (window && window.URLSearchParams) {
        return new URLSearchParams(url);
      } else {
        this._params = this.parse(url);
      }
    }
    /**
     * parse creates a mapping of all query params in a given url
     * The query param values are decoded before being put in the map
     * Three types of input are supported
     *   (1) full URL e.g. http://www.yext.com/?q=hello
     *   (2) params with ? e.g. ?q=hello
     *   (1) params without ? e.g. q=hello
     * @param {string} url The url
     * @returns {Object} mapping from query param -> value where value is '' if no value is provided
     */


    _createClass(SearchParams, [{
      key: "parse",
      value: function parse(url) {
        var params = {};
        var search = url;

        if (search === '') {
          return params;
        } // Normalize all url inputs to string of query params separated by &


        if (url.indexOf('?') > -1) {
          search = url.slice(url.indexOf('?') + 1);
        }

        var encodedParams = search.split('&');

        for (var i = 0; i < encodedParams.length; i++) {
          var keyVal = encodedParams[i].split('=');

          if (keyVal.length > 1) {
            params[keyVal[0]] = SearchParams.decode(keyVal[1]);
          } else {
            params[keyVal[0]] = '';
          }
        }

        return params;
      }
      /**
       * get returns the value of the given query param
       * @param {string} query the query param key to get the value of
       * @return {string} param value, null otherwise
       */

    }, {
      key: "get",
      value: function get(query) {
        if (typeof this._params[String(query)] === 'undefined') {
          return null;
        }

        return this._params[query];
      }
      /**
       * set changes the value of a given query param
       * @param {string} name the query param key
       * @param {string} value the value of the query param update with
       */

    }, {
      key: "set",
      value: function set(name, value) {
        this._params[String(name)] = String(value);
      }
      /**
       * has checks to see if the given query param key exists in the params object
       * @param {string} query the query param to check
       * @return {boolean} true if the query param is in the params object, false o/w
       */

    }, {
      key: "has",
      value: function has(query) {
        return query in this._params;
      }
      /**
       * delete removes the given query param and its associated value from the params object
       * @param {string} name the query param key
       */

    }, {
      key: "delete",
      value: function _delete(name) {
        delete this._params[String(name)];
      }
      /**
       * toString returns a url with all the query params in the params object (without a ?)
       * @return {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        var string = [];

        for (var key in this._params) {
          string.push("".concat(key, "=").concat(SearchParams.encode(this._params[key])));
        }

        return string.join('&');
      }
    }, {
      key: "entries",
      value: function entries() {
        var entries = [];

        for (var key in this._params) {
          entries.push([key, this._params[key]]);
        }

        return entries;
      }
      /**
       * decode returns the decoded representation of the given string
       * @param {string} string the string to decode
       * @return {string}
       */

    }], [{
      key: "decode",
      value: function decode(string) {
        return decodeURIComponent(string.replace(/[ +]/g, '%20'));
      }
      /**
       * decode returns the encoded representation of the given string (e.g. + -> %2B)
       * @param {string} string the string to encode
       * @return {string}
       */

    }, {
      key: "encode",
      value: function encode(string) {
        var replace = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '%20': '+'
        };
        return encodeURIComponent(string).replace(/[!'()]|%20/g, function (match) {
          return replace[match];
        });
      }
    }]);

    return SearchParams;
  }();

  /** @module Renderer */

  /**
   * Renderer is an abstract class that all Renderers should extend and implement
   */
  var Renderer =
  /*#__PURE__*/
  function () {
    function Renderer() {
      _classCallCheck(this, Renderer);
    }

    _createClass(Renderer, [{
      key: "render",

      /**
       * render is a core method for all renderers.
       * All implementations should override this class
       * @param {string} template
       * @param {object} data
       */
      value: function render(template, data) {
        return template;
      }
    }, {
      key: "registerHelper",
      value: function registerHelper(name, cb) {}
    }, {
      key: "registerTemplate",
      value: function registerTemplate(templateName, template) {}
    }, {
      key: "compile",
      value: function compile(template) {}
    }]);

    return Renderer;
  }();

  var SVGIcon =
  /*#__PURE__*/
  function () {
    /**
     * @param config
     * @param config.name
     * @param config.path
     * @param config.complexContents
     * @param config.viewBox
     * @constructor
     */
    function SVGIcon(config) {
      _classCallCheck(this, SVGIcon);

      /**
       * the name of the icon
       */
      this.name = config.name;
      /**
       * an svg path definition
       */

      this.path = config.path;
      /**
       * if not using a path, a the markup for a complex SVG
       */

      this.complexContents = config.complexContents;
      /**
       * the view box definition, defaults to 24x24
       * @type {string}
       */

      this.viewBox = config.viewBox || '0 0 24 24';
      /**
       * actual contents used
       */

      this.contents = this.pathDefinition();
    }

    _createClass(SVGIcon, [{
      key: "pathDefinition",
      value: function pathDefinition() {
        if (this.complexContents) {
          return this.complexContents;
        }

        return "<path d=\"".concat(this.path, "\"></path>");
      }
    }, {
      key: "parseContents",
      value: function parseContents(complexContentsParams) {
        var contents = this.contents;

        if (typeof contents === 'function') {
          contents = contents(complexContentsParams);
        }

        return "<svg viewBox=\"".concat(this.viewBox, "\" xmlns=\"http://www.w3.org/2000/svg\">").concat(contents, "</svg>");
      }
      /**
       * returns the svg markup
       */

    }, {
      key: "markup",
      value: function markup() {
        var _this = this;

        if (typeof this.contents === 'function') {
          return function (complexContentsParams) {
            return _this.parseContents(complexContentsParams);
          };
        }

        return this.parseContents();
      }
    }]);

    return SVGIcon;
  }();

  var thumbIcon = new SVGIcon({
    name: 'thumb',
    viewBox: '0 0 24 22',
    path: 'M15.273 1H5.455c-.906 0-1.68.55-2.008 1.342L.153 10.097A2.19 2.19 0 000 10.9v2.2c0 1.21.982 2.2 2.182 2.2h6.883L8.03 20.327l-.033.352c0 .451.186.869.48 1.166L9.633 23l7.178-7.249a2.16 2.16 0 00.644-1.551v-11c0-1.21-.982-2.2-2.182-2.2zm0 13.2l-4.735 4.774L11.75 13.1H2.182v-2.2l3.273-7.7h9.818v11zM19.636 1H24v13.2h-4.364V1z'
  });

  var receiptIcon = new SVGIcon({
    name: 'receipt',
    path: 'M14.606 9.5c-.671-.515-1.591-.833-2.606-.833 1.015 0 1.935.318 2.606.833zm-7.985 0H1.655A1.66 1.66 0 010 7.833V3.667C0 2.747.741 2 1.655 2h20.69A1.66 1.66 0 0124 3.667v4.166A1.66 1.66 0 0122.345 9.5h-4.966V22H6.621V9.5h2.773H6.62zm10.758-1.667h4.966V3.667H1.655v4.166h4.966v-2.5h10.758v2.5z'
  });

  var pantheonIcon = new SVGIcon({
    name: 'pantheon',
    path: 'M9.947 16.598h.252V9.412h-.252a.432.432 0 01-.23-.065c-.07-.043-.106-.093-.106-.15L9.15 7.82v-.15c0-.044.028-.08.084-.109a.691.691 0 01.105-.086.254.254 0 01.146-.043H13.6c.056 0 .104.015.146.043.042.03.091.058.147.086a.271.271 0 01.063.108c.014.043.007.093-.02.15l-.42 1.378a.374.374 0 01-.147.15.37.37 0 01-.19.065h-.251v7.186h.252a.37.37 0 01.189.065c.07.043.119.093.147.15l.42 1.378c.027.028.034.071.02.129a.275.275 0 01-.063.129 1.364 1.364 0 00-.147.086.254.254 0 01-.146.043H9.485a.254.254 0 01-.146-.043.691.691 0 01-.105-.086c-.056-.029-.084-.072-.084-.13v-.128l.461-1.377c0-.058.035-.108.105-.151a.432.432 0 01.231-.065zm5.792 0h.252V9.412h-.252a.432.432 0 01-.23-.065.374.374 0 01-.148-.15l-.42-1.377c-.027-.029-.034-.072-.02-.13a.275.275 0 01.063-.129c.056-.028.105-.057.146-.086a.254.254 0 01.147-.043h4.114c.055 0 .104.015.146.043a.691.691 0 01.105.086c.056.03.084.072.084.13v.129l-.42 1.377a.374.374 0 01-.146.15.432.432 0 01-.231.065h-.21v7.186h.21a.43.43 0 01.23.065c.07.043.12.093.148.15l.42 1.378v.15c0 .043-.029.08-.085.108a.691.691 0 01-.105.086.254.254 0 01-.146.043h-4.114a.254.254 0 01-.147-.043 1.364 1.364 0 00-.146-.086.271.271 0 01-.063-.108c-.014-.043-.007-.093.02-.15l.42-1.377a.374.374 0 01.147-.151.432.432 0 01.231-.065zm-11.794-.086h.252V9.498h-.252a.334.334 0 01-.21-.065.386.386 0 01-.126-.193l-.42-1.377a.248.248 0 01-.02-.172.854.854 0 01.063-.173c.028-.057.07-.1.126-.129a.365.365 0 01.168-.043h4.07c.057 0 .113.015.169.043a.278.278 0 01.126.13.854.854 0 01.062.172.248.248 0 01-.02.172l-.42 1.377a.386.386 0 01-.126.193.334.334 0 01-.21.065h-.21v7.014h.21c.084 0 .154.029.21.086a.673.673 0 01.126.172l.42 1.378a.248.248 0 01.02.172.854.854 0 01-.062.172.278.278 0 01-.126.129.365.365 0 01-.168.043H3.526a.365.365 0 01-.168-.043.278.278 0 01-.126-.13.854.854 0 01-.063-.171.248.248 0 01.02-.172l.42-1.378a.673.673 0 01.126-.172.281.281 0 01.21-.086zM1.763 6.658a.717.717 0 01-.504-.194.644.644 0 01-.21-.495v-.43a.73.73 0 01.105-.387.68.68 0 01.273-.259C4.309 3.402 6.54 2.276 8.121 1.515 9.702.755 10.493.361 10.493.332c.531-.258.972-.366 1.322-.323.35.043.734.165 1.154.366l8.31 4.518c.14.058.245.144.315.259a.73.73 0 01.105.387v.43c0 .201-.07.366-.21.495a.717.717 0 01-.504.194H1.763zm-.714 13.34a.54.54 0 01.168-.387.516.516 0 01.378-.172h19.642c.168 0 .308.057.42.172a.541.541 0 01.168.387v.818a.522.522 0 01-.168.408.605.605 0 01-.42.151H1.595a.551.551 0 01-.378-.15.522.522 0 01-.168-.41v-.817zm21.405 2.022c.14 0 .266.058.378.173a.592.592 0 01.168.43v.818a.541.541 0 01-.168.387.516.516 0 01-.378.172L.546 23.957a.516.516 0 01-.378-.172.541.541 0 01-.168-.387v-.818a.59.59 0 01.168-.43.516.516 0 01.378-.173l21.908.043z'
  });

  var micIcon = new SVGIcon({
    name: 'mic',
    path: 'M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'
  });

  var directionsIcon = new SVGIcon({
    name: 'directions',
    path: 'M23.649 11.154L12.846.35a1.195 1.195 0 00-1.692 0L.35 11.154a1.195 1.195 0 000 1.692L11.154 23.65a1.195 1.195 0 001.692 0L23.65 12.846c.468-.456.468-1.212 0-1.692zm-9.254 3.853v-3.001H9.593v3.6h-2.4v-4.8c0-.66.54-1.2 1.2-1.2h6.002V6.604l4.2 4.2-4.2 4.202z'
  });

  var calendarIcon = new SVGIcon({
    name: 'calendar',
    path: 'M18.111 13.2H12v6h6.111v-6zM16.89 0v2.4H7.11V0H4.667v2.4H3.444c-1.356 0-2.432 1.08-2.432 2.4L1 21.6C1 22.92 2.088 24 3.444 24h17.112C21.9 24 23 22.92 23 21.6V4.8c0-1.32-1.1-2.4-2.444-2.4h-1.223V0H16.89zm3.667 21.6H3.444V8.4h17.112v13.2z'
  });

  var calloutIcon = new SVGIcon({
    name: 'callout',
    path: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z'
  });

  var infoIcon = new SVGIcon({
    name: 'info',
    path: 'M12 8.4A1.2 1.2 0 1012 6a1.2 1.2 0 000 2.4zM12 0c6.624 0 12 5.376 12 12s-5.376 12-12 12S0 18.624 0 12 5.376 0 12 0zm0 18c.66 0 1.2-.54 1.2-1.2V12c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v4.8c0 .66.54 1.2 1.2 1.2z'
  });

  var briefcaseIcon = new SVGIcon({
    name: 'briefcase',
    path: 'M20 7h-4V5c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 20c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm-6 0h-4V5h4v2z'
  });

  var kabobIcon = new SVGIcon({
    name: 'kabob',
    viewBox: '0 0 3 11',
    complexContents: "<circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"1.5\" cy=\"5.5\" r=\"1.5\"/><circle cx=\"1.5\" cy=\"9.5\" r=\"1.5\"/>"
  });

  var personIcon = new SVGIcon({
    name: 'person',
    viewBox: '0 0 18 18',
    path: 'M9 9c2.486 0 4.5-2.014 4.5-4.5S11.486 0 9 0a4.499 4.499 0 00-4.5 4.5C4.5 6.986 6.514 9 9 9zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125C0 17.494.506 18 1.125 18h15.75c.619 0 1.125-.506 1.125-1.125V15.75c0-2.992-5.996-4.5-9-4.5z'
  });

  var magnifyingGlassIcon = new SVGIcon({
    name: 'magnifying_glass',
    path: 'M16.124 13.051a5.154 5.154 0 110-10.308 5.154 5.154 0 010 10.308M16.114 0a7.886 7.886 0 00-6.46 12.407L0 22.06 1.94 24l9.653-9.653A7.886 7.886 0 1016.113 0'
  });

  var officeIcon = new SVGIcon({
    name: 'office',
    path: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'
  });

  var linkIcon = new SVGIcon({
    name: 'link',
    path: 'M2.28 12A3.723 3.723 0 016 8.28h4.8V6H6c-3.312 0-6 2.688-6 6s2.688 6 6 6h4.8v-2.28H6A3.723 3.723 0 012.28 12zm4.92 1.2h9.6v-2.4H7.2v2.4zM18 6h-4.8v2.28H18A3.723 3.723 0 0121.72 12 3.723 3.723 0 0118 15.72h-4.8V18H18c3.312 0 6-2.688 6-6s-2.688-6-6-6z'
  });

  var windowIcon = new SVGIcon({
    name: 'window',
    path: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'
  });

  var phoneIcon = new SVGIcon({
    name: 'phone',
    path: 'M4.827 10.387a20.198 20.198 0 008.786 8.786l2.934-2.933c.36-.36.893-.48 1.36-.32a15.21 15.21 0 004.76.76c.733 0 1.333.6 1.333 1.333v4.654C24 23.4 23.4 24 22.667 24 10.147 24 0 13.853 0 1.333 0 .6.6 0 1.333 0H6c.733 0 1.333.6 1.333 1.333 0 1.667.267 3.267.76 4.76.147.467.04.987-.333 1.36l-2.933 2.934z'
  });

  var tagIcon = new SVGIcon({
    name: 'tag',
    viewBox: '0 0 18 18',
    path: 'M17.469 8.622l-8.1-8.1A1.789 1.789 0 008.1 0H1.8C.81 0 0 .81 0 1.8v6.3c0 .495.198.945.531 1.278l8.1 8.1c.324.324.774.522 1.269.522a1.76 1.76 0 001.269-.531l6.3-6.3A1.76 1.76 0 0018 9.9c0-.495-.207-.954-.531-1.278zM3.15 4.5c-.747 0-1.35-.603-1.35-1.35 0-.747.603-1.35 1.35-1.35.747 0 1.35.603 1.35 1.35 0 .747-.603 1.35-1.35 1.35z'
  });

  var documentIcon = new SVGIcon({
    name: 'document',
    path: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z'
  });

  var chevronIcon = new SVGIcon({
    name: 'chevron',
    viewBox: '0 0 7 9',
    complexContents: "<g fill-rule=\"evenodd\" transform=\"translate(-1 -8)\"><path d=\"m2.6417004 8-1.1417004 1.0575 3.70850202 3.4425-3.70850202 3.4425 1.1417004 1.0575 4.8582996-4.5z\"/></g>"
  });

  var supportIcon = new SVGIcon({
    name: 'support',
    path: 'M12,0 C5.376,0 0,5.376 0,12 C0,18.624 5.376,24 12,24 C18.624,24 24,18.624 24,12 C24,5.376 18.624,0 12,0 Z M13,19 L11,19 L11,17 L13,17 L13,19 Z M15.07,11.25 L14.17,12.17 C13.45,12.9 13,13.5 13,15 L11,15 L11,14.5 C11,13.4 11.45,12.4 12.17,11.67 L13.41,10.41 C13.78,10.05 14,9.55 14,9 C14,7.9 13.1,7 12,7 C10.9,7 10,7.9 10,9 L8,9 C8,6.79 9.79,5 12,5 C14.21,5 16,6.79 16,9 C16,9.88 15.64,10.68 15.07,11.25 Z'
  });

  var yextIcon = new SVGIcon({
    name: 'yext',
    viewBox: '0 0 30 30',
    path: 'M25.517 28.142v.095h-.204v.905h-.066v-.905h-.197v-.095h.467zm.667 0h.066v1h-.066v-.825l-.24.595h-.013l-.24-.595v.825h-.066v-1h.066l.247.61.246-.61zM15 28.8c7.622 0 13.8-6.178 13.8-13.8 0-7.622-6.178-13.8-13.8-13.8C7.378 1.2 1.2 7.378 1.2 15c0 7.622 6.178 13.8 13.8 13.8zM15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0zm.45 16.65v-1.2h6.6v1.2h-2.7v5.4h-1.2v-5.4h-2.7zm-1.599-1.35l.849.849-2.601 2.601 2.601 2.601-.849.849-2.601-2.601L8.649 22.2l-.849-.849 2.601-2.601L7.8 16.149l.849-.849 2.601 2.601 2.601-2.601zM18.675 9a2.175 2.175 0 00-1.847 3.323l2.995-2.995A2.163 2.163 0 0018.675 9zm0 5.55a3.375 3.375 0 112.833-5.209l-3.789 3.788a2.175 2.175 0 003.13-1.954h1.201a3.375 3.375 0 01-3.375 3.375zm-7.425-3.734L13.78 7.8l.92.771-2.85 3.397v2.582h-1.2v-2.582L7.8 8.57l.92-.771 2.53 3.016z'
  });

  var pinIcon = new SVGIcon({
    name: 'pin',
    viewBox: '5 0 9 18',
    path: 'm9.375 0c-3.52446429 0-6.375 2.817-6.375 6.3 0 4.725 6.375 11.7 6.375 11.7s6.375-6.975 6.375-11.7c0-3.483-2.8505357-6.3-6.375-6.3zm.00000018 8.55000007c-1.25678576 0-2.27678579-1.008-2.27678579-2.25s1.02000003-2.25 2.27678579-2.25c1.25678572 0 2.27678582 1.008 2.27678582 2.25s-1.0200001 2.25-2.27678582 2.25z'
  });

  var gearIcon = new SVGIcon({
    name: 'gear',
    path: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.353.353 0 01.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16a.353.353 0 01-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z'
  });

  var lightBulbIcon = new SVGIcon({
    name: 'light_bulb',
    viewBox: '0 0 32 35',
    path: 'M11.585 31.056l8.38-.493v-.986l-8.38.493zM11.585 33.028L15.775 35l4.19-1.972V31.55l-8.38.493v.986zm6.926-.407l-2.736 1.29-2.13-1.004 4.866-.286zM15.775 7.394c-4.63 0-8.38 3.205-8.38 8.38 0 5.177 4.19 6.902 4.19 12.818v.493l8.38-.493c0-5.916 4.19-8.188 4.19-12.817a8.38 8.38 0 00-8.38-8.38zm5.617 13.48c-1.025 1.837-2.174 3.892-2.381 6.786l-6.44.38c-.129-3.01-1.29-5.021-2.32-6.808-.493-.8-.928-1.636-1.299-2.5h13.556c-.325.708-.704 1.403-1.116 2.142zm1.479-3.128H8.627a7.793 7.793 0 01-.247-1.971c0-4.353 3.042-7.395 7.395-7.395a7.394 7.394 0 017.394 7.395 6.739 6.739 0 01-.3 1.971h.002zM26.62 15.282h4.93v1h-4.93zM23.094 7.756l2.091-2.091.698.697-2.092 2.092zM15.282 0h1v4.93h-1zM5.666 6.362l.697-.697 2.091 2.091-.697.697zM0 15.282h4.93v1H0z'
  });

  var starIcon = new SVGIcon({
    name: 'star',
    viewBox: '0 0 18 18',
    path: 'M8.991 0C4.023 0 0 4.032 0 9s4.023 9 8.991 9C13.968 18 18 13.968 18 9s-4.032-9-9.009-9zm3.816 14.4L9 12.105 5.193 14.4l1.008-4.329-3.357-2.907 4.428-.378L9 2.7l1.728 4.077 4.428.378-3.357 2.907z'
  });

  var close = new SVGIcon({
    name: 'close',
    viewBox: '0 1 24 24',
    complexContents: "\n    <path d=\"M7 8l9.716 9.716m0-9.716L7 17.716\"\n          stroke=\"currentColor\"\n          stroke-width=\"2\"/>\n  "
  });

  var elements = new SVGIcon({
    name: 'elements',
    path: 'M13,15 L13,17 L21,17 L21,19 L13,19 L13,21 L11,21 L11,15 L13,15 Z M9,17 L9,19 L3,19 L3,17 L9,17 Z M9,15 L7,15 L7,13 L3,13 L3,11 L7,11 L7,9 L9,9 L9,15 Z M21,11 L21,13 L11,13 L11,11 L21,11 Z M17,3 L17,5 L21,5 L21,7 L17,7 L17,9 L15,9 L15,3 L17,3 Z M13,5 L13,7 L3,7 L3,5 L13,5 Z'
  });

  var yextAnimatedForward = new SVGIcon({
    name: 'yext_animated_reverse',
    viewBox: '0 0 72 72',
    complexContents: function complexContents() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var iconPrefix = params.iconPrefix || 'yxt';
      return "<defs>\n      <mask id=\"".concat(iconPrefix, "_reverse_Mask-1\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-2\">\n        <rect x=\"-144.3\" y=\"144.3\" fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M-0.3 .1c0 0 1.3 1.2 1.3 1.2c0 0 .3-1.6 .3-1.6c0 0-1.6 .4-1.6 .4\" />\n        <path fill=\"#fff\" d=\"M.3 .7c0 0-0.3 .3-0.3 .3c0 0 0 0 0 0c0 0 .3-0.3 .3-0.3c0 0 0 0 0 0\" />\n        <path d=\"M.3 .7c0 0-0.1 0-0.1 0c0 0 .1 .1 .1 .1c0 0 .1-0.1 .1-0.1c0 0-0.1 0-0.1 0m222.8 469.1c0 0-70.5 69.4-70.5 69.4c0 0 34.1 33.5 34.1 33.5c0 0 67-72.9 67-72.9c0 0-30.6-30-30.6-30\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-3\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M489.8 277.4c0 0 78 18.8 78 18.8c0 0-96.1 61.5-96.1 61.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-13.9 14-13.9 14m-67.8-108.1c0 0 73.9 1.3 73.9 1.3c0 0-33.8 54.5-33.8 54.5c0 0 18.6-3.2 18.6-3.2c0 0 35.4-36.5 35.4-36.5c0 0-62-25.9-62-25.9c0 0-32.1 9.8-32.1 9.8\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-4\">\n        <rect x=\"-91.1\" y=\"91.1\" fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M-0.3 .1c0 0 1.3 1.2 1.3 1.2c0 0 .3-1.6 .3-1.6c0 0-1.6 .4-1.6 .4\" />\n        <path fill=\"#fff\" d=\"M.3 .7c0 0-0.3 .3-0.3 .3c0 0 0 0 0 0c0 0 .3-0.3 .3-0.3c0 0 0 0 0 0\" />\n        <path d=\"M.3 .7c0 0-0.1 0-0.1 0c0 0 .1 .1 .1 .1c0 0 .1-0.1 .1-0.1c0 0-0.1 0-0.1 0m222.8 469.1c0 0-70.5 69.4-70.5 69.4c0 0 34.1 33.5 34.1 33.5c0 0 67-72.9 67-72.9c0 0-30.6-30-30.6-30\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-5\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M488.4 291.4c0 0 40.5 39.3 40.5 39.3c0 0-57.2 27-57.2 27c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-15.3 28-15.3 28m-90.5-97.4c0 0 52-11.3 52-11.3c0 0-6 45.2-6 45.2c0 0 36.8-6 36.8-6c0 0 39.3-31.9 39.3-31.9c0 0-65.9-30.5-65.9-30.5c0 0-56.2 34.5-56.2 34.5\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-6\">\n        <rect x=\"-61.3\" y=\"61.3\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-7\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M481.8 298.4c0 0 27.5 39.8 27.5 39.8c0 0-37.6 19.5-37.6 19.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-21.9 35-21.9 35m-108.1-79.7c0 0 30.2-23.8 30.2-23.8c0 0 21.7 35.9 21.7 35.9c0 0 55.1-8.9 55.1-8.9c0 0 35.4-36.5 35.4-36.5c0 0-62-25.9-62-25.9c0 0-80.4 59.2-80.4 59.2\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-8\">\n        <rect x=\"-42.6\" y=\"42.6\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-9\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M475.2 305.4c0 0 14.5 40.3 14.5 40.3c0 0-18 12-18 12c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-28.5 42-28.5 42m-113.6-74.3c0 0 17.9-18.5 17.9-18.5c0 0 36.4 25.3 36.4 25.3c0 0 64.8-16 64.8-16c0 0 39.3-31.9 39.3-31.9c0 0-65.9-30.5-65.9-30.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-10\">\n        <rect x=\"-29.6\" y=\"29.6\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-11\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M468.6 312.4c0 0 1.5 40.8 1.5 40.8c0 0 1.6 4.5 1.6 4.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-35.1 49-35.1 49m-107-81.3c0 0 15.1 4.9 15.1 4.9c0 0 38.2 13.3 38.2 13.3c0 0 65.8-27.4 65.8-27.4c0 0 39.3-21.9 39.3-21.9c0 0-65.9-40.5-65.9-40.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-12\">\n        <rect x=\"-20.3\" y=\"20.3\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-13\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M456.6 311.9c0 0-7 35.6-7 35.6c0 0 22.1 10.2 22.1 10.2c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-47.1 48.5-47.1 48.5m-95-80.8c0 0 12.3 28.3 12.3 28.3c0 0 39.9 1.3 39.9 1.3c0 0 66.9-38.8 66.9-38.8c0 0 39.3-21.9 39.3-21.9c0 0-65.9-40.5-65.9-40.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-14\">\n        <rect x=\"-13.4\" y=\"13.4\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-15\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M444.6 311.4c0 0-15.6 30.5-15.6 30.5c0 0 42.7 15.8 42.7 15.8c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-59.1 48-59.1 48m-83-80.3c0 0 9.5 51.7 9.5 51.7c0 0 41.7-10.8 41.7-10.8c0 0 67.9-50.1 67.9-50.1c0 0 50.6-31.9 50.6-31.9c0 0-77.2-30.5-77.2-30.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-16\">\n        <rect x=\"-7.3\" y=\"7.3\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-17\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M432.6 310.9c0 0-24.2 25.3-24.2 25.3c0 0 63.3 21.5 63.3 21.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-71.1 47.5-71.1 47.5m-71-79.8c0 0 20.3 90.4 20.3 90.4c0 0 29-29.5 29-29.5c0 0 69.8-70.1 69.8-70.1c0 0 35.4-36.5 35.4-36.5c0 0-62-25.9-62-25.9c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-18\">\n        <rect x=\"-4\" y=\"4\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-19\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M432.6 310.9c0 0-24.2 25.3-24.2 25.3c0 0 63.3 21.5 63.3 21.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-71.1 47.5-71.1 47.5m-71-79.8c0 0 20.3 90.4 20.3 90.4c0 0 29-29.5 29-29.5c0 0 69.8-70.1 69.8-70.1c0 0 39.3-31.9 39.3-31.9c0 0-65.9-30.5-65.9-30.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_reverse_Mask-20\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <clipPath id=\"").concat(iconPrefix, "_reverse_ClipPath-1\">\n        <rect width=\"720\" height=\"720\" />\n      </clipPath>\n    </defs>\n    <g transform=\"translate(0,0) scale(.1,.1)\">\n      <g mask=\"url(#").concat(iconPrefix, "_reverse_Mask-1)\">\n        <path d=\"M377.5 395.3c0 0 64.8 0 64.8 0c0 0 0 129.6 0 129.6c0 0 28.8 0 28.8 0c0 0 0-129.6 0-129.6c0 0 64.8 0 64.8 0c0 0 0-28.8 0-28.8c0 0-158.4 0-158.4 0c0 0 0 28.8 0 28.8Z\" />\n        <path d=\"M338.9 363.6c0 0-62.5 62.4-62.5 62.4c0 0-62.4-62.4-62.4-62.4c0 0-20.4 20.4-20.4 20.4c0 0 62.5 62.4 62.5 62.4c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 62.5 62.4 62.5 62.4c0 0 20.3-20.4 20.3-20.4c0 0-62.4-62.4-62.4-62.4c0 0 62.4-62.4 62.4-62.4c0 0-20.3-20.4-20.3-20.4Z\" />\n        <path d=\"M454.7 345.8c44.8 0 81-36.3 81-81c0 0-28.8 0-28.8 0c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3c0 0 69.8-69.9 69.8-69.9c0 0 21.1-21 21.1-21c-14.4-22.3-39.5-37-68-37c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81Zm0-133.2c10.2 0 19.6 2.9 27.6 7.9c0 0-71.9 71.8-71.9 71.8c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2Z\" />\n        <path d=\"M276.4 255.9c0 0-60.7-72.8-60.7-72.8c0 0-22.1 18.6-22.1 18.6c0 0 68.4 82 68.4 82c0 0 0 62.4 0 62.4c0 0 28.8 0 28.8 0c0 0 0-62.6 0-62.6c0 0 68.4-81.8 68.4-81.8c0 0-22-18.6-22-18.6c0 0-60.8 72.8-60.8 72.8Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-353.7c195.2 0 353.7 158.5 353.7 353.7c0 195.2-158.5 353.7-353.7 353.7c-195.2 0-353.7-158.5-353.7-353.7c0-195.2 158.5-353.7 353.7-353.7Z\" fill=\"none\" transform=\"translate(359.8,360.4) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-2)\" transform=\"translate(144.3,-144.3)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-3)\">\n        <path d=\"M390.6 395.2c0 0 51.7 .1 51.7 .1c0 0 .1 103.6 .1 103.6c0 0 28.7 0 28.7 0c0 0 0-103.6 0-103.6c0 0 52-0.1 52-0.1c0 0 0-28.4 0-28.4c0 0-132.5 0-132.5 0c0 0 0 28.4 0 28.4Z\" />\n        <path d=\"M329 373.4c0 .1-52.6 52.6-52.6 52.6c0 0-62.4-62.4-62.4-62.4c0 0-20.4 20.4-20.4 20.4c0 0 62.5 62.4 62.5 62.4c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 62.5 62.4 62.5 62.4c0 0 20.3-20.4 20.3-20.4c0 0-62.4-62.4-62.4-62.4c0 0 52.6-52.6 52.6-52.6c0 0-20.4-20.3-20.4-20.3Z\" />\n        <path d=\"M454.7 345.8c44.8 0 81-36.3 81-81c0 0-28.8 0-28.8 0c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3c0 0 69.8-69.9 69.8-69.9c0 0 21.1-21 21.1-21c-14.4-22.3-39.5-37-68-37c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81Zm0-133.2c10.2 0 19.6 2.9 27.6 7.9c0 0-71.9 71.8-71.9 71.8c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2Z\" />\n        <path d=\"M276.4 255.9c0 0-48.7-58.3-48.7-58.3c0 0-21.1 19-21.1 19c0 0 55.5 67.2 55.5 67.2c0 0 .3 50 .3 50c0 0 28.4 0 28.4 0c0 0 0-50.3 0-50.3c0 0 55.4-66.9 55.4-66.9c0 0-21-18.6-21-18.6c0 0-48.8 57.9-48.8 57.9Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-336.2c185.6 0 336.2 150.6 336.2 336.2c0 185.6-150.6 336.2-336.2 336.2c-185.6 0-336.2-150.6-336.2-336.2c0-185.6 150.6-336.2 336.2-336.2Z\" fill=\"none\" display=\"block\" transform=\"translate(370.8,347.5) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g mask=\"url(#").concat(iconPrefix, "_reverse_Mask-4)\" transform=\"translate(91.1,-91.1)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g mask=\"url(#").concat(iconPrefix, "_reverse_Mask-5)\">\n        <path d=\"M409.7 395.1c0 0 32.6 .2 32.6 .2c0 0 .3 65.5 .3 65.5c0 0 28.5 0 28.5 0c0 0 0-65.5 0-65.5c0 0 33.1-0.2 33.1-0.2c0 0 0-27.8 0-27.8c0 0-94.5 0-94.5 0c0 0 0 27.8 0 27.8Z\" />\n        <path d=\"M319.7 382.8c0 0-43.3 43.2-43.3 43.2c0 0-62.4-62.4-62.4-62.4c0 0-20.4 20.4-20.4 20.4c0 0 62.5 62.4 62.5 62.4c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 62.5 62.4 62.5 62.4c0 0 20.3-20.4 20.3-20.4c0 0-62.4-62.4-62.4-62.4c0 0 43.4-43.3 43.4-43.3c0 0-20.5-20.3-20.5-20.3Z\" />\n        <path d=\"M502.8 199.6c-13.4-9.9-30-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l69.8-69.9l.3-0.2l-20.3-20.4l-71.2 71.1c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 255.9c0 0-31.1-37-31.1-37c0 0-19.7 19.5-19.7 19.5c0 0 36.7 45.6 36.7 45.6c0 0 .7 31.8 .7 31.8c0 0 27.7 0 27.7 0c0 0 0-32.4 0-32.4c0 0 36.5-44.9 36.5-44.9c0 0-19.6-18.6-19.6-18.6c0 0-31.2 36-31.2 36Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-310c171.1 0 310 138.9 310 310c0 171.1-138.9 310-310 310c-171.1 0-310-138.9-310-310c0-171.1 138.9-310 310-310Z\" fill=\"none\" transform=\"translate(387.8,328.7) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-6)\" transform=\"translate(61.3,-61.3)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g mask=\"url(#").concat(iconPrefix, "_reverse_Mask-7)\">\n        <path d=\"M420.4 395c0 0 21.9 .3 21.9 .3c0 0 .4 44.1 .4 44.1c0 0 28.4 0 28.4 0c0 0 0-44.1 0-44.1c0 0 22.6-0.3 22.6-0.3c0 0 0-27.5 0-27.5c0 0-73.3 0-73.3 0c0 0 0 27.5 0 27.5Z\" />\n        <path d=\"M313.2 389.2c0 0-36.8 36.8-36.8 36.8c0 0-62.4-62.4-62.4-62.4c0 0-20.4 20.4-20.4 20.4c0 0 62.5 62.4 62.5 62.4c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 62.5 62.4 62.5 62.4c0 0 20.3-20.4 20.3-20.4c0 0-62.4-62.4-62.4-62.4c0 0 37-36.9 37-36.9c0 0-20.6-20.3-20.6-20.3Z\" />\n        <path d=\"M500 200c-13.4-9.9-27.2-16.2-45.3-16.2c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l57.7-57.7l-20.3-20.4l-58.8 58.7c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 255.9c0 0-21.2-25.1-21.2-25.1c0 0-19 19.8-19 19.8c0 0 26.2 33.5 26.2 33.5c0 0 1 21.6 1 21.6c0 0 27.2 0 27.2 0c0 0 0-22.3 0-22.3c0 0 25.9-32.7 25.9-32.7c0 0-18.8-18.6-18.8-18.6c0 0-21.3 23.8-21.3 23.8Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-294.3c162.4 0 294.3 131.9 294.3 294.3c0 162.4-131.9 294.3-294.3 294.3c-162.4 0-294.3-131.9-294.3-294.3c0-162.4 131.9-294.3 294.3-294.3Z\" fill=\"none\" display=\"block\" transform=\"translate(398.7,318.2) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g mask=\"url(#").concat(iconPrefix, "_reverse_Mask-8)\" transform=\"translate(42.6,-42.6)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-9)\">\n        <path d=\"M427.2 394.9c0 0 15.1 .4 15.1 .4c0 0 .4 30.7 .4 30.7c0 0 28.4 0 28.4 0c0 0 0-30.7 0-30.7c0 0 15.9-0.4 15.9-0.4c0 0 0-27.2 0-27.2c0 0-59.8 0-59.8 0c0 0 0 27.2 0 27.2Z\" />\n        <path d=\"M307.4 395c0 0-31 31-31 31c0 0-53.9-54-53.9-54c0 0-20.4 20.4-20.4 20.4c0 0 54 54 54 54c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 54 54 54 54c0 0 20.4-20.3 20.4-20.3c0 0-54-54.1-54-54.1c0 0 31.2-31.1 31.2-31.1c0 0-20.6-20.3-20.6-20.3Z\" />\n        <path d=\"M502.8 199.6c-13.4-9.9-30.1-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l45.5-45.5l-20.4-20.4l-46.5 46.5c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 255.9c0 0-15-17.6-15-17.6c0 0-18.4 20-18.4 20c0 0 19.4 25.8 19.4 25.8c0 0 1.2 15.2 1.2 15.2c0 0 27 0 27 0c0 0 0-15.9 0-15.9c0 0 19.1-24.9 19.1-24.9c0 0-18.2-18.7-18.2-18.7c0 0-15.1 16.1-15.1 16.1Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-284.4c157 0 284.4 127.4 284.4 284.4c0 157-127.4 284.4-284.4 284.4c-157 0-284.4-127.4-284.4-284.4c0-157 127.4-284.4 284.4-284.4Z\" fill=\"none\" transform=\"translate(406.1,311.6) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-10)\" transform=\"translate(29.6,-29.6)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-11)\">\n        <path d=\"M436 393.5c0 0 8.7 .4 8.7 .4c0 0 .4 17.8 .4 17.8c0 0 23.6 0 23.6 0c0 0 0-17.8 0-17.8c0 0 9.4-0.4 9.4-0.4c0 0 0-22.6 0-22.6c0 0-42.1 0-42.1 0c0 0 0 22.6 0 22.6Z\" />\n        <path d=\"M297.2 405.2c0 0-20.8 20.8-20.8 20.8c0 0-35.4-35.6-35.4-35.6c0 0-20.3 20.5-20.3 20.5c0 0 35.4 35.5 35.4 35.5c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 35.6 35.5 35.6 35.5c0 0 20.2-20.2 20.2-20.2c0 0-35.4-35.7-35.4-35.7c0 0 21.1-21 21.1-21c0 0-20.7-20.2-20.7-20.2Z\" />\n        <path d=\"M502.8 199.6c-13.4-9.9-30.1-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l33.7-33.7l-20.4-20.3l-34.7 34.6c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 255.9c0 0-10.7-12.4-10.7-12.4c0 0-18.1 20.1-18.1 20.1c0 0 14.9 20.6 14.9 20.6c0 0 1.2 10.7 1.2 10.7c0 0 26.8 0 26.8 0c0 0 0-11.5 0-11.5c0 0 14.6-19.6 14.6-19.6c0 0-17.9-18.6-17.9-18.6c0 0-10.8 10.7-10.8 10.7Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-277.5c153.1 0 277.5 124.4 277.5 277.5c0 153.1-124.4 277.5-277.5 277.5c-153.1 0-277.5-124.4-277.5-277.5c0-153.1 124.4-277.5 277.5-277.5Z\" fill=\"none\" display=\"block\" transform=\"translate(411.2,307.1) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-12)\" transform=\"translate(20.3,-20.3)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-13)\">\n        <path d=\"M446 390.8c0 0 3.5 .2 3.5 .2c0 0 .2 7.3 .2 7.3c.1 0 14.2 0 14.2 0c0 0 0-7.3 0-7.3c0 0 4-0.2 4-0.2c0 0 0-13.5 0-13.5c0 0-21.9 0-21.9 0c0 0 0 13.5 0 13.5Z\" />\n        <path d=\"M287.9 414.4c0 0-11.5 11.6-11.5 11.6c0 0-18.5-18.8-18.5-18.8c0 0-20.3 20.5-20.3 20.5c0 0 18.5 18.7 18.5 18.7c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 18.7 18.7 18.7 18.7c0 0 20.2-20 20.2-20c0 0-18.5-19.1-18.5-19.1c0 0 11.9-11.8 11.9-11.8c0 0-20.8-20.2-20.8-20.2Z\" />\n        <path d=\"M502.8 199.6c-13.4-10-30.1-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l22.4-22.4l-20.4-20.4l-23.4 23.4c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 259.4c0 0-4.5-5.2-4.5-5.2c0 0-10.7 12.1-10.7 12.1c0 0 6.9 10.1 6.9 10.1c0 0 .8 4.5 .8 4.5c0 0 16 0 16 0c0 0 0-5 0-5c0 0 6.7-9.4 6.7-9.4c0 0-10.6-11.2-10.6-11.2c0 0-4.6 4.1-4.6 4.1Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-272.5c150.4 0 272.5 122.1 272.5 272.5c0 150.4-122.1 272.5-272.5 272.5c-150.4 0-272.5-122.1-272.5-272.5c0-150.4 122.1-272.5 272.5-272.5Z\" fill=\"none\" display=\"block\" transform=\"translate(414.9,303.7) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-14)\" transform=\"translate(13.4,-13.4)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-15)\">\n        <path d=\"M453.6 388.1c0 0 .7 0 .7 0c0 0 .1 1.7 .1 1.7c0 0 4.7 0 4.7 0c0 0 0-1.7 0-1.7c0 0 1 0 1 0c0 0 0-4.5 0-4.5c0 0-6.5 0-6.5 0c0 0 0 4.5 0 4.5Z\" />\n        <path d=\"M280.8 421.5c0 0-4.4 4.5-4.4 4.5c0 0-5.5-5.9-5.5-5.9c0 0-20.3 20.6-20.3 20.6c0 0 5.5 5.7 5.5 5.7c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 5.8 5.7 5.8 5.7c0 0 20.1-19.9 20.1-19.9c0 0-5.5-6.2-5.5-6.2c0 0 4.8-4.6 4.8-4.6c0 0-20.8-20.3-20.8-20.3Z\" />\n        <path d=\"M502.8 199.6c-13.4-10-30.1-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l11.9-11.9l-20.4-20.3l-12.9 12.8c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 262.9c0 0-1-1.2-1-1.2c0 0-3.6 4-3.6 4c0 0 1.9 2.8 1.9 2.8c0 0 .2 1.1 .2 1.1c0 0 5.4 0 5.4 0c0 0 0-1.2 0-1.2c0 0 1.7-2.6 1.7-2.6c0 0-3.5-3.7-3.5-3.7c0 0-1.1 .8-1.1 .8Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-268.8c148.4 0 268.8 120.4 268.8 268.8c0 148.4-120.4 268.8-268.8 268.8c-148.4 0-268.8-120.4-268.8-268.8c0-148.4 120.4-268.8 268.8-268.8Z\" fill=\"none\" display=\"block\" transform=\"translate(417.6,301.3) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-16)\" transform=\"translate(7.3,-7.3)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-17)\">\n        <path d=\"M275.4 426.9c0 0-19.3 19.5-19.3 19.5c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 19.9-19.7 19.9-19.7c0 0-20.9-20.2-20.9-20.2Z\" />\n        <path d=\"M411.4 291.3l20.7 20.7l.1-0.1c6.8 3.2 14.5 5.1 22.5 5.1c28.9 0 52.2-23.4 52.2-52.2h28.8c0 44.7-36.2 81-81 81c-44.7 0-81-36.3-81-81c0-44.8 36.3-81 81-81c18 0 21.9 6.3 35.3 16.2l-7.9 20.3c-8-4.9-17.3-7.7-27.4-7.7c-28.8 0-52.2 23.3-52.2 52.2c0 10.1 2.9 19.5 7.9 27.5Z\" fill-rule=\"evenodd\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-265.6c146.6 0 265.6 119 265.6 265.6c0 146.6-119 265.6-265.6 265.6c-146.6 0-265.6-119-265.6-265.6c0-146.6 119-265.6 265.6-265.6Z\" fill=\"none\" display=\"block\" transform=\"translate(420,299.1) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-18)\" transform=\"translate(4,-4)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-19)\">\n        <path d=\"M265.4 437.1c0 0-9.3 9.3-9.3 9.3c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 9.8-9.6 9.8-9.6c0 0-20.8-20.1-20.8-20.1Z\" />\n        <path d=\"M403 299.3l20.9 20.9l8.3-8.3c6.8 3.2 14.5 5.1 22.5 5.1c28.9 0 52.2-23.4 52.2-52.2h28.8c0 44.7-36.2 81-81 81c-44.7 0-81-36.3-81-81c0-44.8 36.3-81 81-81c18 0 34.6 5.8 48.1 15.8l-20.7 20.7c-8-4.9-17.3-7.7-27.4-7.7c-28.8 0-52.2 23.3-52.2 52.2c0 10 2.9 19.3 7.8 27.3Z\" fill-rule=\"evenodd\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-263.8c145.6 0 263.8 118.2 263.8 263.8c0 145.6-118.2 263.8-263.8 263.8c-145.6 0-263.8-118.2-263.8-263.8c0-145.6 118.2-263.8 263.8-263.8Z\" fill=\"none\" display=\"block\" transform=\"translate(421.2,297.8) scale(.977,.977)\" />\n    </g>\n    <g clip-path=\"url(#").concat(iconPrefix, "_reverse_ClipPath-1)\" opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_reverse_Mask-20)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-261.7c144.4 0 261.7 117.3 261.7 261.7c0 144.4-117.3 261.7-261.7 261.7c-144.4 0-261.7-117.3-261.7-261.7c0-144.4 117.3-261.7 261.7-261.7Z\" fill=\"none\" display=\"block\" transform=\"translate(422.8,296.4) scale(.977,.977)\" />\n    </g>");
    }
  });

  var yextAnimatedReverse = new SVGIcon({
    name: 'yext_animated_forward',
    viewBox: '0 0 72 72',
    complexContents: function complexContents() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var iconPrefix = params.iconPrefix || 'yxt';
      return "<defs>\n      <mask id=\"".concat(iconPrefix, "_forward_Mask-1\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-2\">\n        <rect x=\"-144.3\" y=\"144.3\" fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M-0.3 .1c0 0 1.3 1.2 1.3 1.2c0 0 .3-1.6 .3-1.6c0 0-1.6 .4-1.6 .4\" />\n        <path fill=\"#fff\" d=\"M.3 .7c0 0-0.3 .3-0.3 .3c0 0 0 0 0 0c0 0 .3-0.3 .3-0.3c0 0 0 0 0 0\" />\n        <path d=\"M.3 .7c0 0-0.1 0-0.1 0c0 0 .1 .1 .1 .1c0 0 .1-0.1 .1-0.1c0 0-0.1 0-0.1 0m222.8 469.1c0 0-70.5 69.4-70.5 69.4c0 0 34.1 33.5 34.1 33.5c0 0 67-72.9 67-72.9c0 0-30.6-30-30.6-30\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-3\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M489.8 277.4c0 0 78 18.8 78 18.8c0 0-96.1 61.5-96.1 61.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-13.9 14-13.9 14m-67.8-108.1c0 0 73.9 1.3 73.9 1.3c0 0-33.8 54.5-33.8 54.5c0 0 18.6-3.2 18.6-3.2c0 0 35.4-36.5 35.4-36.5c0 0-62-25.9-62-25.9c0 0-32.1 9.8-32.1 9.8\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-4\">\n        <rect x=\"-91.1\" y=\"91.1\" fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M-0.3 .1c0 0 1.3 1.2 1.3 1.2c0 0 .3-1.6 .3-1.6c0 0-1.6 .4-1.6 .4\" />\n        <path fill=\"#fff\" d=\"M.3 .7c0 0-0.3 .3-0.3 .3c0 0 0 0 0 0c0 0 .3-0.3 .3-0.3c0 0 0 0 0 0\" />\n        <path d=\"M.3 .7c0 0-0.1 0-0.1 0c0 0 .1 .1 .1 .1c0 0 .1-0.1 .1-0.1c0 0-0.1 0-0.1 0m222.8 469.1c0 0-70.5 69.4-70.5 69.4c0 0 34.1 33.5 34.1 33.5c0 0 67-72.9 67-72.9c0 0-30.6-30-30.6-30\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-5\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M488.4 291.4c0 0 40.5 39.3 40.5 39.3c0 0-57.2 27-57.2 27c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-15.3 28-15.3 28m-90.5-97.4c0 0 52-11.3 52-11.3c0 0-6 45.2-6 45.2c0 0 36.8-6 36.8-6c0 0 39.3-31.9 39.3-31.9c0 0-65.9-30.5-65.9-30.5c0 0-56.2 34.5-56.2 34.5\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-6\">\n        <rect x=\"-61.3\" y=\"61.3\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-7\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M481.8 298.4c0 0 27.5 39.8 27.5 39.8c0 0-37.6 19.5-37.6 19.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-21.9 35-21.9 35m-108.1-79.7c0 0 30.2-23.8 30.2-23.8c0 0 21.7 35.9 21.7 35.9c0 0 55.1-8.9 55.1-8.9c0 0 35.4-36.5 35.4-36.5c0 0-62-25.9-62-25.9c0 0-80.4 59.2-80.4 59.2\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-8\">\n        <rect x=\"-42.6\" y=\"42.6\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-9\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M475.2 305.4c0 0 14.5 40.3 14.5 40.3c0 0-18 12-18 12c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-28.5 42-28.5 42m-113.6-74.3c0 0 17.9-18.5 17.9-18.5c0 0 36.4 25.3 36.4 25.3c0 0 64.8-16 64.8-16c0 0 39.3-31.9 39.3-31.9c0 0-65.9-30.5-65.9-30.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-10\">\n        <rect x=\"-29.6\" y=\"29.6\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-11\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M468.6 312.4c0 0 1.5 40.8 1.5 40.8c0 0 1.6 4.5 1.6 4.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-35.1 49-35.1 49m-107-81.3c0 0 15.1 4.9 15.1 4.9c0 0 38.2 13.3 38.2 13.3c0 0 65.8-27.4 65.8-27.4c0 0 39.3-21.9 39.3-21.9c0 0-65.9-40.5-65.9-40.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-12\">\n        <rect x=\"-20.3\" y=\"20.3\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-13\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M456.6 311.9c0 0-7 35.6-7 35.6c0 0 22.1 10.2 22.1 10.2c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-47.1 48.5-47.1 48.5m-95-80.8c0 0 12.3 28.3 12.3 28.3c0 0 39.9 1.3 39.9 1.3c0 0 66.9-38.8 66.9-38.8c0 0 39.3-21.9 39.3-21.9c0 0-65.9-40.5-65.9-40.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-14\">\n        <rect x=\"-13.4\" y=\"13.4\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-15\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M444.6 311.4c0 0-15.6 30.5-15.6 30.5c0 0 42.7 15.8 42.7 15.8c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-59.1 48-59.1 48m-83-80.3c0 0 9.5 51.7 9.5 51.7c0 0 41.7-10.8 41.7-10.8c0 0 67.9-50.1 67.9-50.1c0 0 50.6-31.9 50.6-31.9c0 0-77.2-30.5-77.2-30.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-16\">\n        <rect x=\"-7.3\" y=\"7.3\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-17\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M432.6 310.9c0 0-24.2 25.3-24.2 25.3c0 0 63.3 21.5 63.3 21.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-71.1 47.5-71.1 47.5m-71-79.8c0 0 20.3 90.4 20.3 90.4c0 0 29-29.5 29-29.5c0 0 69.8-70.1 69.8-70.1c0 0 35.4-36.5 35.4-36.5c0 0-62-25.9-62-25.9c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-18\">\n        <rect x=\"-4\" y=\"4\" fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-19\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n        <path d=\"M432.6 310.9c0 0-24.2 25.3-24.2 25.3c0 0 63.3 21.5 63.3 21.5c0 0 59.6-41.1 59.6-41.1c0 0 10.6-53.8 10.6-53.8c0 0-38.2 .6-38.2 .6c0 0-71.1 47.5-71.1 47.5m-71-79.8c0 0 20.3 90.4 20.3 90.4c0 0 29-29.5 29-29.5c0 0 69.8-70.1 69.8-70.1c0 0 39.3-31.9 39.3-31.9c0 0-65.9-30.5-65.9-30.5c0 0-92.5 71.6-92.5 71.6\" />\n      </mask>\n      <mask id=\"").concat(iconPrefix, "_forward_Mask-20\">\n        <rect fill=\"#fff\" width=\"720\" height=\"720\" />\n      </mask>\n      <clipPath id=\"").concat(iconPrefix, "_forward_ClipPath-1\">\n        <rect width=\"720\" height=\"720\" />\n      </clipPath>\n    </defs>\n    <g transform=\"translate(0,0) scale(.1,.1)\">\n      <g mask=\"url(#").concat(iconPrefix, "_forward_Mask-1)\">\n        <path d=\"M377.5 395.3c0 0 64.8 0 64.8 0c0 0 0 129.6 0 129.6c0 0 28.8 0 28.8 0c0 0 0-129.6 0-129.6c0 0 64.8 0 64.8 0c0 0 0-28.8 0-28.8c0 0-158.4 0-158.4 0c0 0 0 28.8 0 28.8Z\" />\n        <path d=\"M338.9 363.6c0 0-62.5 62.4-62.5 62.4c0 0-62.4-62.4-62.4-62.4c0 0-20.4 20.4-20.4 20.4c0 0 62.5 62.4 62.5 62.4c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 62.5 62.4 62.5 62.4c0 0 20.3-20.4 20.3-20.4c0 0-62.4-62.4-62.4-62.4c0 0 62.4-62.4 62.4-62.4c0 0-20.3-20.4-20.3-20.4Z\" />\n        <path d=\"M454.7 345.8c44.8 0 81-36.3 81-81c0 0-28.8 0-28.8 0c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3c0 0 69.8-69.9 69.8-69.9c0 0 21.1-21 21.1-21c-14.4-22.3-39.5-37-68-37c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81Zm0-133.2c10.2 0 19.6 2.9 27.6 7.9c0 0-71.9 71.8-71.9 71.8c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2Z\" />\n        <path d=\"M276.4 255.9c0 0-60.7-72.8-60.7-72.8c0 0-22.1 18.6-22.1 18.6c0 0 68.4 82 68.4 82c0 0 0 62.4 0 62.4c0 0 28.8 0 28.8 0c0 0 0-62.6 0-62.6c0 0 68.4-81.8 68.4-81.8c0 0-22-18.6-22-18.6c0 0-60.8 72.8-60.8 72.8Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-353.7c195.2 0 353.7 158.5 353.7 353.7c0 195.2-158.5 353.7-353.7 353.7c-195.2 0-353.7-158.5-353.7-353.7c0-195.2 158.5-353.7 353.7-353.7Z\" fill=\"none\" transform=\"translate(359.8,360.4) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-2)\" transform=\"translate(144.3,-144.3)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-3)\">\n        <path d=\"M390.6 395.2c0 0 51.7 .1 51.7 .1c0 0 .1 103.6 .1 103.6c0 0 28.7 0 28.7 0c0 0 0-103.6 0-103.6c0 0 52-0.1 52-0.1c0 0 0-28.4 0-28.4c0 0-132.5 0-132.5 0c0 0 0 28.4 0 28.4Z\" />\n        <path d=\"M329 373.4c0 .1-52.6 52.6-52.6 52.6c0 0-62.4-62.4-62.4-62.4c0 0-20.4 20.4-20.4 20.4c0 0 62.5 62.4 62.5 62.4c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 62.5 62.4 62.5 62.4c0 0 20.3-20.4 20.3-20.4c0 0-62.4-62.4-62.4-62.4c0 0 52.6-52.6 52.6-52.6c0 0-20.4-20.3-20.4-20.3Z\" />\n        <path d=\"M454.7 345.8c44.8 0 81-36.3 81-81c0 0-28.8 0-28.8 0c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3c0 0 69.8-69.9 69.8-69.9c0 0 21.1-21 21.1-21c-14.4-22.3-39.5-37-68-37c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81Zm0-133.2c10.2 0 19.6 2.9 27.6 7.9c0 0-71.9 71.8-71.9 71.8c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2Z\" />\n        <path d=\"M276.4 255.9c0 0-48.7-58.3-48.7-58.3c0 0-21.1 19-21.1 19c0 0 55.5 67.2 55.5 67.2c0 0 .3 50 .3 50c0 0 28.4 0 28.4 0c0 0 0-50.3 0-50.3c0 0 55.4-66.9 55.4-66.9c0 0-21-18.6-21-18.6c0 0-48.8 57.9-48.8 57.9Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-336.2c185.6 0 336.2 150.6 336.2 336.2c0 185.6-150.6 336.2-336.2 336.2c-185.6 0-336.2-150.6-336.2-336.2c0-185.6 150.6-336.2 336.2-336.2Z\" fill=\"none\" display=\"block\" transform=\"translate(370.8,347.5) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g mask=\"url(#").concat(iconPrefix, "_forward_Mask-4)\" transform=\"translate(91.1,-91.1)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g mask=\"url(#").concat(iconPrefix, "_forward_Mask-5)\">\n        <path d=\"M409.7 395.1c0 0 32.6 .2 32.6 .2c0 0 .3 65.5 .3 65.5c0 0 28.5 0 28.5 0c0 0 0-65.5 0-65.5c0 0 33.1-0.2 33.1-0.2c0 0 0-27.8 0-27.8c0 0-94.5 0-94.5 0c0 0 0 27.8 0 27.8Z\" />\n        <path d=\"M319.7 382.8c0 0-43.3 43.2-43.3 43.2c0 0-62.4-62.4-62.4-62.4c0 0-20.4 20.4-20.4 20.4c0 0 62.5 62.4 62.5 62.4c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 62.5 62.4 62.5 62.4c0 0 20.3-20.4 20.3-20.4c0 0-62.4-62.4-62.4-62.4c0 0 43.4-43.3 43.4-43.3c0 0-20.5-20.3-20.5-20.3Z\" />\n        <path d=\"M502.8 199.6c-13.4-9.9-30-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l69.8-69.9l.3-0.2l-20.3-20.4l-71.2 71.1c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 255.9c0 0-31.1-37-31.1-37c0 0-19.7 19.5-19.7 19.5c0 0 36.7 45.6 36.7 45.6c0 0 .7 31.8 .7 31.8c0 0 27.7 0 27.7 0c0 0 0-32.4 0-32.4c0 0 36.5-44.9 36.5-44.9c0 0-19.6-18.6-19.6-18.6c0 0-31.2 36-31.2 36Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-310c171.1 0 310 138.9 310 310c0 171.1-138.9 310-310 310c-171.1 0-310-138.9-310-310c0-171.1 138.9-310 310-310Z\" fill=\"none\" transform=\"translate(387.8,328.7) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-6)\" transform=\"translate(61.3,-61.3)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g mask=\"url(#").concat(iconPrefix, "_forward_Mask-7)\">\n        <path d=\"M420.4 395c0 0 21.9 .3 21.9 .3c0 0 .4 44.1 .4 44.1c0 0 28.4 0 28.4 0c0 0 0-44.1 0-44.1c0 0 22.6-0.3 22.6-0.3c0 0 0-27.5 0-27.5c0 0-73.3 0-73.3 0c0 0 0 27.5 0 27.5Z\" />\n        <path d=\"M313.2 389.2c0 0-36.8 36.8-36.8 36.8c0 0-62.4-62.4-62.4-62.4c0 0-20.4 20.4-20.4 20.4c0 0 62.5 62.4 62.5 62.4c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 62.5 62.4 62.5 62.4c0 0 20.3-20.4 20.3-20.4c0 0-62.4-62.4-62.4-62.4c0 0 37-36.9 37-36.9c0 0-20.6-20.3-20.6-20.3Z\" />\n        <path d=\"M500 200c-13.4-9.9-27.2-16.2-45.3-16.2c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l57.7-57.7l-20.3-20.4l-58.8 58.7c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 255.9c0 0-21.2-25.1-21.2-25.1c0 0-19 19.8-19 19.8c0 0 26.2 33.5 26.2 33.5c0 0 1 21.6 1 21.6c0 0 27.2 0 27.2 0c0 0 0-22.3 0-22.3c0 0 25.9-32.7 25.9-32.7c0 0-18.8-18.6-18.8-18.6c0 0-21.3 23.8-21.3 23.8Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-294.3c162.4 0 294.3 131.9 294.3 294.3c0 162.4-131.9 294.3-294.3 294.3c-162.4 0-294.3-131.9-294.3-294.3c0-162.4 131.9-294.3 294.3-294.3Z\" fill=\"none\" display=\"block\" transform=\"translate(398.7,318.2) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g mask=\"url(#").concat(iconPrefix, "_forward_Mask-8)\" transform=\"translate(42.6,-42.6)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-9)\">\n        <path d=\"M427.2 394.9c0 0 15.1 .4 15.1 .4c0 0 .4 30.7 .4 30.7c0 0 28.4 0 28.4 0c0 0 0-30.7 0-30.7c0 0 15.9-0.4 15.9-0.4c0 0 0-27.2 0-27.2c0 0-59.8 0-59.8 0c0 0 0 27.2 0 27.2Z\" />\n        <path d=\"M307.4 395c0 0-31 31-31 31c0 0-53.9-54-53.9-54c0 0-20.4 20.4-20.4 20.4c0 0 54 54 54 54c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 54 54 54 54c0 0 20.4-20.3 20.4-20.3c0 0-54-54.1-54-54.1c0 0 31.2-31.1 31.2-31.1c0 0-20.6-20.3-20.6-20.3Z\" />\n        <path d=\"M502.8 199.6c-13.4-9.9-30.1-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l45.5-45.5l-20.4-20.4l-46.5 46.5c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 255.9c0 0-15-17.6-15-17.6c0 0-18.4 20-18.4 20c0 0 19.4 25.8 19.4 25.8c0 0 1.2 15.2 1.2 15.2c0 0 27 0 27 0c0 0 0-15.9 0-15.9c0 0 19.1-24.9 19.1-24.9c0 0-18.2-18.7-18.2-18.7c0 0-15.1 16.1-15.1 16.1Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-284.4c157 0 284.4 127.4 284.4 284.4c0 157-127.4 284.4-284.4 284.4c-157 0-284.4-127.4-284.4-284.4c0-157 127.4-284.4 284.4-284.4Z\" fill=\"none\" transform=\"translate(406.1,311.6) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-10)\" transform=\"translate(29.6,-29.6)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-11)\">\n        <path d=\"M436 393.5c0 0 8.7 .4 8.7 .4c0 0 .4 17.8 .4 17.8c0 0 23.6 0 23.6 0c0 0 0-17.8 0-17.8c0 0 9.4-0.4 9.4-0.4c0 0 0-22.6 0-22.6c0 0-42.1 0-42.1 0c0 0 0 22.6 0 22.6Z\" />\n        <path d=\"M297.2 405.2c0 0-20.8 20.8-20.8 20.8c0 0-35.4-35.6-35.4-35.6c0 0-20.3 20.5-20.3 20.5c0 0 35.4 35.5 35.4 35.5c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 35.6 35.5 35.6 35.5c0 0 20.2-20.2 20.2-20.2c0 0-35.4-35.7-35.4-35.7c0 0 21.1-21 21.1-21c0 0-20.7-20.2-20.7-20.2Z\" />\n        <path d=\"M502.8 199.6c-13.4-9.9-30.1-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l33.7-33.7l-20.4-20.3l-34.7 34.6c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 255.9c0 0-10.7-12.4-10.7-12.4c0 0-18.1 20.1-18.1 20.1c0 0 14.9 20.6 14.9 20.6c0 0 1.2 10.7 1.2 10.7c0 0 26.8 0 26.8 0c0 0 0-11.5 0-11.5c0 0 14.6-19.6 14.6-19.6c0 0-17.9-18.6-17.9-18.6c0 0-10.8 10.7-10.8 10.7Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-277.5c153.1 0 277.5 124.4 277.5 277.5c0 153.1-124.4 277.5-277.5 277.5c-153.1 0-277.5-124.4-277.5-277.5c0-153.1 124.4-277.5 277.5-277.5Z\" fill=\"none\" display=\"block\" transform=\"translate(411.2,307.1) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-12)\" transform=\"translate(20.3,-20.3)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-13)\">\n        <path d=\"M446 390.8c0 0 3.5 .2 3.5 .2c0 0 .2 7.3 .2 7.3c.1 0 14.2 0 14.2 0c0 0 0-7.3 0-7.3c0 0 4-0.2 4-0.2c0 0 0-13.5 0-13.5c0 0-21.9 0-21.9 0c0 0 0 13.5 0 13.5Z\" />\n        <path d=\"M287.9 414.4c0 0-11.5 11.6-11.5 11.6c0 0-18.5-18.8-18.5-18.8c0 0-20.3 20.5-20.3 20.5c0 0 18.5 18.7 18.5 18.7c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 18.7 18.7 18.7 18.7c0 0 20.2-20 20.2-20c0 0-18.5-19.1-18.5-19.1c0 0 11.9-11.8 11.9-11.8c0 0-20.8-20.2-20.8-20.2Z\" />\n        <path d=\"M502.8 199.6c-13.4-10-30.1-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l22.4-22.4l-20.4-20.4l-23.4 23.4c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 259.4c0 0-4.5-5.2-4.5-5.2c0 0-10.7 12.1-10.7 12.1c0 0 6.9 10.1 6.9 10.1c0 0 .8 4.5 .8 4.5c0 0 16 0 16 0c0 0 0-5 0-5c0 0 6.7-9.4 6.7-9.4c0 0-10.6-11.2-10.6-11.2c0 0-4.6 4.1-4.6 4.1Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-272.5c150.4 0 272.5 122.1 272.5 272.5c0 150.4-122.1 272.5-272.5 272.5c-150.4 0-272.5-122.1-272.5-272.5c0-150.4 122.1-272.5 272.5-272.5Z\" fill=\"none\" display=\"block\" transform=\"translate(414.9,303.7) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-14)\" transform=\"translate(13.4,-13.4)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-15)\">\n        <path d=\"M453.6 388.1c0 0 .7 0 .7 0c0 0 .1 1.7 .1 1.7c0 0 4.7 0 4.7 0c0 0 0-1.7 0-1.7c0 0 1 0 1 0c0 0 0-4.5 0-4.5c0 0-6.5 0-6.5 0c0 0 0 4.5 0 4.5Z\" />\n        <path d=\"M280.8 421.5c0 0-4.4 4.5-4.4 4.5c0 0-5.5-5.9-5.5-5.9c0 0-20.3 20.6-20.3 20.6c0 0 5.5 5.7 5.5 5.7c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 5.8 5.7 5.8 5.7c0 0 20.1-19.9 20.1-19.9c0 0-5.5-6.2-5.5-6.2c0 0 4.8-4.6 4.8-4.6c0 0-20.8-20.3-20.8-20.3Z\" />\n        <path d=\"M502.8 199.6c-13.4-10-30.1-15.8-48.1-15.8c-44.7 0-81 36.2-81 81c0 44.7 36.3 81 81 81c44.8 0 81-36.3 81-81h-28.8c0 28.8-23.3 52.2-52.2 52.2c-8.2 0-16-1.9-22.9-5.3l11.9-11.9l-20.4-20.3l-12.9 12.8c-5-8-7.9-17.4-7.9-27.5c0-28.9 23.4-52.2 52.2-52.2c10.1 0 19.4 2.8 27.4 7.7Z\" fill-rule=\"evenodd\" />\n        <path d=\"M276.4 262.9c0 0-1-1.2-1-1.2c0 0-3.6 4-3.6 4c0 0 1.9 2.8 1.9 2.8c0 0 .2 1.1 .2 1.1c0 0 5.4 0 5.4 0c0 0 0-1.2 0-1.2c0 0 1.7-2.6 1.7-2.6c0 0-3.5-3.7-3.5-3.7c0 0-1.1 .8-1.1 .8Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-268.8c148.4 0 268.8 120.4 268.8 268.8c0 148.4-120.4 268.8-268.8 268.8c-148.4 0-268.8-120.4-268.8-268.8c0-148.4 120.4-268.8 268.8-268.8Z\" fill=\"none\" display=\"block\" transform=\"translate(417.6,301.3) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-16)\" transform=\"translate(7.3,-7.3)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-17)\">\n        <path d=\"M275.4 426.9c0 0-19.3 19.5-19.3 19.5c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 19.9-19.7 19.9-19.7c0 0-20.9-20.2-20.9-20.2Z\" />\n        <path d=\"M411.4 291.3l20.7 20.7l.1-0.1c6.8 3.2 14.5 5.1 22.5 5.1c28.9 0 52.2-23.4 52.2-52.2h28.8c0 44.7-36.2 81-81 81c-44.7 0-81-36.3-81-81c0-44.8 36.3-81 81-81c18 0 21.9 6.3 35.3 16.2l-7.9 20.3c-8-4.9-17.3-7.7-27.4-7.7c-28.8 0-52.2 23.3-52.2 52.2c0 10.1 2.9 19.5 7.9 27.5Z\" fill-rule=\"evenodd\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-265.6c146.6 0 265.6 119 265.6 265.6c0 146.6-119 265.6-265.6 265.6c-146.6 0-265.6-119-265.6-265.6c0-146.6 119-265.6 265.6-265.6Z\" fill=\"none\" display=\"block\" transform=\"translate(420,299.1) scale(.977,.977)\" />\n    </g>\n    <g opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-18)\" transform=\"translate(4,-4)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-19)\">\n        <path d=\"M265.4 437.1c0 0-9.3 9.3-9.3 9.3c0 0-62.5 62.4-62.5 62.4c0 0 20.4 20.4 20.4 20.4c0 0 62.4-62.4 62.4-62.4c0 0 9.8-9.6 9.8-9.6c0 0-20.8-20.1-20.8-20.1Z\" />\n        <path d=\"M403 299.3l20.9 20.9l8.3-8.3c6.8 3.2 14.5 5.1 22.5 5.1c28.9 0 52.2-23.4 52.2-52.2h28.8c0 44.7-36.2 81-81 81c-44.7 0-81-36.3-81-81c0-44.8 36.3-81 81-81c18 0 34.6 5.8 48.1 15.8l-20.7 20.7c-8-4.9-17.3-7.7-27.4-7.7c-28.8 0-52.2 23.3-52.2 52.2c0 10 2.9 19.3 7.8 27.3Z\" fill-rule=\"evenodd\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-263.8c145.6 0 263.8 118.2 263.8 263.8c0 145.6-118.2 263.8-263.8 263.8c-145.6 0-263.8-118.2-263.8-263.8c0-145.6 118.2-263.8 263.8-263.8Z\" fill=\"none\" display=\"block\" transform=\"translate(421.2,297.8) scale(.977,.977)\" />\n    </g>\n    <g clip-path=\"url(#").concat(iconPrefix, "_forward_ClipPath-1)\" opacity=\"0\" transform=\"translate(0,0) scale(.1,.1)\">\n      <g display=\"block\" mask=\"url(#").concat(iconPrefix, "_forward_Mask-20)\">\n        <path d=\"M224.2 478.3c0 0-210.6 210.5-210.6 210.5c0 0 20.4 20.4 20.4 20.4c0 0 210.7-210.7 210.7-210.7c-11.7-11-5.9-6-20.5-20.2Z\" />\n      </g>\n      <path stroke=\"#000\" stroke-width=\"30\" d=\"M0-261.7c144.4 0 261.7 117.3 261.7 261.7c0 144.4-117.3 261.7-261.7 261.7c-144.4 0-261.7-117.3-261.7-261.7c0-144.4 117.3-261.7 261.7-261.7Z\" fill=\"none\" display=\"block\" transform=\"translate(422.8,296.4) scale(.977,.977)\" />\n    </g>");
    }
  });

  var email = new SVGIcon({
    name: 'email',
    path: 'M12,-3.55271368e-15 C8.81712,-3.55271368e-15 5.7648,1.26468 3.5148,3.5148 C1.2648,5.76492 3.55271368e-15,8.81736 3.55271368e-15,12 C3.55271368e-15,15.18264 1.26468,18.2352 3.5148,20.4852 C5.76492,22.7352 8.81736,24 12,24 C15.18264,24 18.2352,22.73532 20.4852,20.4852 C22.7352,18.23508 24,15.18264 24,12 C24,8.81736 22.73532,5.7648 20.4852,3.5148 C18.23508,1.2648 15.18264,-3.55271368e-15 12,-3.55271368e-15 Z M17.28,7.92 L12,11.87064 L6.72,7.92 L17.28,7.92 Z M18,15.64776 C18,15.7743216 17.9446872,15.894312 17.85,15.976824 C17.7543744,16.059324 17.6278128,16.096824 17.503128,16.0799496 L6.479928,16.0799496 C6.352428,16.0940122 6.224928,16.0499496 6.13212,15.961824 C6.0402456,15.8727624 5.9914944,15.7471368 5.9999328,15.618696 L5.9999328,9.047736 L5.9999328,8.441184 L7.9536768,9.90744 L11.6398368,12.67224 C11.839524,12.8681784 12.1601568,12.8681784 12.3598368,12.67224 L17.8939968,8.51736 L17.9849352,8.44986 L17.9858726,8.45079768 C17.9914978,8.48548488 17.9952478,8.52111048 17.9971226,8.55579768 L17.9971226,15.6386777 L18,15.64776 Z'
  });

  var iconsArray = [thumbIcon, receiptIcon, pantheonIcon, micIcon, directionsIcon, calendarIcon, calloutIcon, infoIcon, briefcaseIcon, kabobIcon, personIcon, magnifyingGlassIcon, officeIcon, linkIcon, windowIcon, phoneIcon, tagIcon, documentIcon, chevronIcon, supportIcon, yextIcon, pinIcon, gearIcon, lightBulbIcon, elements, close, yextAnimatedForward, yextAnimatedReverse, email, starIcon];
  var Icons = {};
  iconsArray.forEach(function (icon) {
    Icons[icon.name] = icon.markup();
  });
  Icons["default"] = starIcon.markup();

  /**
   * HandlebarsRenderer is a wrapper around the nativate handlebars renderer.
   * @extends Renderer
   */

  var HandlebarsRenderer =
  /*#__PURE__*/
  function (_Renderer) {
    _inherits(HandlebarsRenderer, _Renderer);

    function HandlebarsRenderer() {
      var _this;

      var templates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, HandlebarsRenderer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HandlebarsRenderer).call(this));
      /**
       * A local reference to the handlebars compiler
       * @type {Handlebars}
       * @private
       */

      _this._handlebars = templates._hb || null;
      /**
       * A local reference to the pre-compiled handlebars templates
       * @type {Handlebars}
       * @private
       */

      _this._templates = templates || {};
      return _this;
    }

    _createClass(HandlebarsRenderer, [{
      key: "init",
      value: function init(templates) {
        // Assign the handlebars compiler and templates based on
        // information provided from external dep (in default case, it comes from external server request)
        this._handlebars = templates._hb;
        this._templates = templates; // TODO(billy) Once we re-write templates using the new helpers library
        // we probably don't need these custom helpers anymore

        this._registerCustomHelpers();
      }
      /**
       * registerHelper is a public interface for external dependencies to
       * register their own custom helpers to our internal Handlebars Compiler
       */

    }, {
      key: "registerHelper",
      value: function registerHelper(name, cb) {
        this._handlebars.registerHelper(name, cb);
      }
      /**
       * SafeString is a public interface for external dependencies to
       * mark a string as 'safe'. Handlebars will not escape a SafeString
       */

    }, {
      key: "SafeString",
      value: function SafeString(string) {
        return new this._handlebars.SafeString(string);
      }
      /**
       * EscapeExpression is a public interface for external dependencies to
       * escape a string
       */

    }, {
      key: "escapeExpression",
      value: function escapeExpression(string) {
        return this._handlebars.escapeExpression(string);
      }
      /**
       * compile a handlebars template so that it can be rendered,
       * using the {Handlebars} compiler
       * @param {string} template The template string to compile
       */

    }, {
      key: "compile",
      value: function compile(template) {
        if (typeof template !== 'string') {
          return '';
        }

        return this._handlebars.compile(template);
      }
      /**
       * compile a template and then add it to the current template bundle
       * @param {string} templateName The unique name for the template
       * @param {string} template The handlebars template string
       */

    }, {
      key: "registerTemplate",
      value: function registerTemplate(templateName, template) {
        this._templates[templateName] = this.compile(template);
      }
      /**
       * render will render a template with data
       * @param {Object} config Provide either a templateName or a pre-compiled template
       * @param {Object} data The data to provide to the template
       */

    }, {
      key: "render",
      value: function render(config, data) {
        // If a custom template is provided, use it,
        // otherwise fall back to the template name
        // TODO(billy) This interface should probably be less ugly
        if (config.template !== null) {
          return config.template(data);
        }

        try {
          return this._templates[config.templateName](data);
        } catch (e) {
          throw new Error('Can not find/render template: ' + config.templateName, e);
        }
      }
    }, {
      key: "_registerCustomHelpers",
      value: function _registerCustomHelpers() {
        this.registerHelper('ifeq', function (arg1, arg2, options) {
          return arg1 === arg2 ? options.fn(this) : options.inverse(this);
        });
        this.registerHelper('ifnoteq', function (arg1, arg2, options) {
          return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
        });
        this.registerHelper({
          eq: function eq(v1, v2) {
            return v1 === v2;
          },
          ne: function ne(v1, v2) {
            return v1 !== v2;
          },
          lt: function lt(v1, v2) {
            return v1 < v2;
          },
          gt: function gt(v1, v2) {
            return v1 > v2;
          },
          lte: function lte(v1, v2) {
            return v1 <= v2;
          },
          gte: function gte(v1, v2) {
            return v1 >= v2;
          },
          and: function and() {
            return Array.prototype.slice.call(arguments).every(Boolean);
          },
          or: function or() {
            return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
          }
        });
        this.registerHelper({
          add: function add(a1, a2) {
            return a1 + a2;
          },
          sub: function sub(a1, a2) {
            return a1 - a2;
          },
          mul: function mul(a1, a2) {
            return a1 * a2;
          },
          div: function div(a1, a2) {
            return a1 / a2;
          },
          mod: function mod(a1, a2) {
            return a1 % a2;
          }
        });
        this.registerHelper('every', function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var values = args.slice(0, args.length - 1);
          var options = args[args.length - 1];
          return values.every(function (v) {
            return v;
          }) ? options.fn(this) : options.inverse(this);
        });
        this.registerHelper('formatPhoneNumber', function (phoneNumberString) {
          var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
          var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

          if (match) {
            var intlCode = match[1] ? '+1 ' : '';
            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
          }

          return null;
        });
        this.registerHelper('assign', function (name, value, options) {
          var args = arguments;
          options = args[args.length - 1];

          if (!options.data.root) {
            options.data.root = {};
          }

          var v = '';

          for (var i = 1; i < args.length - 1; i++) {
            v = v + args[i];
          }

          options.data.root[name] = v;
        });
        this.registerHelper('json', function (name, value, options) {
          return name === undefined ? '' : JSON.stringify(name);
        });
        this.registerHelper('plural', function (number, singularText, pluralText) {
          return number === 1 ? singularText : pluralText;
        });
        var self = this;
        self.registerHelper('icon', function (name, complexContentsParams, options) {
          var icon = Icons["default"];

          if (!Icons[name]) {
            return self.SafeString(icon);
          }

          if (typeof Icons[name] === 'function') {
            icon = Icons[name](complexContentsParams);
          } else {
            icon = Icons[name];
          }

          return self.SafeString(icon);
        });
        self.registerHelper('highlightValue', function (value, getInverted) {
          var escapedInput = self.escapeExpression(value.value || value.shortValue);
          var highlightedVal = new HighlightedValue({
            value: escapedInput,
            matchedSubstrings: value.matchedSubstrings
          });
          return getInverted ? self.SafeString(highlightedVal.getInverted()) : self.SafeString(highlightedVal.get());
        });
      }
    }]);

    return HandlebarsRenderer;
  }(Renderer);

  /** @module */
  // E.g. Mustache, SOY, HandleBars, React, etc.

  var Renderers = {
    SOY: Renderer,
    Handlebars: HandlebarsRenderer
  };

  /** @module */

  /** The current lib version, reported with errors and analytics, injected by the build process */
  var LIB_VERSION = 'v1.5.4-11-g80e468f7';
  /** The identifier of the production environment */

  var PRODUCTION = 'production';
  /** The identifier of the sandbox environment */

  var SANDBOX = 'sandbox';
  /** The default url for compiled component templates */

  var COMPILED_TEMPLATES_URL = "https://assets.sitescdn.net/answers/".concat(LIB_VERSION, "/answerstemplates.compiled.min.js");

  /**
   * DefaultTemplatesLoader exposes an interface for loading the default set of compiled templates
   * asynchronously from the server. Note that this class cannot be repurposed to fetch custom
   * templates hosted by a client.
   */

  var DefaultTemplatesLoader =
  /*#__PURE__*/
  function () {
    function DefaultTemplatesLoader(onLoaded) {
      _classCallCheck(this, DefaultTemplatesLoader);

      if (!DefaultTemplatesLoader.setInstance(this)) {
        return DefaultTemplatesLoader.getInstance();
      }

      this._templates = {};

      this._onLoaded = onLoaded || function () {};

      this._fetchTemplates();
    }

    _createClass(DefaultTemplatesLoader, [{
      key: "_fetchTemplates",
      value: function _fetchTemplates() {
        // If template have already been loaded, do nothing
        var node = DOM.query('#yext-answers-templates');

        if (node) {
          return;
        } // Inject a script to fetch the compiled templates,
        // wrapping it a Promise for cleanliness


        return new Promise(function (resolve, reject) {
          var script = DOM.createEl('script', {
            id: 'yext-answers-templates',
            onload: resolve,
            onerror: reject,
            async: true,
            src: COMPILED_TEMPLATES_URL
          });
          DOM.append('body', script);
        });
      }
      /**
       * register the templates internally so that they can be later consumed
       * (e.g. by components and renderers) with convienience.
       *
       * `fetchTemplates` will automatically call this, providing the compiled templates from the server.
       */

    }, {
      key: "register",
      value: function register(templates) {
        this._templates = templates; // Notify our consumers that the templates are here :)

        this._onLoaded(this._templates);

        return this;
      }
    }, {
      key: "get",
      value: function get(templateName) {
        return this._templates[templateName];
      }
      /**
       * @return The internal template collection
       */

    }, {
      key: "getTemplates",
      value: function getTemplates() {
        return this._templates;
      }
    }], [{
      key: "setInstance",
      value: function setInstance(instance) {
        if (!this.instance) {
          this.instance = instance;
          return true;
        }

        return false;
      }
    }, {
      key: "getInstance",
      value: function getInstance() {
        return this.instance;
      }
    }]);

    return DefaultTemplatesLoader;
  }();

  /** @module */

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var lodash_clonedeep = createCommonjsModule(function (module, exports) {
  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array ? array.length : 0;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      getPrototype = overArg(Object.getPrototypeOf, Object),
      objectCreate = Object.create,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols,
      nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
      nativeKeys = overArg(Object.keys, Object);

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView'),
      Map = getNative(root, 'Map'),
      Promise = getNative(root, 'Promise'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap'),
      nativeCreate = getNative(Object, 'create');

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    this.__data__ = new ListCache(entries);
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    return this.__data__['delete'](key);
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        return this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = (isArray(value) || isArguments(value))
      ? baseTimes(value.length, String)
      : [];

    var length = result.length,
        skipIndexes = !!length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
      object[key] = value;
    }
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @param {boolean} [isFull] Specify a clone including symbols.
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
    });
    return result;
  }

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * The base implementation of `getTag`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    return objectToString.call(value);
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
  }

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  /**
   * Creates a clone of `map`.
   *
   * @private
   * @param {Object} map The map to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned map.
   */
  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor);
  }

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  /**
   * Creates a clone of `set`.
   *
   * @private
   * @param {Object} set The set to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned set.
   */
  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor);
  }

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      assignValue(object, key, newValue === undefined ? source[key] : newValue);
    }
    return object;
  }

  /**
   * Copies own symbol properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Creates an array of the own enumerable symbol properties of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11,
  // for data views in Edge < 14, and promises in Node.js.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map) != mapTag) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = objectToString.call(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : undefined;

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case dataViewTag:
        return cloneDataView(object, isDeep);

      case float32Tag: case float64Tag:
      case int8Tag: case int16Tag: case int32Tag:
      case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
        return cloneTypedArray(object, isDeep);

      case mapTag:
        return cloneMap(object, isDeep, cloneFunc);

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        return cloneRegExp(object);

      case setTag:
        return cloneSet(object, isDeep, cloneFunc);

      case symbolTag:
        return cloneSymbol(object);
    }
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
      (typeof value == 'number' || reIsUint.test(value)) &&
      (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, true, true);
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
      (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  module.exports = cloneDeep;
  });

  /** @module EventEmitter */

  /**
   * EventEmitter is a base class for any object that wants to expose
   * a pub/sub interface, for emitting messages and providing listeners.
   */
  var EventEmitter =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      /**
       * The subscribers of messages
       * @type {object[]}
       * @private
       */
      this._listeners = {};
    }
    /**
     * on is the public interface for subscribing events that are emitted.
     * @param {string} evt the event name to listen to
     * @param {function} cb The callback to invoke when the {evt} is emitted
     * @param {boolean} once Optional value which will only handle the message once
     */


    _createClass(EventEmitter, [{
      key: "on",
      value: function on(evt, cb, once) {
        if (typeof cb !== 'function') {
          throw new Error('callback handler should be of type {function}');
        }

        if (this._listeners[evt] === undefined) {
          this._listeners[evt] = [];
        }

        this._listeners[evt].push({
          event: evt,
          cb: cb,
          once: once || false
        });

        return this;
      }
      /**
       * once is the public interface for subscribing events that are emitted.
       * The handler will only be triggered once.
       *
       * @param {string} evt the event name to listen to
       * @param {function} cb The callback to invoke when the {evt} is emitted
       * @param {boolean} once Optional value which will only handle the message once
       */

    }, {
      key: "once",
      value: function once(evt, cb) {
        return this.on(evt, cb, true);
      }
      /**
       * off is the public interface for unsubscribing from an event
       * @param {string} evt the event name to unsubscribe from
       */

    }, {
      key: "off",
      value: function off(evt) {
        delete this._listeners[evt];
        return this;
      }
      /**
       * emit is the public interface for broadcasting messages/events
       * @param {string} evt the event name to publish from
       * @param {Object} data the data to send along to the subscribers
       */

    }, {
      key: "emit",
      value: function emit(evt, data) {
        var listeners = this._listeners[evt];

        if (listeners === undefined) {
          return;
        } // Invoke each of all the listener handlers and remove the ones that should fire only once.


        var keep = [];

        for (var i = 0; i < listeners.length; i++) {
          listeners[i].cb(data);

          if (listeners[i].once === true) {
            continue;
          } // Instead of having a 'dirty' array with deleted or 'undefined' entries,
          // we just create a brand new array without the listeners that were removed


          keep.push(listeners[i]);
        } // Update our old list of listeners to the newly created array


        this._listeners[evt] = keep;
        return this;
      }
    }]);

    return EventEmitter;
  }();

  /**
   * State contains the data for the component
   * and exposes an {EventEmitter} interface so that external
   * dependencies can listen/hook subscribe to messages/updates.
   * @extends EventEmitter
   */

  var State =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(State, _EventEmitter);

    function State(data) {
      var _this;

      _classCallCheck(this, State);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(State).call(this));
      /**
       * The initial state of the component
       * @type {Object}
       * @private
       */

      _this._state = data || {};
      return _this;
    }
    /**
     * Set the initial state of the component.
     * NOTE(billy): Does not fire an update message
     */


    _createClass(State, [{
      key: "init",
      value: function init(prop, optVal) {
        this._set(prop, optVal);
      }
      /**
       * setter for the state
       * @param prop {string|Object} The property to set
       * @param optVal Optional, if prop is a {string}, it will assign the value to that property
       */

    }, {
      key: "set",
      value: function set(prop, optVal) {
        this._set(prop, optVal);

        this.emit('update');
      }
      /**
       * setter for the state enables you to update a single property, or complete state
       * depending on the arguments provided.
       * @param prop {string|Object} The property to set
       * @param optVal If prop is a {string}, provide its value
       * @private
       */

    }, {
      key: "_set",
      value: function _set(prop, optVal) {
        if (optVal === undefined) {
          this._state = prop;
        } else {
          this._state[prop] = optVal;
        }
      }
    }, {
      key: "update",
      value: function update(data) {
        this._state = data;
        this.emit('update');
      }
      /**
       * Retrieve a properties value from the state
       * If no property provided, return the full state
       * @param {string} optProp optional property to retrieve
       */

    }, {
      key: "get",
      value: function get(optProp) {
        if (optProp === undefined) {
          return this._state;
        }

        return this._state[optProp];
      }
    }, {
      key: "has",
      value: function has(prop) {
        return this._state[prop] !== undefined;
      }
    }, {
      key: "asJSON",
      value: function asJSON() {
        return this._state;
      }
    }]);

    return State;
  }(EventEmitter);

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  var DOMException = self.DOMException;
  try {
    new DOMException();
  } catch (err) {
    DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
  }

  function fetch$1(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch$1.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch$1;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  /**
   * Types of HTTP requests
   */

  var Methods = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
  };
  /**
   * HttpRequester is a wrapper around the native implementation of AJAX
   * related matters. It's used to make all types of network requests
   * and exposes a promise interface.
   */

  var HttpRequester =
  /*#__PURE__*/
  function () {
    function HttpRequester() {
      _classCallCheck(this, HttpRequester);
    }

    _createClass(HttpRequester, [{
      key: "get",

      /**
       * Create a GET HTTP request
       * @param {string} url The url to make a request to
       * @param {Object} data The data to provide (gets encoded into the URL)
       * @param {Object} opts Configuration options to use for the request
       */
      value: function get(url, data, opts) {
        return this.request(Methods.GET, this.encodeParams(url, data), opts);
      }
      /**
       * Create a POST HTTP request
       * @param {string} url The url to make a request to
       * @param {Object} urlParams The params to encode into the URL
       * @param {Object} jsonBody The request body (json) to provide with the POST request
       * @param {Object} requestConfig Configuration options to use for the request
       */

    }, {
      key: "post",
      value: function post(url, urlParams, jsonBody, requestConfig) {
        return this.request(Methods.POST, this.encodeParams(url, urlParams), Object.assign({}, {
          body: JSON.stringify(jsonBody),
          credentials: undefined
        }, requestConfig));
      }
    }, {
      key: "request",
      value: function request(method, url, opts) {
        var reqArgs = Object.assign({}, {
          'method': method,
          'credentials': 'include'
        }, opts);
        return this._fetch(url, reqArgs);
      } // TODO (agrow) investigate removing this
      // Use imported fetchPolyfill if it does not already exist on window

    }, {
      key: "_fetch",
      value: function _fetch(url, reqArgs) {
        if (!window.fetch) {
          return fetch$1(url, reqArgs);
        }

        return fetch(url, reqArgs);
      }
      /**
       * Send a beacon to the provided url which will send a non-blocking request
       * to the server that is guaranteed to send before page load. No response is returned,
       * so beacons are primarily used for analytics reporting.
       * @param {string} url The url to send the beacon to
       * @param {object} data The data payload to send in the beacon
       * @return {boolean} true if the request is successfully queued
       */

    }, {
      key: "beacon",
      value: function beacon(url, data) {
        return this._sendBeacon(url, JSON.stringify(data));
      } // TODO (agrow) investigate removing this
      // Navigator.sendBeacon polyfill
      // Combination of the compact Financial Times polyfill:
      // https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/navigator/sendBeacon/polyfill.js
      // with the async-by-default behavior of Miguel Mota's polyfill:
      // https://github.com/miguelmota/Navigator.sendBeacon/blob/master/sendbeacon.js

    }, {
      key: "_sendBeacon",
      value: function _sendBeacon(url, data) {
        if (window.navigator && window.navigator.sendBeacon) {
          return window.navigator.sendBeacon(url, data);
        }

        var event = window.event && window.event.type;
        var sync = event === 'unload' || event === 'beforeunload';
        var xhr = 'XMLHttpRequest' in window ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('POST', url, !sync);
        xhr.setRequestHeader('Accept', '*/*');

        if (typeof data === 'string') {
          xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        } else if (Object.prototype.toString.call(data) === '[object Blob]') {
          if (data.type) {
            xhr.setRequestHeader('Content-Type', data.type);
          }
        }

        xhr.send(data);
        return true;
      }
    }, {
      key: "encodeParams",
      value: function encodeParams(url, params) {
        if (_typeof(params) !== 'object') {
          return;
        }

        var hasParam = url.indexOf('?') > -1;
        var searchQuery = '';

        for (var key in params) {
          if (!hasParam) {
            hasParam = true;
            searchQuery += '?';
          } else {
            searchQuery += '&';
          }

          searchQuery += key + '=' + encodeURIComponent(params[key]);
        }

        return url + searchQuery;
      }
    }]);

    return HttpRequester;
  }();

  /** @module */

  /**
   * An enum listing the different Component types supported in the SDK
   * TODO: add all component types
   * @type {Object.<string, string>}
   */
  var ComponentTypes = {
    FILTER_BOX: 'FilterBox',
    FILTER_OPTIONS: 'FilterOptions',
    RANGE_FILTER: 'RangeFilter',
    DATE_RANGE_FILTER: 'DateRangeFilter',
    FACETS: 'Facets',
    GEOLOCATION_FILTER: 'GeoLocationFilter',
    SORT_OPTIONS: 'SortOptions',
    FILTER_SEARCH: 'FilterSearch'
  };

  /**
   * Returns the base url for the live api backend in the desired environment.
   * @param {string} env The desired environment.
   */

  function getLiveApiUrl() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PRODUCTION;
    return env === SANDBOX ? 'https://liveapi-sandbox.yext.com' : 'https://liveapi.yext.com';
  }
  /**
   * Returns the base url for the live api backend in the desired environment.
   * @param {string} env The desired environment.
   */

  function getCachedLiveApiUrl() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PRODUCTION;
    return env === SANDBOX ? 'https://liveapi-sandbox.yext.com' : 'https://liveapi-cached.yext.com';
  }
  /**
   * Returns the base url for the knowledge api backend in the desired environment.
   * @param {string} env The desired environment.
   */

  function getKnowledgeApiUrl() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PRODUCTION;
    return env === SANDBOX ? 'https://api-sandbox.yext.com' : 'https://api.yext.com';
  }
  /**
   * Returns the base url for the analytics backend in the desired environment.
   * @param {string} env The desired environment.
   * @param {boolean} conversionTrackingEnabled If conversion tracking has been opted into.
   */

  function getAnalyticsUrl() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PRODUCTION;
    var conversionTrackingEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (conversionTrackingEnabled) {
      return env === SANDBOX ? 'https://sandbox-realtimeanalytics.yext.com' : 'https://realtimeanalytics.yext.com';
    }

    return env === SANDBOX ? 'https://sandbox-answers.yext-pixel.com' : 'https://answers.yext-pixel.com';
  }
  /**
   * Returns the passed in url with the passed in params appended as query params
   * Note: query parameters in the url are stripped, you should include those query parameters
   * in `params` if you want to keep them
   * @param {string} url
   * @param {SearchParams} params to add to the url
   * @returns {string}
   */

  function replaceUrlParams(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new SearchParams();
    return url.split('?')[0] + '?' + params.toString();
  }
  /**
   * Returns the given url without query params and hashes
   * @param {string} url Full url e.g. https://yext.com/?query=hello#Footer
   * @returns {string} Url without query params and hashes e.g. https://yext.com/
   */

  function urlWithoutQueryParamsAndHash(url) {
    return url.split('?')[0].split('#')[0];
  }
  /**
   * returns if two SearchParams objects have the same key,value entries
   * @param {SearchParams} params1
   * @param {SearchParams} params2
   * @return {boolean} true if params1 and params2 have the same key,value entries, false otherwise
   */

  function equivalentParams(params1, params2) {
    var entries1 = Array.from(params1.entries());
    var entries2 = Array.from(params2.entries());

    if (entries1.length !== entries2.length) {
      return false;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = params1.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            val = _step$value[1];

        if (val !== params2.get(key)) {
          return false;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return true;
  }
  /**
   * Creates a copy of the provided {@link SearchParams}, with the specified
   * attributes filtered out
   * @param {SearchParams} params The parameters to remove from
   * @param {string[]} prefixes The prefixes of parameters to remove
   * @return {SearchParams} A new instance of SearchParams without entries with
   *   keys that start with the given prefixes
   */

  function removeParamsWithPrefixes(params, prefixes) {
    var newParams = new SearchParams();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            val = _step2$value[1];

        var includeEntry = prefixes.every(function (prefix) {
          return !key.startsWith(prefix);
        });

        if (includeEntry) {
          newParams.set(key, val);
        }
      };

      for (var _iterator2 = params.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return newParams;
  }
  /**
   * Removes parameters for filters, facets, sort options, and pagination
   * from the provided {@link SearchParams}. This is useful for constructing
   * inter-experience answers links.
   * @param {SearchParams} params The parameters to remove from
   * @param {function} getComponentNamesForComponentTypes Given string[]
   *   component types, returns string[] component names for those types
   * @return {SearchParams} Parameters that have filtered out params that
   *   should not persist across the answers experience
   */

  function filterParamsForExperienceLink(params, getComponentNamesForComponentTypes) {
    var componentTypesToExclude = [ComponentTypes.FACETS, ComponentTypes.FILTER_BOX, ComponentTypes.FILTER_OPTIONS, ComponentTypes.RANGE_FILTER, ComponentTypes.DATE_RANGE_FILTER, ComponentTypes.SORT_OPTIONS, ComponentTypes.GEOLOCATION_FILTER, ComponentTypes.FILTER_SEARCH];
    var paramsToFilter = componentTypesToExclude.flatMap(function (type) {
      var params = getComponentNamesForComponentTypes([type]);

      if (type === ComponentTypes.GEOLOCATION_FILTER || type === ComponentTypes.FILTER_SEARCH) {
        params = params.map(function (param) {
          return "".concat(StorageKeys.QUERY, ".").concat(param);
        });
      }

      return params;
    });
    paramsToFilter = paramsToFilter.concat([StorageKeys.FILTER]);
    var newParams = removeParamsWithPrefixes(params, paramsToFilter);
    newParams["delete"](StorageKeys.SEARCH_OFFSET);
    return newParams;
  }

  /**
   * ApiRequest is the base class for all API requests.
   * It defines all of the core properties required to make a request
   */

  var ApiRequest =
  /*#__PURE__*/
  function () {
    // TODO (tmeyer): Create an ApiService interface and pass an implementation to the current
    // consumers of ApiRequest as a dependency.
    function ApiRequest() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var globalStorage = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, ApiRequest);

      /**
       * An abstraction used for making network request and handling errors
       * @type {HttpRequester}
       * @private
       */
      this._requester = new HttpRequester();
      /**
       * The environment the request should be made to
       * @type {string}
       * @private
       */

      this._environment = opts.environment || PRODUCTION;
      /**
       * The baseUrl to use for making a request
       * @type {string}
       * @private
       */

      this._baseUrl = opts.baseUrl || getLiveApiUrl(this._environment);
      /**
       * The endpoint to use in the url (appended to the {baseUrl})
       * @type {string}
       * @private
       */

      this._endpoint = opts.endpoint || null;
      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */

      this._apiKey = opts.apiKey || null;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = opts.version || 20190101;
      /**
       * Additional data params that are sent along with the request
       * @type {string}
       * @private
       */

      this._params = opts.params || {};

      if (!globalStorage) {
        throw new AnswersBasicError('Must include global storage', 'ApiRequest');
      }
      /**
       * @type {GlobalStorage}
       * @private
       */


      this._globalStorage = globalStorage;
    }
    /**
     * get creates a new `GET` request to the server using the configuration of the request class
     *
     * @param {Object} opts Any configuration options to use for the GET request.
     * @returns {Promise<Response>}
     */


    _createClass(ApiRequest, [{
      key: "get",
      value: function get(opts) {
        return this._requester.get(this._baseUrl + this._endpoint, Object.assign({}, this.baseParams(), this.sanitizeParams(this._params)), opts);
      }
      /**
       * @param {Object} opts
       * @returns {Promise<Response>}
       */

    }, {
      key: "post",
      value: function post(opts) {
        return this._requester.post(this._baseUrl + this._endpoint, this.baseParams()
        /* urlParams */
        , this.sanitizeParams(this._params)
        /* jsonBody */
        , opts
        /* requestConfig */
        );
      }
      /**
       * @returns {Object}
       * @private
       */

    }, {
      key: "baseParams",
      value: function baseParams() {
        var baseParams = {
          'v': this._version,
          'api_key': this._apiKey,
          'jsLibVersion': LIB_VERSION,
          'sessionTrackingEnabled': this._globalStorage.getState(StorageKeys.SESSIONS_OPT_IN)
        };
        var urlParams = new SearchParams(window.location.search.substring(1));

        if (urlParams.has('beta')) {
          baseParams['beta'] = urlParams.get('beta');
        }

        return baseParams;
      }
    }, {
      key: "sanitizeParams",
      value: function sanitizeParams() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // Remove any paramaters whos value is `undefined`.
        //
        // NOTE(billy) Probably better to be explicit about how to handle this at the request building level,
        // but I can't see any cases where we'd ever want to send 'undefined' as a value to the server.
        // So it's probably fine to 'clean' the params object here
        Object.keys(params).forEach(function (key) {
          if (params[key] === undefined || params[key] === null) {
            delete params[key];
          }
        });
        return params;
      }
    }]);

    return ApiRequest;
  }();

  /**
   * SearchApi is the API for doing various types of search
   * over the network (e.g. vertical or universal)
   *
   * @implements {SearchService}
   */

  var SearchApi =
  /*#__PURE__*/
  function () {
    function SearchApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SearchApi);

      /**
       * A local reference to the API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'Search');
      }

      this._apiKey = config.apiKey;
      /**
       * A local reference to the Answers Key to use for the request
       * @type {string}
       * @private
       */

      if (!config.experienceKey) {
        throw new AnswersBasicError('Answers Key is required', 'Search');
      }

      this._experienceKey = config.experienceKey;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = config.version || 20190101 || 20190301;
      /**
       * A local reference to the locale to use for the request
       * @type {string}
       * @private
       */

      if (!config.locale) {
        throw new AnswersBasicError('Locale is required', 'Search');
      }

      this._locale = config.locale;
      /**
       * The environment of the Answers experience
       * @type {string}
       * @private
       */

      this._environment = config.environment;
    }
    /** @inheritdoc */


    _createClass(SearchApi, [{
      key: "verticalSearch",
      value: function verticalSearch(verticalKey, _ref) {
        var input = _ref.input,
            filter = _ref.filter,
            facetFilter = _ref.facetFilter,
            limit = _ref.limit,
            offset = _ref.offset,
            id = _ref.id,
            geolocation = _ref.geolocation,
            isDynamicFiltersEnabled = _ref.isDynamicFiltersEnabled,
            skipSpellCheck = _ref.skipSpellCheck,
            queryTrigger = _ref.queryTrigger,
            sessionTrackingEnabled = _ref.sessionTrackingEnabled,
            sortBys = _ref.sortBys,
            locationRadius = _ref.locationRadius,
            context = _ref.context,
            referrerPageUrl = _ref.referrerPageUrl;

        if (limit > 50) {
          throw new AnswersCoreError('Provided search limit unsupported', 'SearchApi');
        }

        var requestConfig = {
          endpoint: '/v2/accounts/me/answers/vertical/query',
          apiKey: this._apiKey,
          version: this._version,
          environment: this._environment,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'filters': filter,
            'facetFilters': facetFilter,
            'verticalKey': verticalKey,
            'limit': limit,
            'offset': offset,
            'location': geolocation ? "".concat(geolocation.lat, ",").concat(geolocation.lng) : null,
            'queryId': id,
            'retrieveFacets': isDynamicFiltersEnabled,
            'locale': this._locale,
            'skipSpellCheck': skipSpellCheck,
            'queryTrigger': queryTrigger,
            'sessionTrackingEnabled': sessionTrackingEnabled,
            'sortBys': sortBys,
            'locationRadius': locationRadius,
            'context': context,
            'referrerPageUrl': referrerPageUrl
          }
        };
        var request = new ApiRequest(requestConfig, {
          getState: function getState() {
            return sessionTrackingEnabled;
          }
        });
        window.performance.mark('yext.answers.verticalQuerySent');
        return request.get().then(function (response) {
          window.performance.mark('yext.answers.verticalQueryResponseReceived');
          return response.json();
        });
      }
      /** @inheritdoc */

    }, {
      key: "universalSearch",
      value: function universalSearch(queryString, params) {
        var requestConfig = {
          endpoint: '/v2/accounts/me/answers/query',
          apiKey: this._apiKey,
          version: this._version,
          environment: this._environment,
          params: {
            'input': queryString,
            'experienceKey': this._experienceKey,
            'location': params.geolocation ? "".concat(params.geolocation.lat, ",").concat(params.geolocation.lng) : null,
            'version': this._experienceVersion,
            'locale': this._locale,
            'skipSpellCheck': params.skipSpellCheck,
            'queryTrigger': params.queryTrigger,
            'context': params.context,
            'referrerPageUrl': params.referrerPageUrl
          }
        };
        var request = new ApiRequest(requestConfig, {
          getState: function getState() {
            return params.sessionTrackingEnabled;
          }
        });
        window.performance.mark('yext.answers.universalQuerySent');
        return request.get().then(function (response) {
          window.performance.mark('yext.answers.universalQueryResponseReceived');
          return response.json();
        });
      }
    }]);

    return SearchApi;
  }();

  /** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

  /**
   * Class for reporting analytics events to the server via HTTP
   *
   * @implements {AnalyticsReporterService}
   */

  var AnalyticsReporter =
  /*#__PURE__*/
  function () {
    function AnalyticsReporter(experienceKey, experienceVersion, businessId) {
      var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var environment = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : PRODUCTION;

      _classCallCheck(this, AnalyticsReporter);

      /**
       * The internal business identifier used for reporting
       * @type {number}
       */
      this._businessId = businessId;
      /**
       * Options to include with every analytic event reported to the server
       * @type {object}
       * @private
       */

      this._globalOptions = Object.assign({}, globalOptions, {
        experienceKey: experienceKey
      });
      /**
       * The environment of the Answers experience
       * @type {string}
       * @private
       */

      this._environment = environment;
      /**
       * Base URL for the analytics API
       * @type {string}
       * @private
       */

      this._baseUrl = getAnalyticsUrl(this._environment);
      /**
       * Boolean indicating if opted in or out of conversion tracking
       * @type {boolean}
       * @private
       */

      this._conversionTrackingEnabled = false;

      if (experienceVersion) {
        this._globalOptions.experienceVersion = experienceVersion;
      }
    }

    _createClass(AnalyticsReporter, [{
      key: "getQueryId",
      value: function getQueryId() {
        return this._globalOptions.queryId;
      }
    }, {
      key: "setQueryId",
      value: function setQueryId(queryId) {
        this._globalOptions.queryId = queryId;
      }
      /** @inheritdoc */

    }, {
      key: "report",
      value: function report(event) {
        var cookieData = {};

        if (this._conversionTrackingEnabled && typeof ytag === 'function') {
          ytag('optin', true);
          cookieData = ytag('yfpc', null);
        } else if (this._conversionTrackingEnabled) {
          throw new AnswersAnalyticsError('Tried to enable conversion tracking without including ytag');
        }

        if (!(event instanceof AnalyticsEvent)) {
          throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
        }

        event.addOptions(this._globalOptions);
        return new HttpRequester().beacon("".concat(this._baseUrl, "/realtimeanalytics/data/answers/").concat(this._businessId), _objectSpread({
          data: event.toApiEvent()
        }, cookieData));
      }
      /** @inheritdoc */

    }, {
      key: "setConversionTrackingEnabled",
      value: function setConversionTrackingEnabled(isEnabled) {
        this._conversionTrackingEnabled = isEnabled;
        this._baseUrl = getAnalyticsUrl(this._environment, isEnabled);
      }
    }]);

    return AnalyticsReporter;
  }();

  /** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

  /**
   * @implements {AnalyticsReporterService}
   */
  var NoopAnalyticsReporter =
  /*#__PURE__*/
  function () {
    function NoopAnalyticsReporter() {
      _classCallCheck(this, NoopAnalyticsReporter);
    }

    _createClass(NoopAnalyticsReporter, [{
      key: "report",

      /** @inheritdoc */
      value: function report(event) {
        return true;
      }
      /** @inheritdoc */

    }, {
      key: "setConversionTrackingEnabled",
      value: function setConversionTrackingEnabled(isEnabled) {}
    }]);

    return NoopAnalyticsReporter;
  }();

  /**
   * ModuleData is used as a generic model for Storage.
   * Typically an instance of ModuleData powers a single component.

   * A data model that exposes an event emitter interface.
   * @extends EventEmitter
   */

  var ModuleData =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(ModuleData, _EventEmitter);

    function ModuleData(id) {
      var _this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ModuleData);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ModuleData).call(this));
      _this._id = id;
      _this._history = [];
      _this._data = data;

      _this.set(data);

      return _this;
    }
    /**
     * replaces the currently held data with the given data
     * @param {*} data the data to replace the current data
     */


    _createClass(ModuleData, [{
      key: "set",
      value: function set(data) {
        this.capturePrevious();

        if (data === null || _typeof(data) !== 'object' || Array.isArray(data) || Object.keys(data).length !== Object.keys(this._data).length) {
          this._data = data;
          this.emit('update', this._data);
          return;
        } // check for shallow equality


        for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (this._data[key] !== data[key]) {
            this._data = data;
            this.emit('update', this._data);
            return;
          }
        }
      }
    }, {
      key: "capturePrevious",
      value: function capturePrevious() {
        if (this._history === undefined) {
          this._history = [];
        }

        if (this._history.length + 1 > 5) {
          this._history.shift();
        } // If data is ever undefined, we default to empty object


        this._history.push(JSON.stringify(this._data || {}));
      }
    }, {
      key: "undo",
      value: function undo() {
        var previous = {};

        if (this._previous.length > 0) {
          previous = JSON.parse(this._previous.pop());
        }

        this._data.set(previous);
      }
    }, {
      key: "raw",
      value: function raw() {
        return this._data;
      }
    }]);

    return ModuleData;
  }(EventEmitter);

  /**
   * Storage is a container around application state.
   * It exposes an interface for CRUD operations as well as listening
   * for stateful changes.
   */

  var GlobalStorage =
  /*#__PURE__*/
  function () {
    function GlobalStorage() {
      _classCallCheck(this, GlobalStorage);

      this._moduleDataContainer = {};
      this._futureListeners = {};
    }
    /**
     * Set the data in storage with the given key to the provided data,
     * completely overwriting any existing data.
     * @param {string} key the storage key to set
     * @param {*} data the data to set
     */


    _createClass(GlobalStorage, [{
      key: "set",
      value: function set(key, data) {
        this._initDataContainer(key, data);

        this._moduleDataContainer[key].set(data);
      }
      /**
       * Add all key/value pairs in the provided map to the storage
       * @param {*} data The key/value pairs to set in the storage
       */

    }, {
      key: "setAll",
      value: function setAll(data) {
        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              val = _Object$entries$_i[1];

          if (key === StorageKeys.QUERY) {
            continue;
          }

          this.set(key, val);
        } // Update query last since it triggers a search
        // TODO: move listeners up so all of storage can be updated at the same time


        if (data[StorageKeys.QUERY]) {
          this.set(StorageKeys.QUERY, data[StorageKeys.QUERY]);
        }
      }
    }, {
      key: "_initDataContainer",
      value: function _initDataContainer(key, data) {
        if (key === undefined || key === null || typeof key !== 'string') {
          throw new AnswersStorageError('Invalid storage key provided', key, data);
        }

        if (data === undefined) {
          throw new AnswersStorageError('No data provided', key, data);
        }

        if (this._moduleDataContainer[key] === undefined) {
          this._moduleDataContainer[key] = new ModuleData(key);

          this._applyFutureListeners(key);
        }
      }
    }, {
      key: "getState",
      value: function getState(moduleId) {
        if (this._moduleDataContainer[moduleId]) {
          return this._moduleDataContainer[moduleId].raw();
        }

        return null;
      }
    }, {
      key: "getAll",
      value: function getAll(key) {
        var data = [];

        for (var _i2 = 0, _Object$keys = Object.keys(this._moduleDataContainer); _i2 < _Object$keys.length; _i2++) {
          var dataKey = _Object$keys[_i2];

          if (dataKey.startsWith(key) && this._moduleDataContainer[dataKey].raw() !== null) {
            data.push(this._moduleDataContainer[dataKey].raw());
          }
        }

        return data;
      }
      /**
       * Remove the data in storage with the given key to the provided data,
       * @param {string} key the storage key to delete
       */

    }, {
      key: "delete",
      value: function _delete(key) {
        // Note: Do we need to clean up listeners here?
        delete this._moduleDataContainer[key];
      }
    }, {
      key: "on",
      value: function on(evt, moduleId, cb) {
        var moduleData = this._moduleDataContainer[moduleId];

        if (moduleData === undefined) {
          if (this._futureListeners[moduleId] === undefined) {
            this._futureListeners[moduleId] = [];
          }

          this._futureListeners[moduleId].push({
            event: evt,
            cb: cb
          });

          return;
        }

        this._moduleDataContainer[moduleId].on(evt, cb);

        return this;
      }
    }, {
      key: "off",
      value: function off(evt, moduleId, cb) {
        var moduleData = this._moduleDataContainer[moduleId];

        if (moduleData === undefined) {
          if (this._futureListeners[moduleId] !== undefined) {
            this._futureListeners[moduleId].pop();
          }

          return this;
        }

        this._moduleDataContainer[moduleId].off(evt, cb);

        return this;
      }
    }, {
      key: "_applyFutureListeners",
      value: function _applyFutureListeners(moduleId) {
        var futures = this._futureListeners[moduleId];

        if (!futures) {
          return;
        }

        for (var i = 0; i < futures.length; i++) {
          var future = futures[i];
          this.on(future.event, moduleId, future.cb);
        }

        delete this._futureListeners[moduleId];
      }
    }]);

    return GlobalStorage;
  }();

  /** @module */

  /**
   * Component is an abstraction that encapsulates state, behavior,
   * and view for a particular chunk of functionality on the page.
   *
   * The API exposes event life cycle hooks for when things are rendered,
   * mounted, created, etc.
   */

  var Component =
  /*#__PURE__*/
  function () {
    function Component() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Component);

      this.moduleId = null;
      /**
       * Unique name of this component instance
       * Used to distinguish between other components of the same type
       * @type {String}
       */

      this.name = config.name || this.constructor.type;
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

      this._parentContainer = config.parentContainer || null;
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

      this.core = systemConfig.core || null;
      /**
       * A local reference to the component manager, which contains all of the component classes
       * eligible to be created
       * @type {ComponentManager}
       */

      this.componentManager = systemConfig.componentManager || null;
      /**
       * A local reference to the analytics reporter, used to report events for this component
       * @type {AnalyticsReporter}
       */

      this.analyticsReporter = systemConfig.analyticsReporter || null;
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

      if (this._parentContainer === null) {
        if (typeof config.container === 'string') {
          this._container = DOM.query(config.container) || null;

          if (this._container === null) {
            throw new Error('Cannot find container DOM node: ' + config.container);
          }
        }
      } else {
        this._container = DOM.query(this._parentContainer, config.container); // If we have a parent, and the container is missing from the DOM,
        // we construct the container and append it to the parent

        if (this._container === null) {
          this._container = DOM.createEl('div', {
            "class": config.container.substring(1, config.container.length)
          });
          DOM.append(this._parentContainer, this._container);
        }
      }
      /**
       * A custom class to be applied to {this._container} node
       * @type {string}
       */


      this._className = config["class"] || 'component';
      /**
       * A custom render function to be used instead of using the default renderer
       * @type {Renderer}
       */

      this._render = config.render || null;
      /**
       * A local reference to the default {Renderer} that will be used for rendering the template
       * @type {Renderer}
       */

      this._renderer = systemConfig.renderer || Renderers.Handlebars;
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


      this.onCreate = config.onCreateOverride || this.onCreate || function () {};

      this.onCreate = this.onCreate.bind(this);
      /**
       * The a local reference to the callback that will be invoked when a component is Mounted.
       * @type {function}
       */

      this.onMount = config.onMountOverride || this.onMount || function () {};

      this.onMount = this.onMount.bind(this);
      /**
       * The a local reference to the callback that will be invoked when a components state is updated.
       * @type {function}
       */

      this.onUpdate = config.onUpdateOverride || this.onUpdate || function () {};

      this.onUpdate = this.onUpdate.bind(this);
      /**
       * A user provided onCreate callback
       * @type {function}
       */

      this.userOnCreate = config.onCreate || function () {};
      /**
       * A user provided onMount callback
       * @type {function}
       */


      this.userOnMount = config.onMount || function () {};
      /**
       * A user provided onUpdate callback
       * @type {function}
       */


      this.userOnUpdate = config.onUpdate || function () {};
    }
    /**
     * The template to render
     * @returns {string}
     * @override
     */


    _createClass(Component, [{
      key: "init",
      value: function init(opts) {
        var _this = this;

        try {
          this.setState(opts.data || opts.state || {});
          this.onCreate();
          this.userOnCreate();
        } catch (e) {
          throw new AnswersComponentError('Error initializing component', this.constructor.type, e);
        }

        this._state.on('update', function () {
          try {
            _this.onUpdate();

            _this.userOnUpdate();

            _this.unMount();

            _this.mount();
          } catch (e) {
            throw new AnswersComponentError('Error updating component', _this.constructor.type, e);
          }
        });

        DOM.addClass(this._container, this._className);
        return this;
      }
    }, {
      key: "setState",
      value: function setState(data) {
        var newState = Object.assign({}, {
          _config: this._config
        }, data);

        this._state.set(newState);

        return this;
      }
    }, {
      key: "getState",
      value: function getState(prop) {
        return this._state.get(prop);
      }
    }, {
      key: "hasState",
      value: function hasState(prop) {
        return this._state.has(prop);
      }
    }, {
      key: "transformData",
      value: function transformData(data) {
        return data;
      }
    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        var childComponent = this.componentManager.create(type, Object.assign({
          name: data.name,
          parentContainer: this._container,
          data: data
        }, opts || {}, {
          _parentOpts: this._config
        }));

        this._children.push(childComponent);

        return childComponent;
      }
      /**
       * Unmount and remove this component and its children from the list
       * of active components
       */

    }, {
      key: "remove",
      value: function remove() {
        this._children.forEach(function (c) {
          return c.remove();
        });

        this.componentManager.remove(this);
      }
      /**
       * Set the render method to be used for rendering the component
       * @param {Function} render
       * @return {string}
       */

    }, {
      key: "setRender",
      value: function setRender(render) {
        this._render = render;
        return this;
      }
      /**
       * Set the renderer for the component
       * @param {RendererType} renderer
       */

    }, {
      key: "setRenderer",
      value: function setRenderer(renderer) {
        this._renderer = Renderers[renderer];
        return this;
      }
      /**
       * Sets the template for the component to use when rendering
       * @param {string} template
       */

    }, {
      key: "setTemplate",
      value: function setTemplate(template) {
        this._template = this._renderer.compile(template);
      }
    }, {
      key: "unMount",
      value: function unMount() {
        if (!this._container) {
          return this;
        }

        this._children.forEach(function (child) {
          child.unMount();
        });

        DOM.empty(this._container);

        this._children.forEach(function (c) {
          return c.remove();
        });

        this._children = [];
        this.onUnMount();
      }
    }, {
      key: "mount",
      value: function mount(container) {
        var _this2 = this;

        if (container) {
          this._container = container;
        }

        if (!this._container) {
          return this;
        }

        if (this.beforeMount() === false) {
          return this;
        }

        DOM.append(this._container, this.render(this._state.asJSON())); // Process the DOM to determine if we should create
        // in-memory sub-components for rendering

        var domComponents = DOM.queryAll(this._container, '[data-component]:not([data-is-component-mounted])');
        var data = this.transformData(lodash_clonedeep(this._state.get()));
        domComponents.forEach(function (c) {
          return _this2._createSubcomponent(c, data);
        });

        this._children.forEach(function (child) {
          child.mount();
        }); // Attach analytics hooks as necessary


        if (this.analyticsReporter) {
          var domHooks = DOM.queryAll(this._container, '[data-eventtype]:not([data-is-analytics-attached])');
          domHooks.forEach(this._createAnalyticsHook.bind(this));
        }

        this._isMounted = true;
        this.onMount(this);
        this.userOnMount(this);
        return this;
      }
      /**
       * render the template using the {Renderer} with the current state and template of the component
       * @returns {string}
       */

    }, {
      key: "render",
      value: function render() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._state.get();
        this.beforeRender(); // Temporary fix for passing immutable data to transformData().

        data = this.transformData(lodash_clonedeep(data));
        var html = ''; // Use either the custom render function or the internal renderer
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
        } // We create an HTML Document fragment with the rendered string
        // So that we can query it for processing of sub components


        var el = DOM.create(html);
        this.afterRender();
        return el.innerHTML;
      }
    }, {
      key: "_createSubcomponent",
      value: function _createSubcomponent(domComponent, data) {
        var _this3 = this;

        domComponent.dataset.isComponentMounted = true;
        var dataset = domComponent.dataset;
        var type = dataset.component;
        var prop = dataset.prop;
        var opts = dataset.opts ? JSON.parse(dataset.opts) : {};
        var childData = data[prop] || {};
        opts = _objectSpread({}, opts, {
          container: domComponent
        }); // TODO(billy) Right now, if we provide an array as the data prop,
        // the behavior is to create many components for each item in the array.
        // THAT interface SHOULD change to use a different property that defines
        // whether to array data should be used for a single component or
        // to create many components for each item.
        // Overloading and having this side effect is unintuitive and WRONG

        if (!Array.isArray(childData)) {
          // Rendering a sub component should be within the context,
          // of the node that we processed it from
          this.addChild(childData, type, opts);
          return;
        }

        childData.reverse();
        childData.forEach(function (data) {
          _this3.addChild(data, type, opts);
        });
      }
    }, {
      key: "_createAnalyticsHook",
      value: function _createAnalyticsHook(domComponent) {
        var _this4 = this;

        domComponent.dataset.isAnalyticsAttached = true;
        var dataset = domComponent.dataset;
        var type = dataset.eventtype;
        var label = dataset.eventlabel;
        var middleclick = dataset.middleclick;
        var options = dataset.eventoptions ? JSON.parse(dataset.eventoptions) : {};
        DOM.on(domComponent, 'mousedown', function (e) {
          if (e.button === 0 || middleclick && e.button === 1) {
            var event = new AnalyticsEvent(type, label);
            event.addOptions(_this4._analyticsOptions);
            event.addOptions(options);

            _this4.analyticsReporter.report(event);
          }
        });
      }
      /**
       * onCreate is triggered when the component is constructed
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onCreate",
      value: function onCreate(cb) {}
      /**
       * onUpdate is triggered when the state of the component changes
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onUpdate",
      value: function onUpdate(cb) {}
      /**
       * beforeRender event is triggered before the component is rendered
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "beforeRender",
      value: function beforeRender(cb) {}
      /**
       * afterRender event is triggered after the component is rendered
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "afterRender",
      value: function afterRender(cb) {}
      /**
       * onMount is triggered when the component is appended to the DOM
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onMount",
      value: function onMount(cb) {}
      /**
       * onUnMount is triggered when the component is removed from the DOM
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onUnMount",
      value: function onUnMount(cb) {}
      /**
       * beforeMount is triggered before the component is mounted to the DOM
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "beforeMount",
      value: function beforeMount(cb) {}
      /**
       * onDestroy is triggered when the component is destroyed
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onDestroy",
      value: function onDestroy(cb) {}
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName(config) {
        return 'default';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return false;
      }
    }, {
      key: "type",
      get: function get() {
        return 'Component';
      }
    }]);

    return Component;
  }();

  /** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

  /**
   * ErrorReporter is used for reporting errors to the console and API
   *
   * @implements {ErrorReporterService}
   */

  var ErrorReporter =
  /*#__PURE__*/
  function () {
    function ErrorReporter(config, globalStorage) {
      var _this = this;

      _classCallCheck(this, ErrorReporter);

      /**
       * The apiKey to use for reporting
       * @type {string}
       */
      this.apiKey = config.apiKey;
      /**
       * The experienceKey to use when reporting
       * @type {string}
       */

      this.experienceKey = config.experienceKey;
      /**
       * The answers config version used for api requests
       * @type {string|number}
       */

      this.experienceVersion = config.experienceVersion || 'config1.0';
      /**
       * If true, print entire error objects to the console for inspection
       * @type {boolean}
       */

      this.printVerbose = config.printVerbose;
      /**
       * If true, report the error the server for logging and monitoring
       * @type {boolean}
       */

      this.sendToServer = config.sendToServer;
      /**
       * The global storage instance of the experience
       * @type {GlobalStorage}
       */

      if (this.sendToServer && !globalStorage) {
        throw new AnswersBasicError('Must include globalStorage to send errors to server', 'ErrorReporter');
      }

      this.globalStorage = globalStorage;
      /**
       * The environment of the Answers experience
       * @type {string}
       * @private
       */

      this.environment = config.environment; // Attach reporting listeners to window

      window.addEventListener('error', function (e) {
        return _this.report(e.error);
      });
      window.addEventListener('unhandledrejection', function (e) {
        return _this.report(e.error);
      });
    }
    /**
     * report pretty prints the error to the console, optionally
     * prints the entire error if `printVerbose` is true, and sends the
     * error to the server to be logged if `sendToServer` is true
     * @param {AnswersBaseError} err The error to be reported
     * @returns {AnswersBaseError} The reported error
     */


    _createClass(ErrorReporter, [{
      key: "report",
      value: function report(err) {
        if (!(err instanceof AnswersBaseError) || err.reported) {
          return;
        }

        err.reported = true;
        this.printError(err);

        if (this.sendToServer) {
          var requestConfig = {
            endpoint: '/v2/accounts/me/answers/errors',
            apiKey: this.apiKey,
            version: 20190301,
            environment: this.environment,
            params: {
              'libVersion': LIB_VERSION,
              'experienceVersion': this.experienceVersion,
              'experienceKey': this.experienceKey,
              'error': err.toJson()
            }
          };
          var request = new ApiRequest(requestConfig, this.globalStorage); // TODO(amullings): We should probably change this endpoint to POST,
          // ideally using the beacon API. Stack traces will likely easily hit URL
          // length limits.

          request.get()["catch"](console.err);
        }

        return err;
      }
      /**
       * prints the given error to the browser console
       * @param {AnswersBaseError} err The error to be printed
       */

    }, {
      key: "printError",
      value: function printError(err) {
        if (this.printVerbose) {
          console.error("error: ".concat(err.errorMessage, "\ncode: ").concat(err.errorCode, "\nboundary: ").concat(err.boundary, "\nstack: ").concat(err.stack));
        } else {
          console.error(err.toString());
        }
      }
    }]);

    return ErrorReporter;
  }();

  /** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

  /**
   * @implements {ErrorReporterService}
   */
  var ConsoleErrorReporter =
  /*#__PURE__*/
  function () {
    function ConsoleErrorReporter() {
      _classCallCheck(this, ConsoleErrorReporter);
    }

    _createClass(ConsoleErrorReporter, [{
      key: "report",

      /** @inheritdoc */
      value: function report(err) {
        console.error(err.toString());
      }
    }]);

    return ConsoleErrorReporter;
  }();

  /** @module PersistentStorage */

  var PersistentStorage =
  /*#__PURE__*/
  function () {
    function PersistentStorage() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PersistentStorage);

      /**
       * The current params model
       * @type {SearchParams}
       */
      this._params = new SearchParams(window.location.search.substring(1));
      /**
       * The list of listeners to every storage update
       * @type {function[]}
       */

      this._updateListener = config.updateListener || function () {};
      /**
       * The list of listeners to storage resets
       * @type {function[]}
       */


      this._resetListener = config.resetListener || function () {};

      window.onpopstate = function () {
        _this._params = new SearchParams(window.location.search.substring(1));

        _this._callListener(_this._updateListener, false);

        _this._callListener(_this._resetListener, false);
      };
    }
    /**
     * Insert the given key/value pair into storage
     * @param {string} key The key to insert the data in
     * @param {*} data The data to insert
     * @param {boolean} replace history instead of pushing new state
     */


    _createClass(PersistentStorage, [{
      key: "set",
      value: function set(key, data) {
        var replaceHistory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (typeof key !== 'string') {
          throw new AnswersStorageError('Storage data key must be a string', key, data);
        }

        var newData = data;

        if (typeof data !== 'string') {
          newData = JSON.stringify(data);
        }

        this._params.set(key, newData);

        this._updateHistory(replaceHistory);
      }
      /**
       * Delete the given key from storage
       * @param {string} key The key to delete
       * @param {boolean} replace history instead of pushing new state
       */

    }, {
      key: "delete",
      value: function _delete(key) {
        var replaceHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this._params["delete"](key);

        this._updateHistory(replaceHistory);
      }
    }, {
      key: "_updateHistory",
      value: function _updateHistory() {
        var replaceHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var currentParams = new SearchParams(window.location.search.substring(1));

        if (equivalentParams(this._params, currentParams)) {
          return;
        }

        if (replaceHistory) {
          window.history.replaceState(null, null, "?".concat(this._params.toString()));
        } else {
          window.history.pushState(null, null, "?".concat(this._params.toString()));
        }

        this._callListener(this._updateListener, replaceHistory);
      }
      /**
       * Invoke the given list of callbacks with the current storage data
       * @param {function[]} listeners The callbacks to invoke
       * @param {boolean} replaceHistory Whether to replace the history state in the browser
       * @private
       */

    }, {
      key: "_callListener",
      value: function _callListener(listener, replaceHistory) {
        listener(this.getAll(), this._params.toString(), replaceHistory);
      }
      /**
       * Get all the key/value pairs in storage
       */

    }, {
      key: "getAll",
      value: function getAll() {
        var allParams = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._params.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                val = _step$value[1];

            allParams[key] = val;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return allParams;
      }
      /**
       * Get a value for a given key in storage
       * @param {string} key The unique key to get value for
       */

    }, {
      key: "get",
      value: function get(key) {
        return this._params.get(key);
      }
    }]);

    return PersistentStorage;
  }();

  /** @module SearchConfig */

  var SearchConfig =
  /*#__PURE__*/
  function () {
    function SearchConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SearchConfig);

      /**
       * The max results per search.
       * Also defines the number of results per page, if pagination is enabled
       * @type {number}
       */
      this.limit = config.limit || 20;
      /**
       * The vertical key to use for all searches
       * @type {string}
       */

      this.verticalKey = config.verticalKey || null;
      /**
       * A default search to use on initialization for vertical searchers, when the user has't provided a query
       * @type {string}
       */

      this.defaultInitialSearch = config.defaultInitialSearch;
      this.validate();
      Object.freeze(this);
    }

    _createClass(SearchConfig, [{
      key: "validate",
      value: function validate() {
        if (typeof this.limit !== 'number' || this.limit < 1 || this.limit > 50) {
          throw new AnswersConfigError('Search Limit must be between 1 and 50', 'SearchConfig');
        }
      }
    }]);

    return SearchConfig;
  }();

  /** @module AutoCompleteData */
  var AutoCompleteData =
  /*#__PURE__*/
  function () {
    function AutoCompleteData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AutoCompleteData);

      this.sections = data.sections || [];
      this.queryId = data.queryId || '';
      this.inputIntents = data.inputIntents || [];
      Object.freeze(this);
    }

    _createClass(AutoCompleteData, null, [{
      key: "from",
      value: function from(response) {
        var sections;

        if (response.sections) {
          sections = response.sections.map(function (s) {
            return {
              label: s.label,
              results: s.results.map(function (r) {
                return new AutoCompleteResult(r);
              })
            };
          });
        } else {
          sections = [{
            results: response.results.map(function (r) {
              return new AutoCompleteResult(r);
            })
          }];
        }

        var inputIntents = response.input ? response.input.queryIntents : [];
        return new AutoCompleteData({
          sections: sections,
          queryId: response.queryId,
          inputIntents: inputIntents
        });
      }
    }]);

    return AutoCompleteData;
  }();
  var AutoCompleteResult = function AutoCompleteResult() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AutoCompleteResult);

    this.filter = data.filter || {};
    this.key = data.key || '';
    this.matchedSubstrings = data.matchedSubstrings || [];
    this.value = data.value || '';
    this.shortValue = data.shortValue || this.value;
    this.intents = data.queryIntents || [];
    Object.freeze(this);
  };

  /**
   * A Data Transformer that takes the response object from a AutoComplete request
   * And transforms in to a front-end oriented data structure that our
   * component library and core storage understand.
   *
   * TODO(billy) Create our own front-end data models
   */

  var AutoCompleteDataTransformer =
  /*#__PURE__*/
  function () {
    function AutoCompleteDataTransformer() {
      _classCallCheck(this, AutoCompleteDataTransformer);
    }

    _createClass(AutoCompleteDataTransformer, null, [{
      key: "clean",
      value: function clean(moduleId, data) {
        if (data.sections && data.sections.length === 0) {
          delete data.sections;
        }

        if (data.sections && data.sections.length === 1 && data.sections[0].results.length === 0) {
          delete data.sections;
        }

        return _defineProperty({}, moduleId, data);
      }
    }, {
      key: "universal",
      value: function universal(response) {
        return AutoCompleteData.from(response);
      }
    }, {
      key: "filter",
      value: function filter(response) {
        return AutoCompleteData.from(response);
      }
    }, {
      key: "vertical",
      value: function vertical(response) {
        return AutoCompleteData.from(response);
      }
    }]);

    return AutoCompleteDataTransformer;
  }();

  /** @typedef {import('./autocompleteservice').default} AutoCompleteService */

  /**
   * AutoCompleteApi exposes an interface for network related matters
   * for all the autocomplete endpoints.
   *
   * @implements {AutoCompleteService}
   */

  var AutoCompleteApi =
  /*#__PURE__*/
  function () {
    function AutoCompleteApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var globalStorage = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, AutoCompleteApi);

      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'AutoComplete');
      }

      this._apiKey = config.apiKey;
      /**
       * The Answers Key to use for the request
       * @type {string}
       * @private
       */

      if (!config.experienceKey) {
        throw new AnswersBasicError('Answers Key is required', 'AutoComplete');
      }

      this._experienceKey = config.experienceKey;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = config.version || 20190101 || 20190301;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * The locale to use for the request
       * @type {string}
       * @private
       */

      if (!config.locale) {
        throw new AnswersBasicError('Locale is required', 'AutoComplete');
      }

      this._locale = config.locale;
      /**
       * The global storage instance of the experience
       * @type {GlobalStorage}
       * @private
       */

      if (!globalStorage) {
        throw new AnswersBasicError('Global storage is required', 'AutoComplete');
      }

      this._globalStorage = globalStorage;
      /**
       * The environment of the Answers experience
       * @type {string}
       * @private
       */

      this._environment = config.environment;
      /**
       * The base url for the autocomplete API request
       * @type {string}
       * @private
       */

      this._baseUrl = getCachedLiveApiUrl(this._environment);
    }
    /** @inheritdoc */


    _createClass(AutoCompleteApi, [{
      key: "queryFilter",
      value: function queryFilter(input, config) {
        var requestConfig = {
          endpoint: '/v2/accounts/me/answers/filtersearch',
          apiKey: this._apiKey,
          version: this._version,
          environment: this._environment,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'verticalKey': config.verticalKey,
            'locale': this._locale,
            'search_parameters': JSON.stringify(config.searchParameters)
          }
        };
        var request = new ApiRequest(requestConfig, this._globalStorage);
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.filter(response.response);
        })["catch"](function (error) {
          throw new AnswersEndpointError('Filter search request failed', 'AutoComplete', error);
        });
      }
      /** @inheritdoc */

    }, {
      key: "queryVertical",
      value: function queryVertical(input, verticalKey) {
        var requestConfig = {
          endpoint: '/v2/accounts/me/answers/vertical/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          environment: this._environment,
          baseUrl: this._baseUrl,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'verticalKey': verticalKey,
            'locale': this._locale
          }
        };
        var request = new ApiRequest(requestConfig, this._globalStorage);
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.vertical(response.response);
        })["catch"](function (error) {
          throw new AnswersEndpointError('Vertical search request failed', 'AutoComplete', error);
        });
      }
      /** @inheritdoc */

    }, {
      key: "queryUniversal",
      value: function queryUniversal(queryString) {
        var requestConfig = {
          endpoint: '/v2/accounts/me/answers/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          environment: this._environment,
          baseUrl: this._baseUrl,
          params: {
            'input': queryString,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'locale': this._locale
          }
        };
        var request = new ApiRequest(requestConfig, this._globalStorage);
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.universal(response.response);
        })["catch"](function (error) {
          throw new AnswersEndpointError('Universal search request failed', 'AutoComplete', error);
        });
      }
    }]);

    return AutoCompleteApi;
  }();

  /** @typedef {import('../services/autocompleteservice').default} AutoCompleteService */

  var universalOptions = ['what is yext', 'who is the ceo of yext'];
  var verticalOptions = ['near me', 'in new york', 'available now'];
  /**
   * MockAutoCompleteService serves autocomplete queries with mock data
   *
   * @implements {AutoCompleteService}
   */

  var MockAutoCompleteService =
  /*#__PURE__*/
  function () {
    function MockAutoCompleteService() {
      _classCallCheck(this, MockAutoCompleteService);
    }

    _createClass(MockAutoCompleteService, [{
      key: "queryFilter",

      /** @inheritdoc */
      value: function queryFilter(input, config) {
        // TODO(amullings): Simulate filter search, with sections
        return emptyResults();
      }
      /** @inheritdoc */

    }, {
      key: "queryVertical",
      value: function queryVertical(input, verticalKey) {
        return filterOptions(input, verticalOptions.map(function (opt) {
          return "".concat(verticalKey, " ").concat(opt);
        }).concat(universalOptions));
      }
      /** @inheritdoc */

    }, {
      key: "queryUniversal",
      value: function queryUniversal(input) {
        return filterOptions(input, universalOptions);
      }
    }]);

    return MockAutoCompleteService;
  }();

  function filterOptions(input, options) {
    if (input.length === 0) {
      return emptyResults();
    }

    var lowercase = input.toLowerCase();
    var results = options.filter(function (opt) {
      return opt.includes(lowercase);
    }).map(function (opt) {
      return new AutoCompleteResult({
        value: opt,
        matchedSubstrings: [{
          offset: opt.indexOf(lowercase),
          length: lowercase.length
        }]
      });
    });
    return Promise.resolve(new AutoCompleteData({
      sections: [{
        results: results
      }],
      queryId: randomString()
    }));
  }
  /**
   * @returns {Promise<AutoCompleteData>}
   */


  function emptyResults() {
    return Promise.resolve(new AutoCompleteData({
      sections: [{}],
      queryId: randomString()
    }));
  }
  /**
   * @returns {string}
   */


  function randomString() {
    return Math.random().toString(36).substring(2);
  }

  /** @typedef {import('./questionanswerservice').default} QuestionAnswerService */

  /**
   * QuestionAnswerApi submits questions via the Q&A REST API
   *
   * @implements {QuestionAnswerService}
   */

  var QuestionAnswerApi =
  /*#__PURE__*/
  function () {
    function QuestionAnswerApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var globalStorage = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, QuestionAnswerApi);

      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'QuestionAnswerApi');
      }

      this._apiKey = config.apiKey;
      /**
       * The global storage instance of the experience
       * @type {GlobalStorage}
       * @private
       */

      if (!globalStorage) {
        throw new AnswersBasicError('Global storage is required', 'QuestionAnswerApi');
      }

      this._globalStorage = globalStorage;
      /**
       * The environment of the Answers experience
       * @type {string}
       * @private
       */

      this._environment = config.environment || PRODUCTION;
    }
    /** @inheritdoc */


    _createClass(QuestionAnswerApi, [{
      key: "submitQuestion",
      value: function submitQuestion(question) {
        var requestConfig = {
          baseUrl: getKnowledgeApiUrl(this._environment),
          endpoint: '/v2/accounts/me/createQuestion',
          apiKey: this._apiKey,
          params: {
            'entityId': question.entityId,
            'site': question.site,
            'name': question.name,
            'email': question.email,
            'questionText': question.questionText,
            'questionDescription': question.questionDescription,
            'questionLanguage': question.questionLanguage
          }
        };
        var request = new ApiRequest(requestConfig, this._globalStorage);
        return request.post({
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.json();
        })["catch"](function (error) {
          throw new AnswersEndpointError('Question submit failed', 'QuestionAnswerApi', error);
        });
      }
    }]);

    return QuestionAnswerApi;
  }();

  /** @module MockQuestionAnswerService */

  /** @typedef {import('../services/questionanswerservice').default} QuestionAnswerService */

  /**
   * @implements {QuestionAnswerService}
   */
  var MockQuestionAnswerService =
  /*#__PURE__*/
  function () {
    function MockQuestionAnswerService() {
      _classCallCheck(this, MockQuestionAnswerService);
    }

    _createClass(MockQuestionAnswerService, [{
      key: "submitQuestion",

      /** @inheritdoc */
      value: function submitQuestion(question) {
        // TODO(amullings): Make actual response object once we're using it for
        // something
        return Promise.resolve({});
      }
    }]);

    return MockQuestionAnswerService;
  }();

  /* global fetch */

  /** @typedef {import('../models/section').default} Section */

  /** @typedef {import('../services/searchservice').default} SearchService */

  /**
   * @typedef {Object} ResultData
   * @property {Object} data
   * @property {string } htmlTitle
   */

  /**
   * @callback ResultsModifier
   * @param {ResultData[]} results
   * @returns {ResultData[]}
   */

  /**
   * @callback MockDataConsumer
   * @param {Section[]} sections
   * @returns {Promise<Object>}
   */
  var ARBITRARY_BUSINESS_ID = 919871;
  /**
   * @implements {SearchService}
   */

  var MockSearchService =
  /*#__PURE__*/
  function () {
    function MockSearchService() {
      _classCallCheck(this, MockSearchService);

      /**
       * @type {Promise<string>}
       * @private
       */
      this._getMockDataJson = fetch('https://assets.sitescdn.net/answers/testdata/search/mockdata_v1.json').then(function (resp) {
        return resp.text();
      })["catch"](console.error);
    }
    /** @inheritdoc */


    _createClass(MockSearchService, [{
      key: "verticalSearch",
      value: function verticalSearch(verticalKey, _ref) {
        var input = _ref.input,
            filter = _ref.filter,
            facetFilter = _ref.facetFilter,
            limit = _ref.limit,
            offset = _ref.offset,
            id = _ref.id,
            geolocation = _ref.geolocation,
            isDynamicFiltersEnabled = _ref.isDynamicFiltersEnabled,
            skipSpellCheck = _ref.skipSpellCheck,
            queryTrigger = _ref.queryTrigger;
        return this.useMockData(function (sections) {
          if (input === '') {
            return delayedResponse(constructVerticalResponse({
              results: [],
              appliedQueryFilters: []
            }));
          } // Either find a section with matching ID, or pick one at random


          var section = sections.find(function (verticalModule) {
            return verticalKey === verticalModule['verticalConfigId'];
          });

          if (section == null) {
            section = sections[Math.floor(Math.random() * sections.length)];
          }

          modifyResults(section, getResultsFilterer(input));

          if (offset != null && limit != null) {
            modifyResults(section, function limit(results) {
              return results.slice(offset, offset + limit);
            });
          }

          var resp = constructVerticalResponse(section);
          return delayedResponse(resp);
        });
      }
      /** @inheritdoc */

    }, {
      key: "universalSearch",
      value: function universalSearch(queryString, params) {
        return this.useMockData(function (sections) {
          if (queryString === '') {
            return delayedResponse(constructUniversalResponse([]));
          }

          sections.forEach(function (section) {
            modifyResults(section, getResultsFilterer(queryString));
          });
          sections = sections.filter(function (section) {
            return section.results.length > 0;
          });
          var resp = constructUniversalResponse(sections);
          return delayedResponse(resp);
        });
      }
      /**
       * @param {MockDataConsumer} consumer
       * @returns {Promise<Object>}
       * @private
       */

    }, {
      key: "useMockData",
      value: function useMockData(consumer) {
        return this._getMockDataJson.then(JSON.parse).then(consumer);
      }
    }]);

    return MockSearchService;
  }();

  function getResultsFilterer(queryString) {
    return function (results) {
      return results.filter(function (result) {
        if (result.htmlTitle && result.htmlTitle.toLowerCase().includes(queryString)) {
          return true;
        }

        for (var prop in result.data) {
          var val = result.data[prop];

          if (typeof val === 'string' && val.toLowerCase().includes(queryString)) {
            return true;
          }
        }

        return false;
      });
    };
  }
  /**
   * @param {Section} section
   * @param {ResultsModifier} modifyFn
   */


  function modifyResults(section, modifyFn) {
    section.results = modifyFn(section.results);
  }
  /**
   * @param {Section[]} sections A list of mock section data
   * @returns {Object} A mock AnswersApi response
   */


  function constructUniversalResponse(sections) {
    // TODO(amullings): spellcheck, geo, filters
    // TODO(amullings): Fake encodedState once the SDK uses it
    sections = sections.map(fillSectionFields);
    return {
      meta: {
        uuid: uuidV4(),
        errors: []
      },
      response: {
        businessId: ARBITRARY_BUSINESS_ID,
        modules: sections,
        failedVerticals: [],
        queryId: uuidV4(),
        searchIntents: []
      }
    };
  }
  /**
   * @param {Section} section A mock section data
   * @returns {Object} A mock AnswersApi response
   */


  function constructVerticalResponse(section) {
    // TODO(amullings): spellcheck, geo, filters
    // TODO(amullings): Fake encodedState once the SDK uses it
    section = fillSectionFields(section);
    return {
      meta: {
        uuid: uuidV4(),
        errors: []
      },
      response: Object.assign(section, {
        businessId: ARBITRARY_BUSINESS_ID,
        queryId: uuidV4(),
        searchIntents: []
      })
    };
  }
  /**
   * @param {Section}
   * @returns {Section}
   */


  function fillSectionFields(section) {
    return {
      verticalConfigId: section.verticalConfigId,
      resultsCount: section.results.length,
      encodedState: '',
      results: section.results,
      appliedQueryFilters: section.appliedQueryFilters,
      queryDurationMillis: randomInt(50, 1000),
      facets: section.facets,
      source: section.source
    };
  }
  /**
   * @param {Object} resp
   * @returns {Promise<Object>}
   */


  function delayedResponse(resp) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(resp);
      }, randomInt(250, 1000));
    });
  }
  /**
   * Code-golf-y but legit basic UUID v4 implementation. Not cryptographically secure.
   * From https://gist.github.com/jed/982883
   * @returns {string} A v4-compliant UUID
   */


  function uuidV4() {
    return function b(a) {
      return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
    }();
  }
  /**
   * @param {number} min inclusive
   * @param {number} max exclusive
   * @returns {number} A random integer in the specified range
   */


  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getUrlParams() {
    return new SearchParams(window.location.search.substring(1));
  }
  function getDefaultTabOrder(tabsConfig, urlParams) {
    var tabOrder = []; // Use the ordering from the URL as the primary configuration
    // And then merge it with the local configuration, if provided.

    if (urlParams && urlParams.has('tabOrder')) {
      tabOrder = urlParams.get('tabOrder').split(',');
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = tabsConfig[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var tab = _step.value;
        var verticalKeyOrUrl = tab.verticalKey || tab.url; // Avoid duplicates if config was provided from URL

        if (tabOrder.includes(verticalKeyOrUrl)) {
          continue;
        } // isFirst should always be the first element in the list


        if (tab.isFirst) {
          tabOrder.unshift(verticalKeyOrUrl);
        } else {
          tabOrder.push(verticalKeyOrUrl);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return tabOrder;
  }
  /**
   * mergeTabOrder merges two arrays into one
   * by appending additional tabs to the end of the original array
   * @param {string[]} tabOrder Tab order provided by the server
   * @param {string[]} otherTabOrder Tab order provided by configuration
   * @return {string[]}
   */

  function mergeTabOrder(tabOrder, otherTabOrder, tabs) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = otherTabOrder[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var tabConfig = _step2.value;

        if (tabOrder.includes(tabConfig)) {
          continue;
        } // isFirst should be an override to dynamic tab ordering.


        if (tabs[tabConfig] && tabs[tabConfig].isFirst) {
          tabOrder.unshift(tabConfig);
        } else {
          tabOrder.push(tabConfig);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return tabOrder;
  }
  function getTabOrder(tabsConfig, dataTabOrder) {
    var tabOrder = getDefaultTabOrder(tabsConfig, getUrlParams()); // We want to persist the params from the existing URL to the new
    // URLS we create.

    if (tabOrder && dataTabOrder) {
      tabOrder = mergeTabOrder(dataTabOrder, tabOrder, tabsConfig);
    }

    return tabOrder;
  }

  /**
   * The debounce duration for resize events
   * @type {number}
   */

  var RESIZE_DEBOUNCE = 100;
  /**
   * The breakpoint for mobile
   * @type {number}
   */

  var MOBILE_BREAKPOINT = 767;
  /**
   * Enum options for mobile overflow beahvior
   * @type {Object.<string, string>}
   */

  var MOBILE_OVERFLOW_BEHAVIOR_OPTION = {
    COLLAPSE: 'COLLAPSE',
    INNERSCROLL: 'INNERSCROLL'
  };
  /**
   * The Tab is a model that is used to power the Navigation tabs in the view.
   * It's initialized through the configuration provided to the component.
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(config) {
      _classCallCheck(this, Tab);

      /**
       * The name of the tab that is exposed for the link
       * @type {string}
       */
      this.label = config.label;

      if (typeof this.label !== 'string') {
        throw new AnswersComponentError('label is a required configuration option for tab.', 'NavigationComponent');
      }
      /**
       * The complete URL, including the params
       * @type {string}
       */


      this.url = config.url;

      if (typeof this.url !== 'string') {
        throw new AnswersComponentError('url is a required configuration option for tab.', 'NavigationComponent');
      }
      /**
       * The serverside vertical config id that this is referenced to.
       * By providing this, enables dynamic sorting based on results.
       * @type {string}
       */


      this.verticalKey = config.verticalKey || null;
      /**
       * The base URL used for constructing the URL with params
       * @type {string}
       */

      this.baseUrl = config.url;
      /**
       * Determines whether to show this tab first in the order
       * @type {boolean}
       */

      this.isFirst = config.isFirst || false;
      /**
       * Determines whether or not to apply a special class to the
       * markup to determine if it's an active tab
       * @type {boolean}
       */

      this.isActive = config.isActive || false;
    }
    /**
     * from will construct a map of verticalKey to {Tab} from
     * a configuration file
     * @param {object} tabsConfig the configuration to use
     */


    _createClass(Tab, null, [{
      key: "from",
      value: function from(tabsConfig) {
        var tabs = {}; // Parse the options and build out our tabs and

        for (var i = 0; i < tabsConfig.length; i++) {
          var tab = _objectSpread({}, tabsConfig[i]); // If a tab is configured to be hidden in this component,
          // do not process it


          if (tab.hideInNavigation) {
            continue;
          } // For tabs without config ids, map their URL to the configID
          // to avoid duplication of renders


          if (!tab.verticalKey && !tabs[tab.url]) {
            tab.verticalKey = tab.url;
          }

          tabs[tab.verticalKey] = new Tab(tab);
        }

        return tabs;
      }
    }]);

    return Tab;
  }();
  /**
   * NavigationComponent exposes an interface for building a dynamic
   * navigation that is powered by universal search updates.
   * @extends Component
   */

  var NavigationComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(NavigationComponent, _Component);

    function NavigationComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, NavigationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationComponent).call(this, config, systemConfig));
      /**
       * The label to show on the dropdown menu button when overflow
       * @type {string}
       */

      _this.overflowLabel = config.overflowLabel || 'More';
      /**
       * The optional icon to show on the dropdown menu button when overflow
       * @type {string}
       */

      _this.overflowIcon = config.overflowIcon || 'kabob';
      /**
       * The data storage key
       * @type {string}
       */

      _this.moduleId = StorageKeys.NAVIGATION;
      /**
       * Tabs config from global navigation config
       * @type {Array.<object>}
       * @private
       */

      _this._tabsConfig = config.verticalPages || _this.core.globalStorage.getState(StorageKeys.VERTICAL_PAGES_CONFIG).get();
      /**
       * Unordered map of each tab, keyed by VS verticalKey
       * @type {Object.<String, Object>}
       * @private
       */

      _this._tabs = Tab.from(_this._tabsConfig);
      /**
       * The order of the tabs, parsed from configuration or URL.
       * This gets updated based on the server results
       * @type {Array.<String>} The list of VS verticalKeys
       * @private
       */

      _this._tabOrder = getDefaultTabOrder(_this._tabsConfig, getUrlParams());
      /**
       * Breakpoints at which navigation items move to the "more" dropdown
       * @type {number[]}
       * @private
       */

      _this._navBreakpoints = [];
      /**
       *  The mobile overflow behavior config
       *  @type {string}
       */

      _this._mobileOverflowBehavior = config.mobileOverflowBehavior || MOBILE_OVERFLOW_BEHAVIOR_OPTION.COLLAPSE;
      /**
       *  The ARIA label
       *  @type {string}
       */

      _this._ariaLabel = config.ariaLabel || 'Search Page Navigation';
      _this.checkOutsideClick = _this.checkOutsideClick.bind(_assertThisInitialized(_this));
      _this.checkMobileOverflowBehavior = _this.checkMobileOverflowBehavior.bind(_assertThisInitialized(_this));

      _this.core.globalStorage.on('update', StorageKeys.API_CONTEXT, function () {
        _this.setState(_this.core.globalStorage.getState(StorageKeys.NAVIGATION) || {});
      });

      return _this;
    }

    _createClass(NavigationComponent, [{
      key: "onCreate",
      value: function onCreate() {
        // TODO: Re-rendering and re-mounting the component every tim e the window changes size
        // is not great.
        DOM.on(window, 'resize', this.checkMobileOverflowBehavior);
      }
    }, {
      key: "onDestroy",
      value: function onDestroy() {
        DOM.off(window, 'resize', this.checkMobileOverflowBehavior);
      }
    }, {
      key: "onMount",
      value: function onMount() {
        if (this.shouldCollapse()) {
          this._navBreakpoints = [];
          this.bindOverflowHandlers();
          this.refitNav();
          DOM.on(DOM.query(this._container, '.yxt-Nav-more'), 'click', this.toggleMoreDropdown.bind(this));
        }
      }
    }, {
      key: "onUnMount",
      value: function onUnMount() {
        this.unbindOverflowHandlers();
      }
    }, {
      key: "bindOverflowHandlers",
      value: function bindOverflowHandlers() {
        DOM.on(window, 'click', this.checkOutsideClick);
      }
    }, {
      key: "unbindOverflowHandlers",
      value: function unbindOverflowHandlers() {
        DOM.off(window, 'click', this.checkOutsideClick);
      }
    }, {
      key: "refitNav",
      value: function refitNav() {
        var container = DOM.query(this._container, '.yxt-Nav-container');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        var mainLinks = DOM.query(this._container, '.yxt-Nav-expanded');
        var collapsedLinks = DOM.query(this._container, '.yxt-Nav-modal');
        var navWidth = moreButton.classList.contains('yxt-Nav-item--more') ? container.offsetWidth : container.offsetWidth - moreButton.offsetWidth;
        var numBreakpoints = this._navBreakpoints.length; // sum child widths instead of using parent's width to avoid
        // browser inconsistencies

        var mainLinksWidth = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = mainLinks.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;
            mainLinksWidth += el.offsetWidth;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (mainLinksWidth > navWidth) {
          this._navBreakpoints.push(mainLinksWidth);

          var lastLink = mainLinks.children.item(mainLinks.children.length - 1);

          if (lastLink === null) {
            return;
          }

          this._prepend(collapsedLinks, lastLink);

          if (moreButton.classList.contains('yxt-Nav-item--more')) {
            moreButton.classList.remove('yxt-Nav-item--more');
          }
        } else {
          if (numBreakpoints && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
            var firstLink = collapsedLinks.children.item(0);

            if (firstLink === null) {
              return;
            }

            mainLinks.append(firstLink);

            this._navBreakpoints.pop();

            numBreakpoints--;
          }

          if (collapsedLinks.children.length === 0) {
            moreButton.classList.add('yxt-Nav-item--more');
          }
        }

        this.closeMoreDropdown();

        if (mainLinksWidth > navWidth || numBreakpoints > 0 && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
          this.refitNav();
        }
      }
    }, {
      key: "closeMoreDropdown",
      value: function closeMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.remove('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', false);
      }
    }, {
      key: "openMoreDropdown",
      value: function openMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.add('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', true);
      }
    }, {
      key: "toggleMoreDropdown",
      value: function toggleMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.toggle('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', collapsed.classList.contains('is-active'));
      }
    }, {
      key: "checkOutsideClick",
      value: function checkOutsideClick(e) {
        if (this._closest(e.target, '.yxt-Nav-container')) {
          return;
        }

        this.closeMoreDropdown();
      }
    }, {
      key: "checkMobileOverflowBehavior",
      value: function checkMobileOverflowBehavior() {
        if (this._checkMobileOverflowBehaviorTimer) {
          clearTimeout(this._checkMobileOverflowBehaviorTimer);
        }

        this._checkMobileOverflowBehaviorTimer = setTimeout(this.setState.bind(this), RESIZE_DEBOUNCE);
      }
      /**
       * Since the server data only provides a list of
       * VS verticalKeys, we need to compute and transform
       * the data into the proper format for rendering.
       *
       * @override
       */

    }, {
      key: "setState",
      value: function setState() {
        var _this2 = this;

        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (data.tabOrder !== undefined) {
          this._tabOrder = mergeTabOrder(data.tabOrder, this._tabOrder, this._tabs);
        }

        var params = getUrlParams();
        params.set('tabOrder', this._tabOrder);
        var context = this.core.globalStorage.getState(StorageKeys.API_CONTEXT);

        if (context) {
          params.set(StorageKeys.API_CONTEXT, context);
        }

        var referrerPageUrl = this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);

        if (referrerPageUrl !== null) {
          params.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
        }

        var filteredParams = filterParamsForExperienceLink(params, function (types) {
          return _this2.componentManager.getComponentNamesForComponentTypes(types);
        }); // Since the tab ordering can change based on the server data
        // we need to update each tabs URL to include the order as part of their params.
        // This helps with persisting state across verticals.

        var tabs = [];

        for (var i = 0; i < this._tabOrder.length; i++) {
          var tab = this._tabs[this._tabOrder[i]];

          if (tab !== undefined) {
            tab.url = replaceUrlParams(tab.baseUrl, filteredParams);
            tabs.push(tab);
          }
        }

        return _get(_getPrototypeOf(NavigationComponent.prototype), "setState", this).call(this, {
          tabs: tabs,
          overflowLabel: this.overflowLabel,
          overflowIcon: this.overflowIcon,
          showCollapse: this.shouldCollapse(),
          ariaLabel: this._ariaLabel
        });
      } // TODO (agrow) investigate removing this
      // ParentNode.prepend polyfill
      // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend#Polyfill

    }, {
      key: "_prepend",
      value: function _prepend(collapsedLinks, lastLink) {
        if (!collapsedLinks.hasOwnProperty('prepend')) {
          var docFrag = document.createDocumentFragment();
          var isNode = lastLink instanceof Node;
          docFrag.appendChild(isNode ? lastLink : document.createTextNode(String(lastLink)));
          collapsedLinks.insertBefore(docFrag, collapsedLinks.firstChild);
          return;
        }

        collapsedLinks.prepend(lastLink);
      } // TODO (agrow) investigate removing this
      // Adapted from Element.closest polyfill
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill

    }, {
      key: "_closest",
      value: function _closest(el, closestElSelector) {
        if (!el.hasOwnProperty('closest')) {
          do {
            if (DOM.matches(el, closestElSelector)) return el;
            el = el.parentElement || el.parentNode;
          } while (el !== null && el.nodeType === 1);

          return null;
        }

        return el.closest(closestElSelector);
      }
    }, {
      key: "shouldCollapse",
      value: function shouldCollapse() {
        switch (this._mobileOverflowBehavior) {
          case MOBILE_OVERFLOW_BEHAVIOR_OPTION.COLLAPSE:
            return true;

          case MOBILE_OVERFLOW_BEHAVIOR_OPTION.INNERSCROLL:
            var container = DOM.query(this._container, '.yxt-Nav-container') || this._container;

            var navWidth = container.offsetWidth;
            return navWidth > MOBILE_BREAKPOINT;
        }
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'navigation/navigation';
      }
    }, {
      key: "type",
      get: function get() {
        return 'Navigation';
      }
    }]);

    return NavigationComponent;
  }(Component);

  var IconState = {
    'YEXT': 0,
    'MAGNIFYING_GLASS': 1
  };
  /**
   * SearchComponent exposes an interface in order to create
   * a UI Search experience for vertical and universal search.
   *
   * @extends Component
   */

  var SearchComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SearchComponent, _Component);

    function SearchComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchComponent).call(this, config, systemConfig));
      /**
       * The optional vertical key for vertical search configuration
       * If not provided, auto-complete and search will be based on universal
       * @type {string}
       */

      _this._verticalKey = config.verticalKey || null;
      /**
       * Query submission can optionally be based on a form as context. Note that if
       * a form is not used, the component has no guarantee of WCAG compliance.
       */

      _this._useForm = config.useForm !== undefined ? config.useForm : true;
      /**
       * Query submission is based on a form as context.
       * Optionally provided, otherwise defaults to native form node within container
       * @type {string} CSS selector
       */

      _this._formEl = config.formSelector || 'form';
      /**
       * The input element used for searching and wires up the keyboard interaction
       * Optionally provided.
       * @type {string} CSS selector
       */

      _this._inputEl = config.inputEl || '.js-yext-query';
      /**
       * The title used, provided to the template as a data point
       * Optionally provided. If not provided, no title will be included.
       * @type {string}
       */

      _this.title = config.title;
      /**
       * The label text is used for labeling the input box, also provided to template.
       * Optionally provided
       * @type {string}
       */

      _this.labelText = config.labelText || 'Conduct a search';
      /**
       * The submit text is used for labeling the submit button, also provided to the template.
       * @type {string}
       */

      _this.submitText = config.submitText || 'Submit';
      /**
       * The clear text is used for labeling the clear button, also provided to the template.
       * @type {string}
       */

      _this.clearText = config.clearText || 'Clear';
      /**
       * The submit icon is an icon for the submit button, if provided it will be displayed and the
       * submit text will be used for screen readers.
       * @type {string|null}
       */

      _this.submitIcon = config.submitIcon || null;
      /**
       * The query text to show as the first item for auto complete.
       * Optionally provided
       * @type {string}
       */

      _this.promptHeader = config.promptHeader || null;
      /**
       * Auto focuses the input box if set to true.
       * Optionally provided, defaults to false.
       * @type {boolean}
       */

      _this.autoFocus = config.autoFocus === true;
      /**
       * If true, show an "x" that allows the user to clear the current
       * query
       * @type {boolean}
       */

      _this.clearButton = config.clearButton === undefined ? true : config.clearButton;
      /**
       * When autofocusing on load, optionally open the autocomplete
       * (preset prompts)
       * @type {boolean}
       */

      _this.autocompleteOnLoad = config.autocompleteOnLoad || false;
      /**
       * submitURL will force the search query submission to get
       * redirected to the URL provided.
       * Optional, defaults to null.
       *
       * If no redirectUrl provided, we keep the page as a single page app.
       *
       * @type {boolean}
       */

      _this.redirectUrl = config.redirectUrl || null;
      /**
       * true if there is another search bar present on the page.
       * Twins only update the query, and do not search
       */

      _this._isTwin = config.isTwin;
      /**
       * The search config from ANSWERS.init configuration
       */

      _this._globalSearchConfig = _this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG) || {};
      /**
       * The default initial search query, can be an empty string
       */

      _this._defaultInitialSearch = _this._globalSearchConfig.defaultInitialSearch;
      /**
       * The default options for core search
       * @type {Object}
       */

      _this._defaultSearchOptions = {
        setQueryParams: true,
        resetPagination: !!_this._verticalKey
      };
      /**
       * The query string to use for the input box, provided to template for rendering.
       * Optionally provided
       * @type {string|null}
       */

      _this.query = config.query || _this.core.globalStorage.getState(StorageKeys.QUERY);

      _this.core.globalStorage.on('update', StorageKeys.QUERY, function (q) {
        _this.query = q;

        if (_this.queryEl) {
          _this.queryEl.value = q;
        }

        if (q === null) {
          if (_this._defaultInitialSearch || _this._defaultInitialSearch === '') {
            _this.core.globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.INITIALIZE);

            _this.core.setQuery(_this._defaultInitialSearch);
          }

          return;
        }

        var queryTrigger = _this.core.globalStorage.getState(StorageKeys.QUERY_TRIGGER);

        var resetPagination = _this._verticalKey && queryTrigger !== QueryTriggers.QUERY_PARAMETER && queryTrigger !== QueryTriggers.INITIALIZE;
        var searchOptions = Object.assign({}, _this._defaultSearchOptions, {
          resetPagination: resetPagination
        });

        _this.debouncedSearch(q, searchOptions);
      });
      /**
       * The minimum time allowed in milliseconds between searches to prevent
       * many duplicate searches back-to-back
       * @type {number}
       * @private
       */


      _this._searchCooldown = config.searchCooldown || 300;
      /**
       * When true and "near me" intent is expressed, prompt the user for their geolocation
       * @type {boolean}
       * @private
       */

      _this._promptForLocation = config.promptForLocation === undefined ? true : Boolean(config.promptForLocation);
      /**
       * Controls showing and hiding the search clear button
       */

      _this._showClearButton = _this.clearButton && _this.query;
      /**
       * For vertical search bars, whether or not to allow empty searches.
       * @type {boolean}
       * @private
       */

      _this._allowEmptySearch = !!config.allowEmptySearch;
      /**
       * The name of the child AutoComplete component.
       * @type {string}
       * @private
       */

      _this._autoCompleteName = "".concat(_this.name, ".autocomplete");
      /**
       * Options to pass to the geolocation api.
       * @type {Object}
       */

      _this._geolocationOptions = _objectSpread({
        enableHighAccuracy: false,
        timeout: 1000,
        maximumAge: 300000
      }, config.geolocationOptions);
      /**
       * Options for the geolocation timeout alert.
       * @type {Object}
       */

      _this._geolocationTimeoutAlert = _objectSpread({
        enabled: false,
        message: 'We are unable to determine your location'
      }, config.geolocationTimeoutAlert);
      return _this;
    }

    _createClass(SearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query != null && !this.redirectUrl) {
          this.core.setQuery(this.query);
        }
      }
    }, {
      key: "onMount",
      value: function onMount() {
        this.queryEl = DOM.query(this._container, this._inputEl);

        if (this.autoFocus && !this.query && !this.autocompleteOnLoad) {
          this.focusInputElement();
        }

        this.isUsingYextAnimatedIcon = !this._config.customIconUrl && !this.submitIcon;

        if (this.isUsingYextAnimatedIcon) {
          this.initAnimatedIcon();
        } // Wire up our search handling and auto complete


        this.initSearch(this._formEl);
        this.initAutoComplete(this._inputEl);

        if (this.clearButton) {
          this.initClearButton();
        }

        if (this.autoFocus && !this.query && this.autocompleteOnLoad) {
          this.focusInputElement();
        }
      }
    }, {
      key: "requestIconAnimationFrame",
      value: function requestIconAnimationFrame(iconState) {
        var _this2 = this;

        if (this.iconState === iconState) {
          return;
        }

        this.iconState = iconState;

        if (!this.isRequestingAnimationFrame) {
          this.isRequestingAnimationFrame = true;
          window.requestAnimationFrame(function () {
            _this2.forwardIcon.classList.remove('yxt-SearchBar-AnimatedIcon--paused');

            _this2.reverseIcon.classList.remove('yxt-SearchBar-AnimatedIcon--paused');

            if (_this2.iconState === IconState.MAGNIFYING_GLASS) {
              _this2.forwardIcon.classList.remove('yxt-SearchBar-AnimatedIcon--inactive');

              _this2.reverseIcon.classList.add('yxt-SearchBar-AnimatedIcon--inactive');
            } else if (_this2.iconState === IconState.YEXT) {
              _this2.forwardIcon.classList.add('yxt-SearchBar-AnimatedIcon--inactive');

              _this2.reverseIcon.classList.remove('yxt-SearchBar-AnimatedIcon--inactive');
            }

            _this2.isRequestingAnimationFrame = false;
          });
        }
      }
    }, {
      key: "animateIconToMagnifyingGlass",
      value: function animateIconToMagnifyingGlass() {
        if (this.iconIsFrozen) {
          return;
        }

        this.requestIconAnimationFrame(IconState.MAGNIFYING_GLASS);
      }
    }, {
      key: "animateIconToYext",
      value: function animateIconToYext(e) {
        var focusStillInSearchbar = false;

        if (e && e.relatedTarget) {
          focusStillInSearchbar = this._container.contains(e.relatedTarget);
        }

        if (this.iconIsFrozen || focusStillInSearchbar) {
          return;
        }

        this.requestIconAnimationFrame(IconState.YEXT);
      }
    }, {
      key: "initAnimatedIcon",
      value: function initAnimatedIcon() {
        var _this3 = this;

        this.iconState = this.autoFocus && !this.query ? IconState.MAGNIFYING_GLASS : IconState.YEXT;
        this.forwardIcon = DOM.query(this._container, '.js-yxt-AnimatedForward');
        this.reverseIcon = DOM.query(this._container, '.js-yxt-AnimatedReverse');
        var clickableElementSelectors = ['.js-yext-submit', '.js-yxt-SearchBar-clear'];

        for (var _i = 0, _clickableElementSele = clickableElementSelectors; _i < _clickableElementSele.length; _i++) {
          var selector = _clickableElementSele[_i];
          var clickableEl = DOM.query(this._container, selector);

          if (clickableEl) {
            DOM.on(clickableEl, 'mousedown', function () {
              _this3.iconIsFrozen = true;
            });
            DOM.on(clickableEl, 'mouseup', function () {
              _this3.iconIsFrozen = false;
            });
          }
        }

        DOM.on(this.queryEl, 'focus', function () {
          _this3.animateIconToMagnifyingGlass();
        });
        DOM.on(this._container, 'focusout', function (e) {
          _this3.animateIconToYext(e);
        });
      }
    }, {
      key: "remove",
      value: function remove() {
        this._autocomplete.remove();

        _get(_getPrototypeOf(SearchComponent.prototype), "remove", this).call(this);
      }
    }, {
      key: "initClearButton",
      value: function initClearButton() {
        var _this4 = this;

        var button = DOM.query(this._container, '.js-yxt-SearchBar-clear');
        this._showClearButton = this._showClearButton || this.query;
        button.classList.toggle('yxt-SearchBar--hidden', !this._showClearButton);
        DOM.on(button, 'click', function () {
          _this4.query = '';
          _this4._showClearButton = false;
          button.classList.add('yxt-SearchBar--hidden');
          _this4.queryEl.value = _this4.query;

          _this4.core.persistentStorage.set(StorageKeys.QUERY, _this4.query);

          _this4.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);

          _this4.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);

          _this4.core.setQuery(_this4.query); // Focus the input element after clearing the query, regardless of whether
          // or not the autoFocus option is enabled.
          // NOTE(amullings): This depends heavily on the fact that the re-renders
          // triggered by setState and core.setQuery happen synchronously; if this
          // stops being the case at some point, we'll need an alternative solution


          _this4.focusInputElement();
        });
        DOM.on(this.queryEl, 'input', function (e) {
          var input = e.target.value;
          _this4.query = input;

          if (!_this4._showClearButton && input.length > 0) {
            _this4._showClearButton = true;
            button.classList.remove('yxt-SearchBar--hidden');
          } else if (_this4._showClearButton && input.length === 0) {
            _this4._showClearButton = false;
            button.classList.add('yxt-SearchBar--hidden');
          }
        });
      }
      /**
       * Registers the different event handlers that can issue a search. Note that
       * different handlers are used depending on whether or not a form is used as
       * context.
       *
       * @param {string} formSelector CSS selector to bind our form submit handling to
       */

    }, {
      key: "initSearch",
      value: function initSearch(formSelector) {
        var _this5 = this;

        this._formEl = formSelector;

        this._container.classList.add('yxt-SearchBar-wrapper');

        if (this._useForm) {
          var form = DOM.query(this._container, formSelector);

          if (!form) {
            throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._formEl, '`.');
          }

          DOM.on(form, 'submit', function (e) {
            e.preventDefault(); // TODO(oshi) we should not use the same css selector (this._inputEl)
            // For both the autocomplete AND the search bar input
            // This is incredibly confusing, and also makes the first DOM.query
            // Rely on the order of the input el and autocomplete in the template

            var inputEl = form.querySelector(_this5._inputEl);

            _this5.onQuerySubmit(inputEl);
          });
        } else {
          var inputEl = DOM.query(this._container, this._inputEl);

          if (!inputEl) {
            throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._inputEl, '`.');
          }

          DOM.on(inputEl, 'keydown', function (e) {
            if (e.key === 'Enter') {
              e.preventDefault();

              _this5.onQuerySubmit(inputEl);
            }
          });
          var submitButton = DOM.query(this._container, '.js-yext-submit');
          DOM.on(submitButton, 'click', function (e) {
            e.preventDefault();

            _this5.onQuerySubmit(inputEl);
          });
        }
      }
      /**
       * The handler for a query submission. This method first sets the new query in
       * persistent and global storage, than performs a debounced search.
       *
       * @param {Node} inputEl The input element containing the query.
       */

    }, {
      key: "onQuerySubmit",
      value: function onQuerySubmit(inputEl) {
        var query = inputEl.value;
        this.query = query;
        var params = new SearchParams(window.location.search.substring(1));
        params.set('query', query);
        var context = this.core.globalStorage.getState(StorageKeys.API_CONTEXT);

        if (context) {
          params.set(StorageKeys.API_CONTEXT, context);
        } // If we have a redirectUrl, we want the form to be
        // serialized and submitted.


        if (typeof this.redirectUrl === 'string') {
          if (this._allowEmptySearch || query) {
            window.location.href = this.redirectUrl + '?' + params.toString();
            return false;
          }
        }

        inputEl.blur();
        DOM.query(this._container, '.js-yext-submit').blur(); // TODO: move this into initClearButton

        if (this.clearButton) {
          var button = DOM.query(this._container, '.js-yxt-SearchBar-clear');

          if (this.query) {
            this._showClearButton = true;
            button.classList.remove('yxt-SearchBar--hidden');
          } else {
            this._showClearButton = false;
            button.classList.add('yxt-SearchBar--hidden');
          }
        }

        if (this.isUsingYextAnimatedIcon) {
          this.animateIconToYext();
        }

        this.core.persistentStorage.set(StorageKeys.QUERY, query);
        this.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);
        this.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);
        this.core.setQuery(query);
        this.debouncedSearch(query, this._defaultSearchOptions);
        return false;
      }
      /**
       * A helper method to wire up our auto complete on an input selector
       * @param {string} inputSelector CSS selector to bind our auto complete component to
       */

    }, {
      key: "initAutoComplete",
      value: function initAutoComplete(inputSelector) {
        var _this6 = this;

        this._inputEl = inputSelector;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._autocomplete = this.componentManager.create('AutoComplete', {
          parentContainer: this._container,
          name: this._autoCompleteName,
          container: '.yxt-SearchBar-autocomplete',
          autoFocus: this.autoFocus && !this.autocompleteOnLoad,
          verticalKey: this._verticalKey,
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          inputEl: inputSelector,
          onSubmit: function onSubmit() {
            if (_this6._useForm) {
              DOM.trigger(DOM.query(_this6._container, _this6._formEl), 'submit');
            } else {
              var inputEl = DOM.query(_this6._container, inputSelector);

              _this6.onQuerySubmit(inputEl);
            }
          },
          onChange: function onChange() {
            DOM.trigger(DOM.query(_this6._container, inputSelector), 'input');
          }
        });
      }
      /**
       * Performs a debounced query using the provided string input. Specifically, a new search is not
       * performed if we recently searched, if there's no query for universal search, or if this
       * is a twin searchbar.
       * @param {string} query The string to query against.
       * @param {Object} searchOptions The options to pass for core search
       * @returns {Promise} A promise that will perform the query and update globalStorage accordingly.
       */

    }, {
      key: "debouncedSearch",
      value: function debouncedSearch(query, searchOptions) {
        var _this7 = this;

        if (this._throttled || !query && !this._verticalKey || !query && this._verticalKey && !this._allowEmptySearch || this._isTwin) {
          return;
        }

        this._throttled = true;
        setTimeout(function () {
          _this7._throttled = false;
        }, this._searchCooldown); // If _promptForLocation is enabled, we will compute the query's intent and, from there,
        // determine if it's necessary to prompt the user for their location information. It will
        // be unnecessary if the query does not have near me intent or we already have their location
        // stored.

        if (this._promptForLocation) {
          this.fetchQueryIntents(query).then(function (queryIntents) {
            return queryIntents.includes('NEAR_ME');
          }).then(function (queryHasNearMeIntent) {
            if (queryHasNearMeIntent && !_this7.core.globalStorage.getState(StorageKeys.GEOLOCATION)) {
              return new Promise(function (resolve, reject) {
                return navigator.geolocation.getCurrentPosition(function (position) {
                  _this7.core.globalStorage.set(StorageKeys.GEOLOCATION, {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    radius: position.coords.accuracy
                  });

                  resolve(_this7.search(query, searchOptions));
                }, function () {
                  resolve(_this7.search(query, searchOptions));
                  var _this7$_geolocationTi = _this7._geolocationTimeoutAlert,
                      enabled = _this7$_geolocationTi.enabled,
                      message = _this7$_geolocationTi.message;

                  if (enabled) {
                    window.alert(message);
                  }
                }, _this7._geolocationOptions);
              });
            } else {
              return _this7.search(query, searchOptions);
            }
          });
        } else {
          return this.search(query, searchOptions);
        }
      }
      /**
       * Performs a query using the provided string input.
       * @param {string} query The string to query against.
       * @param {Object} searchOptions The options to pass for core search
       * @returns {Promise} A promise that will perform the query and update globalStorage accordingly.
       */

    }, {
      key: "search",
      value: function search(query, searchOptions) {
        if (this._verticalKey) {
          this.core.verticalSearch(this._config.verticalKey, searchOptions, {
            input: query
          });
        } else {
          // NOTE(billy) Temporary hack for DEMO
          // Remove me after the demo
          var nav = this.componentManager.getActiveComponent('Navigation');

          if (nav) {
            var tabs = nav.getState('tabs');
            var urls = {};

            if (tabs && Array.isArray(tabs)) {
              for (var i = 0; i < tabs.length; i++) {
                var params = new SearchParams(tabs[i].url.split('?')[1]);
                params.set('query', query);
                var url = tabs[i].baseUrl;

                if (params.toString().length > 0) {
                  url += '?' + params.toString();
                }

                urls[tabs[i].configId] = url;
              }
            }

            return this.core.search(query, urls, searchOptions);
          }

          return this.core.search(query, undefined, searchOptions);
        }
      }
      /**
       * A helper method that computes the intents of the provided query. If the query was entered
       * manually into the search bar or selected via autocomplete, its intents will have been stored
       * already in globalStorage. Otherwise, a new API call will have to be issued to determine
       * intent.
       * @param {string} query The query whose intent is needed.
       * @returns {Promise} A promise containing the intents of the query.
       */

    }, {
      key: "fetchQueryIntents",
      value: function fetchQueryIntents(query) {
        var autocompleteData = this.core.globalStorage.getState("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(this._autoCompleteName));

        if (!autocompleteData) {
          var autocompleteRequest = this._verticalKey ? this.core.autoCompleteVertical(query, this._autoCompleteName, this._verticalKey) : this.core.autoCompleteUniversal(query, this._autoCompleteName);
          return autocompleteRequest.then(function (data) {
            return data.inputIntents;
          });
        } else {
          // There are two alternatives to consider here. The user could have selected the query
          // as an autocomplete option or manually input it themselves. If the former, use the intents
          // of the corresponding autocomplete option. If the latter, use the inputIntents of the
          // autocompleteData.
          var results = autocompleteData.sections.flatMap(function (section) {
            return section.results;
          });
          var matchingResult = results.find(function (result) {
            return result.value === query;
          });
          var queryIntents = matchingResult ? matchingResult.intents : autocompleteData.inputIntents;
          return Promise.resolve(queryIntents);
        }
      }
      /**
       * A helper method that constructs the meta information needed by the SEARCH_CLEAR_BUTTON
       * analytics event.
       */

    }, {
      key: "eventOptions",
      value: function eventOptions() {
        var queryId = this.core.globalStorage.getState(StorageKeys.QUERY_ID);
        var options = Object.assign({}, queryId && {
          queryId: queryId
        }, this._verticalKey && {
          verticalKey: this._verticalKey
        });
        return JSON.stringify(options);
      }
    }, {
      key: "setState",
      value: function setState(data) {
        var forwardIconOpts = {
          iconName: 'yext_animated_forward',
          classNames: 'Icon--lg',
          complexContentsParams: {
            iconPrefix: this.name
          }
        };
        var reverseIconOpts = {
          iconName: 'yext_animated_reverse',
          classNames: 'Icon--lg',
          complexContentsParams: {
            iconPrefix: this.name
          }
        };
        return _get(_getPrototypeOf(SearchComponent.prototype), "setState", this).call(this, Object.assign({
          title: this.title,
          labelText: this.labelText,
          submitIcon: this.submitIcon,
          submitText: this.submitText,
          clearText: this.clearText,
          showClearButton: this._showClearButton,
          query: this.query || '',
          eventOptions: this.eventOptions(),
          iconId: this.name,
          forwardIconOpts: forwardIconOpts,
          reverseIconOpts: reverseIconOpts,
          autoFocus: this.autoFocus && !this.query,
          useForm: this._useForm
        }, data));
      }
    }, {
      key: "focusInputElement",
      value: function focusInputElement() {
        DOM.query(this._container, this._inputEl).focus();
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName() {
        return 'search/search';
      }
    }, {
      key: "type",
      get: function get() {
        return 'SearchBar';
      }
    }]);

    return SearchComponent;
  }(Component);

  /** @module SearchParamsParser */
  function buildSearchParameters(searchParameterConfigs) {
    var searchParameters = {
      sectioned: false,
      fields: []
    };

    if (searchParameterConfigs === undefined) {
      return searchParameters;
    }

    if (searchParameterConfigs.sectioned) {
      searchParameters.sectioned = searchParameterConfigs.sectioned;
    }

    searchParameters.fields = buildFields(searchParameterConfigs.fields);
    return searchParameters;
  }

  function buildFields(fieldConfigs) {
    if (fieldConfigs === undefined) {
      return [];
    }

    return fieldConfigs.map(function (fc) {
      return _objectSpread({
        fetchEntities: false
      }, fc);
    });
  }

  /**
   * FilterSearchComponent is used for autocomplete using the FilterSearch backend.
   * It'll allow you to pick pre-set filters that are setup on the backend within
   * a vertical search context.
   *
   * @extends Component
   */

  var FilterSearchComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FilterSearchComponent, _Component);

    function FilterSearchComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterSearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterSearchComponent).call(this, config, systemConfig));
      /**
       * The vertical key for vertical search configuration
       * @type {string}
       */

      _this._verticalKey = config.verticalKey || null;
      /**
       * If true, store the filter value but do not search on change
       * @type {boolean}
       * @private
       */

      _this._storeOnChange = config.storeOnChange || false;
      /**
       * Query submission is based on a form as context.
       * Optionally provided, otherwise defaults to native form node within container
       * @type {string} CSS selector
       */

      _this._formEl = config.formSelector || 'form';
      /**
       * The input element used for searching and wires up the keyboard interaction
       * Optionally provided.
       * @type {string} CSS selector
       */

      _this._inputEl = config.inputEl || '.js-yext-query';
      /**
       * The title used, provided to the template as a data point
       * Optionally provided.
       * @type {string}
       */

      _this.title = config.title;
      /**
       * The search text used for labeling the input box, also provided to template.
       * Optionally provided
       * @type {string}
       */

      _this.searchText = config.searchText || 'What are you interested in?';
      /**
       * The query text to show as the first item for auto complete.
       * Optionally provided
       * @type {string}
       */

      _this.promptHeader = config.promptHeader || null;
      /**
       * Auto focuses the input box if set to true.
       * Optionally provided, defaults to false.
       * @type {boolean}
       */

      _this.autoFocus = config.autoFocus === true;
      /**
       * submitURL will force the search query submission to get
       * redirected to the URL provided.
       * Optional, defaults to null.
       *
       * If no redirectUrl provided, we keep the page as a single page app.
       *
       * @type {boolean}
       */

      _this.redirectUrl = config.redirectUrl || null;
      /**
       * The query string to use for the input box, provided to template for rendering.
       * Optionally provided
       * @type {string}
       */

      _this.query = config.query || _this.core.globalStorage.getState("".concat(StorageKeys.QUERY, ".").concat(_this.name)) || '';

      _this.core.globalStorage.on('update', "".concat(StorageKeys.QUERY, ".").concat(_this.name), function (q) {
        _this.query = q;

        _this.search();
      });
      /**
       * The filter string to use for the provided query
       * Optionally provided
       * @type {string}
       */


      _this.filter = config.filter || _this.core.globalStorage.getState("".concat(StorageKeys.FILTER, ".").concat(_this.name));

      if (typeof _this.filter === 'string') {
        try {
          _this.filter = JSON.parse(_this.filter);
        } catch (e) {}
      }

      if (_this.query && _this.filter) {
        var filterNode = _this._buildFilterNode(_this.query, _this.filter);

        _this.core.setStaticFilterNodes(_this.name, filterNode);
      }

      _this.searchParameters = buildSearchParameters(config.searchParameters);
      return _this;
    }

    _createClass(FilterSearchComponent, [{
      key: "onCreate",
      // TODO(oshi): SPR-1925 check that it is safe to remove this, it runs an extra search
      // For no obvious reasons
      value: function onCreate() {
        if (this.query && this.filter) {
          this.search();
        }
      }
    }, {
      key: "onMount",
      value: function onMount() {
        if (this.autoCompleteComponent) {
          this.autoCompleteComponent.remove();
        } // Wire up our search handling and auto complete


        this.initAutoComplete(this._inputEl);

        if (this.autoFocus === true && this.query.length === 0) {
          DOM.query(this._container, this._inputEl).focus();
        }
      }
    }, {
      key: "_removeFilterNode",
      value: function _removeFilterNode() {
        this.query = '';
        this.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(this.name), this.query);
        this.core.clearStaticFilterNode(this.name);
        this.setState();
      }
    }, {
      key: "_buildFilterNode",
      value: function _buildFilterNode(query, filter) {
        var _this2 = this;

        return FilterNodeFactory.from({
          filter: filter,
          metadata: {
            fieldName: this.title,
            displayValue: "".concat(query)
          },
          remove: function remove() {
            return _this2._removeFilterNode();
          }
        });
      }
      /**
       * A helper method to wire up our auto complete on an input selector
       * @param {string} inputSelector CSS selector to bind our auto complete component to
       */

    }, {
      key: "initAutoComplete",
      value: function initAutoComplete(inputSelector) {
        var _this3 = this;

        this._inputEl = inputSelector;
        this.autoCompleteComponent = this.componentManager.create('AutoComplete', {
          parentContainer: this._container,
          name: "".concat(this.name, ".autocomplete"),
          isFilterSearch: true,
          container: '.yxt-SearchBar-autocomplete',
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          inputEl: inputSelector,
          verticalKey: this._verticalKey,
          searchParameters: this.searchParameters,
          onSubmit: function onSubmit(query, filter) {
            _this3.filter = Filter.fromResponse(filter);

            var filterNode = _this3._buildFilterNode(query, _this3.filter);

            var params = new SearchParams(window.location.search.substring(1));
            params.set("".concat(_this3.name, ".query"), query);
            params.set("".concat(_this3.name, ".filter"), filter); // If we have a redirectUrl, we want the params to be
            // serialized and submitted.

            if (typeof _this3.redirectUrl === 'string') {
              window.location.href = _this3.redirectUrl + '?' + params.toString();
              return false;
            } // save the filter to storage for the next search


            _this3.query = query;

            _this3.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(_this3.name), _this3.query);

            _this3.core.persistentStorage.set("".concat(StorageKeys.FILTER, ".").concat(_this3.name), filterNode.getFilter());

            _this3.core.setStaticFilterNodes(_this3.name, filterNode);

            _this3.search();
          }
        });
      }
      /**
       * Perform the vertical search with all saved filters and query,
       * optionally redirecting based on config. Uses window.setTimeout to allow
       * other filters to finish rendering before searching.
       */

    }, {
      key: "search",
      value: function search() {
        var _this4 = this;

        if (this._storeOnChange) {
          return;
        }

        window.setTimeout(function () {
          _this4.core.verticalSearch(_this4._config.verticalKey, {
            setQueryParams: true,
            resetPagination: true,
            useFacets: true
          });
        });
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(FilterSearchComponent.prototype), "setState", this).call(this, Object.assign({
          title: this.title,
          searchText: this.searchText,
          query: this.query
        }, data));
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName() {
        return 'search/filtersearch';
      }
    }, {
      key: "type",
      get: function get() {
        return ComponentTypes.FILTER_SEARCH;
      }
    }]);

    return FilterSearchComponent;
  }(Component);

  var Keys = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESCAPE: 27,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DELETE: 46,
    DOWN: 40,
    LEFT_OS_KEY: 91,
    RIGHT_OS_KEY: 92,
    SELECT_KEY: 93
  };

  var AutoCompleteComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(AutoCompleteComponent, _Component);

    function AutoCompleteComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AutoCompleteComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoCompleteComponent).call(this, opts, systemOpts));
      /**
       * Whether autocomplete is simple or filter
       * @type {boolean}
       */

      _this.isFilterSearch = opts.isFilterSearch || false;
      /**
       * The `verticalKey` of the vertical search to use for auto-complete
       * @type {string}
       */

      _this._verticalKey = opts.verticalKey || null;
      /**
       * A reference to the input el selector for auto complete
       * @type {string}
       */

      _this._inputEl = opts.inputEl || '.js-yext-query';
      /**
       * A selector for the autocomplete elementes
       * @type {string}
       */

      _this._autocompleteEls = opts.autoCompleteEls || '.js-yext-autocomplete-option';
      /**
       * An internal reference for the data-storage to listen for updates from the server
       * @type {string}
       */

      _this.moduleId = "".concat(StorageKeys.AUTOCOMPLETE, ".").concat(_this.name);
      /**
       * An internal reference to the input value when typing.
       * We use this for resetting the state of the input value when other interactions (e.g. result navigation)
       * change based on interactions. For instance, hitting escape should reset the value to the original typed query.
       * @type {string}
       */

      _this._originalQuery = opts.originalQuery || '';
      /**
       * Used for keyboard navigation through results.
       * An internal reference to the current section we're navigating in.
       * @type {number}
       */

      _this._sectionIndex = 0;
      /**
       * Used for keyboard navigation through results.
       * An internal reference to the current result index we're navigating on.
       * @type {number}
       */

      _this._resultIndex = -1;
      /**
       * The query text to show as the first item for auto complete.
       * Optionally provided
       * @type {string}
       */

      _this.promptHeader = opts.promptHeader || null;
      /**
       * Whether the input is autocomatically focused or not
       * @type {boolean}
       */

      _this._autoFocus = opts.autoFocus || false;
      /**
       * Callback invoked when the `Enter` key is pressed on auto complete.
       */

      _this._onSubmit = opts.onSubmit || function () {};
      /**
       * Callback invoked when keys are used to navigate through the auto complete. Note that this is
       * not called when either the `Enter` key is pressed or the mouse is used to select an
       * autocomplete option.
       */


      _this._onChange = opts.onChange || function () {};

      _this._searchParameters = opts.searchParameters || null;
      return _this;
    }
    /**
     * The aliased used by the component manager for creation.
     */


    _createClass(AutoCompleteComponent, [{
      key: "setState",

      /**
       * setState is overridden so that we can provide additional meta data
       * to the template (e.g. the sectionIndex and resultIndex), since
       * those are client-interaction specific values and aren't returned from the server.
       */
      value: function setState(data) {
        if (!this.isQueryInputFocused()) {
          this._sectionIndex = 0;
          this._resultIndex = -1;
          data = {};
        }

        _get(_getPrototypeOf(AutoCompleteComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          hasResults: this.hasResults(data),
          sectionIndex: this._sectionIndex,
          resultIndex: this._resultIndex,
          promptHeader: this._originalQuery.length === 0 ? this.promptHeader : null
        }));
      }
    }, {
      key: "isQueryInputFocused",
      value: function isQueryInputFocused() {
        return document.activeElement && document.activeElement.className.includes(this._inputEl.substring(1));
      }
      /**
       * updateState is a helper to apply the current state with new client-state.
       */

    }, {
      key: "updateState",
      value: function updateState() {
        this.setState(this._state.get());
      }
      /**
       * onCreate is triggered when the component is constructed from the framework.
       * Once we're initalized, we wire up all of our user interactions
       */

    }, {
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        // Use the context of the parent component to find the input node.
        var queryInput = DOM.query(this._parentContainer, this._inputEl);

        if (!queryInput) {
          throw new Error('Could not initialize AutoComplete. Can not find {HTMLElement} `', this._inputEl, '`.');
        } // Disable the native autocomplete, autocorrect & spellcheck


        DOM.attributes(queryInput, {
          autocomplete: 'off',
          autocorrect: 'off',
          spellcheck: 'false'
        }); // The user exits the input, so we want to reset the state and close
        // the auto complete
        // TODO(jdelerme): Close logic to be moved to parent

        DOM.on(document, 'click', function (e) {
          if (DOM.matches(e.target, '.js-yxt-AutoComplete-wrapper *') || DOM.matches(e.target, _this2._inputEl)) {
            return;
          }

          _this2.close();
        }); // When a user focuses the input, we should populate the autocomplete based
        // on the current value

        DOM.on(queryInput, 'focus', function () {
          _this2.reset();

          _this2.autoComplete(queryInput.value);
        }); // Allow the user to navigate between the results using the keyboard

        DOM.on(queryInput, 'keydown', function (e) {
          _this2.handleNavigateResults(e.keyCode, e);

          _this2.handleSubmitResult(e.keyCode, queryInput.value, e);
        });

        if (this._autoFocus) {
          DOM.once(queryInput, 'click', function () {
            _this2.autoComplete(queryInput.value);
          });
        } // Allow the user to select a result with the mouse


        DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', function (evt, target) {
          var data = target.dataset;
          var val = data["short"];

          _this2.updateQuery(val);

          _this2._onSubmit(val, data.filter);

          _this2.close();
        }); // When the user is typing in the input, process the auto complete.

        DOM.on(queryInput, 'keyup', function (e) {
          _this2.handleTyping(e.keyCode, queryInput.value, e);
        });
      }
      /**
       * close will hide the auto complete results and reset the state.
       */

    }, {
      key: "close",
      value: function close() {
        this.setState({});
        this.reset();
      }
      /**
       * resets the client state to their original values and triggers
       * a template-rerender via updateState
       */

    }, {
      key: "reset",
      value: function reset() {
        this._sectionIndex = 0;
        this._resultIndex = -1;
        this.updateState();
      }
      /**
       * Helper method to update the input text
       * @param {string} optValue Option value provided.
       * If no value provided, we'll try to find it based on the selection indexes.
       */

    }, {
      key: "updateQuery",
      value: function updateQuery(optValue) {
        // Only want to update the query string if theres a value.
        // If one is provided, great.
        // Otherwise, lets try to find it from the current selection in the results.
        if (optValue === undefined) {
          var sections = this._state.get('sections');

          var results = sections[this._sectionIndex].results;
          optValue = results[this._resultIndex].shortValue;
        }

        var queryEl = DOM.query(this._parentContainer, this._inputEl);
        queryEl.value = optValue;
      }
    }, {
      key: "handleTyping",
      value: function handleTyping(key, value, e) {
        var ignoredKeys = [Keys.DOWN, Keys.UP, Keys.CTRL, Keys.ALT, Keys.SHIFT, Keys.LEFT, Keys.RIGHT, Keys.LEFT_OS_KEY, Keys.RIGHT_OS_KEY, Keys.ENTER, Keys.TAB, Keys.SELECT_KEY];

        if (ignoredKeys.indexOf(key) > -1) {
          return;
        } // User escapes out of auto complete, so we reset it to the original input


        if (key === Keys.ESCAPE) {
          this.updateQuery(this._originalQuery);
          this.close();
          return;
        } // Update the original value based on the user input


        this._originalQuery = value;
        this.reset();
        this.autoComplete(value);
      }
    }, {
      key: "autoComplete",
      value: function autoComplete(input) {
        if (this.isFilterSearch) {
          this.core.autoCompleteFilter(input, {
            namespace: this.name,
            verticalKey: this._verticalKey,
            searchParameters: this._searchParameters
          });
        } else if (this._verticalKey) {
          this.core.autoCompleteVertical(input, this.name, this._verticalKey);
        } else {
          this.core.autoCompleteUniversal(input, this.name);
        }
      }
      /**
       * returns true if we have results in any section
       * @returns boolean
       */

    }, {
      key: "hasResults",
      value: function hasResults(data) {
        if (!data) {
          return false;
        }

        var sections = data['sections'];

        if (!sections) {
          return false;
        }

        for (var i = 0; i < sections.length; i++) {
          var _data = sections[i];

          if (!_data) {
            continue;
          }

          var results = _data.results;

          if (!results) {
            continue;
          }

          if (results.length > 0) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "handleNavigateResults",
      value: function handleNavigateResults(key, e) {
        var sections = this._state.get('sections');

        if (sections === undefined || sections.length <= 0) {
          return;
        } // Tabbing out or enter should close the auto complete.


        if (key === Keys.TAB) {
          this.close();
          return;
        }

        var results = sections[this._sectionIndex].results;

        if (key === Keys.UP) {
          e.preventDefault();

          if (this._resultIndex <= 0) {
            if (this._sectionIndex > 0) {
              this._sectionIndex--;
              this._resultIndex = sections[this._sectionIndex].results.length - 1;
            } else {
              this.updateQuery(this._originalQuery);
              this.reset();
              return;
            }

            this.updateQuery();
            this.updateState();
            return;
          }

          this._resultIndex--;
          this.updateState();
          this.updateQuery();
          return;
        }

        if (key === Keys.DOWN) {
          e.preventDefault();

          if (this._resultIndex >= results.length - 1) {
            if (this._sectionIndex < sections.length - 1) {
              this._sectionIndex++;
              this._resultIndex = 0;
            }

            this.updateQuery();
            this.updateState();
            return;
          }

          this._resultIndex++;
          this.updateQuery();
          this.updateState();
        }
      }
    }, {
      key: "handleSubmitResult",
      value: function handleSubmitResult(key, value, e) {
        var sections = this._state.get('sections');

        if (sections === undefined || sections.length <= 0) {
          if (this.isFilterSearch) {
            this.autoComplete(value);
          }

          return;
        } // submit the search on enter


        if (key === Keys.ENTER) {
          e.preventDefault();

          if (this.isFilterSearch && this._resultIndex === -1) {
            return;
          }

          var filter = '';

          if (this._sectionIndex >= 0 && this._resultIndex >= 0) {
            filter = JSON.stringify(sections[this._sectionIndex].results[this._resultIndex].filter);
          }

          this.updateQuery(value);
          this._originalQuery = value;

          this._onSubmit(value, filter);

          this.close();
        } else {
          this._onChange();
        }
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'search/autocomplete';
      }
    }, {
      key: "type",
      get: function get() {
        return 'AutoComplete';
      }
    }]);

    return AutoCompleteComponent;
  }(Component);

  var DEFAULT_CONFIG = {
    suggestionHelpText: 'Did you mean:'
  };
  /**
   * SpellCheckComponent will support displaying suggestion, autocorrect and combined(maybe in the future)
   * provided from spelling correction.
   *
   * @extends Component
   */

  var SpellCheckComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SpellCheckComponent, _Component);

    function SpellCheckComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SpellCheckComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SpellCheckComponent).call(this, _objectSpread({}, DEFAULT_CONFIG, {}, config), systemConfig));
      _this.moduleId = StorageKeys.SPELL_CHECK;
      return _this;
    }

    _createClass(SpellCheckComponent, [{
      key: "onCreate",
      value: function onCreate() {
        this.core.persistentStorage["delete"]('skipSpellCheck', true);
        this.core.persistentStorage["delete"](StorageKeys.QUERY_TRIGGER, true);
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        return _get(_getPrototypeOf(SpellCheckComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          shouldShow: data.correctedQuery !== undefined,
          correctedQueryUrl: this._buildRedirectQueryUrl(data.correctedQuery, data.type),
          helpText: this._getHelpText(data.type)
        }, val));
      }
    }, {
      key: "_buildRedirectQueryUrl",
      value: function _buildRedirectQueryUrl(query, type) {
        if (query === undefined) {
          return '';
        }

        var params = new SearchParams(window.location.search.substring(1));
        params.set('query', query.value);
        params.set('skipSpellCheck', true);
        params.set(StorageKeys.QUERY_TRIGGER, type.toLowerCase());
        return '?' + params.toString();
      }
    }, {
      key: "_getHelpText",
      value: function _getHelpText(type) {
        switch (type) {
          case 'SUGGEST':
            return this._config.suggestionHelpText;

          default:
            return '';
        }
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'search/spellcheck';
      }
    }, {
      key: "type",
      get: function get() {
        return 'SpellCheck';
      }
    }]);

    return SpellCheckComponent;
  }(Component);

  var DEFAULT_CONFIG$1 = {
    ipAccuracyHelpText: 'based on your internet address',
    deviceAccuracyHelpText: 'based on your device',
    updateLocationButtonText: 'Update your location'
  };
  /**
   * LocationBiasComponent will show the user where is used for location bias and allow user to
   * improve accuracy with HTML5 geolocation.
   *
   * @extends Component
   */

  var LocationBiasComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(LocationBiasComponent, _Component);

    function LocationBiasComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, LocationBiasComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationBiasComponent).call(this, _objectSpread({}, DEFAULT_CONFIG$1, {}, config), systemConfig));
      /**
       * Recieve updates from storage based on this index
       * @type {StorageKey}
       */

      _this.moduleId = StorageKeys.LOCATION_BIAS;
      /**
       * The optional vertical key for vertical search configuration
       * If not provided, when location updated,
       * a universal search will be triggered.
       * @type {string}
       */
      // TODO: Remove config.verticalKey

      _this._verticalKey = config.verticalKey || _this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey || null;
      /**
       * The element used for updating location
       * Optionally provided.
       * @type {string} CSS selector
       */

      _this._updateLocationEl = config.updateLocationEl || '.js-locationBias-update-location';
      _this._locationDisplayName = '';
      _this._accuracy = '';
      _this._allowUpdate = true;
      /**
       * Options to pass to the geolocation api.
       * @type {Object}
       */

      _this._geolocationOptions = _objectSpread({
        enableHighAccuracy: false,
        timeout: 6000,
        maximumAge: 300000
      }, config.geolocationOptions);
      /**
       * Options for the geolocation timeout alert.
       * @type {Object}
       */

      _this._geolocationTimeoutAlert = _objectSpread({
        enabled: false,
        message: 'We are unable to determine your location'
      }, config.geolocationTimeoutAlert);
      return _this;
    }

    _createClass(LocationBiasComponent, [{
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (!this._allowUpdate) {
          return;
        }

        this._disableLocationUpdateIfGeolocationDenied();

        DOM.on(this._updateLocationEl, 'click', function (e) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this2.core.globalStorage.set(StorageKeys.GEOLOCATION, {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                radius: position.coords.accuracy
              });

              _this2._doSearch();
            }, function (err) {
              return _this2._handleGeolocationError(err);
            }, _this2._geolocationOptions);
          } // TODO: Should we throw error or warning here if no geolocation?

        });
      }
    }, {
      key: "_handleGeolocationError",
      value: function _handleGeolocationError(err) {
        if (err.code === 1) {
          this._disableLocationUpdate();
        }

        var _this$_geolocationTim = this._geolocationTimeoutAlert,
            enabled = _this$_geolocationTim.enabled,
            message = _this$_geolocationTim.message;

        if (enabled) {
          window.alert(message);
        }
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        this._locationDisplayName = data.locationDisplayName;
        this._accuracy = data.accuracy;
        return _get(_getPrototypeOf(LocationBiasComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          locationDisplayName: this._getLocationDisplayName(data),
          accuracyText: this._getAccuracyHelpText(data.accuracy),
          isPreciseLocation: data.accuracy === 'DEVICE' && this._allowUpdate,
          isUnknownLocation: data.accuracy === 'UNKNOWN',
          shouldShow: data.accuracy !== undefined,
          allowUpdate: this._allowUpdate
        }, val));
      }
    }, {
      key: "_getLocationDisplayName",
      value: function _getLocationDisplayName(data) {
        if (data.accuracy === 'UNKNOWN') {
          return 'Unknown Location';
        }

        return data.locationDisplayName;
      }
    }, {
      key: "_getAccuracyHelpText",
      value: function _getAccuracyHelpText(accuracy) {
        switch (accuracy) {
          case 'IP':
            return this._config.ipAccuracyHelpText;

          case 'DEVICE':
            return this._config.deviceAccuracyHelpText;

          default:
            return '';
        }
      }
    }, {
      key: "_doSearch",
      value: function _doSearch() {
        if (this._verticalKey) {
          this.core.verticalSearch(this._config.verticalKey, {
            setQueryParams: true,
            useFacets: true
          });
        } else {
          var query = this.core.globalStorage.getState(StorageKeys.QUERY);
          this.core.search(query);
        }
      }
    }, {
      key: "_disableLocationUpdateIfGeolocationDenied",
      value: function _disableLocationUpdateIfGeolocationDenied() {
        var _this3 = this;

        if ('permissions' in navigator) {
          navigator.permissions.query({
            name: 'geolocation'
          }).then(function (result) {
            if (result.state === 'denied') {
              _this3._disableLocationUpdate();
            }
          });
        }
      }
    }, {
      key: "_disableLocationUpdate",
      value: function _disableLocationUpdate() {
        this.core.globalStorage["delete"](StorageKeys.GEOLOCATION);
        this._allowUpdate = false;
        this.setState({
          locationDisplayName: this._locationDisplayName,
          accuracy: this._accuracy
        });
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'search/locationbias';
      }
    }, {
      key: "type",
      get: function get() {
        return 'LocationBias';
      }
    }]);

    return LocationBiasComponent;
  }(Component);

  var FilterBoxConfig =
  /*#__PURE__*/
  function () {
    function FilterBoxConfig(config) {
      _classCallCheck(this, FilterBoxConfig);

      /**
       * The title to display above the controls
       * @type {string}
       */
      this.title = config.title || 'Filters';
      /**
       * If true, display the number of results next to each facet
       * @type {boolean}
       */

      this.showCount = config.showCount === undefined ? true : config.showCount;
      /**
       * If true, trigger a search on each change to a filter
       * @type {boolean}
       */

      this.searchOnChange = config.searchOnChange || false;
      /**
       * If true, show a button to reset for each facet group
       * @type {boolean}
       */

      this.resetFilter = config.resetFilter || false;
      /**
       * The label to show for the reset button
       * @type {string}
       */

      this.resetFilterLabel = config.resetFilterLabel || 'reset';
      /**
       * If true, show a "reset all" button to reset all facets
       * @type {boolean}
       */

      this.resetFilters = config.resetFilters === undefined ? !config.searchOnChange : config.resetFilters;
      /**
       * The label to show for the "reset all" button
       * @type {string}
       */

      this.resetFiltersLabel = config.resetFiltersLabel || 'reset all';
      /**
       * The max number of facets to show before displaying "show more"/"show less"
       * @type {number}
       */

      this.showMoreLimit = config.showMoreLimit || 5;
      /**
       * The label to show for displaying more facets
       * @type {string}
       */

      this.showMoreLabel = config.showMoreLabel || 'show more';
      /**
       * The label to show for displaying less facets
       * @type {string}
       */

      this.showLessLabel = config.showLessLabel || 'show less';
      /**
       * If true, enable hiding excess facets in each group with a "show more"/"show less" button
       * @type {boolean}
       */

      this.showMore = config.showMore === undefined ? true : config.showMore;
      /**
       * If true, allow expanding and collapsing each group of facets
       * @type {boolean}
       */

      this.expand = config.expand === undefined ? true : config.expand;
      /**
       * If true, display the number of currently applied filters when collapsed
       * @type {boolean}
       */

      this.showNumberApplied = config.showNumberApplied === undefined ? true : config.showNumberApplied;
      /**
       * Text to display on the apply button
       * @type {string}
       */

      this.applyLabel = config.applyLabel || 'apply';
      /**
       * The selector of the apply button
       * @type {string}
       */

      this.applyButtonSelector = config.applyButtonSelector || '.js-yext-filterbox-apply';
      /**
       * The list of filters to display and control, ignoring empty sections
       * @type {object[]}
       */

      this.filterConfigs = config.filters.filter(function (f) {
        return f.options.length;
      });
      /**
       * Whether or not this filterbox contains facets. This affects the
       * the way the filters are used in the search
       * @type {boolean}
       */

      this.isDynamic = config.isDynamic || false;
      this.validate();
    }

    _createClass(FilterBoxConfig, [{
      key: "validate",
      value: function validate() {}
    }]);

    return FilterBoxConfig;
  }();
  /**
   * Renders a set of filters, and searches with them when applied.
   * Multiple FilterBox components will AND together but will not share state.
   * @extends Component
   */


  var FilterBoxComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FilterBoxComponent, _Component);

    function FilterBoxComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterBoxComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterBoxComponent).call(this, config, systemConfig));
      _this.config = new FilterBoxConfig(config);

      if (!config.filters || !(config.filters instanceof Array)) {
        throw new AnswersComponentError('FilterBox requires filters to be provided as an array', 'FilterBox');
      }
      /**
       * The vertical key for the search
       * @type {string}
       * @private
       */


      _this._verticalKey = config.verticalKey || null;
      /**
       * The components created for each filter config
       * @type {Component[]}
       * @private
       */

      _this._filterComponents = [];
      /**
       * The current state of the filter components in the box
       * @type {Array<FilterNode>}
       * @private
       */

      _this._filterNodes = [];

      _this.config.filterConfigs.forEach(function (config) {
        var hideCount = config.showCount === undefined ? !_this.config.showCount : !config.showCount;

        if (hideCount) {
          config.options.forEach(function (option) {
            option.countLabel = null;
          });
        }
      });

      return _this;
    }

    _createClass(FilterBoxComponent, [{
      key: "setState",
      value: function setState(data) {
        _get(_getPrototypeOf(FilterBoxComponent.prototype), "setState", this).call(this, Object.assign({}, data, this.config, {
          showReset: this.config.resetFilters,
          resetLabel: this.config.resetFiltersLabel,
          showApplyButton: !this.config.searchOnChange
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (this._filterComponents.length) {
          this._filterComponents.forEach(function (c) {
            return c.remove();
          });

          this._filterComponents = [];
          this._filterNodes = [];
        } // Initialize filters from configs


        var _loop = function _loop(i) {
          var config = _this2.config.filterConfigs[i];

          var component = _this2.componentManager.create(config.type, _objectSpread({}, _this2.config, {
            parentContainer: _this2._container,
            name: "".concat(_this2.name, ".filter").concat(i),
            storeOnChange: false,
            container: ".js-yext-filterbox-filter".concat(i),
            showReset: _this2.config.resetFilter,
            resetLabel: _this2.config.resetFilterLabel,
            isDynamic: _this2.config.isDynamic
          }, config, {
            showExpand: config.showExpand === undefined ? _this2.config.expand : config.showExpand,
            onChange: function onChange(filterNode, alwaysSaveFilterNodes, blockSearchOnChange) {
              var _saveFilterNodes = _this2.config.searchOnChange || alwaysSaveFilterNodes;

              var _searchOnChange = _this2.config.searchOnChange && !blockSearchOnChange;

              _this2.onFilterNodeChange(i, filterNode, _saveFilterNodes, _searchOnChange);

              config.onChange && config.onChange();
            }
          }));

          if (_this2.config.isDynamic && typeof component.floatSelected === 'function') {
            component.floatSelected();
          }

          component.mount();

          _this2._filterComponents.push(component);

          _this2._filterNodes[i] = component.getFilterNode();
        };

        for (var i = 0; i < this.config.filterConfigs.length; i++) {
          _loop(i);
        }

        this._saveFilterNodesToStorage(this.config.isDynamic); // Initialize apply button


        if (!this.config.searchOnChange) {
          var button = DOM.query(this._container, this.config.applyButtonSelector);

          if (button) {
            DOM.on(button, 'click', function () {
              _this2._saveFilterNodesToStorage(false);

              _this2._search();
            });
          }
        } // Initialize reset button


        var resetEl = DOM.query(this._container, '.js-yxt-FilterBox-reset');

        if (resetEl) {
          DOM.on(resetEl, 'click', this.resetFilters.bind(this));
        }
      }
    }, {
      key: "_getValidFilterNodes",
      value: function _getValidFilterNodes() {
        return this._filterNodes.filter(function (fn) {
          return fn.getFilter().getFilterKey();
        });
      }
    }, {
      key: "resetFilters",
      value: function resetFilters() {
        this._filterComponents.forEach(function (filter) {
          return filter.clearOptions();
        });
      }
      /**
       * Handle changes to child filter components
       * @param {number} index The index of the changed filter
       * @param {FilterNode} filterNode The new filter node
       * @param {boolean} saveFilterNodes Whether to save filternodes to storage
       * @param {boolean} searchOnChange Whether to conduct a search
       */

    }, {
      key: "onFilterNodeChange",
      value: function onFilterNodeChange(index, filterNode, saveFilterNodes, searchOnChange) {
        this._filterNodes[index] = filterNode;

        if (saveFilterNodes || searchOnChange) {
          this._saveFilterNodesToStorage(false);
        }

        if (searchOnChange) {
          this._search();
        }
      }
      /**
       * Remove all filter components along with this component
       */

    }, {
      key: "remove",
      value: function remove() {
        this._filterComponents.forEach(function (c) {
          return c.remove();
        });

        _get(_getPrototypeOf(FilterBoxComponent.prototype), "remove", this).call(this);
      }
      /**
       * Save current filters to storage to be used in the next search
       * @private
       * @param {boolean} replaceHistory Whether we replace or push a new history
       *                                 state for the associated changes
       */

    }, {
      key: "_saveFilterNodesToStorage",
      value: function _saveFilterNodesToStorage(replaceHistory) {
        if (this.config.isDynamic) {
          var availableFieldIds = this.config.filterConfigs.map(function (config) {
            return config.fieldId;
          });
          this.core.setFacetFilterNodes(availableFieldIds, this._getValidFilterNodes());

          this._filterComponents.forEach(function (fc) {
            return fc.saveSelectedToPersistentStorage(replaceHistory);
          });
        } else {
          this._filterComponents.forEach(function (fc) {
            return fc.apply(replaceHistory);
          });
        }
      }
      /**
       * Trigger a search with all filters in storage
       */

    }, {
      key: "_search",
      value: function _search() {
        this.core.verticalSearch(this._config.verticalKey, {
          setQueryParams: true,
          resetPagination: true,
          useFacets: true
        });
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'filters/filterbox';
      }
    }, {
      key: "type",
      get: function get() {
        return ComponentTypes.FILTER_BOX;
      }
    }]);

    return FilterBoxComponent;
  }(Component);

  var jsLevenshtein = (function()
  {
    function _min(d0, d1, d2, bx, ay)
    {
      return d0 < d1 || d2 < d1
          ? d0 > d2
              ? d2 + 1
              : d0 + 1
          : bx === ay
              ? d1
              : d1 + 1;
    }

    return function(a, b)
    {
      if (a === b) {
        return 0;
      }

      if (a.length > b.length) {
        var tmp = a;
        a = b;
        b = tmp;
      }

      var la = a.length;
      var lb = b.length;

      while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
        la--;
        lb--;
      }

      var offset = 0;

      while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
        offset++;
      }

      la -= offset;
      lb -= offset;

      if (la === 0 || lb < 3) {
        return lb;
      }

      var x = 0;
      var y;
      var d0;
      var d1;
      var d2;
      var d3;
      var dd;
      var dy;
      var ay;
      var bx0;
      var bx1;
      var bx2;
      var bx3;

      var vector = [];

      for (y = 0; y < la; y++) {
        vector.push(y + 1);
        vector.push(a.charCodeAt(offset + y));
      }

      var len = vector.length - 1;

      for (; x < lb - 3;) {
        bx0 = b.charCodeAt(offset + (d0 = x));
        bx1 = b.charCodeAt(offset + (d1 = x + 1));
        bx2 = b.charCodeAt(offset + (d2 = x + 2));
        bx3 = b.charCodeAt(offset + (d3 = x + 3));
        dd = (x += 4);
        for (y = 0; y < len; y += 2) {
          dy = vector[y];
          ay = vector[y + 1];
          d0 = _min(dy, d0, d1, bx0, ay);
          d1 = _min(d0, d1, d2, bx1, ay);
          d2 = _min(d1, d2, d3, bx2, ay);
          dd = _min(d2, d3, dd, bx3, ay);
          vector[y] = dd;
          d3 = d2;
          d2 = d1;
          d1 = d0;
          d0 = dy;
        }
      }

      for (; x < lb;) {
        bx0 = b.charCodeAt(offset + (d0 = x));
        dd = ++x;
        for (y = 0; y < len; y += 2) {
          dy = vector[y];
          vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
          d0 = dy;
        }
      }

      return dd;
    };
  })();

  /**
   * Groups an array into an object using a given key and value function, and an initial object
   * to add to. By default the key and value functions will not perform any transformations
   * on the array elements.
   * @param {Array<any>} arr array to be grouped
   * @param {Function} keyFunc function that evaluates what key to give an array element.
   * @param {Function} valueFunc function that evaluates what value to give an array element.
   * @param {Object} intitial the initial object to add to, defaulting to {}
   * @returns {Object}
   */
  function groupArray(arr, keyFunc, valueFunc, initial) {
    keyFunc = keyFunc || function (key) {
      return key;
    };

    valueFunc = valueFunc || function (value) {
      return value;
    };

    return arr.reduce(function (groups, element, idx) {
      var key = keyFunc(element, idx);
      var value = valueFunc(element, idx);

      if (!groups[key]) {
        groups[key] = [value];
      } else {
        groups[key].push(value);
      }

      return groups;
    }, initial || {});
  }

  /**
   * The currently supported controls
   * @type {string[]}
   */

  var SUPPORTED_CONTROLS = ['singleoption', 'multioption'];
  /**
   * The currently supported option types.
   */

  var OptionTypes = {
    RADIUS_FILTER: 'RADIUS_FILTER',
    STATIC_FILTER: 'STATIC_FILTER'
  };

  var FilterOptionsConfig =
  /*#__PURE__*/
  function () {
    function FilterOptionsConfig(config) {
      _classCallCheck(this, FilterOptionsConfig);

      /**
       * The type of control to display
       * @type {string}
       */
      this.control = config.control;
      /**
       * The type of filtering to apply to the options.
       * @type {string}
       */

      this.optionType = config.optionType || OptionTypes.STATIC_FILTER;
      /**
       * The list of filter options to display with checked status
       * @type {object[]}
       */

      this.options = config.options.map(function (o) {
        return _objectSpread({}, o);
      });
      /**
       * The label to be used in the legend
       * @type {string}
       */

      this.label = config.label || 'Filters';
      /**
       * The callback function to call when changed
       * @type {function}
       */

      this.onChange = config.onChange || function () {};
      /**
       * If true, stores the filter to global and persistent storage on each change
       * @type {boolean}
       */


      this.storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;
      /**
       * If true, show a button to reset the current filter selection
       * @type {boolean}
       */

      this.showReset = config.showReset && this.options.length > 0;
      /**
       * Whether this FilterOptions is part of a dynamic FilterBox component (i.e. is
       * part of a FacetsComponent). Used to correctly set the {@link FilterType} of
       * the created {@link FilterNode}.
       * @type {boolean}
       */

      this.isDynamic = config.isDynamic;
      /**
       * The label to show for the reset button
       * @type {string}
       */

      this.resetLabel = config.resetLabel || 'reset';
      /**
       * The max number of facets to show before displaying "show more"/"show less"
       * @type {number}
       */

      this.showMoreLimit = config.showMoreLimit || 5;
      /**
       * The label to show for displaying more facets
       * @type {string}
       */

      this.showMoreLabel = config.showMoreLabel || 'show more';
      /**
       * The label to show for displaying less facets
       * @type {string}
       */

      this.showLessLabel = config.showLessLabel || 'show less';
      /**
       * If true, enable hiding excess facets with a "show more"/"show less" button
       * @type {boolean}
       */

      this.showMore = config.showMore === undefined ? true : config.showMore;
      this.showMore = this.showMore && this.options.length > this.showMoreLimit;
      /**
       * If true, allow expanding and collapsing the group of facets
       * @type {boolean}
       */

      this.showExpand = config.showExpand === undefined ? true : config.showExpand;
      /**
       * If true, display the number of currently applied filters when collapsed
       * @type {boolean}
       */

      this.showNumberApplied = config.showNumberApplied === undefined ? true : config.showNumberApplied;
      /**
       * The selector used for options in the template
       * @type {string}
       */

      this.optionSelector = config.optionSelector || '.js-yext-filter-option';
      /**
       * The placeholder text used for the filter option search input
       * @type {string}
       */

      this.placeholderText = config.placeholderText || 'Search here...';
      /**
       * If true, display the filter option search input
       * @type {boolean}
       */

      this.searchable = config.searchable || false;
      /**
       * The form label text for the search input
       * @type {boolean}
       */

      this.searchLabelText = config.searchLabelText || 'Search for a filter option';
      this.validate();

      if (typeof config.previousOptions === 'string') {
        try {
          config.previousOptions = JSON.parse(config.previousOptions);
        } catch (e) {
          config.previousOptions = [];
        }
      } // previousOptions will be null if there were no previousOptions in persistentStorage


      var previousOptions = config.previousOptions;
      this.options = this.setSelectedOptions(this.options, previousOptions);
    }
    /**
     * Sets selected options on load based on options stored in persistent storage and options with selected: true.
     * If no previous options were stored in persistentStorage, default to options marked
     * as selected. If multiple options are marked as selected for 'singleoption', only the
     * first should be selected.
     * @param {Array<Object>} options
     * @param {Array<string>} previousOptions
     * @returns {Array<Object>}
     */


    _createClass(FilterOptionsConfig, [{
      key: "setSelectedOptions",
      value: function setSelectedOptions(options, previousOptions) {
        if (previousOptions && this.control === 'singleoption') {
          var hasSeenSelectedOption = false;
          return options.map(function (o) {
            if (previousOptions.includes(o.label) && !hasSeenSelectedOption) {
              hasSeenSelectedOption = true;
              return _objectSpread({}, o, {
                selected: true
              });
            }

            return _objectSpread({}, o, {
              selected: false
            });
          });
        } else if (previousOptions && this.control === 'multioption') {
          return options.map(function (o) {
            return _objectSpread({}, o, {
              selected: previousOptions.includes(o.label)
            });
          });
        } else if (this.control === 'singleoption') {
          var _hasSeenSelectedOption = false;
          return options.map(function (o) {
            if (_hasSeenSelectedOption) {
              return _objectSpread({}, o, {
                selected: false
              });
            } else if (o.selected) {
              _hasSeenSelectedOption = true;
            }

            return _objectSpread({}, o);
          });
        }

        return options;
      }
    }, {
      key: "getInitialSelectedCount",
      value: function getInitialSelectedCount() {
        return this.options.reduce(function (numSelected, option) {
          return option.selected ? numSelected + 1 : numSelected;
        }, 0);
      }
    }, {
      key: "validate",
      value: function validate() {
        if (!this.control || !SUPPORTED_CONTROLS.includes(this.control)) {
          throw new AnswersComponentError('FilterOptions requires a valid "control" to be provided', 'FilterOptions');
        }

        if (!(this.optionType in OptionTypes)) {
          var possibleTypes = Object.values(OptionTypes).join(', ');
          throw new AnswersComponentError("Invalid optionType ".concat(this.optionType, " passed to FilterOptions. Expected one of ").concat(possibleTypes), 'FilterOptions');
        }

        if (this.optionType === OptionTypes.RADIUS_FILTER && this.control !== 'singleoption') {
          throw new AnswersComponentError("FilterOptions of optionType ".concat(OptionTypes.RADIUS_FILTER, " requires control \"singleoption\""), 'FilterOptions');
        }

        if (!this.options) {
          throw new AnswersComponentError('FilterOptions component requires options to be provided', 'FilterOptions');
        }
      }
    }]);

    return FilterOptionsConfig;
  }();
  /**
   * Renders a set of options, each one representing a filter in a search.
   */


  var FilterOptionsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FilterOptionsComponent, _Component);

    function FilterOptionsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterOptionsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterOptionsComponent).call(this, config, systemConfig));

      var previousOptions = _this.core.globalStorage.getState(_this.name);

      _this.core.globalStorage["delete"](_this.name);
      /**
       * The component config
       * @type {FilterOptionsConfig}
       */


      _this.config = new FilterOptionsConfig(_objectSpread({
        previousOptions: previousOptions
      }, config));

      var selectedCount = _this.config.getInitialSelectedCount();
      /**
       * True if the option list is expanded and visible
       * @type {boolean}
       */


      _this.expanded = _this.config.showExpand ? selectedCount > 0 : true;
      /**
       * Whether the current is currently showing more or less. If true, is currently "show more".
       * Only used if config.showMore is true.
       * @type {boolean}
       */

      _this.showMoreState = _this.config.showMore;

      if (_this.config.storeOnChange) {
        _this.apply(_this.config.isDynamic);
      }

      return _this;
    }

    _createClass(FilterOptionsComponent, [{
      key: "setState",
      value: function setState(data) {
        var selectedCount = this._getSelectedCount();

        _get(_getPrototypeOf(FilterOptionsComponent.prototype), "setState", this).call(this, Object.assign({}, data, _objectSpread({
          name: this.name.toLowerCase()
        }, this.config, {
          showMoreState: this.showMoreState,
          displayReset: this.config.showReset && selectedCount > 0,
          expanded: this.expanded,
          selectedCount: selectedCount,
          isSingleOption: this.config.control === 'singleoption'
        })));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        DOM.delegate(DOM.query(this._container, ".yxt-FilterOptions-options"), this.config.optionSelector, 'click', function (event) {
          var selectedCountEl = DOM.query(_this2._container, '.js-yxt-FilterOptions-selectedCount');

          if (selectedCountEl) {
            selectedCountEl.innerText = _this2._getSelectedCount();
          }

          _this2._updateOption(parseInt(event.target.dataset.index), event.target.checked);
        }); // Initialize reset element if present

        var resetEl = DOM.query(this._container, '.js-yxt-FilterOptions-reset');

        if (resetEl) {
          DOM.on(resetEl, 'click', this.clearOptions.bind(this));
        } // show more/less button


        if (this.config.showMore) {
          var showLessEl = DOM.query(this._container, '.js-yxt-FilterOptions-showLess');
          var showMoreEl = DOM.query(this._container, '.js-yxt-FilterOptions-showMore');
          var optionsOverLimitEls = DOM.queryAll(this._container, '.js-yxt-FilterOptions-aboveShowMoreLimit');
          DOM.on(showLessEl, 'click', function () {
            _this2.showMoreState = true;
            showLessEl.classList.add('hidden');
            showMoreEl.classList.remove('hidden');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = optionsOverLimitEls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var optionEl = _step.value;
                optionEl.classList.add('hidden');
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          });
          DOM.on(showMoreEl, 'click', function () {
            _this2.showMoreState = false;
            showLessEl.classList.remove('hidden');
            showMoreEl.classList.add('hidden');
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = optionsOverLimitEls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var optionEl = _step2.value;
                optionEl.classList.remove('hidden');
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          });
        } // searchable option list


        if (this.config.searchable) {
          var clearSearchEl = DOM.query(this._container, '.js-yxt-FilterOptions-clearSearch');
          var searchInputEl = DOM.query(this._container, '.js-yxt-FilterOptions-filter');
          var filterOptionEls = DOM.queryAll(this._container, '.js-yxt-FilterOptions-option');
          var filterContainerEl = DOM.query(this._container, '.js-yxt-FilterOptions-container'); // On clearSearchEl click, clear search input

          if (clearSearchEl && searchInputEl) {
            DOM.on(clearSearchEl, 'click', function (event) {
              searchInputEl.value = '';
              DOM.trigger(searchInputEl, 'input');
              searchInputEl.focus();
            });
          }

          DOM.on(searchInputEl, 'input', function (event) {
            var filter = event.target.value;

            if (!filter) {
              filterContainerEl.classList.remove('yxt-FilterOptions-container--searching');
              clearSearchEl.classList.add('js-hidden');
            } else {
              filterContainerEl.classList.add('yxt-FilterOptions-container--searching');
              clearSearchEl.classList.remove('js-hidden');
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = filterOptionEls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var filterOption = _step3.value;
                var labelEl = DOM.query(filterOption, '.js-yxt-FilterOptions-optionLabel--name');
                var labelText = labelEl.textContent || labelEl.innerText || '';
                labelText = labelText.trim();

                if (!filter) {
                  filterOption.classList.remove('hiddenSearch');
                  filterOption.classList.remove('displaySearch');
                  labelEl.innerHTML = labelText;
                } else {
                  var matchedSubstring = _this2._getMatchedSubstring(labelText.toLowerCase(), filter.toLowerCase());

                  if (matchedSubstring) {
                    filterOption.classList.add('displaySearch');
                    filterOption.classList.remove('hiddenSearch');
                    labelEl.innerHTML = new HighlightedValue({
                      value: labelText,
                      matchedSubstrings: [matchedSubstring]
                    }).get();
                  } else {
                    filterOption.classList.add('hiddenSearch');
                    filterOption.classList.remove('displaySearch');
                    labelEl.innerHTML = labelText;
                  }
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          });
        } // expand button


        if (this.config.showExpand) {
          var legend = DOM.query(this._container, '.yxt-FilterOptions-clickableLegend');
          DOM.on(legend, 'mousedown', function (click) {
            if (click.button === 0) {
              _this2.expanded = !_this2.expanded;

              _this2.setState();
            }
          });
          DOM.on(legend, 'keydown', function (key) {
            if (key.key === ' ' || key.key === 'Enter') {
              key.preventDefault();
              _this2.expanded = !_this2.expanded;

              _this2.setState();
            }
          });
        }
      }
      /**
       * Returns the count of currently selected options
       * @returns {number}
       * @private
       */

    }, {
      key: "_getSelectedCount",
      value: function _getSelectedCount() {
        return this.config.options.filter(function (o) {
          return o.selected;
        }).length;
      }
      /**
       * Toggles the display of the reset element based on the selected count. If there are selected
       * options, show the reset element, if not, hide it.
       *
       * Note: this will not have any effect if the reset element isn't in the DOM.
       *
       * @returns {number}
       * @private
       */

    }, {
      key: "_toggleReset",
      value: function _toggleReset() {
        var resetEl = DOM.query(this._container, '.js-yxt-FilterOptions-reset');

        var selectedCount = this._getSelectedCount();

        if (selectedCount > 0) {
          resetEl.classList.remove('js-hidden');
        } else if (!resetEl.classList.contains('js-hidden')) {
          resetEl.classList.add('js-hidden');
        }
      }
      /**
       * Finds the length and offset of the substring where (string) option and
       * (string) filter "match".
       *
       * "Match" is defined as an exact text match, or -- if the length of filter
       * is greater than the `minFilterSizeForLevenshtein` -- a "match" can occur if
       * any "n length" substring of option (where "n length" is the length of filter)
       * is within the `maxLevenshteinDistance` levenshtein distance of the filter.
       *
       * Note: this is case sensitive.
       *
       * @returns {Object}
       * @private
       */

    }, {
      key: "_getMatchedSubstring",
      value: function _getMatchedSubstring(option, filter) {
        var offset = this._getOffset(option, filter);

        if (offset > -1) {
          return {
            length: filter.length,
            offset: offset
          };
        }

        var minFilterSizeForLevenshtein = 3;
        var maxLevenshteinDistance = 1;

        if (filter.length > minFilterSizeForLevenshtein) {
          // Break option into X filter.length size substrings
          var substrings = [];

          for (var start = 0; start <= option.length - filter.length; start++) {
            substrings.push(option.substr(start, filter.length));
          } // Find the substring that is the closest in levenshtein distance to filter


          var minLevDist = filter.length;
          var minLevSubstring = filter;

          for (var _i = 0, _substrings = substrings; _i < _substrings.length; _i++) {
            var substring = _substrings[_i];

            var levDist = this._calcLevenshteinDistance(substring, filter);

            if (levDist < minLevDist) {
              minLevDist = levDist;
              minLevSubstring = substring;
            }
          } // If the min levenshtein distance is below the max, count it as a match


          if (minLevDist <= maxLevenshteinDistance) {
            offset = this._getOffset(option, minLevSubstring);

            if (offset > -1) {
              return {
                length: filter.length,
                offset: offset
              };
            }
          }
        }
      }
      /**
       * Calculate the levenshtein distance for two strings
       * @returns {number}
       * @private
       */

    }, {
      key: "_calcLevenshteinDistance",
      value: function _calcLevenshteinDistance(a, b) {
        return jsLevenshtein(a, b);
      }
      /**
       * Returns the starting index of first occurance of the (string) filter in
       * the (string) option, or -1 if not present
       * @returns {number}
       * @private
       */

    }, {
      key: "_getOffset",
      value: function _getOffset(option, filter) {
        return option && filter ? option.indexOf(filter) : -1;
      }
      /**
       * Clears all selected options.
       */

    }, {
      key: "clearOptions",
      value: function clearOptions() {
        this.config.options = this.config.options.map(function (o) {
          return Object.assign({}, o, {
            selected: false
          });
        });
        this.updateListeners();
        this.setState();
      }
      /**
       * Call the config.onChange callback with the FilterNode corresponding to the
       * component state.
       * @param {boolean} alwaysSaveFilterNodes
       * @param {boolean} blockSearchOnChange
       */

    }, {
      key: "updateListeners",
      value: function updateListeners(alwaysSaveFilterNodes, blockSearchOnChange) {
        var filterNode = this.getFilterNode();

        if (this.config.storeOnChange) {
          this.apply(false);
        }

        this.config.onChange(filterNode, alwaysSaveFilterNodes, blockSearchOnChange);
      }
    }, {
      key: "_updateOption",
      value: function _updateOption(index, selected) {
        if (this.config.control === 'singleoption') {
          this.config.options = this.config.options.map(function (o) {
            return Object.assign({}, o, {
              selected: false
            });
          });
        }

        this.config.options[index] = Object.assign({}, this.config.options[index], {
          selected: selected
        });

        if (this.config.showReset) {
          this._toggleReset();
        }

        this.updateListeners();
      }
      /**
       * Apply filter changes
       * @param {boolean} replaceHistory Whether we replace or push a new history
       *                                 state for the associated changes
       */

    }, {
      key: "apply",
      value: function apply(replaceHistory) {
        switch (this.config.optionType) {
          case OptionTypes.RADIUS_FILTER:
            this.core.setLocationRadiusFilterNode(this.getLocationRadiusFilterNode());
            break;

          case OptionTypes.STATIC_FILTER:
            this.core.setStaticFilterNodes(this.name, this.getFilterNode());
            break;

          default:
            throw new AnswersComponentError("Unknown optionType ".concat(this.config.optionType), 'FilterOptions');
        }

        this.saveSelectedToPersistentStorage(replaceHistory);
      }
    }, {
      key: "floatSelected",
      value: function floatSelected() {
        this.config.options = this.config.options.sort(function (a, b) {
          return b.selected - a.selected;
        });
      }
    }, {
      key: "_buildFilter",
      value: function _buildFilter(option) {
        return option.filter ? option.filter : Filter.equal(option.field, option.value);
      }
    }, {
      key: "_getFilterType",
      value: function _getFilterType() {
        if (this.config.isDynamic) {
          return FilterType.FACET;
        }

        return this.config.optionType === 'RADIUS_FILTER' ? FilterType.RADIUS : FilterType.STATIC;
      }
    }, {
      key: "_buildFilterMetadata",
      value: function _buildFilterMetadata(option) {
        return new FilterMetadata({
          fieldName: this.config.label,
          displayValue: option.label,
          filterType: this._getFilterType()
        });
      }
      /**
       * Return the FilterNode when this is a RADIUS_FILTER.
       * @type {FilterNode}
       */

    }, {
      key: "getLocationRadiusFilterNode",
      value: function getLocationRadiusFilterNode() {
        var _this3 = this;

        var selectedOption = this.config.options.find(function (o) {
          return o.selected;
        });

        if (!selectedOption) {
          return FilterNodeFactory.from();
        }

        var filterNode = {
          metadata: this._buildFilterMetadata(selectedOption),
          filter: {
            value: selectedOption.value
          },
          remove: function remove() {
            return _this3._clearSingleOption(selectedOption);
          }
        };

        if (selectedOption.value === 0) {
          return FilterNodeFactory.from(_objectSpread({}, filterNode, {
            filter: Filter.empty()
          }));
        } else {
          return FilterNodeFactory.from(filterNode);
        }
      }
    }, {
      key: "_clearSingleOption",
      value: function _clearSingleOption(option) {
        option.selected = false;
        this.updateListeners(true, true);
        this.setState();
      }
      /**
       * Saves selected options to persistent storage
       * @param {boolean} replaceHistory Whether we replace or push a new history
       *                                 state for the associated changes
       */

    }, {
      key: "saveSelectedToPersistentStorage",
      value: function saveSelectedToPersistentStorage(replaceHistory) {
        this.core.persistentStorage.set(this.name, this.config.options.filter(function (o) {
          return o.selected;
        }).map(function (o) {
          return o.label;
        }), replaceHistory || this.core.persistentStorage.get(this.name) === null);
      }
      /**
       * Returns this component's filter node when it is a STATIC_FILTER.
       * This method is exposed so that components like {@link FilterBoxComponent}
       * can access them.
       * @returns {FilterNode}
       */

    }, {
      key: "getFilterNode",
      value: function getFilterNode() {
        var _this4 = this;

        var filterNodes = this.config.options.filter(function (o) {
          return o.selected;
        }).map(function (o) {
          return FilterNodeFactory.from({
            filter: _this4._buildFilter(o),
            metadata: _this4._buildFilterMetadata(o),
            remove: function remove() {
              return _this4._clearSingleOption(o);
            }
          });
        });
        var fieldIdToFilterNodes = groupArray(filterNodes, function (fn) {
          return fn.getFilter().getFilterKey();
        }); // OR together filter nodes for the same field id.

        var totalFilterNodes = [];

        for (var _i2 = 0, _Object$values = Object.values(fieldIdToFilterNodes); _i2 < _Object$values.length; _i2++) {
          var sameIdNodes = _Object$values[_i2];
          totalFilterNodes.push(FilterNodeFactory.or.apply(FilterNodeFactory, _toConsumableArray(sameIdNodes)));
        } // AND all of the ORed together nodes.


        return FilterNodeFactory.and.apply(FilterNodeFactory, totalFilterNodes);
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render, based on the control
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return "controls/filteroptions";
      }
    }, {
      key: "type",
      get: function get() {
        return ComponentTypes.FILTER_OPTIONS;
      }
    }]);

    return FilterOptionsComponent;
  }(Component);

  var DEFAULT_CONFIG$2 = {
    minPlaceholderText: 'Min',
    maxPlaceholderText: 'Max'
  };

  var RangeFilterComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RangeFilterComponent, _Component);

    function RangeFilterComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, RangeFilterComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeFilterComponent).call(this, _objectSpread({}, DEFAULT_CONFIG$2, {}, config), systemConfig));
      /**
       * The field to filter on
       * @type {string}
       * @private
       */

      _this._field = config.field;
      /**
       * The callback function to call when the filter value changes
       * @type {function}
       * @private
       */

      _this._onChange = config.onChange || function () {};
      /**
       * If true, stores the filter to storage on each change
       * @type {boolean}
       * @private
       */


      _this._storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;

      var minVal = _this.core.globalStorage.getState("".concat(_this.name, ".min"));

      if (typeof minVal === 'string') {
        try {
          minVal = Number.parseInt(minVal);
        } catch (e) {}
      }

      var maxVal = _this.core.globalStorage.getState("".concat(_this.name, ".max"));

      if (typeof minVal === 'string') {
        try {
          maxVal = Number.parseInt(maxVal);
        } catch (e) {}
      }
      /**
       * The current range represented
       * @type {object}
       * @private
       */


      _this._range = {
        min: _this.getFirstValidValue(minVal, config.initialMin, 0),
        max: _this.getFirstValidValue(maxVal, config.initialMax, 10)
      };
      /**
       * The title to display for the range control
       * @type {string}
       * @private
       */

      _this._title = config.title;
      /**
       * The optional label to display for the min input
       * @type {string}
       * @private
       */

      _this._minLabel = config.minLabel || null;
      /**
       * The optional label to display for the max input
       * @type {string}
       * @private
       */

      _this._maxLabel = config.maxLabel || null;
      return _this;
    }

    _createClass(RangeFilterComponent, [{
      key: "getFirstValidValue",
      value: function getFirstValidValue() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        for (var _i = 0, _values = values; _i < _values.length; _i++) {
          var value = _values[_i];

          if (value || value === 0) {
            return value;
          }
        }
      }
    }, {
      key: "setState",
      value: function setState(data) {
        _get(_getPrototypeOf(RangeFilterComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          name: this.name,
          title: this._title,
          minLabel: this._minLabel,
          maxLabel: this._maxLabel,
          minValue: this._range.min,
          maxValue: this._range.max
        }));
      }
    }, {
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        DOM.delegate(this._container, '.js-yext-range', 'change', function (event) {
          _this2._updateRange(event.target.dataset.key, Number.parseInt(event.target.value));
        });
      }
    }, {
      key: "setMin",
      value: function setMin(value) {
        this._updateRange('min', value);
      }
    }, {
      key: "setMax",
      value: function setMax(value) {
        this._updateRange('max', value);
      }
    }, {
      key: "_removeFilterNode",
      value: function _removeFilterNode() {
        this._range = {
          min: null,
          max: null
        };
        this.setState();

        this._onChange(FilterNodeFactory.from());

        this.core.clearStaticFilterNode(this.name);
        this.core.persistentStorage["delete"]("".concat(this.name, ".min"));
        this.core.persistentStorage["delete"]("".concat(this.name, ".max"));
      }
      /**
       * Returns this component's filter node.
       * This method is exposed so that components like {@link FilterBoxComponent}
       * can access them.
       * @returns {FilterNode}
       */

    }, {
      key: "getFilterNode",
      value: function getFilterNode() {
        var _this3 = this;

        return FilterNodeFactory.from({
          filter: this._buildFilter(),
          metadata: this._buildFilterMetadata(),
          remove: function remove() {
            return _this3._removeFilterNode();
          }
        });
      }
      /**
       * Update the current range state
       * @param {string} key The range key to update
       * @param {number} value The new value for the key
       */

    }, {
      key: "_updateRange",
      value: function _updateRange(key, value) {
        this._range = Object.assign({}, this._range, _defineProperty({}, key, value));
        this.setState();
        var filterNode = this.getFilterNode();

        if (this._storeOnChange) {
          this.core.setStaticFilterNodes(this.name, filterNode);
        }

        this.core.persistentStorage.set("".concat(this.name, ".min"), this._range.min);
        this.core.persistentStorage.set("".concat(this.name, ".max"), this._range.max);

        this._onChange(filterNode);
      }
      /**
       * Build the filter representation of the current state
       * @returns {Filter}
       */

    }, {
      key: "_buildFilter",
      value: function _buildFilter() {
        var _this$_range = this._range,
            min = _this$_range.min,
            max = _this$_range.max;
        var falsyMin = !min && min !== 0;
        var falsyMax = !max && max !== 0;

        var _min = falsyMin ? null : parseInt(min);

        var _max = falsyMax ? null : parseInt(max);

        return Filter.range(this._field, _min, _max, false);
      }
      /**
       * Helper method for creating range filter metadata
       * @returns {FilterMetadata}
       */

    }, {
      key: "_buildFilterMetadata",
      value: function _buildFilterMetadata() {
        var _this$_range2 = this._range,
            min = _this$_range2.min,
            max = _this$_range2.max;
        var falsyMin = !min && min !== 0;
        var falsyMax = !max && max !== 0;

        if (falsyMin && falsyMax) {
          return new FilterMetadata({
            fieldName: this._title
          });
        } // TODO add config option to range filter component for exclusive ranges.
        var displayValue;

        if (falsyMax) {
          displayValue = "\u2265 ".concat(min);
        } else if (falsyMin) {
          displayValue = "\u2264 ".concat(max);
        } else if (min === max) {
          displayValue = min;
        } else {
          displayValue = "".concat(min, " - ").concat(max);
        }

        return new FilterMetadata({
          fieldName: this._title,
          displayValue: displayValue
        });
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'controls/range';
      }
    }, {
      key: "type",
      get: function get() {
        return ComponentTypes.RANGE_FILTER;
      }
    }]);

    return RangeFilterComponent;
  }(Component);

  /**
   * A filter for a range of dates
   */

  var DateRangeFilterComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DateRangeFilterComponent, _Component);

    function DateRangeFilterComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DateRangeFilterComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangeFilterComponent).call(this, config, systemConfig));
      /**
       * The api field this filter controls
       * @type {string}
       * @private
       */

      _this._field = config.field;
      /**
       * The title to display for the date range
       * @type {string}
       * @private
       */

      _this._title = config.title;
      /**
       * The optional label to show for the min date input
       * @type {string}
       * @private
       */

      _this._minLabel = config.minLabel || null;
      /**
       * The optional label to show for the max date input
       * @type {string}
       * @private
       */

      _this._maxLabel = config.maxLabel || null;
      /**
       * The callback used when a date is changed
       * @type {function}
       * @private
       */

      _this._onChange = config.onChange || function () {};
      /**
       * If true, stores the filter to storage on each change
       * @type {boolean}
       * @private
       */


      _this._storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;
      /**
       * If true, this filter represents an exclusive range, rather than an inclusive one
       * @type {boolean}
       * @private
       */

      _this._isExclusive = config.isExclusive;
      var today = new Date();
      var todayString = "".concat(today.getFullYear(), "-").concat("".concat(today.getMonth() + 1).padStart(2, '0'), "-").concat("".concat(today.getDate()).padStart(2, '0'));

      var minDate = _this.core.globalStorage.getState("".concat(_this.name, ".min"));

      var maxDate = _this.core.globalStorage.getState("".concat(_this.name, ".max"));
      /**
       * The current date range
       * @private
       */


      _this._date = {
        min: minDate || config.initialMin || todayString,
        max: maxDate || config.initialMax || todayString
      };
      return _this;
    }

    _createClass(DateRangeFilterComponent, [{
      key: "setState",
      value: function setState(data) {
        _get(_getPrototypeOf(DateRangeFilterComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          name: this.name,
          title: this._title,
          minLabel: this._minLabel,
          maxLabel: this._maxLabel,
          dateMin: this._date.min,
          dateMax: this._date.max
        }));
      }
    }, {
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        DOM.delegate(this._container, '.js-yext-date', 'change', function (event) {
          _this2._updateRange(event.target.dataset.key, event.target.value);
        });
      }
      /**
       * Set the min date to the one provided
       * @param {string} date Date to set in yyyy-mm-dd string format
       */

    }, {
      key: "setMin",
      value: function setMin(date) {
        this._updateRange('min', date);
      }
      /**
       * Set the max date to the one provided
       * @param {string} date Date to set in yyyy-mm-dd string format
       */

    }, {
      key: "setMax",
      value: function setMax(date) {
        this._updateRange('max', date);
      }
    }, {
      key: "_removeFilterNode",
      value: function _removeFilterNode() {
        this._date = {
          min: null,
          max: null
        };
        this.setState();

        this._onChange(FilterNodeFactory.from());

        this.core.clearStaticFilterNode(this.name);
        this.core.persistentStorage["delete"]("".concat(this.name, ".min"));
        this.core.persistentStorage["delete"]("".concat(this.name, ".max"));
      }
      /**
       * Returns this component's filter node.
       * This method is exposed so that components like {@link FilterBoxComponent}
       * can access them.
       * @returns {FilterNode}
       */

    }, {
      key: "getFilterNode",
      value: function getFilterNode() {
        var _this3 = this;

        return FilterNodeFactory.from({
          filter: this._buildFilter(),
          metadata: this._buildFilterMetadata(),
          remove: function remove() {
            return _this3._removeFilterNode();
          }
        });
      }
      /**
       * Updates the current state of the date range
       * @param {string} key The key for the date value
       * @param {string} value The string date value
       * @private
       */

    }, {
      key: "_updateRange",
      value: function _updateRange(key, value) {
        this._date = Object.assign({}, this._date, _defineProperty({}, key, value));
        this.setState();
        var filterNode = this.getFilterNode();

        if (this._storeOnChange) {
          this.core.setStaticFilterNodes(this.name, filterNode);
        }

        this.core.persistentStorage.set("".concat(this.name, ".min"), this._date.min);
        this.core.persistentStorage.set("".concat(this.name, ".max"), this._date.max);

        this._onChange(filterNode);
      }
      /**
       * Construct an api filter with the current date state
       * @private
       */

    }, {
      key: "_buildFilter",
      value: function _buildFilter() {
        return Filter.range(this._field, this._date.min, this._date.max, this._isExclusive);
      }
      /**
       * Helper method for creating a date range filter metadata
       * @returns {FilterMetadata}
       */

    }, {
      key: "_buildFilterMetadata",
      value: function _buildFilterMetadata() {
        var _this$_date = this._date,
            min = _this$_date.min,
            max = _this$_date.max;

        if (!min && !max) {
          return new FilterMetadata({
            fieldName: this._title
          });
        }

        var displayValue;

        if (!max) {
          displayValue = this._isExclusive ? "After ".concat(min) : "".concat(min, " or later");
        } else if (!min) {
          displayValue = this._isExclusive ? "Before ".concat(max) : "".concat(max, " and earlier");
        } else if (min === max) {
          displayValue = this._isExclusive ? '' : min;
        } else {
          displayValue = "".concat(min, " - ").concat(max);
        }

        return new FilterMetadata({
          fieldName: this._title,
          displayValue: displayValue
        });
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'controls/date';
      }
    }, {
      key: "type",
      get: function get() {
        return ComponentTypes.DATE_RANGE_FILTER;
      }
    }]);

    return DateRangeFilterComponent;
  }(Component);

  var FacetsConfig =
  /*#__PURE__*/
  function () {
    function FacetsConfig(config) {
      _classCallCheck(this, FacetsConfig);

      /**
       * The title to display above the controls
       * @type {string}
       */
      this.title = config.title || 'Filters';
      /**
       * If true, display the number of results next to each facet
       * @type {boolean}
       */

      this.showCount = config.showCount === undefined ? true : config.showCount;
      /**
       * If true, trigger a search on each change to a filter
       * @type {boolean}
       */

      this.searchOnChange = config.searchOnChange || false;
      /**
       * If true, show a button to reset for each facet group
       * @type {boolean}
       */

      this.resetFacet = config.resetFacet || false;
      /**
       * The label to show for the reset button
       * @type {string}
       */

      this.resetFacetLabel = config.resetFacetLabel || 'reset';
      /**
       * If true, show a "reset all" button to reset all facets
       * @type {boolean}
       */

      this.resetFacets = config.resetFacets;
      /**
       * The label to show for the "reset all" button
       * @type {string}
       */

      this.resetFacetsLabel = config.resetFacetsLabel || 'reset all';
      /**
       * The max number of facets to show before displaying "show more"/"show less"
       * @type {number}
       */

      this.showMoreLimit = config.showMoreLimit || 5;
      /**
       * The label to show for displaying more facets
       * @type {string}
       */

      this.showMoreLabel = config.showMoreLabel || 'show more';
      /**
       * The label to show for displaying less facets
       * @type {string}
       */

      this.showLessLabel = config.showLessLabel || 'show less';
      /**
       * If true, enable hiding excess facets in each group with a "show more"/"show less" button
       * @type {boolean}
       */

      this.showMore = config.showMore === undefined ? true : config.showMore;
      /**
       * If true, allow expanding and collapsing each group of facets
       * @type {boolean}
       */

      this.expand = config.expand === undefined ? true : config.expand;
      /**
       * If true, display the number of currently applied filters when collapsed
       * @type {boolean}
       */

      this.showNumberApplied = config.showNumberApplied === undefined ? true : config.showNumberApplied;
      /**
       * Text to display on the apply button
       * @type {string}
       */

      this.applyLabel = config.applyLabel || 'apply';
      /**
       * The controls to use for each field. Each type of filter has a default
       * $eq : multioption (checkbox)
       *
       * DEPRECATED: prefer putting this in config.fields
       *
       * @type {Object}
       */

      this.fieldControls = config.fieldControls || {};
      /**
       * The placeholder text used for the filter option search input
       * @type {string}
       */

      this.placeholderText = config.placeholderText || 'Search here...';
      /**
       * If true, display the filter option search input
       * @type {boolean}
       */

      this.searchable = config.searchable || false;
      /**
       * The form label text for the search input
       * @type {boolean}
       */

      this.searchLabelText = config.searchLabelText || 'Search for a filter option';
      /**
       * An object that maps field API names to their filter options overrides,
       * which have the same keys as the config options in FilterOptions component.
       * @type {Object}
       */

      this.fields = config.fields || {};
      /**
       * The selector of the apply button
       * @type {string}
       * @private
       */

      this.applyButtonSelector = config.applyButtonSelector || null;
      this.validate();
    }

    _createClass(FacetsConfig, [{
      key: "validate",
      value: function validate() {}
    }]);

    return FacetsConfig;
  }();
  /**
   * Displays a set of dynamic filters returned from the backend
   * @extends Component
   */


  var FacetsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FacetsComponent, _Component);

    function FacetsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FacetsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FacetsComponent).call(this, config, systemConfig));
      _this.config = new FacetsConfig(config);
      /**
       * The vertical key for the search
       * @type {string}
       * @private
       */

      _this._verticalKey = config.verticalKey;
      /**
       * The selector of the apply button
       * @type {string}
       * @private
       */

      _this._applyButtonSelector = config.applyButtonSelector || null;
      /**
       * An internal reference for the data storage to listen for updates from the server
       * @type {string}
       */

      _this.moduleId = StorageKeys.DYNAMIC_FILTERS;
      /**
       * The filter box that displays the dynamic filters
       * @type {FilterBoxComponent}
       * @private
       */

      _this._filterbox = null;
      return _this;
    }

    _createClass(FacetsComponent, [{
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(FacetsComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          isNoResults: data.resultsContext === ResultsContext.NO_RESULTS
        }));
      }
    }, {
      key: "remove",
      value: function remove() {
        if (this._filterbox) {
          this._filterbox.remove();
        }

        _get(_getPrototypeOf(FacetsComponent.prototype), "remove", this).call(this);
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        this.core.enableDynamicFilters();

        if (this._filterbox) {
          this._filterbox.remove();
        }

        var _this$_state$get = this._state.get(),
            filters = _this$_state$get.filters,
            resultsContext = _this$_state$get.resultsContext;

        if (!filters || resultsContext === ResultsContext.NO_RESULTS) {
          return;
        }

        filters = filters.map(function (f) {
          var fieldOverrides = _this2.config.fields[f.fieldId] || {};
          return Object.assign({}, f, _objectSpread({
            type: 'FilterOptions',
            control: _this2.config.fieldControls[f.fieldId] || 'multioption',
            searchable: _this2.config.searchable,
            searchLabelText: _this2.config.searchLabelText,
            placeholderText: _this2.config.placeholderText,
            showExpand: fieldOverrides.expand === undefined ? _this2.config.expand : fieldOverrides.expand
          }, fieldOverrides));
        }); // TODO: pass an apply() method to FilterBox, that will override its default behavior,
        // and remove the isDynamic config option.

        this._filterbox = this.componentManager.create('FilterBox', Object.assign({}, this.config, {
          parentContainer: this._container,
          name: "".concat(this.name, ".filterbox"),
          container: '.js-yxt-Facets',
          verticalKey: this._verticalKey,
          resetFilter: this.config.resetFacet,
          resetFilters: this.config.resetFacets,
          resetFilterLabel: this.config.resetFacetLabel,
          resetFiltersLabel: this.config.resetFacetsLabel,
          isDynamic: true,
          filters: filters
        }));

        this._filterbox.mount();
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName() {
        return 'filters/facets';
      }
    }, {
      key: "type",
      get: function get() {
        return ComponentTypes.FACETS;
      }
    }]);

    return FacetsComponent;
  }(Component);

  var METERS_PER_MILE = 1609.344;
  var DEFAULT_CONFIG$3 = {
    /**
     * The radius, in miles, around the user's location to find results.
     * If location accuracy is low, a larger radius may be used automatically
     * @type {number}
     */
    radius: 50,

    /**
     * The vertical key to use
     * @type {string}
     */
    verticalKey: null,

    /**
     * If true, submits a search when the value is changed
     * @type {boolean}
     */
    searchOnChange: false,

    /**
     * The title to display
     * @type {string}
     */
    title: 'Location',

    /**
     * The label to display
     * @type {string}
     */
    label: 'Location',

    /**
     * The icon url to show in the geo button
     * @type {string}
     */
    geoButtonIcon: '',

    /**
     * The alt text to include with the geo button icon
     * @type {string}
     */
    geoButtonIconAltText: 'Use My Location',

    /**
     * The text to show in the geo button
     * @type {string}
     */
    geoButtonText: 'Use My Location',

    /**
     * The text to show when geolocation is enabled
     * @type {string}
     */
    enabledText: 'Current Location',

    /**
     * The text to show when loading the user's location
     * @type {string}
     */
    loadingText: 'Finding Your Location...',

    /**
     * The text to show if the user's location cannot be found
     * @type {string}
     */
    errorText: 'Could Not Find Your Location',

    /**
     * The CSS selector of the toggle button
     * @type {string}
     */
    buttonSelector: '.js-yxt-GeoLocationFilter-button',

    /**
     * The CSS selector of the query input
     * @type {string}
     */
    inputSelector: '.js-yxt-GeoLocationFilter-input'
  };
  /**
   * Renders a button that when clicked adds a static filter representing the user's location
   * @extends Component
   */

  var GeoLocationComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GeoLocationComponent, _Component);

    function GeoLocationComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, GeoLocationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GeoLocationComponent).call(this, _objectSpread({}, DEFAULT_CONFIG$3, {}, config), systemConfig));
      /**
       * The query string to use for the input box, provided to template for rendering.
       * @type {string}
       */

      _this.query = _this.core.globalStorage.getState("".concat(StorageKeys.QUERY, ".").concat(_this.name)) || '';

      _this.core.globalStorage.on('update', "".concat(StorageKeys.QUERY, ".").concat(_this.name), function (q) {
        _this.query = q;

        _this.setState();
      });

      _this.searchParameters = buildSearchParameters(config.searchParameters);
      /**
       * Options to pass to the geolocation api.
       * @type {Object}
       */

      _this._geolocationOptions = _objectSpread({
        enableHighAccuracy: false,
        timeout: 6000,
        maximumAge: 300000
      }, config.geolocationOptions);
      /**
       * Options for the geolocation timeout alert.
       * @type {Object}
       */

      _this._geolocationTimeoutAlert = _objectSpread({
        enabled: false,
        message: 'We are unable to determine your location'
      }, config.geolocationTimeoutAlert);
      return _this;
    }

    _createClass(GeoLocationComponent, [{
      key: "setState",
      value: function setState() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var placeholder = '';

        if (this._enabled) {
          placeholder = this._config.enabledText;
        }

        if (data.geoLoading) {
          placeholder = this._config.loadingText;
        }

        if (data.geoError) {
          placeholder = this._config.errorText;
        }

        _get(_getPrototypeOf(GeoLocationComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          title: this._config.title,
          geoEnabled: this._enabled,
          query: this.query,
          labelText: this._config.label,
          enabledText: this._config.enabledText,
          loadingText: this._config.loadingText,
          errorText: this._config.errorText,
          geoButtonIcon: this._config.geoButtonIcon,
          geoValue: this._enabled || data.geoLoading || data.geoError ? '' : this.query,
          geoPlaceholder: placeholder,
          geoButtonText: this._config.geoButtonText
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._initAutoComplete(this._config.inputSelector);

        DOM.on(DOM.query(this._container, this._config.buttonSelector), 'click', function () {
          return _this2._toggleGeoFilter();
        });
      }
      /**
       * A helper method to wire up our auto complete on an input selector
       * @param {string} inputSelector CSS selector to bind our auto complete component to
       * @private
       */

    }, {
      key: "_initAutoComplete",
      value: function _initAutoComplete(inputSelector) {
        var _this3 = this;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._autocomplete = this.componentManager.create('AutoComplete', {
          parentContainer: this._container,
          name: "".concat(this.name, ".autocomplete"),
          isFilterSearch: true,
          container: '.js-yxt-GeoLocationFilter-autocomplete',
          originalQuery: this.query,
          inputEl: inputSelector,
          verticalKey: this._config.verticalKey,
          searchParameters: this.searchParameters,
          onSubmit: function onSubmit(query, filter) {
            return _this3._handleSubmit(query, filter);
          }
        });
      }
    }, {
      key: "_handleSubmit",
      value: function _handleSubmit(query, filter) {
        this.query = query;

        this._saveDataToStorage(query, Filter.fromResponse(filter), "".concat(query));

        this._enabled = false;
      }
      /**
       * Toggles the static filter representing the user's location
       * @private
       */

    }, {
      key: "_toggleGeoFilter",
      value: function _toggleGeoFilter() {
        var _this4 = this;

        if (!navigator.geolocation) {
          this.setState({
            geoError: true
          });
          return;
        }

        if (!this._enabled) {
          this.setState({
            geoLoading: true
          });
          navigator.geolocation.getCurrentPosition(function (position) {
            var filter = _this4._buildFilter(position);

            _this4._saveDataToStorage('', filter, 'Current Location', position);

            _this4._enabled = true;

            _this4.setState({});

            _this4.core.persistentStorage["delete"]("".concat(StorageKeys.QUERY, ".").concat(_this4.name));

            _this4.core.persistentStorage["delete"]("".concat(StorageKeys.FILTER, ".").concat(_this4.name));
          }, function () {
            return _this4._handleGeolocationError();
          }, this._geolocationOptions);
        }
      }
    }, {
      key: "_handleGeolocationError",
      value: function _handleGeolocationError() {
        this.setState({
          geoError: true
        });
        var _this$_geolocationTim = this._geolocationTimeoutAlert,
            enabled = _this$_geolocationTim.enabled,
            message = _this$_geolocationTim.message;

        if (enabled) {
          window.alert(message);
        }
      }
    }, {
      key: "_removeFilterNode",
      value: function _removeFilterNode() {
        this.core.persistentStorage["delete"]("".concat(StorageKeys.QUERY, ".").concat(this.name));
        this.core.persistentStorage["delete"]("".concat(StorageKeys.FILTER, ".").concat(this.name));
        this._enabled = false;
        this.query = '';
        this.core.clearStaticFilterNode(this.name);
        this.setState();
      }
    }, {
      key: "_buildFilterNode",
      value: function _buildFilterNode(filter, displayValue) {
        var _this5 = this;

        return FilterNodeFactory.from({
          filter: filter,
          metadata: {
            displayValue: displayValue,
            fieldName: this._config.title || this._config.label || 'Location'
          },
          remove: function remove() {
            return _this5._removeFilterNode();
          }
        });
      }
      /**
       * Saves the provided filter under this component's name
       * @param {string} query The query to save
       * @param {Filter} filter The filter to save
       * @param {string} displayValue The display value for the filter
       * @param {Object} position The position to save
       * @private
       */

    }, {
      key: "_saveDataToStorage",
      value: function _saveDataToStorage(query, filter, displayValue, position) {
        this.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(this.name), query);
        this.core.persistentStorage.set("".concat(StorageKeys.FILTER, ".").concat(this.name), filter);

        var filterNode = this._buildFilterNode(filter, displayValue);

        this.core.setStaticFilterNodes(this.name, filterNode);

        if (position) {
          this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            radius: position.coords.accuracy
          });
        }

        if (this._config.searchOnChange) {
          this.core.verticalSearch(this._config.verticalKey, {
            setQueryParams: true,
            resetPagination: true,
            useFacets: true
          });
        }
      }
      /**
       * Given a position, construct a Filter object
       * @param {Postition} position The position
       * @returns {Filter}
       * @private
       */

    }, {
      key: "_buildFilter",
      value: function _buildFilter(position) {
        var _position$coords = position.coords,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude,
            accuracy = _position$coords.accuracy;
        var radius = Math.max(accuracy, this._config.radius * METERS_PER_MILE);
        return Filter.position(latitude, longitude, radius);
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'controls/geolocation';
      }
    }, {
      key: "type",
      get: function get() {
        return ComponentTypes.GEOLOCATION_FILTER;
      }
    }]);

    return GeoLocationComponent;
  }(Component);

  /**
   * Renders configuration options for sorting Vertical Results.
   * TODO: how to deal with multiple instances of this component (and filters in general),
   * ideally "identical" filters/sorts would be synced up.
   */

  var SortOptionsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SortOptionsComponent, _Component);

    function SortOptionsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SortOptionsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SortOptionsComponent).call(this, assignDefaults(config), systemConfig)); // TODO SPR-1929 centralize this logic

      _this._config.verticalKey = config.verticalKey || _this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey;
      _this.options = _this._config.options;
      _this.selectedOptionIndex = parseInt(_this.core.globalStorage.getState(_this.name)) || 0;
      _this.options[_this.selectedOptionIndex].isSelected = true;
      _this.hideExcessOptions = _this._config.showMore && _this.selectedOptionIndex < _this._config.showMoreLimit;
      _this.showReset = _this._config.showReset && _this.selectedOptionIndex !== 0;
      /**
       * This component listens to updates to vertical results, and sets its state to it when
       * an update occurs.
       * @type {string}
       */

      _this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, function (verticalResults) {
        if (verticalResults.searchState === SearchStates.SEARCH_COMPLETE) {
          _this.setState(verticalResults);
        }
      });

      return _this;
    }

    _createClass(SortOptionsComponent, [{
      key: "setState",
      value: function setState() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = this.options;

        if (this.hideExcessOptions) {
          options = this.options.slice(0, this._config.showMoreLimit);
        }

        _get(_getPrototypeOf(SortOptionsComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          options: options,
          hideExcessOptions: this.hideExcessOptions,
          name: this.name,
          showReset: this.showReset,
          isNoResults: data.resultsContext === ResultsContext.NO_RESULTS
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        // Handle radio button selections
        var containerEl = DOM.query(this._container, '.yxt-SortOptions-fieldSet');
        containerEl && DOM.on(containerEl, 'change', function (evt) {
          return _this2.handleOptionSelection(parseInt(evt.target.value));
        }); // Register more/less button

        if (this._config.showMore) {
          var toggleEl = DOM.query(this._container, '.yxt-SortOptions-showToggle');
          toggleEl && DOM.on(toggleEl, 'click', function () {
            _this2.hideExcessOptions = !_this2.hideExcessOptions;

            _this2.setState();
          });
        } // Register show reset button


        if (this.showReset) {
          var resetEl = DOM.query(this._container, '.yxt-SortOptions-reset');
          resetEl && DOM.on(resetEl, 'click', function () {
            return _this2.handleOptionSelection(0);
          });
        } // Register apply button


        if (!this._config.searchOnChange) {
          var applyEl = DOM.query(this._container, '.yxt-SortOptions-apply');
          applyEl && DOM.on(applyEl, 'click', function () {
            return _this2._sortResults();
          });
        }
      }
    }, {
      key: "handleOptionSelection",
      value: function handleOptionSelection(optionIndex) {
        this._updateSelectedOption(optionIndex);

        if (this._config.searchOnChange) {
          this._sortResults();
        }
      }
    }, {
      key: "_updateSelectedOption",
      value: function _updateSelectedOption(optionIndex) {
        this.options[this.selectedOptionIndex].isSelected = false;
        this.options[optionIndex].isSelected = true;
        this.selectedOptionIndex = optionIndex;
        this.showReset = this._config.showReset && optionIndex !== 0;
        this.setState();
      }
    }, {
      key: "_sortResults",
      value: function _sortResults() {
        var optionIndex = this.selectedOptionIndex;
        var option = this.options[optionIndex]; // searchOnChange really means sort on change here, just that the sort is done through a search,
        // This was done to have a consistent option name between filters.

        this.core.persistentStorage.set(this.name, optionIndex);

        if (this._config.storeOnChange && optionIndex === 0) {
          this.core.clearSortBys();
        } else if (this._config.storeOnChange) {
          this.core.setSortBys(option);
        }

        this._search();

        this._config.onChange(option);

        this.setState();
      }
      /**
       * Trigger a search with all filters in storage
       */

    }, {
      key: "_search",
      value: function _search() {
        this.core.verticalSearch(this._config.verticalKey, {
          setQueryParams: true,
          resetPagination: true,
          useFacets: true
        });
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'controls/sortoptions';
      }
    }, {
      key: "type",
      get: function get() {
        return ComponentTypes.SORT_OPTIONS;
      }
    }]);

    return SortOptionsComponent;
  }(Component);

  function assignDefaults(config) {
    var updatedConfig = Object.assign({}, config); // Optional, The label used for the “default” sort (aka the sort specified by the experience config").

    updatedConfig.defaultSortLabel = config.defaultSortLabel || 'Best Match'; // Array of search options, where an option has type, label, and if is type FIELD also a label and direction

    if (!config.options) {
      throw new AnswersBasicError('config.options are required', 'SortOptions');
    }

    var OPTION_TYPES = ['FIELD', 'RELEVANCE', 'ENTITY_DISTANCE'];

    if (!Array.isArray(config.options)) {
      throw new AnswersBasicError('options must be an array of objects', 'SortOptions');
    }

    updatedConfig.options = config.options.map(function (option) {
      if (!option.label || !option.type) {
        throw new AnswersBasicError("option.label and option.type are required option ".concat(option), 'SortOptions');
      }

      var newOption = {
        isSelected: false
      };
      newOption.label = option.label;
      newOption.type = option.type;
      var isField = OPTION_TYPES.indexOf(newOption.type) === 0;

      if (isField && option.field && option.direction) {
        newOption.field = option.field;
        newOption.direction = option.direction;
      } else if (isField) {
        throw new AnswersBasicError("option.field and option.direction are required for option: ".concat(option), 'SortOptions');
      }

      return newOption;
    }); // Add default option to the front of the options array

    updatedConfig.options.unshift({
      label: updatedConfig.defaultSortLabel,
      isSelected: false
    }); // Optional, the selector used for options in the template

    updatedConfig.optionSelector = config.optionSelector || 'yxt-SortOptions-optionSelector'; // Optional, if true, triggers a search on each change to a filter,
    // if false the component also renders an apply button, defaults to false

    updatedConfig.searchOnChange = config.searchOnChange === undefined ? true : config.searchOnChange; // Optional, show a reset button. Clicking it will always return the user to the default sorting option.

    updatedConfig.showReset = config.showReset || false; // Optional, the label to use for the reset button

    updatedConfig.resetLabel = config.resetLabel || 'reset'; // Optional, the max number of filter options to show before collapsing extras

    updatedConfig.showMoreLimit = config.showMoreLimit || 5; // Optional, allow collapsing excess sort options after a limit

    updatedConfig.showMore = config.showMore === undefined ? true : config.showMore;
    updatedConfig.showMore = updatedConfig.showMore && updatedConfig.options.length > updatedConfig.showMoreLimit; // Optional, the label to show for displaying more options

    updatedConfig.showMoreLabel = config.showMoreLabel || 'Show more'; // Optional, the label to show for displaying less options

    updatedConfig.showLessLabel = config.showLessLabel || 'Show less'; // Optional, the callback function to call when changed

    updatedConfig.onChange = config.onChange || function () {}; // Optional, Top title for the sorting component


    updatedConfig.label = config.label || 'Sorting'; // Optional, when true component does not update globalStorage
    // possibly delegating that to a higher-order/composite component

    updatedConfig.storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;
    updatedConfig.applyLabel = config.applyLabel || 'Apply';
    updatedConfig.verticalKey = config.verticalKey;

    if (!updatedConfig.verticalKey) {
      throw new AnswersBasicError('vertical key is required', 'SortOptions');
    } // note: showExpand and showNumberApplied explicitly not included, on the grounds that
    // sorting should always be exposed to the user if added.


    return updatedConfig;
  }

  /**
   * EventTypes are explicit strings defined
   * for what the server expects for analytics.
   *
   * @enum
   */

  var EventTypes = {
    THUMBS_UP: 'THUMBS_UP',
    THUMBS_DOWN: 'THUMBS_DOWN'
  };
  var DEFAULT_CONFIG$4 = {
    positiveFeedbackSrText: 'This answered my question',
    negativeFeedbackSrText: 'This did not answer my question',
    footerTextOnSubmission: 'Thank you for your feedback!'
  };

  var DirectAnswerComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DirectAnswerComponent, _Component);

    function DirectAnswerComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DirectAnswerComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DirectAnswerComponent).call(this, _objectSpread({}, DEFAULT_CONFIG$4, {}, config), systemConfig));
      /**
       * The user given config, without any defaults applied.
       * @type {Object}
       */

      _this._userConfig = _objectSpread({}, config);
      /**
       * Recieve updates from storage based on this index
       * @type {StorageKey}
       */

      _this.moduleId = StorageKeys.DIRECT_ANSWER;
      /**
       * The form used for submitting the feedback
       * @type {string}
       */

      _this._formEl = config.formEl || '.js-directAnswer-feedback-form';
      /**
       * The `thumbs up` css selector to bind ui interaction to for reporting
       * @type {string}
       */

      _this._thumbsUpSelector = config.thumbsUpSelector || '.js-directAnswer-thumbUp';
      /**
       * The `thumbs down` css selector to bind ui interaction to for reporting
       * @type {string}
       */

      _this._thumbsDownSelector = config.thumbsDownSelector || '.js-directAnswer-thumbDown';
      /**
       * The display text for the View Details click to action link
       * @type {string}
       */

      _this._viewDetailsText = config.viewDetailsText || 'View Details';
      /**
       * The default custom direct answer card to use, when there are no matching card overrides.
       * @type {string}
       */

      _this._defaultCard = config.defaultCard;
      /**
       * Card overrides, which choose a custom direct answer card based on fieldName, fieldType, and entityType.
       * @type {Array<Object>}
       */

      _this._cardOverrides = config.cardOverrides || [];
      return _this;
    }

    _createClass(DirectAnswerComponent, [{
      key: "beforeMount",

      /**
       * beforeMount, only display the direct answer component if it has data
       */
      value: function beforeMount() {
        if (!this.hasState('answer')) {
          return false;
        }

        return true;
      }
      /**
       * Check whether a given cardOverride matches a given directAnswer.
       * @param {Object} directAnswer
       * @param {Object} override
       */

    }, {
      key: "_overrideMatchesAnswer",
      value: function _overrideMatchesAnswer(directAnswer, override) {
        if (!Object.keys(directAnswer).length) {
          return true;
        }

        var directAnswerPropeties = {
          entityType: directAnswer.relatedItem.data.type,
          fieldName: directAnswer.answer.fieldName,
          fieldType: directAnswer.answer.fieldType
        };

        for (var _i = 0, _Object$entries = Object.entries(override); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              propertyToMatch = _Object$entries$_i[0],
              propertyValue = _Object$entries$_i[1];

          if (propertyToMatch === 'cardType') {
            continue;
          }

          if (directAnswerPropeties[propertyToMatch] !== propertyValue) {
            return false;
          }
        }

        return true;
      }
      /**
       * Returns the custom card that should be used for the given direct answer.
       * First, checks user given cardOverrides for a matching override, if there are none
       * then returns the default card.
       * @returns {string}
       */

    }, {
      key: "_getCustomCard",
      value: function _getCustomCard(directAnswer) {
        var _this2 = this;

        var cardOverride = this._cardOverrides.find(function (override) {
          return _this2._overrideMatchesAnswer(directAnswer, override);
        });

        return cardOverride ? cardOverride.cardType : this._defaultCard;
      }
      /**
       * When the DOM is constructed,
       * we want to wire up the behavior for interacting with the quality feedback reporting (thumbsup/down)
       */

    }, {
      key: "onMount",
      value: function onMount() {
        var _this3 = this;

        var customCard = this.getState('customCard');
        var feedbackSubmitted = this.getState('feedbackSubmitted') === true; // Avoid bindings if the feedback has previously been submitted or is using a custom card.

        if (customCard || feedbackSubmitted) {
          return this;
        } // For WCAG compliance, the feedback should be a submittable form


        DOM.on(this._formEl, 'submit', function (e) {
          var formEl = e.target;
          var checkedValue = DOM.query(formEl, 'input:checked').value === 'true';

          _this3.reportQuality(checkedValue);

          _this3.updateState({
            'feedbackSubmitted': true
          });
        }); // Is this actually necessary? I guess it's only necessary if the
        // submit button is hidden.

        DOM.on(this._thumbsUpSelector, 'click', function () {
          DOM.trigger(_this3._formEl, 'submit');
        });
        DOM.on(this._thumbsDownSelector, 'click', function () {
          DOM.trigger(_this3._formEl, 'submit');
        });
        var rtfElement = DOM.query(this._container, '.js-yxt-rtfValue');
        rtfElement && DOM.on(rtfElement, 'click', function (e) {
          return _this3._handleRtfClickAnalytics(e);
        });
      }
      /**
       * A click handler for links in a Rich Text Direct Answer. When such a link
       * is clicked, an {@link AnalyticsEvent} needs to be fired.
       *
       * @param {MouseEvent} event The click event.
       */

    }, {
      key: "_handleRtfClickAnalytics",
      value: function _handleRtfClickAnalytics(event) {
        if (!event.target.dataset.ctaType) {
          return;
        }

        var ctaType = event.target.dataset.ctaType;
        var relatedItem = this.getState('relatedItem');
        var analyticsOptions = {
          verticalKey: relatedItem.verticalConfigId,
          directAnswer: true,
          fieldName: this.getState('answer').fieldApiName,
          searcher: 'UNIVERSAL',
          entityId: relatedItem.data.id,
          url: event.target.href
        };
        var analyticsEvent = new AnalyticsEvent(ctaType);
        analyticsEvent.addOptions(analyticsOptions);
        this.analyticsReporter.report(analyticsEvent);
      }
      /**
       * updateState enables for partial updates (the delta between the old and new)
       * @type {object} The new state to apply to the old
       */

    }, {
      key: "updateState",
      value: function updateState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var newState = Object.assign({}, this.getState(), state);
        this.setState(newState);
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(DirectAnswerComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          eventOptions: this.eventOptions(data),
          viewDetailsText: this._viewDetailsText,
          directAnswer: data,
          customCard: this._getCustomCard(data)
        }));
      }
    }, {
      key: "eventOptions",
      value: function eventOptions(data) {
        if (!data || Object.keys(data).length === 0) {
          return data;
        }

        return JSON.stringify({
          verticalConfigId: data.relatedItem.verticalConfigId,
          searcher: 'UNIVERSAL',
          entityId: data.relatedItem.data.id,
          ctaLabel: this._viewDetailsText.toUpperCase().replace(' ', '_')
        });
      }
      /**
       * reportQuality will send the quality feedback to analytics
       * @param {boolean} isGood true if the answer is what you were looking for
       */

    }, {
      key: "reportQuality",
      value: function reportQuality(isGood) {
        var eventType = isGood === true ? EventTypes.THUMBS_UP : EventTypes.THUMBS_DOWN;
        var event = new AnalyticsEvent(eventType).addOptions({
          'directAnswer': true
        });
        this.analyticsReporter.report(event);
      }
    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        if (type === this.getState('customCard')) {
          return _get(_getPrototypeOf(DirectAnswerComponent.prototype), "addChild", this).call(this, this.getState('directAnswer'), type, _objectSpread({}, this._userConfig, {}, opts));
        }

        return _get(_getPrototypeOf(DirectAnswerComponent.prototype), "addChild", this).call(this, data, type, opts);
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/directanswer';
      }
    }, {
      key: "type",
      get: function get() {
        return 'DirectAnswer';
      }
    }]);

    return DirectAnswerComponent;
  }(Component);

  /**
   * The AlternativeVertical is a model that is used to power the search
   * suggestions info box. It's initialized through the configuration provided
   * to the component.
   */

  var AlternativeVertical = function AlternativeVertical(config) {
    _classCallCheck(this, AlternativeVertical);

    /**
     * The name of the vertical that is exposed for the link
     * @type {string}
     */
    this.label = config.label;

    if (typeof this.label !== 'string') {
      throw new AnswersConfigError('label is a required configuration option for verticalPage.', 'AlternativeVertical');
    }
    /**
     * The complete URL, including the params
     * @type {string}
     */


    this.url = config.url;

    if (typeof this.url !== 'string') {
      throw new AnswersConfigError('url is a required configuration option for verticalPage.', 'AlternativeVertical');
    }
    /**
     * name of an icon from the default icon set
     * @type {string}
     */


    this.iconName = config.iconName;
    /**
     * URL of an icon
     * @type {string}
     */

    this.iconUrl = config.iconUrl;
    /**
     * Whether the vertical has an icon
     * @type {string}
     */

    this.hasIcon = this.iconName || this.iconUrl;
    /**
     * The number of results to display next to each alternative
     * vertical
     * @type {number}
     */

    this.resultsCount = config.resultsCount;
  };

  var AlternativeVerticalsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(AlternativeVerticalsComponent, _Component);

    function AlternativeVerticalsComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AlternativeVerticalsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AlternativeVerticalsComponent).call(this, opts, systemOpts));
      _this.moduleId = StorageKeys.ALTERNATIVE_VERTICALS;
      /**
       * Alternative verticals that have results for the current query
       * This gets updated based on the server results
       * @type {AlternativeVerticals}
       * @private
       */

      _this._alternativeVerticals = opts.data && opts.data.alternativeVerticals || [];
      /**
       * Vertical pages config from global verticals config
       * @type {VerticalPagesConfig}
       * @private
       */

      _this._verticalsConfig = opts.verticalsConfig || [];
      /**
       * The name of the vertical that is exposed for the link
       * @type {string}
       */

      _this._currentVerticalLabel = _this.getCurrentVerticalLabel(opts.verticalsConfig) || '';
      /**
       * The alternative vertical search suggestions, parsed from alternative verticals and
       * the global verticals config.
       * This gets updated based on the server results
       * @type {AlternativeVertical[]}
       */

      _this.verticalSuggestions = _this._buildVerticalSuggestions(_this._alternativeVerticals, _this._verticalsConfig, _this.core.globalStorage.getState(StorageKeys.API_CONTEXT), _this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL));
      /**
       * The url to the universal page to link back to without query params
       * @type {string|null}
       */

      _this._baseUniversalUrl = opts.baseUniversalUrl || '';
      /**
       * The url to the universal page to link back to with current query params
       * @type {string|null}
       */

      _this._universalUrl = _this._getUniversalURL(_this._baseUniversalUrl, new SearchParams(window.location.search.substring(1)));
      /**
       * Whether or not results are displaying, used to control language in the info box
       * @type {boolean}
       */

      _this._isShowingResults = opts.isShowingResults || false;

      _this.core.globalStorage.on('update', StorageKeys.API_CONTEXT, function () {
        _this.verticalSuggestions = _this._buildVerticalSuggestions(_this._alternativeVerticals, _this._verticalsConfig, _this.core.globalStorage.getState(StorageKeys.API_CONTEXT), _this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL));
        _this._universalUrl = _this._getUniversalURL(_this._baseUniversalUrl, new SearchParams(window.location.search.substring(1)));

        _this.setState(_this.core.globalStorage.getState(StorageKeys.ALERNATIVE_VERTICALS));
      });

      return _this;
    }

    _createClass(AlternativeVerticalsComponent, [{
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(AlternativeVerticalsComponent.prototype), "setState", this).call(this, Object.assign({
          verticalSuggestions: []
        }, data, {
          universalUrl: this._universalUrl,
          verticalSuggestions: this.verticalSuggestions,
          currentVerticalLabel: this._currentVerticalLabel,
          isShowingResults: this._isShowingResults,
          query: this.core.globalStorage.getState(StorageKeys.QUERY)
        }));
      }
    }, {
      key: "getCurrentVerticalLabel",
      value: function getCurrentVerticalLabel(verticalsConfig) {
        var thisVertical = verticalsConfig.find(function (config) {
          return config.isActive || false;
        });
        return thisVertical ? thisVertical.label : '';
      }
      /**
       * _buildVerticalSuggestions will construct an array of {AlternativeVertical}
       * from alternative verticals and verticalPages configuration
       * @param {object} alternativeVerticals alternativeVerticals server response
       * @param {object} verticalsConfig the configuration to use
       * @param {string} context the API context query parameter to add to the urls
       * @param {string} referrerPageUrl the referrerPageUrl query parameter to add to the urls
       */

    }, {
      key: "_buildVerticalSuggestions",
      value: function _buildVerticalSuggestions(alternativeVerticals, verticalsConfig, context, referrerPageUrl) {
        var _this2 = this;

        var verticals = [];
        var params = new SearchParams(window.location.search.substring(1));

        if (context) {
          params.set(StorageKeys.API_CONTEXT, context);
        }

        if (typeof referrerPageUrl === 'string') {
          params.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
        }

        var filteredParams = filterParamsForExperienceLink(params, function (types) {
          return _this2.componentManager.getComponentNamesForComponentTypes(types);
        });
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var alternativeVertical = _step.value;
            var verticalKey = alternativeVertical.verticalConfigId;
            var matchingVerticalConfig = verticalsConfig.find(function (config) {
              return config.verticalKey === verticalKey;
            });

            if (!matchingVerticalConfig || alternativeVertical.resultsCount < 1) {
              return "continue";
            }

            verticals.push(new AlternativeVertical({
              label: matchingVerticalConfig.label,
              url: replaceUrlParams(matchingVerticalConfig.url, filteredParams),
              iconName: matchingVerticalConfig.icon,
              iconUrl: matchingVerticalConfig.iconUrl,
              resultsCount: alternativeVertical.resultsCount
            }));
          };

          for (var _iterator = alternativeVerticals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return verticals;
      }
      /**
       * Adds parameters that are dynamically set. Removes parameters for facets,
       * filters, and pagination, which should not persist across the experience.
       * @param {string} baseUrl The url append the appropriate params to. Note:
       *                         params already on the baseUrl will be stripped
       * @param {SearchParams} params The parameters to include in the experience URL
       * @return {string} The formatted experience URL with appropriate query params
       */

    }, {
      key: "_getUniversalURL",
      value: function _getUniversalURL(baseUrl, params) {
        var _this3 = this;

        if (!baseUrl) {
          return '';
        }

        params.set(StorageKeys.QUERY, this.core.globalStorage.getState(StorageKeys.QUERY));
        var context = this.core.globalStorage.getState(StorageKeys.API_CONTEXT);

        if (context) {
          params.set(StorageKeys.API_CONTEXT, context);
        }

        var referrerPageUrl = this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);

        if (referrerPageUrl !== null) {
          params.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
        }

        var filteredParams = filterParamsForExperienceLink(params, function (types) {
          return _this3.componentManager.getComponentNamesForComponentTypes(types);
        });
        return replaceUrlParams(baseUrl, filteredParams);
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/alternativeverticals';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'AlternativeVerticals';
      }
    }]);

    return AlternativeVerticalsComponent;
  }(Component);

  /**
   * A MapProvider is an interface that represents that should be implemented
   * in order to integrate with a Third Party Map provider for
   * interactive maps. MapProviders are used by the MapComponent.
   *
   * Implementations should extend this interface.
   */

  var MapProvider =
  /*#__PURE__*/
  function () {
    function MapProvider() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MapProvider);

      /**
       * The API Key used for interacting with the map provider
       * @type {string}
       */
      this._apiKey = config.apiKey;
      /**
       * The zoom level of the map, defaults to 14
       * @type {number}
       */

      this._zoom = config.zoom || 14;
      /**
       * The default coordinates to display if there are no results returned
       * Only used if showEmptyMap is set to true
       * @type {Object}
       */

      this._defaultPosition = config.defaultPosition || {
        lat: 37.0902,
        lng: -95.7129
      };
      /**
       * Configuration for the behavior when there are no vertical results.
       * @type {Object}
       */

      this._noResults = config.noResults || {};
      /**
       * Determines if an empty map should be shown when there are no results
       * @type {boolean}
       */

      this._showEmptyMap = config.showEmptyMap || false;
      /**
       * A reference to the underlying map instance, created by the external lib.
       * @type {number}
       */

      this._map = null;
      /**
       * Temporary boolean tracking whether or not the external JS library is loaded (see TODO below)
       * @type {boolean}
       */

      this._isLoaded = false;
      /**
       * Callback to invoke when a pin is clicked. The clicked item(s) are passed to the callback
       * @type {function}
       */

      this._onPinClick = config.onPinClick || null;
      /**
       * Callback to invoke when a pin is hovered. The hovered item is passed to the callback
       * @type {function}
       */

      this._onPinMouseOver = config.onPinMouseOver || null;
      /**
       * Callback to invoke when a pin is no longer hovered after being hovered.
       * The hovered item is passed to the callback
       * @type {function}
       */

      this._onPinMouseOut = config.onPinMouseOut || null;
      /**
       * Callback to invoke once the Javascript is loaded
       * @type {function}
       */

      this._onLoaded = config.onLoaded || function () {};
      /**
       * The custom configuration override to use for the map markers
       * @type {Object|Function}
       */


      this._pinConfig = typeof config.pin === 'function' ? config.pin : Object.assign(MapProvider.DEFAULT_PIN_CONFIG, config.pin);
      /**
       * Determines whether or not to collapse pins at the same lat/lng
       * @type {boolean}
       */

      this._collapsePins = config.collapsePins || false;
    }
    /**
     * The default configuration to use for the map markers
     * @type {Object}
     * TODO(billy) Create a configuration model
     */


    _createClass(MapProvider, [{
      key: "onLoaded",
      value: function onLoaded(cb) {
        if (typeof cb !== 'function') {
          return;
        }

        this._onLoaded = cb;

        if (this.isLoaded()) {
          this._onLoaded();
        }
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return this._isLoaded;
      }
    }, {
      key: "loadJS",
      value: function loadJS() {
        throw new Error('Unimplemented Method: loadJS');
      }
    }, {
      key: "init",
      value: function init(mapData) {
        // TODO(billy) This should be based off a promise that gets created from loadJS
        throw new Error('Unimplemented Method: init');
      }
      /**
       * Given a list of markers, combine markers with the same lat/lng into a single marker
       * @param {object[]} markers The markers to collapse
       */

    }, {
      key: "_collapseMarkers",
      value: function _collapseMarkers(markers) {
        var locationToItem = {};
        markers.forEach(function (m) {
          locationToItem["".concat(m.latitude).concat(m.longitude)] ? locationToItem["".concat(m.latitude).concat(m.longitude)].push(m) : locationToItem["".concat(m.latitude).concat(m.longitude)] = [m];
        });
        var collapsedMarkers = [];

        for (var _i = 0, _Object$entries = Object.entries(locationToItem); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              _markers = _Object$entries$_i[1];

          if (_markers.length > 1) {
            var collapsedMarker = {
              item: _markers.map(function (m) {
                return m.item;
              }),
              label: _markers.length,
              latitude: _markers[0].latitude,
              longitude: _markers[0].longitude
            };
            collapsedMarkers.push(collapsedMarker);
          } else {
            collapsedMarkers.push(_markers[0]);
          }
        }

        return collapsedMarkers;
      }
    }], [{
      key: "shouldHideMap",
      value: function shouldHideMap(mapData, resultsContext, showEmptyMap, visibleForNoResults) {
        if (resultsContext === ResultsContext.NO_RESULTS && visibleForNoResults !== undefined) {
          return !visibleForNoResults;
        }

        var hasEmptyMap = !mapData || mapData.mapMarkers.length <= 0;
        return hasEmptyMap && !showEmptyMap;
      }
    }, {
      key: "DEFAULT_PIN_CONFIG",
      get: function get() {
        return {
          icon: {
            anchor: null,
            // e.g. { x: 1, y: 1 }
            svg: null,
            url: null,
            scaledSize: null // e.g. { w: 20, h: 20 }

          },
          labelType: 'numeric'
        };
      }
    }]);

    return MapProvider;
  }();

  /* global google */

  /**
   * GoogleMapProvider is an implementation of a MapProvider
   * that handles the integration with the third party API to expose maps.
   * @extends MapProvider
   */

  var GoogleMapProvider =
  /*#__PURE__*/
  function (_MapProvider) {
    _inherits(GoogleMapProvider, _MapProvider);

    function GoogleMapProvider(opts) {
      var _this;

      _classCallCheck(this, GoogleMapProvider);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GoogleMapProvider).call(this, opts)); // normalize because google's zoom is effectively 1 unit of difference away from mapbox zoom

      _this._zoomOffset = 1;
      _this._zoom += _this._zoomOffset;
      _this._clientId = opts.clientId;
      _this._signature = opts.signature;

      if (!_this.hasValidClientCredentials() && !_this._apiKey) {
        throw new Error('GoogleMapsProvider: Missing `apiKey` or {`clientId`, `signature`}');
      }

      return _this;
    }

    _createClass(GoogleMapProvider, [{
      key: "loadJS",
      value: function loadJS() {
        var self = this;

        var onLoad = function onLoad() {
          if (typeof self._onLoaded === 'function') {
            self._onLoaded();
          }
        };

        if (typeof google !== 'undefined') {
          self._isLoaded = true;
          onLoad();
          return;
        }

        var script = DOM.query('#yext-map-js');

        if (script) {
          var onLoadFunc = script.onload;

          script.onload = function () {
            onLoadFunc();
            onLoad();
          };

          return;
        }

        script = DOM.createEl('script', {
          id: 'yext-map-js',
          onload: function onload() {
            self._isLoaded = true;
            onLoad();
          },
          async: true,
          src: "https://maps.googleapis.com/maps/api/js?".concat(self.generateCredentials())
        });
        DOM.append('body', script);
      }
    }, {
      key: "generateCredentials",
      value: function generateCredentials() {
        if (this.hasValidClientCredentials()) {
          return "client=".concat(this._clientId);
        } else {
          return "key=".concat(this._apiKey);
        }
      }
    }, {
      key: "hasValidClientCredentials",
      value: function hasValidClientCredentials() {
        return this._clientId;
      }
    }, {
      key: "init",
      value: function init(el, mapData, resultsContext) {
        var _this2 = this;

        if (MapProvider.shouldHideMap(mapData, resultsContext, this._showEmptyMap, this._noResults.visible)) {
          this._map = null;
          return this;
        } // NOTE(billy) This timeout is a hack for dealing with async nature.
        // Only here for demo purposes, so we'll fix later.


        setTimeout(function () {
          var container = DOM.query(el);
          _this2.map = new google.maps.Map(container, {
            zoom: _this2._zoom,
            center: _this2.getCenterMarker(mapData)
          }); // Apply our search data to our GoogleMap

          if (mapData && mapData.mapMarkers.length) {
            (function () {
              var collapsedMarkers = _this2._collapsePins ? _this2._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
              var googleMapMarkerConfigs = GoogleMapMarkerConfig.from(collapsedMarkers, _this2._pinConfig, _this2.map);
              var bounds = new google.maps.LatLngBounds();

              var _loop = function _loop(i) {
                var marker = new google.maps.Marker(googleMapMarkerConfigs[i]);

                if (_this2._onPinClick) {
                  marker.addListener('click', function () {
                    return _this2._onPinClick(collapsedMarkers[i].item);
                  });
                }

                if (_this2._onPinMouseOver) {
                  marker.addListener('mouseover', function () {
                    return _this2._onPinMouseOver(collapsedMarkers[i].item);
                  });
                }

                if (_this2._onPinMouseOut) {
                  marker.addListener('mouseout', function () {
                    return _this2._onPinMouseOut(collapsedMarkers[i].item);
                  });
                }

                bounds.extend(marker.position);
              };

              for (var i = 0; i < googleMapMarkerConfigs.length; i++) {
                _loop(i);
              }

              if (googleMapMarkerConfigs.length >= 2) {
                _this2.map.fitBounds(bounds);
              }
            })();
          }
        }, 100);
      }
    }, {
      key: "getCenterMarker",
      value: function getCenterMarker(mapData) {
        return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude ? {
          lng: mapData.mapCenter.longitude,
          lat: mapData.mapCenter.latitude
        } : {
          lng: this._defaultPosition.lng,
          lat: this._defaultPosition.lat
        };
      }
    }]);

    return GoogleMapProvider;
  }(MapProvider); // TODO(billy) Move to own class
  var GoogleMapMarkerConfig =
  /*#__PURE__*/
  function () {
    function GoogleMapMarkerConfig(opts) {
      _classCallCheck(this, GoogleMapMarkerConfig);

      /**
       * A reference to the google map, that the marker is appended to
       * @type {GoogleMap}
       */
      this.map = opts.map || undefined;
      /**
       * The coordinates of the marker (lat/lng)
       * @type {Object}
       */

      this.position = opts.position || {
        lat: undefined,
        lng: undefined
      };
      /**
       * The properties/settings of the icon used for the marker
       * e.g. {
       *        anchor: { x: 0, y: 0 }
       *        url: 'path/to/url.jpg'
       *        scaledSize: { w: 0, h: 0 }
       *       }
       *
       * @type {object}
       */

      this.icon = opts.icon || undefined;
      /**
       * The label of the marker to use
       * @type {string}
       */

      this.label = opts.label || undefined;
    }
    /**
     * Serializes an array of marker configs
     * @param {GoogleMapMarkerConfig[]} googleMapMarkerConfigs
     * @returns {string[]}
     */


    _createClass(GoogleMapMarkerConfig, null, [{
      key: "serialize",
      value: function serialize(googleMapMarkerConfigs) {
        var serializedMarkers = [];
        googleMapMarkerConfigs.forEach(function (marker) {
          serializedMarkers.push("markers=label:".concat(marker.label, "|").concat(marker.position.lat, ",").concat(marker.position.lng));
        });
        return serializedMarkers.join('&');
      }
      /**
       * Converts the storage data model of markers into GoogleAPIMarker
       * @param {object[]} markers The data of the marker
       * @param {(Object|function)} pinConfig The configuration to apply to the marker
       * @param {GoogleMap} map reference to the google map to apply the marker to
       * @returns {GoogleMapMarkerConfig[]}
       */

    }, {
      key: "from",
      value: function from(markers, pinConfig, map) {
        var googleMapMarkerConfigs = [];

        if (!Array.isArray(markers)) {
          markers = [markers];
        }

        markers.forEach(function (marker) {
          // Support configuration as a function
          var pinConfigObj = pinConfig;

          if (typeof pinConfig === 'function') {
            pinConfigObj = pinConfig(marker.item, MapProvider.DEFAULT_PIN_CONFIG, marker);
          } // Transform our Configuration Object into the expected
          // Google API format.


          var icon = {};

          if (pinConfigObj.anchor) {
            icon.anchor = google.maps.Point(pinConfigObj.anchor.x, pinConfigObj.anchor.y);
          }

          if (pinConfigObj.scaledSize) {
            icon.scaledSize = new google.maps.Size(pinConfigObj.scaledSize.w, pinConfigObj.scaledSize.h);
          }

          if (pinConfigObj.url) {
            icon.url = pinConfigObj.url;
          }

          if (pinConfigObj.svg) {
            icon.url = "data:image/svg+xml;charset=utf-8, ".concat(encodeURIComponent(pinConfigObj.svg));
          }

          var label;

          if (pinConfigObj.label) {
            label = pinConfigObj.label;
          } else {
            label = marker.label.toString();
          } // NOTE(billy) Google maps doesn't handle empty icon objects nicely
          // Make google maps happy if no settings for icon are provided;


          if (Object.keys(icon).length === 0) {
            icon = undefined;
          }

          googleMapMarkerConfigs.push(new GoogleMapMarkerConfig({
            map: map,
            position: {
              lat: marker.latitude,
              lng: marker.longitude
            },
            icon: icon,
            label: label
          }));
        });
        return googleMapMarkerConfigs;
      }
    }]);

    return GoogleMapMarkerConfig;
  }();

  /* global mapboxgl */

  /**
   * MapBoxMapProvider is an implementation of a MapProvider
   * that handles the integration with the third party API to expose maps.
   * @extends MapProvider
   */

  var MapBoxMapProvider =
  /*#__PURE__*/
  function (_MapProvider) {
    _inherits(MapBoxMapProvider, _MapProvider);

    function MapBoxMapProvider() {
      _classCallCheck(this, MapBoxMapProvider);

      return _possibleConstructorReturn(this, _getPrototypeOf(MapBoxMapProvider).apply(this, arguments));
    }

    _createClass(MapBoxMapProvider, [{
      key: "loadJS",

      /**
       * Load the external JS Library
       * @param {function} onLoad An optional callback to invoke once the JS is loaded.
       */
      value: function loadJS(onLoad) {
        var _this = this;

        var script = DOM.createEl('script', {
          id: 'yext-map-js',
          onload: function onload() {
            _this._isLoaded = true;
            mapboxgl.accessToken = _this._apiKey;

            if (typeof onLoad === 'function') {
              onLoad();
            }

            if (typeof _this._onLoaded === 'function') {
              _this._onLoaded();
            }
          },
          async: true,
          src: 'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'
        });
        var css = DOM.createEl('link', {
          id: 'yext-map-css',
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css'
        });
        DOM.append('body', css);
        DOM.append('body', script);
      }
    }, {
      key: "init",
      value: function init(el, mapData, resultsContext) {
        var _this2 = this;

        if (MapProvider.shouldHideMap(mapData, resultsContext, this._showEmptyMap, this._noResults.visible)) {
          this._map = null;
          return this;
        }

        var container = DOM.query(el);
        this._map = new mapboxgl.Map({
          container: container,
          zoom: this._zoom,
          style: 'mapbox://styles/mapbox/streets-v9',
          center: this.getCenterMarker(mapData)
        });

        if (mapData && mapData.mapMarkers.length) {
          (function () {
            var collapsedMarkers = _this2._collapsePins ? _this2._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
            var mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(collapsedMarkers, _this2._pinConfig, _this2._map);
            var bounds = new mapboxgl.LngLatBounds();

            var _loop = function _loop(i) {
              var wrapper = mapboxMapMarkerConfigs[i].wrapper;
              var coords = new mapboxgl.LngLat(mapboxMapMarkerConfigs[i].position.longitude, mapboxMapMarkerConfigs[i].position.latitude);
              var marker = new mapboxgl.Marker(wrapper).setLngLat(coords);
              bounds.extend(marker.getLngLat());
              marker.addTo(_this2._map);

              if (_this2._onPinClick) {
                marker.getElement().addEventListener('click', function () {
                  return _this2._onPinClick(collapsedMarkers[i].item);
                });
              }

              if (_this2._onPinMouseOver) {
                marker.getElement().addEventListener('mouseover', function () {
                  return _this2._onPinMouseOver(collapsedMarkers[i].item);
                });
              }

              if (_this2._onPinMouseOut) {
                marker.getElement().addEventListener('mouseout', function () {
                  return _this2._onPinMouseOut(collapsedMarkers[i].item);
                });
              }
            };

            for (var i = 0; i < mapboxMapMarkerConfigs.length; i++) {
              _loop(i);
            }

            if (mapboxMapMarkerConfigs.length >= 2) {
              _this2._map.fitBounds(bounds, {
                padding: 50
              });
            }
          })();
        }
      }
    }, {
      key: "getCenterMarker",
      value: function getCenterMarker(mapData) {
        return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude ? [mapData.mapCenter.longitude, mapData.mapCenter.latitude] : {
          lng: this._defaultPosition.lng,
          lat: this._defaultPosition.lat
        };
      }
    }]);

    return MapBoxMapProvider;
  }(MapProvider);
  var MapBoxMarkerConfig =
  /*#__PURE__*/
  function () {
    function MapBoxMarkerConfig(opts) {
      _classCallCheck(this, MapBoxMarkerConfig);

      /**
       * A reference to the mapbox map, that the marker is appended to
       * @type {MapBox}
       */
      this.map = opts.map || undefined;
      /**
       * The coordinates of the marker (lat/lng)
       * @type {Object}
       */

      this.position = opts.position || {
        latitude: undefined,
        longitude: undefined
      };
      /**
       * The html element to be used as the map marker
       * @type {object}
       */

      this.wrapper = opts.wrapper || undefined;
      /**
       * The label of the marker to use
       * @type {string}
       */

      this.label = opts.label || undefined;
      /**
       * The url of the pin for the static map
       * @type {string}
       */

      this.staticMapPin = opts.staticMapPin || undefined;
    }
    /**
     * Serializes an array of marker configs
     * @param {MapBoxMarkerConfig[]} mapboxMapMarkerConfigs
     * @returns {string[]}
     */


    _createClass(MapBoxMarkerConfig, null, [{
      key: "serialize",
      value: function serialize(mapboxMapMarkerConfigs) {
        var serializedMarkers = [];
        mapboxMapMarkerConfigs.forEach(function (marker) {
          if (marker.staticMapPin) {
            serializedMarkers.push("url-".concat(marker.staticMapPin, "(").concat(marker.position.longitude, ",").concat(marker.position.latitude, ")"));
          } else {
            serializedMarkers.push("pin-s-".concat(marker.label, "(").concat(marker.position.longitude, ",").concat(marker.position.latitude, ")"));
          }
        });
        return serializedMarkers.join(',');
      }
      /**
       * Converts the storage data model of markers into MapBoxMarkerConfig
       * @param {MapBox} A reference to the mapbox map to apply the marker to
       * @param {object[]} markers The data of the marker
       * @param {Object} pinConfig The configuration to apply to the marker
       * @returns {MapBoxMarkerConfig[]}
       */

    }, {
      key: "from",
      value: function from(markers, pinConfig, map) {
        var mapboxMapMarkerConfigs = [];

        if (!Array.isArray(markers)) {
          markers = [markers];
        }

        markers.forEach(function (marker) {
          // Support configuration as a function
          var pinConfigObj = pinConfig;

          if (typeof pinConfig === 'function') {
            pinConfigObj = pinConfig(marker.item, MapProvider.DEFAULT_PIN_CONFIG, marker);
          }

          var wrapper = pinConfigObj.wrapper ? pinConfigObj.wrapper : null;
          var staticMapPin = pinConfigObj.staticMapPin ? pinConfigObj.staticMapPin : null;
          mapboxMapMarkerConfigs.push(new MapBoxMarkerConfig({
            map: map,
            position: {
              latitude: marker.latitude,
              longitude: marker.longitude
            },
            wrapper: wrapper,
            label: marker.label,
            staticMapPin: staticMapPin
          }));
        });
        return mapboxMapMarkerConfigs;
      }
    }]);

    return MapBoxMarkerConfig;
  }();

  var ProviderTypes = {
    'google': GoogleMapProvider,
    'mapbox': MapBoxMapProvider
  };

  var MapComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MapComponent, _Component);

    function MapComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, MapComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MapComponent).call(this, opts, systemOpts));
      /**
       * Bind this component to listen to the storage based on this key
       */

      _this.moduleId = StorageKeys.VERTICAL_RESULTS;
      /**
       * Configuration for the behavior when there are no vertical results.
       */

      _this._noResults = _objectSpread({
        displayAllResults: false,
        visible: undefined,
        template: ''
      }, opts.noResults || _this.core.globalStorage.getState(StorageKeys.NO_RESULTS_CONFIG));
      /**
       * An aliased used to determine the type of map provider to use
       * @type {string}
       */

      _this._mapProvider = opts.mapProvider;

      if (!_this._mapProvider || !(_this._mapProvider.toLowerCase() in ProviderTypes)) {
        throw new Error('MapComponent: Invalid Map Provider; must be `google` or `mapBox`');
      }
      /**
       * A reference to an instance of the {MapProvider} that's constructed
       * @type {MapProvider}
       */


      _this._map = null;
      return _this;
    }

    _createClass(MapComponent, [{
      key: "getProviderInstance",
      // TODO(billy) Make ProviderTypes a factory class
      value: function getProviderInstance(type) {
        var _config = _objectSpread({}, this._config, {
          noResults: this._noResults
        });

        return new ProviderTypes[type.toLowerCase()](_config);
      }
    }, {
      key: "onCreate",
      value: function onCreate() {
        this._map = this.getProviderInstance(this._mapProvider);

        this._map.loadJS();
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        this._map.onLoaded(function () {
          _this2._map.init(_this2._container, _this2.getState('map'), _this2.getState('resultsContext'));
        });
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        if (Object.keys(data).length === 0) {
          return this;
        }

        if (data.resultsContext === ResultsContext.NO_RESULTS && !this._noResults.displayAllResults) {
          data = {
            resultsContext: data.resultsContext
          };
        }

        return _get(_getPrototypeOf(MapComponent.prototype), "setState", this).call(this, data, val);
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/map';
      }
    }, {
      key: "type",
      get: function get() {
        return 'Map';
      }
    }]);

    return MapComponent;
  }(Component);

  var cardTemplates = {
    'Standard': 'cards/standard',
    'Accordion': 'cards/accordion',
    'Legacy': 'cards/legacy'
  };
  var cardTypes = {
    'Standard': 'StandardCard',
    'Accordion': 'AccordionCard',
    'Legacy': 'LegacyCard'
  };

  var CardConfig = function CardConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CardConfig);

    Object.assign(this, config);
    /**
     * The card type to use
     * @type {string}
     */

    this.cardType = config.cardType || 'Standard';
    /**
     * Data mappings is a function specified in the config
     * that returns config based on the data passed into card
     * @type {Function}
     */

    this.dataMappings = config.dataMappings || function () {};
    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */


    this.callsToAction = config.callsToAction || [];
    /**
     * The index of the card.
     * @type {number}
     */

    this._index = config._index || 0;
    /**
     * Whether this card is part of a universal search
     */

    this.isUniversal = config.isUniversal || false;
  };

  var CardComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CardComponent, _Component);

    function CardComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CardComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CardComponent).call(this, new CardConfig(config), systemConfig));
      /**
       * config.data comes from the data-prop attribute passed in
       * from the parent component.
       * @type {Object}
       */

      var data = config.data || {};
      /**
       * The result data for this card.
       * @type {Result}
       */

      _this.result = data.result || {};
      /**
       * Vertical key for the search.
       * @type {string}
       */

      _this.verticalKey = data.verticalKey;
      return _this;
    }

    _createClass(CardComponent, [{
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        var rtfElement = DOM.query(this._container, '.js-yxt-rtfValue');

        if (rtfElement) {
          var fieldName = rtfElement.dataset.fieldName;
          DOM.on(rtfElement, 'click', function (e) {
            return _this2._handleRtfClickAnalytics(e, fieldName);
          });
        }
      }
      /**
       * A click handler for links in a Rich Text attriubte. When such a link is
       * clicked, an {@link AnalyticsEvent} needs to be fired.
       *
       * @param {MouseEvent} event The click event.
       * @param {string} fieldName The name of the Rich Text field used in the
       *                           attriubte.
       */

    }, {
      key: "_handleRtfClickAnalytics",
      value: function _handleRtfClickAnalytics(event, fieldName) {
        var ctaType = event.target.dataset.ctaType;

        if (!ctaType) {
          return;
        }

        var analyticsOptions = {
          directAnswer: false,
          verticalKey: this._config.data.verticalKey,
          searcher: this._config.isUniversal ? 'UNIVERSAL' : 'VERTICAL',
          entityId: this._config.data.result.id,
          url: event.target.href
        };

        if (!fieldName) {
          console.warn('Field name not provided for RTF click analytics');
        } else {
          analyticsOptions.fieldName = fieldName;
        }

        var analyticsEvent = new AnalyticsEvent(ctaType);
        analyticsEvent.addOptions(analyticsOptions);
        this.analyticsReporter.report(analyticsEvent);
      }
    }, {
      key: "setState",
      value: function setState(data) {
        var cardType = this._config.cardType; // Use the cardType as component name if it is not a built-in type

        var cardComponentName = cardTypes[cardType] || cardType;
        return _get(_getPrototypeOf(CardComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          result: this.result,
          cardType: cardComponentName
        }));
      }
    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        var updatedData = {
          verticalKey: this.verticalKey,
          result: data
        };

        var newOpts = _objectSpread({
          showOrdinal: this._config.showOrdinal,
          dataMappings: this._config.dataMappings,
          callsToAction: this._config.callsToAction,
          verticalKey: this._config.verticalKey,
          _index: this._config._index,
          isUniversal: this._config.isUniversal,
          modifier: this._config.modifier
        }, opts);

        return _get(_getPrototypeOf(CardComponent.prototype), "addChild", this).call(this, updatedData, type, newOpts);
      }
      /**
       * Used by children card components like StandardCardComponent to
       * apply given template mappings as config.
       * @param {Result} result
       * @param {Object|Function} dataMappings
       */

    }], [{
      key: "applyDataMappings",
      value: function applyDataMappings(result, dataMappings) {
        var config = {};

        if (typeof dataMappings === 'function') {
          dataMappings = dataMappings(result);
        }

        if (_typeof(dataMappings) === 'object') {
          Object.entries(dataMappings).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                attribute = _ref2[0],
                value = _ref2[1];

            if (typeof value === 'function') {
              config[attribute] = value(result);
            } else {
              config[attribute] = value;
            }
          });
        }

        return config;
      }
    }, {
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'cards/card';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'Card';
      }
    }]);

    return CardComponent;
  }(Component);

  /**
   * Converts an array of {@link AppliedQueryFilter}s into equivalent {@link SimpleFilterNode}s.
   * @param {Array<AppliedQueryFilter>} nlpFilters
   * @returns {Array<SimpleFilterNode>}
   */

  function convertNlpFiltersToFilterNodes(nlpFilters) {
    return nlpFilters.map(function (nlpFilter) {
      return FilterNodeFactory.from({
        filter: Filter.from(nlpFilter.filter),
        metadata: new FilterMetadata({
          fieldName: nlpFilter.key,
          displayValue: nlpFilter.value
        })
      });
    });
  }
  /**
   * Flattens an array of {@link FilterNode}s into an array
   * of their constituent leaf {@link SimpleFilterNode}s.
   * @param {Array<FilterNode>} filterNodes
   * @returns {Array<SimpleFilterNode>}
   */

  function flattenFilterNodes(filterNodes) {
    return filterNodes.flatMap(function (fn) {
      return fn.getSimpleDescendants();
    });
  }
  /**
   * Returns the given array of {@link FilterNode}s,
   * removing FilterNodes that are empty or have a field id listed as a hidden.
   * @param {Array<FilterNode>} filterNodes
   * @param {Array<string>} hiddenFields
   * @returns {Array<FilterNode>}
   */

  function pruneFilterNodes(filterNodes, hiddenFields) {
    return filterNodes.filter(function (fn) {
      var _fn$getMetadata = fn.getMetadata(),
          fieldName = _fn$getMetadata.fieldName,
          displayValue = _fn$getMetadata.displayValue;

      if (!fieldName || !displayValue) {
        return false;
      }

      var fieldId = fn.getFilter().getFilterKey();
      return !hiddenFields.includes(fieldId);
    });
  }

  var DEFAULT_CONFIG$5 = {
    showResultCount: true,
    showAppliedFilters: true,
    showFieldNames: false,
    resultsCountSeparator: '|',
    verticalURL: undefined,
    showChangeFilters: false,
    removable: false,
    delimiter: '|',
    isUniversal: false,
    labelText: 'Filters applied to this search:',
    removableLabelText: 'Remove this filter',
    resultsCountTemplate: '',
    hiddenFields: []
  };

  var ResultsHeaderComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ResultsHeaderComponent, _Component);

    function ResultsHeaderComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ResultsHeaderComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsHeaderComponent).call(this, _objectSpread({}, DEFAULT_CONFIG$5, {}, config), systemConfig));
      var data = config.data || {};
      /**
       * Total number of results.
       * @type {number}
       */

      _this.resultsCount = data.resultsCount || 0;
      /**
       * Number of results displayed on the page.
       * @type {number}
       */

      _this.resultsLength = data.resultsLength || 0;
      /**
       * The compiled custom results count template, if the user specifies one.
       * @type {Function}
       */

      _this._compiledResultsCountTemplate = _this._renderer.compile(_this._config.resultsCountTemplate);
      /**
       * Array of nlp filters in the search response.
       * @type {Array<AppliedQueryFilter>}
       */

      _this.nlpFilterNodes = convertNlpFiltersToFilterNodes(data.nlpFilters || []);
      /**
       * TODO (SPR-2455): Ideally, we would be able to set moduleId to DYNAMIC_FILTERS, the actual data
       * we are listening to changes to, instead of this bespoke RESULTS_HEADER storage key.
       * The issue is that when two components share a moduleId, if that moduleId listener is ever
       * unregistered with the off() method, all listeners to that moduleId are unregistered.
       * With child components, this is something that happens whenever the parent component rerenders.
       */

      _this.moduleId = StorageKeys.RESULTS_HEADER;
      return _this;
    }

    _createClass(ResultsHeaderComponent, [{
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        var removableFilterTags = DOM.queryAll(this._container, '.js-yxt-ResultsHeader-removableFilterTag');
        removableFilterTags.forEach(function (tag) {
          DOM.on(tag, 'click', function () {
            return _this2._removeFilterTag(tag);
          });
        });
      }
      /**
       * Call remove callback for the {@link FilterNode} corresponding to a specific
       * removable filter tag.
       * @param {HTMLElement} tag
       */

    }, {
      key: "_removeFilterTag",
      value: function _removeFilterTag(tag) {
        var filterId = tag.dataset.filterId;
        var filterNode = this.appliedFilterNodes[filterId];
        filterNode.remove();
        this.core.verticalSearch(this._config.verticalKey, {
          setQueryParams: true,
          resetPagination: true,
          useFacets: true
        });
      }
      /**
       * Returns the currently applied nlp filter nodes, with nlp filter nodes that
       * are duplicates of other filter nodes removed or filter on hiddenFields removed.
       * @returns {Array<FilterNode>}
       */

    }, {
      key: "_getPrunedNlpFilterNodes",
      value: function _getPrunedNlpFilterNodes() {
        var _this3 = this;

        var duplicatesRemoved = this.nlpFilterNodes.filter(function (nlpNode) {
          var isDuplicate = _this3.appliedFilterNodes.find(function (appliedNode) {
            return appliedNode.hasSameFilterAs(nlpNode);
          });

          return !isDuplicate;
        });
        return pruneFilterNodes(duplicatesRemoved, this._config.hiddenFields);
      }
      /**
       * Combine all of the applied filters into a format the handlebars
       * template can work with.
       * Keys are the fieldName of the filter. Values are an array of objects with a
       * displayValue and dataFilterId.
       * TODO (SPR-2350): give every node a unique id, and use that instead of index for
       * dataFilterId.
       * @returns {Array<Object>}
       */

    }, {
      key: "_groupAppliedFilters",
      value: function _groupAppliedFilters() {
        var _this4 = this;

        var getFieldName = function getFieldName(filterNode) {
          return filterNode.getMetadata().fieldName;
        };

        var parseNlpFilterDisplay = function parseNlpFilterDisplay(filterNode) {
          return {
            displayValue: filterNode.getMetadata().displayValue
          };
        };

        var parseRemovableFilterDisplay = function parseRemovableFilterDisplay(filterNode, index) {
          return {
            displayValue: filterNode.getMetadata().displayValue,
            dataFilterId: index,
            removable: _this4._config.removable
          };
        };

        var removableNodes = groupArray(this.appliedFilterNodes, getFieldName, parseRemovableFilterDisplay);

        var prunedNlpFilterNodes = this._getPrunedNlpFilterNodes();

        return groupArray(prunedNlpFilterNodes, getFieldName, parseNlpFilterDisplay, removableNodes);
      }
      /**
       * Returns an array of object the handlebars can understand and render
       * the applied filters bar from. Our handlebars can only loop through arrays,
       * not objects, so we need to reformat the grouped applied filters.
       * @returns {Array<Object>}
       */

    }, {
      key: "_createAppliedFiltersArray",
      value: function _createAppliedFiltersArray() {
        var groupedFilters = this._groupAppliedFilters();

        return Object.keys(groupedFilters).map(function (label) {
          return {
            label: label,
            filterDataArray: groupedFilters[label]
          };
        });
      }
      /**
       * Pulls applied filter nodes from {@link FilterRegistry}, then retrives an array of
       * the leaf nodes, and then removes hidden or empty {@link FilterNode}s. Then appends
       * the currently applied nlp filters.
       */

    }, {
      key: "_calculateAppliedFilterNodes",
      value: function _calculateAppliedFilterNodes() {
        var filterNodes = this.core.filterRegistry.getAllFilterNodes();
        var simpleFilterNodes = flattenFilterNodes(filterNodes);
        return pruneFilterNodes(simpleFilterNodes, this._config.hiddenFields);
      }
    }, {
      key: "setState",
      value: function setState(data) {
        var offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET);
        this.appliedFilterNodes = this._calculateAppliedFilterNodes();

        var appliedFiltersArray = this._createAppliedFiltersArray();

        var shouldShowFilters = appliedFiltersArray.length > 0 && this._config.showAppliedFilters;
        var resultsCountData = {
          resultsCount: this.resultsCount,
          resultsCountStart: offset + 1,
          resultsCountEnd: offset + this.resultsLength
        };
        return _get(_getPrototypeOf(ResultsHeaderComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {}, resultsCountData, {
          showResultSeparator: this._config.resultsCountSeparator && this._config.showResultCount && shouldShowFilters,
          shouldShowFilters: shouldShowFilters,
          appliedFiltersArray: appliedFiltersArray,
          customResultsCount: this._compiledResultsCountTemplate(resultsCountData)
        }));
      }
    }], [{
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/resultsheader';
      }
    }, {
      key: "type",
      get: function get() {
        return 'ResultsHeader';
      }
    }]);

    return ResultsHeaderComponent;
  }(Component);

  /**
   * Used to parse config options, defaulting to different synonyms and
   * finally a default value. Option names with periods will be parsed
   * as multiple child object accessors, i.e. trying to access 'first.second.option'
   * will first look for config['first']['second']['option'].
   *
   * This is mostly needed for boolean config values, since boolean operators,
   * which we commonly use for defaulting config options, do not work properly
   * in those cases.
   * @param {Object} config
   * @param {Array<string>}
   * @param {any} defaultValue
   */
  function defaultConfigOption(config, synonyms, defaultValue) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = synonyms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var name = _step.value;
        var accessors = name.split('.');
        var parentConfig = config;
        var skip = false;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = accessors.slice(0, -1)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var childConfigAccessor = _step2.value;

            if (!(childConfigAccessor in parentConfig)) {
              skip = true;
              break;
            }

            parentConfig = parentConfig[childConfigAccessor];
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var configName = accessors[accessors.length - 1];

        if (!skip && configName in parentConfig) {
          return parentConfig[configName];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return defaultValue;
  }

  var VerticalResultsConfig = function VerticalResultsConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, VerticalResultsConfig);

    Object.assign(this, config);
    /**
     * isUniversal is set to true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */

    this.isUniversal = config.isUniversal || false;
    var parentOpts = config._parentOpts || {};
    /**
     * Custom render function
     * @type {function}
     */

    this.renderItem = config.renderItem || parentOpts.renderItem;
    /**
     * Custom item template
     * @type {string}
     */

    this.itemTemplate = config.itemTemplate || parentOpts.itemTemplate;
    /**
     * The maximum number of columns to display, supports 1, 2, 3, or 4.
     * @type {number}
     */

    this.maxNumberOfColumns = config.maxNumberOfColumns || 1;
    /**
     * The config to pass to the card
     * @type {Object}
     */

    this.card = config.card || {};
    /**
     * Vertical URL for view more link
     * @type {string}
     */

    this.verticalURL = config.verticalURL;
    /**
     * Whether to display the number of results.
     * @type {boolean}
     */

    this.showResultCount = config.showResultCount === undefined ? true : config.showResultCount;
    /**
     * A custom results count template.
     * @type {string}
     */

    this.resultsCountTemplate = config.resultsCountTemplate || '';
    /**
     * Config for the applied filters in the results header.
     * @type {Object}
     */

    this.appliedFilters = {
      /**
       * If present, show the filters that were ultimately applied to this query
       * @type {boolean}
       */
      show: defaultConfigOption(config, ['appliedFilters.show', 'showAppliedFilters'], true),

      /**
       * If showResultCount and showAppliedFilters are true,
       * display this separator between the result count and the applied query filters
       * @type {string}
       */
      resultsCountSeparator: defaultConfigOption(config, ['appliedFilters.resultsCountSeparator', 'resultsCountSeparator'], '|'),

      /**
       * If showAppliedFilters is true, show the field name in the string followed by a colon.
       * @type {boolean}
       */
      showFieldNames: defaultConfigOption(config, ['appliedFilters.showFieldNames', 'showFieldNames'], false),

      /**
       * Any fieldIds in hiddenFields will be hidden from the list of appied filters.
       * @type {Array<string>}
       */
      hiddenFields: defaultConfigOption(config, ['appliedFilters.hiddenFields', 'hiddenFields'], ['builtin.entityType']),

      /**
       * The character that should separate each field (and its associated filters) within the applied filter bar
       * @type {string}
       */
      delimiter: defaultConfigOption(config, ['appliedFilters.delimiter'], '|'),

      /**
       * If the filters are shown, whether or not they should be removable from within the applied filter bar.
       * @type {boolean}
       */
      removable: defaultConfigOption(config, ['appliedFilters.removable'], false),

      /**
       * Whether to show the change filters link on universal results.
       * @type {boolean}
       **/
      showChangeFilters: defaultConfigOption(config, ['appliedFilters.showChangeFilters', 'showChangeFilters'], false),

      /**
       * The text for the change filters link.
       * @type {string}
       */
      changeFiltersText: defaultConfigOption(config, ['appliedFilters.changeFiltersText', 'changeFiltersText']),

      /**
       * The aria-label given to the applied filters bar. Defaults to 'Filters applied to this search:'.
       * @type {string}
       **/
      labelText: defaultConfigOption(config, ['appliedFilters.labelText'], 'Filters applied to this search:'),

      /**
       * The aria-label given to the removable filter buttons.
       * @type {string}
       */
      removableLabelText: defaultConfigOption(config, ['appliedFilters.removableLabelText'], 'Remove this filter')
    };
    /**
     * Text for the view more button.
     * @type {string}
     */

    this.viewMoreLabel = defaultConfigOption(config, ['viewMoreLabel', 'viewAllText'], 'View More');
  };

  var VerticalResultsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(VerticalResultsComponent, _Component);

    function VerticalResultsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, VerticalResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalResultsComponent).call(this, new VerticalResultsConfig(APPLY_SYNONYMS(config)), systemConfig));

      var noResultsConfig = _this._config.noResults || _this.core.globalStorage.getState(StorageKeys.NO_RESULTS_CONFIG);
      /**
       * A parsed version of the noResults config provided to the component.
       * Applies sensible defaults if certain values are not set.
       * @type {Object}
       * @private
       */


      _this._noResultsConfig = Object.assign({
        displayAllResults: false,
        template: ''
      }, noResultsConfig);
      /**
       * Boolean indicating if legacy no results display should be used.
       * @type {boolean}
       * @private
       */

      _this._useLegacyNoResults = _this._config.isUniversal || !noResultsConfig;
      /**
       * _displayAllResults controls if all results for the vertical will display
       * when there are no results for a query.
       * @type {boolean}
       * @private
       */

      _this._displayAllResults = _this._noResultsConfig.displayAllResults;
      /**
       * Specifies a custom no results template.
       *
       * @type {string}
       * @private
       */

      _this._noResultsTemplate = _this._noResultsConfig.template;

      _this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, function (results) {
        if (results.searchState === SearchStates.SEARCH_COMPLETE) {
          _this.setState(results);
        }
      });
      /**
       * Vertical config from config, if not present, fall back to global verticalPagesConfig
       * @type {Array.<object>}
       * @private
       */


      _this._verticalsConfig = config.verticalPages || _this.core.globalStorage.getState(StorageKeys.VERTICAL_PAGES_CONFIG).get() || [];
      /**
       * @type {Array<Result>}
       */

      _this.results = [];
      _this.numColumns = _this._config.maxNumberOfColumns;
      /**
       * Config options used in the {@link ResultsHeaderComponent}
       */

      _this.resultsHeaderOpts = {
        showFieldNames: _this._config.appliedFilters.showFieldNames,
        resultsCountSeparator: _this._config.appliedFilters.resultsCountSeparator,
        showAppliedFilters: _this._config.appliedFilters.show,
        showChangeFilters: _this._config.appliedFilters.showChangeFilters,
        changeFiltersText: _this._config.appliedFilters.changeFiltersText,
        showResultCount: _this._config.showResultCount,
        removable: _this._config.appliedFilters.removable,
        delimiter: _this._config.appliedFilters.delimiter,
        labelText: _this._config.appliedFilters.labelText,
        removableLabelText: _this._config.appliedFilters.removableLabelText,
        hiddenFields: _this._config.appliedFilters.hiddenFields,
        resultsCountTemplate: _this._config.resultsCountTemplate
      };
      return _this;
    }

    _createClass(VerticalResultsComponent, [{
      key: "mount",
      value: function mount() {
        if (Object.keys(this.getState()).length > 0) {
          _get(_getPrototypeOf(VerticalResultsComponent.prototype), "mount", this).call(this);
        }

        return this;
      }
    }, {
      key: "getBaseUniversalUrl",
      value: function getBaseUniversalUrl() {
        var universalConfig = this._verticalsConfig.find(function (config) {
          return !config.verticalKey;
        }) || {};
        return universalConfig.url;
      }
    }, {
      key: "getUniversalUrl",
      value: function getUniversalUrl() {
        var baseUniversalUrl = this.getBaseUniversalUrl();

        if (!baseUniversalUrl) {
          return undefined;
        }

        return this._getExperienceURL(baseUniversalUrl, new SearchParams(window.location.search.substring(1)));
      }
    }, {
      key: "getVerticalURL",
      value: function getVerticalURL() {
        var _this2 = this;

        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var verticalConfig = this._verticalsConfig.find(function (config) {
          return config.verticalKey === _this2.verticalKey;
        }) || {};
        var verticalURL = this._config.verticalURL || verticalConfig.url || data.verticalURL || this.verticalKey + '.html';
        var dataTabOrder = this.core.globalStorage.getState(StorageKeys.NAVIGATION) ? this.core.globalStorage.getState(StorageKeys.NAVIGATION).tabOrder : [];
        var tabOrder = getTabOrder(this._verticalsConfig, dataTabOrder);
        var params = new SearchParams(window.location.search.substring(1));
        params.set('tabOrder', tabOrder);
        return this._getExperienceURL(verticalURL, params);
      }
      /**
       * Adds parameters that are dynamically set. Removes parameters for facets,
       * filters, and pagination, which should not persist across the experience.
       * @param {string} baseUrl The url append the appropriate params to. Note:
       *    params already on the baseUrl will be stripped
       * @param {SearchParams} params The parameters to include in the experience URL
       * @return {string} The formatted experience URL with appropriate query params
       */

    }, {
      key: "_getExperienceURL",
      value: function _getExperienceURL(baseUrl, params) {
        var _this3 = this;

        params.set(StorageKeys.QUERY, this.query);
        var context = this.core.globalStorage.getState(StorageKeys.API_CONTEXT);

        if (context) {
          params.set(StorageKeys.API_CONTEXT, context);
        }

        var referrerPageUrl = this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);

        if (referrerPageUrl !== null) {
          params.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
        }

        var filteredParams = filterParamsForExperienceLink(params, function (types) {
          return _this3.componentManager.getComponentNamesForComponentTypes(types);
        });
        return replaceUrlParams(baseUrl, filteredParams);
      }
    }, {
      key: "setState",
      value: function setState() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var val = arguments.length > 1 ? arguments[1] : undefined;

        /**
         * @type {Array<Result>}
         */
        this.results = data.results || [];
        this.resultsCount = data.resultsCount;
        this.verticalKey = data.verticalConfigId;
        this.resultsContext = data.resultsContext;
        var searchState = data.searchState || SearchStates.PRE_SEARCH;
        var displayResultsIfExist = this._config.isUniversal || this._displayAllResults || data.resultsContext === ResultsContext.NORMAL;
        this.query = this.core.globalStorage.getState(StorageKeys.QUERY);
        return _get(_getPrototypeOf(VerticalResultsComponent.prototype), "setState", this).call(this, Object.assign({
          results: []
        }, data, {
          isPreSearch: searchState === SearchStates.PRE_SEARCH,
          isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
          isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
          eventOptions: this.eventOptions(),
          universalUrl: this.getUniversalUrl(),
          verticalURL: this.getVerticalURL(data),
          query: this.query,
          currentVerticalLabel: this._currentVerticalLabel,
          resultsPresent: displayResultsIfExist && this.results.length !== 0,
          showNoResults: this.resultsContext === ResultsContext.NO_RESULTS,
          placeholders: new Array(this._config.maxNumberOfColumns - 1),
          numColumns: Math.min(this._config.maxNumberOfColumns, this.results.length),
          useLegacyNoResults: this._useLegacyNoResults,
          iconIsBuiltIn: Icons[this._config.icon],
          nlpFilters: data.appliedQueryFilters || []
        }), val);
      }
      /**
       * helper to construct the eventOptions object for the view all link
       * @returns {string}
       */

    }, {
      key: "eventOptions",
      value: function eventOptions() {
        return JSON.stringify({
          verticalConfigId: this.verticalKey
        });
      }
    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        if (type === MapComponent.type) {
          var _opts = _objectSpread({
            noResults: this._noResultsConfig
          }, this._config.mapConfig, {}, opts);

          var _data = {
            resultsContext: this.getState('resultsContext'),
            map: data
          };
          return _get(_getPrototypeOf(VerticalResultsComponent.prototype), "addChild", this).call(this, _data, type, _opts);
        } else if (type === CardComponent.type) {
          var updatedData = {
            result: this.results[opts._index],
            verticalKey: this.verticalKey
          };

          var newOpts = _objectSpread({
            target: this._config.target
          }, this._config.card, {
            isUniversal: this._config.isUniversal,
            template: this._config.itemTemplate,
            render: this._config.renderItem,
            modifier: this._config.modifier
          }, opts);

          return _get(_getPrototypeOf(VerticalResultsComponent.prototype), "addChild", this).call(this, updatedData, type, newOpts);
        } else if (type === AlternativeVerticalsComponent.type) {
          var hasResults = this.results && this.results.length > 0;
          data = this.core.globalStorage.getState(StorageKeys.ALTERNATIVE_VERTICALS);

          var _newOpts = _objectSpread({
            template: this._noResultsTemplate,
            baseUniversalUrl: this.getBaseUniversalUrl(),
            verticalsConfig: this._verticalsConfig,
            isShowingResults: this._displayAllResults && hasResults
          }, opts);

          return _get(_getPrototypeOf(VerticalResultsComponent.prototype), "addChild", this).call(this, data, type, _newOpts);
        } else if (type === ResultsHeaderComponent.type) {
          var resultsHeaderData = _objectSpread({
            resultsLength: this.results.length,
            resultsCount: this.resultsCount,
            nlpFilters: this.getState('nlpFilters')
          }, data);

          var _opts2 = _objectSpread({}, opts);

          if (this.resultsContext === ResultsContext.NO_RESULTS) {
            _opts2.showAppliedFilters = false;
          }

          return _get(_getPrototypeOf(VerticalResultsComponent.prototype), "addChild", this).call(this, resultsHeaderData, type, _objectSpread({
            isUniversal: this._config.isUniversal,
            verticalURL: this.getVerticalURL(),
            verticalKey: this.verticalKey
          }, this.resultsHeaderOpts, {}, _opts2));
        }

        return _get(_getPrototypeOf(VerticalResultsComponent.prototype), "addChild", this).call(this, data, type, opts);
      }
    }], [{
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/verticalresults';
      }
    }, {
      key: "type",
      get: function get() {
        return 'VerticalResults';
      }
    }]);

    return VerticalResultsComponent;
  }(Component);

  var APPLY_SYNONYMS = function APPLY_SYNONYMS(config) {
    return _objectSpread({
      icon: config.sectionTitleIconName || config.sectionTitleIconUrl,
      title: config.sectionTitle
    }, config);
  };

  var AccordionResultsComponent =
  /*#__PURE__*/
  function (_VerticalResultsCompo) {
    _inherits(AccordionResultsComponent, _VerticalResultsCompo);

    function AccordionResultsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AccordionResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionResultsComponent).call(this, config, systemConfig));
      /**
       * base selector to use when finding DOM targets
       * @type {string}
       */

      _this._selectorBase = config.selectorBase || '.js-yxt-AccordionResult';
      /**
       * collapsed state class
       * @type {string}
       */

      _this.collapsedClass = config.collapsedClass || 'is-collapsed';
      /**
       * vertical config id is required for analytics
       * @type {string|null}
       */

      _this.verticalConfigId = config.verticalConfigId || config._parentOpts.verticalConfigId || null;
      return _this;
    }
    /**
     * the component type
     * @returns {string}
     * @override
     */


    _createClass(AccordionResultsComponent, [{
      key: "onMount",

      /**
       * overrides onMount to add bindings to change the height on click
       * @returns {AccordionResultsComponent}
       * @override
       */
      value: function onMount() {
        var _this2 = this;

        _get(_getPrototypeOf(AccordionResultsComponent.prototype), "onMount", this).call(this); // NOTE(amullings): This is a hack, since currently components with siblings
        // have no way of referring to their own element. We have to grab the first
        // element since sections get added in reverse.


        var selfEl = this._container.firstElementChild;
        var accordionEls = DOM.queryAll(selfEl, this._selectorBase);
        accordionEls.forEach(function (accordionEl) {
          var toggleEl = DOM.query(accordionEl, _this2.toggleSelector());
          var contentEl = DOM.query(accordionEl, _this2.bodySelector());

          _this2.changeHeight(contentEl, accordionEl);

          toggleEl.addEventListener('click', function () {
            _this2.handleClick(accordionEl, toggleEl, contentEl);
          });
        });
        return this;
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(AccordionResultsComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          modifier: this.verticalConfigId
        }));
      }
      /**
       * click handler for the accordion toggle button
       * @param wrapperEl {HTMLElement} the toggle container
       * @param toggleEl {HTMLElement} the button
       * @param contentEl {HTMLElement} the toggle target
       */

    }, {
      key: "handleClick",
      value: function handleClick(wrapperEl, toggleEl, contentEl) {
        var event = new AnalyticsEvent(this.isCollapsed(wrapperEl) ? 'ROW_EXPAND' : 'ROW_COLLAPSE').addOptions({
          verticalConfigId: this.verticalConfigId,
          entityId: toggleEl.dataset.entityId
        });
        wrapperEl.classList.toggle(this.collapsedClass);
        this.changeHeight(contentEl, wrapperEl);
        toggleEl.setAttribute('aria-expanded', this.isCollapsed(wrapperEl) ? 'false' : 'true');
        this.analyticsReporter.report(event);
      }
      /**
       * returns true if the element is currently collapsed
       * @param wrapperEl {HTMLElement} the toggle container
       * @returns {boolean}
       */

    }, {
      key: "isCollapsed",
      value: function isCollapsed(wrapperEl) {
        if (!wrapperEl) {
          return false;
        }

        return wrapperEl.classList.contains(this.collapsedClass);
      }
      /**
       * toggles the height between 0 and the content height for smooth animation
       * @param targetEl {HTMLElement}
       * @param wrapperEl {HTMLElement}
       */

    }, {
      key: "changeHeight",
      value: function changeHeight(targetEl, wrapperEl) {
        targetEl.style.height = "".concat(this.isCollapsed(wrapperEl) ? 0 : targetEl.scrollHeight, "px");
      }
      /**
       * helper for composing child element selectors
       * @param child {string}
       * @returns {string}
       */

    }, {
      key: "buildSelector",
      value: function buildSelector(child) {
        return "".concat(this._selectorBase).concat(child);
      }
      /**
       * helper for the toggle button selector
       * @returns {string}
       */

    }, {
      key: "toggleSelector",
      value: function toggleSelector() {
        return this.buildSelector('-toggle');
      }
      /**
       * helper for the content element selector
       * @returns {string}
       */

    }, {
      key: "bodySelector",
      value: function bodySelector() {
        return this.buildSelector('-body');
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/resultsaccordion';
      }
    }, {
      key: "type",
      get: function get() {
        return 'AccordionResults';
      }
    }]);

    return AccordionResultsComponent;
  }(VerticalResultsComponent);

  var UniversalResultsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(UniversalResultsComponent, _Component);

    function UniversalResultsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, UniversalResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(UniversalResultsComponent).call(this, config, systemConfig));
      _this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
      _this._appliedFilters = _objectSpread({
        show: true,
        showFieldNames: false,
        hiddenFields: ['builtin.entityType'],
        resultsCountSeparator: '|',
        showChangeFilters: false,
        delimiter: '|',
        labelText: 'Filters applied to this search:'
      }, config.appliedFilters);

      _this.core.globalStorage.on('update', StorageKeys.API_CONTEXT, function () {
        _this.setState(_this.core.globalStorage.getState(StorageKeys.UNIVERSAL_RESULTS) || {});
      });

      return _this;
    }

    _createClass(UniversalResultsComponent, [{
      key: "setState",
      value: function setState(data, val) {
        var sections = data.sections || [];
        var query = this.core.globalStorage.getState(StorageKeys.QUERY);
        var searchState = data.searchState || SearchStates.PRE_SEARCH;
        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "setState", this).call(this, Object.assign(data, {
          isPreSearch: searchState === SearchStates.PRE_SEARCH,
          isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
          isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
          showNoResults: sections.length === 0 && query,
          query: query,
          sections: sections
        }, val));
      }
    }, {
      key: "addChild",
      value: function addChild() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var type = arguments.length > 1 ? arguments[1] : undefined;
        var opts = arguments.length > 2 ? arguments[2] : undefined;
        var verticals = this._config.verticals || this._config.config || {};
        var verticalKey = data.verticalConfigId;

        var childOpts = _objectSpread({}, opts, {}, UniversalResultsComponent.getChildConfig(verticalKey, verticals[verticalKey] || {}, this._appliedFilters));

        var childType = childOpts.useAccordion ? AccordionResultsComponent.type : type;
        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "addChild", this).call(this, data, childType, childOpts);
      }
      /**
       * Applies synonyms and default config for a vertical in universal results.
       * @param {string} verticalKey
       * @param {Object} config
       * @param {Object} topLevelAppliedFilters
       * @returns {Object}
       */

    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName(config) {
        return 'results/universalresults';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "getChildConfig",
      value: function getChildConfig(verticalKey, config, topLevelAppliedFilters) {
        return _objectSpread({
          // Tells vertical results it is in a universal results page.
          isUniversal: true,
          // Label for the vertical in the titlebar.
          title: config.sectionTitle || verticalKey,
          // Icon in the titlebar
          icon: config.sectionTitleIconName || config.sectionTitleIconUrl || 'star',
          // Url that links to the vertical search for this vertical.
          verticalURL: config.url,
          // Show a view more link by default, which also links to verticalURL.
          viewMore: true,
          // By default, the view more link has a label of 'View More'.
          viewMoreLabel: defaultConfigOption(config, ['viewMoreLabel', 'viewAllText'], 'View More'),
          // Whether to show a result count.
          showResultCount: false,
          // Whether to use AccordionResults (DEPRECATED)
          useAccordion: false
        }, config, {
          // Config for the applied filters bar. Must be placed after ...config to not override defaults.
          appliedFilters: {
            // Whether to display applied filters.
            show: defaultConfigOption(config, ['appliedFilters.show', 'showAppliedFilters'], topLevelAppliedFilters.show),
            // Whether to show field names, e.g. Location in Location: Virginia.
            showFieldNames: defaultConfigOption(config, ['appliedFilters.showFieldNames', 'showFieldNames'], topLevelAppliedFilters.showFieldNames),
            // Hide filters with these field ids.
            hiddenFields: defaultConfigOption(config, ['appliedFilters.hiddenFields', 'hiddenFields'], topLevelAppliedFilters.hiddenFields),
            // Symbol placed between the result count and the applied filters.
            resultsCountSeparator: defaultConfigOption(config, ['appliedFilters.resultsCountSeparator', 'resultsCountSeparator'], topLevelAppliedFilters.resultsCountSeparator),
            // Whether to show a 'change filters' link, linking back to verticalURL.
            showChangeFilters: defaultConfigOption(config, ['appliedFilters.showChangeFilters', 'showChangeFilters'], topLevelAppliedFilters.showChangeFilters),
            // The text for the change filters link.
            changeFiltersText: defaultConfigOption(config, ['appliedFilters.changeFiltersText', 'changeFiltersText'], topLevelAppliedFilters.changeFiltersText),
            // The symbol placed between different filters with the same fieldName. e.g. Location: Virginia | New York | Miami.
            delimiter: defaultConfigOption(config, ['appliedFilters.delimiter'], topLevelAppliedFilters.delimiter),
            // The aria-label given to the applied filters bar.
            labelText: defaultConfigOption(config, ['appliedFilters.labelText'], topLevelAppliedFilters.labelText)
          }
        });
      }
    }, {
      key: "type",
      get: function get() {
        return 'UniversalResults';
      }
    }]);

    return UniversalResultsComponent;
  }(Component);

  var PaginationComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(PaginationComponent, _Component);

    function PaginationComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, PaginationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PaginationComponent).call(this, config, systemConfig));
      /**
       * The vertical key to use for searches
       * @type {string}
       * @private
       */

      _this._verticalKey = config.verticalKey || _this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey;

      if (typeof _this._verticalKey !== 'string') {
        throw new AnswersComponentError('verticalKey not provided, but necessary for pagination', 'PaginationComponent');
      }
      /**
       * The number of pages visible before/after the current page on desktop.
       * @type {number}
       * @private
       */


      _this._maxVisiblePagesDesktop = config.maxVisiblePagesDesktop === undefined ? 1 : config.maxVisiblePagesDesktop;
      /**
       * The number of pages visible before/after the current page on mobile.
       * @type {number}
       * @private
       */

      _this._maxVisiblePagesMobile = config.maxVisiblePagesMobile === undefined ? 1 : config.maxVisiblePagesMobile;
      /**
       * If true, displays the first and last page buttons
       * @type {boolean}
       * @private
       */

      _this._showFirstAndLastPageButtons = config.showFirstAndLastButton === undefined ? true : config.showFirstAndLastButton;
      /**
       * DEPRECATED
       * @type {boolean}
       * @private
       */

      _this._firstPageButtonEnabled = config.showFirst === undefined ? _this._showFirstAndLastPageButtons : config.showFirst;
      /**
       * DEPRECATED
       * @type {boolean}
       * @private
       */

      _this._lastPageButtonEnabled = config.showLast === undefined ? _this._showFirstAndLastPageButtons : config.showLast;
      /**
       * If true, always displays the page numbers for first and last page.
       * @type {boolean}
       * @private
       */

      _this._pinFirstAndLastPage = config.pinFirstAndLastPage === undefined ? false : config.pinFirstAndLastPage;
      /**
       * Icons object for first, previous, next, and last page icons.
       * @type {{
       *  nextButtonIcon: (string | undefined),
       *  previousButtonIcon: (string | undefined),
       *  firstButtonIcon: (string | undefined),
       *  lastButtonIcon: (string | undefined),
       * }}
       * @private
       */

      _this._icons = config.icons;
      /**
       * Options to include with all analytic events sent by this component
       * @type {object}
       * @private
       */

      _this._analyticsOptions = {
        verticalKey: _this._verticalKey
      };
      /**
       * Label for a page of results.
       * @type {string}
       * @private
       */

      _this._pageLabel = config.pageLabel === undefined ? 'Page' : config.pageLabel;
      /**
       * Function that is invoked on pagination
       * @type {function(): {}}
       * @private
       */

      _this._onPaginate = config.onPaginate || _this.scrollToTop;
      /**
       * The maximum number of results per page
       * @type {number}
       * @private
       */

      _this._limit = _this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
      var offset = _this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;

      _this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, Number(offset));

      _this.core.globalStorage.on('update', StorageKeys.SEARCH_OFFSET, function (offset) {
        if (typeof offset === 'number') {
          return;
        }

        _this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, Number(offset));
      });

      _this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, function (results) {
        if (results.searchState === SearchStates.SEARCH_COMPLETE) {
          _this.setState();
        }
      });
      /**
       * Configuration for the behavior when there are no vertical results.
       */


      _this._noResults = config.noResults || _this.core.globalStorage.getState(StorageKeys.NO_RESULTS_CONFIG) || {};
      return _this;
    }

    _createClass(PaginationComponent, [{
      key: "shouldShowControls",
      value: function shouldShowControls(results, limit) {
        var hasResults = results.searchState === 'search-complete' && results.resultsCount > limit;
        var isNormalResults = results.resultsContext === ResultsContext.NORMAL;
        var isVisibleForNoResults = 'visible' in this._noResults ? this._noResults.visible : this._noResults.displayAllResults;
        return hasResults && (isNormalResults || isVisibleForNoResults);
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        var results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
        var limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
        var showControls = this.shouldShowControls(results, limit);
        var offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;

        if (!showControls) {
          return;
        }

        var previousPageButton = DOM.query(this._container, '.js-yxt-Pagination-previous');
        var nextPageButton = DOM.query(this._container, '.js-yxt-Pagination-next');
        var maxPage = Math.trunc((results.resultsCount - 1) / limit);
        DOM.on(previousPageButton, 'click', function () {
          return _this2.updatePage(offset - limit);
        });
        DOM.on(nextPageButton, 'click', function () {
          return _this2.updatePage(offset + limit);
        });

        if (this._firstPageButtonEnabled) {
          var firstPageButton = DOM.query(this._container, '.js-yxt-Pagination-first');
          DOM.on(firstPageButton, 'click', function () {
            return _this2.updatePage(0);
          });
        }

        if (this._lastPageButtonEnabled) {
          var lastPageButton = DOM.query(this._container, '.js-yxt-Pagination-last');
          DOM.on(lastPageButton, 'click', function () {
            return _this2.updatePage(maxPage * limit);
          });
        }

        DOM.queryAll('.js-yxt-Pagination-link').forEach(function (node) {
          DOM.on(node, 'click', function () {
            return _this2.updatePage((parseInt(node.dataset.number) - 1) * limit);
          });
        });
      }
    }, {
      key: "updatePage",
      value: function updatePage(offset) {
        var results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
        var currentOffset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
        var currentPageNumber = currentOffset / this._limit + 1;
        var newPageNumber = offset / this._limit + 1;

        var maxPageCount = this._computeMaxPage(results.resultsCount);

        this._onPaginate(newPageNumber, currentPageNumber, maxPageCount);

        this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, offset);
        this.core.persistentStorage.set(StorageKeys.SEARCH_OFFSET, offset);
        this.core.verticalPage(this._verticalKey);
      }
    }, {
      key: "scrollToTop",
      value: function scrollToTop() {
        document.documentElement.scrollTop = 0; // Safari

        document.body.scrollTop = 0;
      }
      /**
       * Computes the highest page number for a given amount of results
       * @param {number} resultsCount
       */

    }, {
      key: "_computeMaxPage",
      value: function _computeMaxPage(resultsCount) {
        return Math.trunc((resultsCount - 1) / this._limit) + 1;
      }
      /**
       * Pagination should evenly add page numbers in the "forward" and "backward" directions, unless
       * one side has reached the max/min value, in which case the remaining side should be the only
       * one to get more pages.
       * @param {number} pageNumber the current page's number
       * @param {number} maxPage the highest page number, acts as the upper bound
       * @param {number} limit the maximum total number of pages that are allocated
       * @returns {Array<number>} the backLimit and frontLimit, respectively
       */

    }, {
      key: "_allocate",
      value: function _allocate(pageNumber, maxPage, limit) {
        var backLimit = pageNumber;
        var frontLimit = pageNumber;

        for (var i = 0; i < limit; i++) {
          if (i % 2 === 0) {
            if (backLimit > 0) {
              backLimit--;
            } else if (frontLimit < maxPage) {
              frontLimit++;
            }
          } else {
            if (frontLimit < maxPage) {
              frontLimit++;
            } else if (backLimit > 0) {
              backLimit--;
            }
          }
        }

        return [backLimit, frontLimit];
      }
      /**
       * Creates an object representing the view state of the page numbers and ellipses
       * @param {number} pageNumber refers to the page number, not the page index
       * @param {number} maxPage the highest page number, which also represents the total page count
       * @returns {Object} the view-model for the page numbers displayed in the component, including whether to display ellipses
       */

    }, {
      key: "_createPageNumberViews",
      value: function _createPageNumberViews(pageNumber, maxPage) {
        var _this$_allocate = this._allocate(pageNumber, maxPage, this._maxVisiblePagesMobile),
            _this$_allocate2 = _slicedToArray(_this$_allocate, 2),
            mobileBackLimit = _this$_allocate2[0],
            mobileFrontLimit = _this$_allocate2[1];

        var _this$_allocate3 = this._allocate(pageNumber, maxPage, this._maxVisiblePagesDesktop),
            _this$_allocate4 = _slicedToArray(_this$_allocate3, 2),
            desktopBackLimit = _this$_allocate4[0],
            desktopFrontLimit = _this$_allocate4[1];

        var pageNumberViews = [];

        for (var i = 1; i <= maxPage; i++) {
          var num = {
            number: i
          };

          if (i === pageNumber) {
            num.active = true;

            if (this._maxVisiblePagesDesktop > 1) {
              num.activeDesktop = true;
            }

            if (this._maxVisiblePagesMobile > 1) {
              num.activeMobile = true;
            }
          } else {
            if (i <= mobileBackLimit || i > mobileFrontLimit) {
              num.mobileHidden = true;
            }

            if (i <= desktopBackLimit || i > desktopFrontLimit) {
              num.desktopHidden = true;
            }
          }

          pageNumberViews.push(num);
        }

        return {
          pinnedNumbers: {
            mobileBack: this._pinFirstAndLastPage && mobileBackLimit > 0,
            mobileFront: this._pinFirstAndLastPage && mobileFrontLimit < maxPage,
            desktopBack: this._pinFirstAndLastPage && desktopBackLimit > 0,
            desktopFront: this._pinFirstAndLastPage && desktopFrontLimit < maxPage
          },
          ellipses: {
            mobileBack: this._pinFirstAndLastPage && mobileBackLimit > 1,
            mobileFront: this._pinFirstAndLastPage && mobileFrontLimit < maxPage - 1,
            desktopBack: this._pinFirstAndLastPage && desktopBackLimit > 1,
            desktopFront: this._pinFirstAndLastPage && desktopFrontLimit < maxPage - 1
          },
          pageNumberViews: pageNumberViews
        };
      }
    }, {
      key: "setState",
      value: function setState(data) {
        var results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
        var offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
        var pageNumber = offset / this._limit + 1;
        var isMoreResults = results.resultsCount > offset + this._limit;

        var maxPage = this._computeMaxPage(results.resultsCount);

        var _this$_createPageNumb = this._createPageNumberViews(pageNumber, maxPage),
            pinnedNumbers = _this$_createPageNumb.pinnedNumbers,
            ellipses = _this$_createPageNumb.ellipses,
            pageNumberViews = _this$_createPageNumb.pageNumberViews;

        return _get(_getPrototypeOf(PaginationComponent.prototype), "setState", this).call(this, _objectSpread({
          showControls: this.shouldShowControls(results, this._limit),
          firstPageButtonEnabled: this._firstPageButtonEnabled,
          lastPageButtonEnabled: this._lastPageButtonEnabled,
          pageNumber: pageNumber,
          pageLabel: this._pageLabel,
          showFirstPageButton: pageNumber > 2,
          showPreviousPageButton: pageNumber > 1,
          showNextPageButton: isMoreResults,
          showLastPageButton: pageNumber < maxPage - 1,
          icons: this._icons,
          pageNumbers: pageNumberViews,
          pinnedNumbers: pinnedNumbers,
          ellipses: ellipses,
          pinPages: this._pinFirstAndLastPage,
          nextPage: pageNumber + 1,
          maxPage: maxPage
        }, data));
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'results/pagination';
      }
    }, {
      key: "type",
      get: function get() {
        return 'Pagination';
      }
    }]);

    return PaginationComponent;
  }(Component);

  var CTACollectionComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CTACollectionComponent, _Component);

    function CTACollectionComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CTACollectionComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CTACollectionComponent).call(this, config, systemConfig));
      var data = _this._config.data || {};
      /**
       * Result data
       * @type {Result}
       */

      _this.result = data.result || {};
      /**
       * Whether the DOM should include legacy class names
       * @type {boolean}
       */

      _this.includeLegacyClasses = _this._config.includeLegacyClasses || false;
      /**
       * Vertical key for the search.
       * @type {string}
       */

      _this.verticalKey = data.verticalKey;
      /**
       * Whether this cta is part of a universal search.
       * @type {boolean}
       */

      _this.isUniversal = _this._config.isUniversal || false;
      /**
       * Either a function that spits out an array of CTA config objects or an array of CTA config objects
       * or api fieldnames
       * @type {Function|Array<Object|string>}
       */

      var callsToAction = _this._config.callsToAction || [];
      /**
       * The config for each calls to action component to render.
       * @type {Array<Object>}
       */

      _this.callsToAction = CTACollectionComponent.resolveCTAMapping.apply(CTACollectionComponent, [_this.result._raw].concat(_toConsumableArray(callsToAction))); // Assign any extra cta config that does not come from the cta mappings.

      var _ctaModifiers = _this._config._ctaModifiers || [];

      if (_this.callsToAction.length === 1) {
        _ctaModifiers.push('solo');
      }

      _this.callsToAction = _this.callsToAction.map(function (cta) {
        return _objectSpread({
          eventOptions: _this.defaultEventOptions(_this.result),
          _ctaModifiers: _ctaModifiers,
          includeLegacyClasses: _this.includeLegacyClasses
        }, cta);
      });
      return _this;
    }
    /**
     * Handles resolving ctas from a cta mapping which are either
     * 1. a function that returns a cta's config
     * 2. an object that has a per-attribute mapping of either a
     *    a) static value
     *    b) function that takes in resut data and returns the given attributes value
     * Note: Intentionally does not allow nesting functions.
     * @param {Object} result
     * @param {Function|...(Object|string)} ctas
     * @returns {Array<Object>}
     */


    _createClass(CTACollectionComponent, [{
      key: "defaultEventOptions",
      value: function defaultEventOptions(result) {
        var eventOptions = {
          verticalKey: this.verticalKey,
          searcher: this._config.isUniversal ? 'UNIVERSAL' : 'VERTICAL'
        };

        if (result._raw.id) {
          eventOptions.entityId = result._raw.id;
        }

        return eventOptions;
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(CTACollectionComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          includeLegacyClasses: this.includeLegacyClasses,
          callsToAction: this.callsToAction
        }));
      }
    }], [{
      key: "resolveCTAMapping",
      value: function resolveCTAMapping(result) {
        var parsedCTAs = [];

        for (var _len = arguments.length, ctas = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          ctas[_key - 1] = arguments[_key];
        }

        ctas.map(function (ctaMapping) {
          if (typeof ctaMapping === 'function') {
            parsedCTAs = parsedCTAs.concat(ctaMapping(result));
          } else if (_typeof(ctaMapping) === 'object') {
            var ctaObject = _objectSpread({}, ctaMapping);

            for (var _i = 0, _Object$entries = Object.entries(ctaMapping); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  ctaAttribute = _Object$entries$_i[0],
                  attributeMapping = _Object$entries$_i[1];

              if (typeof attributeMapping === 'function') {
                ctaObject[ctaAttribute] = attributeMapping(result);
              }
            }

            parsedCTAs.push(ctaObject);
          }
        });
        parsedCTAs = parsedCTAs.filter(function (cta) {
          return cta;
        });
        parsedCTAs.forEach(function (cta) {
          if (!cta.label && !cta.url) {
            console.warn('Call to Action:', cta, 'is missing both a label and url attribute and is being automatically hidden');
          } else if (!cta.label) {
            console.warn('Call to Action:', cta, 'is missing a label attribute and is being automatically hidden');
          } else if (!cta.url) {
            console.warn('Call to Action:', cta, 'is missing a url attribute and is being automatically hidden');
          }
        });
        return parsedCTAs.filter(function (cta) {
          return cta.url && cta.url.trim() && cta.label && cta.label.trim();
        });
      }
    }, {
      key: "hasCTAs",
      value: function hasCTAs(result, ctas) {
        return CTACollectionComponent.resolveCTAMapping.apply(CTACollectionComponent, [result].concat(_toConsumableArray(ctas))).length > 0;
      }
    }, {
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'ctas/ctacollection';
      }
    }, {
      key: "type",
      get: function get() {
        return 'CTACollection';
      }
    }]);

    return CTACollectionComponent;
  }(Component);

  var StandardCardConfig = function StandardCardConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, StandardCardConfig);

    Object.assign(this, config);
    var data = config.data || {};
    /**
     * The result data
     * @type {Result}
     */

    var result = data.result || {};
    /**
     * The raw profile data
     * @type {Object}
     */

    var rawResult = result._raw || {};
    /**
     * The dataMappings attribute of the config
     * is either a function that returns additional config for
     * a card or an object that is the additional config.
     */

    Object.assign(this, CardComponent.applyDataMappings(rawResult, config.dataMappings || {}));
    /**
     * The result data
     * @type {Result}
     */

    this.result = config.data || {};
    /**
     * Title for the card
     * @type {string}
     */

    this.title = this.title || result.title || rawResult.name || '';
    /**
     * Details for the card
     * @type {string}
     */

    this.details = this.details === null ? null : this.details || result.details || rawResult.description || '';
    /**
     * Url when you click the title
     * @type {string}
     */

    this.url = this.url === null ? '' : this.url || result.link || rawResult.website;
    /**
     * If showMoreLimit is set, the text that displays beneath it
     * @type {string}
     */

    this.showMoreText = this.showMoreText || 'Show More';
    /**
     * If showMoreLimit is set, the text that displays beneath it when all text is shown
     * @type {string}
     */

    this.showLessText = this.showLessText || 'Show Less';
    /**
     * Add a show more link if this number of characters is shown,
     * and truncate the last 3 characters with an ellipses.
     * Clicking show more should expand the results (but no “show less” link).
     * @type {number}
     */

    this.showMoreLimit = this.showMoreLimit;
    /**
     * The target attribute for the title link.
     * @type {string}
     */

    this.target = this.target;
    /**
     * Image url to display
     * @type {string}
     */

    this.image = this.image;
    /**
     * Subtitle
     * @type {string}
     */

    this.subtitle = this.subtitle;
    /**
     * Whether a 'show more' toggle button needs to be rendered at all
     */

    var detailsOverLimit = this.details.length > this.showMoreLimit;
    this.showToggle = this.showMoreLimit && detailsOverLimit;
    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */

    this.callsToAction = this.callsToAction || [];
    /**
     * Whether to show the ordinal of the card in the results.
     * @type {boolean}
     */

    this.showOrdinal = this.showOrdinal || false;
    /**
     * Whether this card is part of a universal search.
     * @type {boolean}
     */

    this.isUniversal = this.isUniversal || false;
    /**
     * The index of the card.
     * @type {number}
     */

    this._index = config._index || 0;
  };
  /**
   * Card components expect to receive a data config option, containing data regarding entity result
   * each card is assigned to, including all field data in data._raw.
   */


  var StandardCardComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(StandardCardComponent, _Component);

    function StandardCardComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, StandardCardComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(StandardCardComponent).call(this, new StandardCardConfig(config), systemConfig));
      _this.hideExcessDetails = _this._config.showToggle;
      /**
       * @type {Object}
       */

      var data = config.data || {};
      /**
       * Vertical key for the search.
       * @type {string}
       */

      _this.verticalKey = data.verticalKey;
      /**
       * The result data
       * @type {Result}
       */

      _this.result = data.result || {};
      return _this;
    }

    _createClass(StandardCardComponent, [{
      key: "setState",
      value: function setState(data) {
        var details = this._config.details;

        if (this._config.showMoreLimit) {
          details = this.hideExcessDetails ? "".concat(this._config.details.substring(0, this._config.showMoreLimit), "...") : this._config.details;
        }

        return _get(_getPrototypeOf(StandardCardComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          hideExcessDetails: this.hideExcessDetails,
          result: this.result,
          hasCTAs: CTACollectionComponent.hasCTAs(this.result._raw, this._config.callsToAction),
          entityId: this.result._raw.id,
          verticalKey: this.verticalKey,
          details: details
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (this._config.showToggle) {
          var el = DOM.query(this._container, '.js-yxt-StandardCard-toggle');
          DOM.on(el, 'click', function () {
            _this2.hideExcessDetails = !_this2.hideExcessDetails;

            _this2.setState();
          });
        }
      }
    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        if (type === CTACollectionComponent.type) {
          var updatedData = {
            verticalKey: this.verticalKey,
            result: data
          };
          return _get(_getPrototypeOf(StandardCardComponent.prototype), "addChild", this).call(this, updatedData, type, _objectSpread({
            callsToAction: this._config.callsToAction,
            isUniversal: this._config.isUniversal,
            _ctaModifiers: ['StandardCard']
          }, opts));
        }

        return _get(_getPrototypeOf(StandardCardComponent.prototype), "addChild", this).call(this, data, type, opts);
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return cardTemplates.Standard;
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return cardTypes.Standard;
      }
    }]);

    return StandardCardComponent;
  }(Component);

  var AccordionCardConfig = function AccordionCardConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AccordionCardConfig);

    Object.assign(this, config);
    var data = config.data || {};
    /**
     * The result data
     * @type {Result}
     */

    var result = data.result || {};
    /**
     * The raw profile data
     * @type {Object}
     */

    var rawResult = result._raw || {};
    /**
     * The dataMappings attribute of the config
     * is either a function that returns additional config for
     * a card or an object that is the additional config.
     */

    var dataMappings = config.dataMappings || {};
    Object.assign(this, CardComponent.applyDataMappings(rawResult, dataMappings));
    /**
     * Vertical key for the card, added to analytics events sent by this component.
     * @type {string}
     */

    this.verticalKey = config.verticalKey;
    /**
     * @type {string}
     */

    this.title = this.title || result.title || rawResult.name || '';
    /**
     * @type {string}
     */

    this.subtitle = this.subtitle;
    /**
     * @type {string}
     */

    this.details = this.details === null ? null : this.details || result.details || rawResult.description || '';
    /**
     * If expanded is true the first accordion in vertical/universal results renders on page load expanded.
     * @type {boolean}
     */

    this.expanded = this.expanded || false;
    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */

    this.callsToAction = this.callsToAction || [];
    /**
     * Whether this card is part of a universal search. Used in analytics.
     * @type {boolean}
     */

    this.isUniversal = config.isUniversal || false;
  };

  var AccordionCardComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(AccordionCardComponent, _Component);

    function AccordionCardComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AccordionCardComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionCardComponent).call(this, new AccordionCardConfig(config), systemConfig));
      /**
       * Whether the accordion is collapsed or not.
       * Defaults to true only if the expanded option is true
       * and this is the first card in the results.
       * @type {boolean}
       */

      _this.isExpanded = _this._config.expanded && config._index === 0;
      /**
       * @type {Object}
       */

      var data = config.data || {};
      /**
       * Vertical key for the card, added to analytics events sent by this component.
       * @type {string}
       */

      _this.verticalKey = data.verticalKey;
      /**
       * The result data, sent to children CTA Components that need this.
       * @type {Result}
       */

      _this.result = data.result || {};
      return _this;
    }

    _createClass(AccordionCardComponent, [{
      key: "setState",
      value: function setState(data) {
        var id = this.result.id || this.result.ordinal;
        return _get(_getPrototypeOf(AccordionCardComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          result: this.result,
          isExpanded: this.isExpanded,
          id: "".concat(this.name, "-").concat(id, "-").concat(this.verticalKey),
          hasCTAs: CTACollectionComponent.hasCTAs(this.result._raw, this._config.callsToAction)
        }));
      }
      /**
       * Click handler for the accordion toggle button
       * This is used over set state because it's a lot smoother, since
       * it doesn't rip the whole component off of the page and remount it.
       * Also reports an analytics event.
       * @param {HTMLElement} toggleEl the toggle element
       * @param {HTMLElement} accordionBodyEl the .js-yxt-AccordionCard-body element
       * @param {HTMLElement} accordionEl the root accordion element
       */

    }, {
      key: "handleClick",
      value: function handleClick(toggleEl, accordionBodyEl, accordionEl) {
        this.isExpanded = !this.isExpanded;
        accordionEl.classList.toggle('yxt-AccordionCard--expanded');
        accordionBodyEl.style.height = "".concat(this.isExpanded ? accordionBodyEl.scrollHeight : 0, "px");
        toggleEl.setAttribute('aria-expanded', this.isExpanded ? 'true' : 'false');
        accordionBodyEl.setAttribute('aria-hidden', this.isExpanded ? 'false' : 'true');
        var event = new AnalyticsEvent(this.isExpanded ? 'ROW_EXPAND' : 'ROW_COLLAPSE').addOptions({
          verticalKey: this.verticalKey,
          entityId: this.result._raw.id,
          searcher: this._config.isUniversal ? 'UNIVERSAL' : 'VERTICAL'
        });
        this.analyticsReporter.report(event);
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (this._config.details) {
          var toggleEl = DOM.query(this._container, '.js-yxt-AccordionCard-toggle');
          var accordionBodyEl = DOM.query(this._container, '.js-yxt-AccordionCard-body');
          var accordionEl = DOM.query(this._container, '.js-yxt-AccordionCard');
          accordionBodyEl.style.height = "".concat(this.isExpanded ? accordionBodyEl.scrollHeight : 0, "px");
          DOM.on(toggleEl, 'click', function () {
            return _this2.handleClick(toggleEl, accordionBodyEl, accordionEl);
          });
        }
      }
      /**
       * For passing functions to the config of children {@link CTACollectionComponent}
       */

    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        if (type === CTACollectionComponent.type) {
          var updatedData = {
            verticalKey: this.verticalKey,
            result: data
          };
          return _get(_getPrototypeOf(AccordionCardComponent.prototype), "addChild", this).call(this, updatedData, type, _objectSpread({
            callsToAction: this._config.callsToAction,
            _ctaModifiers: ['AccordionCard'],
            isUniversal: this._config.isUniversal
          }, opts));
        }

        return _get(_getPrototypeOf(AccordionCardComponent.prototype), "addChild", this).call(this, data, type, opts);
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return cardTemplates.Accordion;
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return cardTypes.Accordion;
      }
    }]);

    return AccordionCardComponent;
  }(Component);

  var LegacyCardConfig = function LegacyCardConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, LegacyCardConfig);

    Object.assign(this, config);
    var data = config.data || {};
    /**
     * The result data
     * @type {Result}
     */

    var result = data.result || {};
    /**
     * The raw profile data
     * @type {Object}
     */

    var rawResult = result._raw || {};
    /**
     * The dataMappings attribute of the config
     * is either a function that returns additional config for
     * a card or an object that is the additional config.
     */

    Object.assign(this, CardComponent.applyDataMappings(rawResult, config.dataMappings || {}));
    /**
     * The result data
     * @type {Result}
     */

    this.result = config.data || {};
    /**
     * Title for the card
     * @type {string}
     */

    this.title = this.title || result.title || rawResult.name || '';
    /**
     * Details for the card
     * @type {string}
     */

    this.details = this.details === null ? null : this.details || result.details || rawResult.description || '';
    /**
     * Url when you click the title
     * @type {string}
     */

    this.url = this.url === null ? '' : this.url || result.link || rawResult.website;
    /**
     * The target attribute for the title link.
     * @type {string}
     */

    this.target = this.target;
    /**
     * Image url to display
     * @type {string}
     */

    this.image = this.image;
    /**
     * Subtitle
     * @type {string}
     */

    this.subtitle = this.subtitle;
    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */

    this.callsToAction = this.callsToAction || [];
    /**
     * Whether to show the ordinal of the card in the results.
     * @type {boolean}
     */

    this.showOrdinal = this.showOrdinal || false;
    /**
     * Whether this card is part of a universal search.
     * @type {boolean}
     */

    this.isUniversal = this.isUniversal || false;
    /**
     * The index of the card.
     * @type {number}
     */

    this._index = config._index || 0;
  };
  /**
   * Card components expect to receive a data config option, containing data regarding entity result
   * each card is assigned to, including all field data in data._raw.
   */


  var LegacyCardComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(LegacyCardComponent, _Component);

    function LegacyCardComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, LegacyCardComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LegacyCardComponent).call(this, new LegacyCardConfig(config), systemConfig));
      /**
       * @type {Object}
       */

      var data = config.data || {};
      /**
       * Vertical key for the search.
       * @type {string}
       */

      _this.verticalKey = data.verticalKey;
      /**
       * The result data
       * @type {Result}
       */

      _this.result = data.result || {};
      return _this;
    }

    _createClass(LegacyCardComponent, [{
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(LegacyCardComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          eventOptions: this._legacyEventOptions(this.result._raw.id, this.result.link),
          result: this.result,
          hasCTAs: CTACollectionComponent.hasCTAs(this.result._raw, this._config.callsToAction),
          entityId: this.result._raw.id,
          verticalKey: this.verticalKey
        }));
      }
    }, {
      key: "_legacyEventOptions",
      value: function _legacyEventOptions(entityId, url) {
        var options = {
          verticalConfigId: this.verticalKey,
          searcher: this._config.isUniversal ? 'UNIVERSAL' : 'VERTICAL'
        };

        if (entityId) {
          options.entityId = entityId;
        } else {
          options.url = url;
        }

        return JSON.stringify(options);
      }
    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        if (type === CTACollectionComponent.type) {
          var updatedData = {
            verticalKey: this.verticalKey,
            result: data
          };
          return _get(_getPrototypeOf(LegacyCardComponent.prototype), "addChild", this).call(this, updatedData, type, _objectSpread({
            callsToAction: this._config.callsToAction,
            isUniversal: this._config.isUniversal,
            _ctaModifiers: ['LegacyCard'],
            includeLegacyClasses: true
          }, opts));
        }

        return _get(_getPrototypeOf(LegacyCardComponent.prototype), "addChild", this).call(this, data, type, opts);
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return cardTemplates.Legacy;
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return cardTypes.Legacy;
      }
    }]);

    return LegacyCardComponent;
  }(Component);

  /**
   * Configurable options for the component
   * @type {Object}
   */

  var DEFAULT_CONFIG$6 = {
    /**
     * The entity identifier that the question is associated with.
     * This is typically an organization object
     * @type {number}
     */
    'entityId': null,

    /**
     * The main CSS selector used to reference the form for the component.
     * @type {string} CSS selector
     */
    'formSelector': 'form',

    /**
     * An optional label to use for the e-mail address input
     * @type {string}
     */
    'emailLabel': 'Email',

    /**
     * An optional label to use for the name input
     * @type {string}
     */
    'nameLabel': 'Name',

    /**
     * An optional label to use for the question
     * @type {string}
     */
    'questionLabel': 'Question',

    /**
     * An optional label to use for the Privacy Policy
     * @type {string}
     */
    'privacyPolicyText': 'By submitting my email address, I consent to being contacted via email at the address provided.',

    /**
     * The label to use for the Submit button
     * @type {string}
     */
    'buttonLabel': 'Submit',

    /**
     * The title to display in the title bar
     * @type {string}
     */
    'sectionTitle': 'Ask a Question',

    /**
     * The description to display in the title bar
     * @type {string}
     */
    'teaser': 'Can’t find what you\'re looking for? Ask a question below.',

    /**
     * The name of the icon to use in the title bar
     * @type {string}
     */
    'sectionTitleIconName': 'support',

    /**
     * The text to display in the feedback form ahead of the Question input
     * @type {string}
     */
    'description': 'Enter your question and contact information, and we\'ll get back to you with a response shortly.',

    /**
     * The placeholder text for required inputs
     * @type {string}
     */
    'requiredInputPlaceholder': '(required)',

    /**
     * The placeholder text for the question text area
     * @type {string}
     */
    'questionInputPlaceholder': 'Enter your question here',

    /**
     * The confirmation text to display after successfully submitting feedback
     * @type {string}
     */
    'questionSubmissionConfirmationText': 'Thank you for your question!',

    /**
     * The default privacy policy url label
     * @type {string}
    */
    'privacyPolicyUrlLabel': 'Learn more here.',

    /**
     * The default privacy policy url
     * @type {string}
     */
    'privacyPolicyUrl': '',

    /**
     * The default privacy policy error text, shown when the user does not agree
     * @type {string}
     */
    'privacyPolicyErrorText': '* You must agree to the privacy policy to submit a question.',

    /**
     * The default email format error text, shown when the user submits an invalid email
     * @type {string}
     */
    'emailFormatErrorText': '* Please enter a valid email address.',

    /**
     * The default network error text, shown when there is an issue with the QA Submission
     * request.
     * @type {string}
     */
    'networkErrorText': 'We\'re sorry, an error occurred.',

    /**
     * Whether or not this component is expanded by default.
     * @type {boolean}
     */
    'expanded': true
  };
  /**
   * QuestionSubmissionComponent is a component that creates a form
   * thats displayed whenever a query is run. It enables the user
   * to submit questions that they cant find the answer for.
   */

  var QuestionSubmissionComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(QuestionSubmissionComponent, _Component);

    function QuestionSubmissionComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, QuestionSubmissionComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestionSubmissionComponent).call(this, Object.assign({}, DEFAULT_CONFIG$6, config), systemConfig));
      /**
       * Reference to the storage model
       * @type {string}
       */

      _this.moduleId = StorageKeys.QUESTION_SUBMISSION;
      /**
       * Reference to the locale as set in the global config
       * @type {string}
       */

      _this.locale = _this.core.globalStorage.getState(StorageKeys.LOCALE);
      /**
       * NOTE(billy) if this is a pattern we want to follow for configuration
       * we should bake it into the core class.
       */

      _this.validateConfig();
      /**
       * The QuestionSubmission component should be rendered only once a search has completed. If the
       * search results are still loading, the component should not be displayed.
       */


      var onResultsUpdate = function onResultsUpdate(results) {
        if (results.searchState !== SearchStates.SEARCH_LOADING) {
          var questionText = _this.core.globalStorage.getState(StorageKeys.QUERY);

          _this.setState(new QuestionSubmission({
            questionText: questionText,
            expanded: _this._config.expanded
          }));
        } else {
          _this.unMount();
        }
      };

      _this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, onResultsUpdate);

      _this.core.globalStorage.on('update', StorageKeys.UNIVERSAL_RESULTS, onResultsUpdate);

      return _this;
    }
    /**
     * The template to render
     * @returns {string}
     * @override
     */


    _createClass(QuestionSubmissionComponent, [{
      key: "validateConfig",

      /**
       * validationConfig contains a bunch of rules
       * that are used to validate aginst configuration provided by the user
       */
      value: function validateConfig() {
        if (this._config.entityId === null || this._config.entityId === undefined) {
          throw new AnswersComponentError('`entityId` is a required configuration option for Question Submission', 'QuestionSubmission');
        }
      }
    }, {
      key: "beforeMount",
      value: function beforeMount() {
        // Avoid mounting the component if theres no data
        // Note, 1 because `config` is always part of the state.
        return Object.keys(this.getState()).length > 1;
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var triggerEl = DOM.query(this._container, '.js-content-visibility-toggle');

        if (triggerEl !== null) {
          this.bindFormToggle(triggerEl);
        }

        var formEl = DOM.query(this._container, this._config.formSelector);

        if (formEl === null) {
          return;
        }

        this.bindFormFocus(formEl);
        this.bindFormSubmit(formEl);
      }
      /**
       * bindFormFocus will wire up the DOM focus event to serverside reporting
       * @param {HTMLElement} formEl
       */

    }, {
      key: "bindFormFocus",
      value: function bindFormFocus(formEl) {
        var _this2 = this;

        if (this.analyticsReporter === null) {
          return;
        }

        var questionText = DOM.query(formEl, '.js-question-text');
        DOM.on(questionText, 'focus', function () {
          _this2.analyticsReporter.report(_this2.getAnalyticsEvent('QUESTION_FOCUS'));
        });
      }
      /**
       * bindFormSubmit handles submitting the question to the server,
       * and submits an event to serverside reporting
       * @param {HTMLElement} formEl
       */

    }, {
      key: "bindFormSubmit",
      value: function bindFormSubmit(formEl) {
        var _this3 = this;

        DOM.on(formEl, 'submit', function (e) {
          e.preventDefault();

          _this3.analyticsReporter.report(_this3.getAnalyticsEvent('QUESTION_SUBMIT')); // TODO(billy) we probably want to disable the form from being submitted twice


          var errors = _this3.validate(formEl);

          var formData = _this3.parse(formEl);

          if (Object.keys(errors).length) {
            return _this3.setState(new QuestionSubmission(formData, errors));
          }

          _this3.core.submitQuestion({
            'entityId': _this3._config.entityId,
            'questionLanguage': _this3.locale,
            'site': 'FIRSTPARTY',
            'name': formData.name,
            'email': formData.email,
            'questionText': formData.questionText,
            'questionDescription': formData.questionDescription
          })["catch"](function (error) {
            _this3.setState(new QuestionSubmission(formData, {
              'network': 'We\'re sorry, an error occurred.'
            }));

            throw error;
          });
        });
      }
      /**
       * bindFormToggle handles expanding and mimimizing the component's form.
       * @param {HTMLElement} triggerEl
       */

    }, {
      key: "bindFormToggle",
      value: function bindFormToggle(triggerEl) {
        var _this4 = this;

        DOM.on(triggerEl, 'click', function (e) {
          var formData = _this4.getState();

          _this4.setState(new QuestionSubmission(_objectSpread({}, formData, {
            'expanded': !formData.questionExpanded,
            'submitted': formData.questionSubmitted
          }), formData.errors));
        });
      }
      /**
       * Takes the form, and builds a object that represents the input names
       * and text fields.
       * @param {HTMLElement} formEl
       * @returns {object}
       */

    }, {
      key: "parse",
      value: function parse(formEl) {
        var inputFields = DOM.queryAll(formEl, '.js-question-field');

        if (!inputFields || inputFields.length === 0) {
          return {};
        }

        var obj = {};

        for (var i = 0; i < inputFields.length; i++) {
          var val = inputFields[i].value;

          if (inputFields[i].type === 'checkbox') {
            val = inputFields[i].checked;
          }

          obj[inputFields[i].name] = val;
        }

        return obj;
      }
      /**
       * Validates the fields for correct formatting
       * @param {HTMLElement} formEl
       * @returns {Object} errors object if any errors found
       */

    }, {
      key: "validate",
      value: function validate(formEl) {
        var errors = {};
        var fields = DOM.queryAll(formEl, '.js-question-field');

        for (var i = 0; i < fields.length; i++) {
          if (!fields[i].checkValidity()) {
            if (i === 0) {
              // set focus state on first error
              fields[i].focus();
            }

            switch (fields[i].name) {
              case 'email':
                errors['emailError'] = true;

                if (!fields[i].validity.valueMissing) {
                  errors['emailErrorText'] = this._config.emailFormatErrorText;
                }

                break;

              case 'name':
                errors['nameError'] = true;
                break;

              case 'privacyPolicy':
                errors['privacyPolicyErrorText'] = this._config.privacyPolicyErrorText;
                errors['privacyPolicyError'] = true;
                break;

              case 'questionText':
                errors['questionTextError'] = true;
                break;
            }
          }
        }

        return errors;
      }
      /**
       * Returns an options object describing the context of a reportable event
       */

    }, {
      key: "getAnalyticsEvent",
      value: function getAnalyticsEvent(eventType) {
        var analyticsEvent = new AnalyticsEvent(eventType);
        analyticsEvent.addOptions({
          verticalConfigId: this._verticalKey,
          searcher: this._verticalKey ? 'VERTICAL' : 'UNIVERSAL'
        });
        return analyticsEvent;
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName(config) {
        return 'questions/questionsubmission';
      }
      /**
       * The public interface alias for the component
       * @returns {string}
       * @override
       */

    }, {
      key: "type",
      get: function get() {
        return 'QASubmission';
      }
    }]);

    return QuestionSubmissionComponent;
  }(Component);

  var IconComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(IconComponent, _Component);

    /**
     * IconComponent
     * @param opts
     * @param opts.iconName {string}
     * @param opts.iconUrl {string}
     */
    function IconComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, IconComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(IconComponent).call(this, opts, systemOpts));
      /**
       * name of an icon from the default icon set
       * @type {string}
       */

      _this.iconName = opts.iconName || 'default';
      /**
       * the url to a custom image icon
       * @type {null}
       */

      _this.iconUrl = opts.iconUrl || null;
      /**
       * An additional string to append to the icon's css class. Multiple
       * classes should be space delimited.
       */

      _this.classNames = opts.classNames || null;
      /**
       * A unique id to pass to the icon.
       * @type {Object}
       */

      _this.complexContentsParams = opts.complexContentsParams || {};
      return _this;
    }

    _createClass(IconComponent, [{
      key: "setState",

      /**
       * overrides default functionality to provide name and markup
       * @param data
       * @returns {IconComponent}
       */
      value: function setState(data) {
        return _get(_getPrototypeOf(IconComponent.prototype), "setState", this).call(this, Object.assign(data, {
          iconUrl: this.iconUrl,
          iconName: this.iconName,
          name: this.iconName ? this.iconName : 'custom',
          classNames: this.classNames,
          complexContentsParams: this.complexContentsParams
        }));
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'icons/icon';
      }
      /**
       * allowing duplicates
       * @returns {boolean}
       * @override
       */

    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'IconComponent';
      }
    }]);

    return IconComponent;
  }(Component);

  var CTAConfig = function CTAConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CTAConfig);

    Object.assign(this, config);
    /**
     * Label below the CTA icon
     * @type {string}
     */

    this.label = config.label;
    /**
     * CTA icon, maps to a set of icons.
     * @type {string}
     */

    this.icon = config.icon;
    /**
     * Url to custom icon, has priority over icon.
     * @type {string}
     */

    this.iconUrl = config.iconUrl;
    /**
     * Whether the DOM should include legacy class names
     * @type {boolean}
     */

    this.includeLegacyClasses = config.includeLegacyClasses || false;
    /**
     * Click through url for the icon and label
     * @type {string}
     */

    this.url = config.url;
    /**
     * Analytics event that should fire:
     * @type {string}
     */

    this.analyticsEventType = config.analytics || config.eventType || 'CTA_CLICK';
    /**
     * The target attribute for the CTA link.
     * @type {boolean}
     */

    this.target = config.target || '_blank';
    /**
     * The eventOptions needed for the event to fire, passed as a string or Object
     * from config.dataMappings || {}.
     * @type {Object}
     */

    if (typeof config.eventOptions === 'string') {
      this.eventOptions = JSON.parse(config.eventOptions);
    }

    this.eventOptions = this.eventOptions;
    /**
     * Additional css className modifiers for the cta
     * @type {string}
     */

    this._ctaModifiers = config._ctaModifiers;
    /**
     * Whether the cta is the only one in its CTACollectionComponent
     * @type {boolean}
     */

    this._isSolo = config._isSolo || false;
  };

  var CTAComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CTAComponent, _Component);

    function CTAComponent() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CTAComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(CTAComponent).call(this, new CTAConfig(config), systemConfig));
    }

    _createClass(CTAComponent, [{
      key: "onMount",
      value: function onMount() {
        var _this = this;

        var el = DOM.query(this._container, ".js-yxt-CTA");

        if (el && this._config.eventOptions) {
          DOM.on(el, 'mousedown', function (e) {
            if (e.button === 0 || e.button === 1) {
              _this.reportAnalyticsEvent();
            }
          });
        }
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(CTAComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          hasIcon: this._config.icon || this._config.iconUrl
        }));
      }
    }, {
      key: "reportAnalyticsEvent",
      value: function reportAnalyticsEvent() {
        var analyticsEvent = new AnalyticsEvent(this._config.analyticsEventType);
        analyticsEvent.addOptions(this._config.eventOptions);
        this.analyticsReporter.report(analyticsEvent);
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName(config) {
        return 'ctas/cta';
      }
    }, {
      key: "type",
      get: function get() {
        return 'CTA';
      }
    }]);

    return CTAComponent;
  }(Component);

  /** @module */
  var COMPONENT_CLASS_LIST = [// Core Component
  Component, // Navigation Components
  NavigationComponent, // Search Components
  SearchComponent, FilterSearchComponent, AutoCompleteComponent, SpellCheckComponent, LocationBiasComponent, // Filter Components
  FilterBoxComponent, FilterOptionsComponent, RangeFilterComponent, DateRangeFilterComponent, FacetsComponent, GeoLocationComponent, SortOptionsComponent, // Results Components
  DirectAnswerComponent, UniversalResultsComponent, VerticalResultsComponent, PaginationComponent, AccordionResultsComponent, MapComponent, AlternativeVerticalsComponent, ResultsHeaderComponent, // Card Components
  CardComponent, StandardCardComponent, AccordionCardComponent, LegacyCardComponent, // Questions Components
  QuestionSubmissionComponent, // Helper Components
  IconComponent, CTAComponent, CTACollectionComponent];
  /**
   * The component registry is a map that contains
   * all available component classes used for creation or extension.
   * Each component class has a unique type, which is used as the key for the registry
   * @type {Object.<string, Component>}
   */

  var COMPONENT_REGISTRY = COMPONENT_CLASS_LIST.reduce(function (registry, clazz) {
    registry[clazz.type] = clazz;
    return registry;
  }, {});

  /**
   * ComponentManager is a Singletone that contains both an internal registry of
   * eligible components to be created, as well as keeps track of the current
   * instantiated and active components.
   *
   * ALL components should be constructed using the {ComponentManager} via its `create` method.
   */

  var ComponentManager =
  /*#__PURE__*/
  function () {
    function ComponentManager() {
      _classCallCheck(this, ComponentManager);

      /**
       * The active components is an internal container to keep track
       * of all of the components that have been constructed
       */
      this._activeComponents = [];
      /**
       * A local reference to the core library dependency
       *
       * The Core contains both the storage AND services that are needed for performing operations
       * like search and auto complete.
       *
       * The storage is the source of truth for the state of ALL components.
       * Whenever the storage is updated, the state gets pushed down to the necessary components.
       * @type {Core}
       */

      this._core = null;
      /**
       * The primary renderer to use for all components
       * @type {HandlebarsRenderer}
       */

      this._renderer = null;
      /**
       * A local reference to the analytics reporter dependency
       */

      this._analyticsReporter = null;
      /**
       * A mapping from component types to component names, as these may be configured by a user
       */

      this._componentTypeToComponentNames = {};
    }

    _createClass(ComponentManager, [{
      key: "setRenderer",
      value: function setRenderer(renderer) {
        this._renderer = renderer;
        return this;
      }
    }, {
      key: "setCore",
      value: function setCore(core) {
        this._core = core;
        return this;
      }
    }, {
      key: "setAnalyticsReporter",
      value: function setAnalyticsReporter(reporter) {
        this._analyticsReporter = reporter;
        return this;
      }
      /**
       * registers a component to be eligible for creation and override.
       * @param {Component} The Component Class to register
       */

    }, {
      key: "register",
      value: function register(componentClazz) {
        COMPONENT_REGISTRY[componentClazz.type] = componentClazz;
        return this;
      }
      /**
       * Returns components with names similar to the passed in component class.
       * @param {string} componentType
       */

    }, {
      key: "getSimilarComponents",
      value: function getSimilarComponents(componentType) {
        var similarComponents = Object.keys(COMPONENT_REGISTRY).filter(function (type) {
          return type.startsWith(componentType.substring(0, 2));
        });

        if (similarComponents.length === 0) {
          similarComponents = Object.keys(COMPONENT_REGISTRY);
        }

        return similarComponents;
      }
      /**
       * create is the entry point for constructing any and all components.
       * It will instantiate a new instance of the component, and both apply
       * initial state from the storage and bind it to the storage for updates.
       * @param {string} componentType The component type to create
       * @param {Object} opts The options to pipe to the construction of the component
       */

    }, {
      key: "create",
      value: function create(componentType, opts) {
        // Every component needs local access to the component manager
        // because sometimes components have subcomponents that need to be
        // constructed during creation
        var systemOpts = {
          core: this._core,
          renderer: this._renderer,
          analyticsReporter: this._analyticsReporter,
          componentManager: this
        };
        var componentClass = COMPONENT_REGISTRY[componentType];

        if (!componentClass) {
          throw new AnswersComponentError("Component type ".concat(componentType, " is not recognized as a valid component.") + " You might have meant ".concat(this.getSimilarComponents(componentType).join(', '), "?"));
        }

        if (!componentClass.areDuplicateNamesAllowed() && this._activeComponents.some(function (c) {
          return c.name === opts.name;
        })) {
          throw new AnswersComponentError("Another component with name ".concat(opts.name, " already exists"), componentType);
        }

        var config = _objectSpread({
          isTwin: this._activeComponents.some(function (component) {
            return component.constructor.type === componentType;
          })
        }, opts); // Instantiate our new component and keep track of it


        var component = new COMPONENT_REGISTRY[componentType](config, systemOpts).init(config);

        this._activeComponents.push(component);

        if (!this._componentTypeToComponentNames[componentType]) {
          this._componentTypeToComponentNames[componentType] = [];
        }

        this._componentTypeToComponentNames[componentType].push(component.name); // If there is a global storage to power state, apply the state
        // from the storage to the component, and then bind the component
        // state to the storage via its updates


        if (this._core && this._core.globalStorage !== null) {
          if (component.moduleId === undefined || component.moduleId === null) {
            return component;
          }

          this._core.globalStorage.on('update', component.moduleId, function (data) {
            component.setState(data);
          });
        }

        return component;
      }
      /**
       * Remove the provided component from the list of active components and remove
       * the associated storage event listener
       * @param {Component} component The component to remove
       */

    }, {
      key: "remove",
      value: function remove(component) {
        this._core.globalStorage.off('update', component.moduleId);

        var index = this._activeComponents.findIndex(function (c) {
          return c.name === component.name;
        });

        this._activeComponents.splice(index, 1);
      }
      /**
       * Remove the component with the given name
       * @param {string} name The name of the compnent to remove
       */

    }, {
      key: "removeByName",
      value: function removeByName(name) {
        var component = this._activeComponents.find(function (c) {
          return c.name === name;
        });

        component.remove();
        DOM.empty(component._container);
      }
    }, {
      key: "getActiveComponent",
      value: function getActiveComponent(type) {
        return this._activeComponents.find(function (c) {
          return c.constructor.type === type;
        });
      }
      /**
       * Returns a concatenated list of all names associated with the given component types
       * @param {string[]} type The types of the component
       * @returns {string[]} The component names for the component types
       */

    }, {
      key: "getComponentNamesForComponentTypes",
      value: function getComponentNamesForComponentTypes(types) {
        var _this = this;

        return types.reduce(function (names, type) {
          return names.concat(_this._componentTypeToComponentNames[type] || []);
        }, []);
      }
    }], [{
      key: "getInstance",
      value: function getInstance() {
        if (!this.instance) {
          this.instance = new ComponentManager();
        }

        return this.instance;
      }
    }]);

    return ComponentManager;
  }();

  /** @module VerticalPagesConfig */
  var VerticalPageConfig =
  /*#__PURE__*/
  function () {
    function VerticalPageConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, VerticalPageConfig);

      /**
       * The name of the tab that is exposed for the link
       * @type {string}
       */
      this.label = config.label || null;
      /**
       * The complete URL, including the params
       * @type {string}
       */

      this.url = config.url || null;
      /**
       * The serverside vertical config id that this is referenced to.
       * By providing this, enables dynamic sorting based on results.
       * @type {string}
       */

      this.verticalKey = config.verticalKey || null;
      /**
       * Determines whether to show this tab in the navigation component
       * @type {boolean}
       */

      this.hideInNavigation = config.hideInNavigation || false;
      /**
       * Determines whether to show this tab first in the order
       * @type {boolean}
       */

      this.isFirst = config.isFirst || false;
      /**
       * Determines whether or not to apply a special class to the
       * markup to determine if it's an active tab
       * @type {boolean}
       */

      this.isActive = config.isActive || false;
      /**
       * URL of an icon
       * @type {string}
       */

      this.iconUrl = config.iconUrl;
      /**
       * name of an icon from the default icon set
       * @type {string}
       */

      this.icon = config.icon;
      Object.freeze(this);
    }

    _createClass(VerticalPageConfig, [{
      key: "validate",
      value: function validate() {}
    }]);

    return VerticalPageConfig;
  }();

  var VerticalPagesConfig =
  /*#__PURE__*/
  function () {
    function VerticalPagesConfig() {
      var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _classCallCheck(this, VerticalPagesConfig);

      this.verticalPagesConfig = VerticalPagesConfig.from(pages);
    }
    /**
     * Using a getter that copies the data instead of providing a reference prevents it from being mutated.
     * This is important for global configuration.
     * @returns {Array<VerticalPageConfig>}
     */


    _createClass(VerticalPagesConfig, [{
      key: "get",
      value: function get() {
        return this.verticalPagesConfig.map(function (page) {
          return _objectSpread({}, page);
        });
      }
    }], [{
      key: "from",
      value: function from(pages) {
        return pages.map(function (page) {
          return new VerticalPageConfig(page);
        });
      }
    }]);

    return VerticalPagesConfig;
  }();

  /**
   * This class provides access to the Answers Status page. This page indicates
   * if the front-end for a particular experience should be temporarily disabled
   * due to back-end issues.
   */

  var MasterSwitchApi =
  /*#__PURE__*/
  function () {
    function MasterSwitchApi(requestConfig, globalStorage) {
      _classCallCheck(this, MasterSwitchApi);

      this._request = new ApiRequest(requestConfig, globalStorage);
    }
    /**
     * Checks if the front-end for the given experience should be temporarily disabled.
     * Note that this check errs on the side of enabling the front-end. If the network call
     * does not complete successfully, due to timeout or other error, those failures are caught.
     * In these failure cases, the assumption is that things are enabled.
     *
     * @returns {Promise<boolean>} A Promise containing a boolean indicating if the front-end
     *                             should be disabled.
     */


    _createClass(MasterSwitchApi, [{
      key: "isDisabled",
      value: function isDisabled() {
        var _this = this;

        // A 100ms timeout is enforced on the status call.
        var timeout = new Promise(function (resolve, reject) {
          setTimeout(reject, 100);
        });
        return new Promise(function (resolve, reject) {
          Promise.race([_this._request.get({
            credentials: 'omit'
          }), timeout]).then(function (response) {
            return response.json();
          }).then(function (status) {
            return status && status.disabled;
          }).then(function (isDisabled) {
            return resolve(!!isDisabled);
          })["catch"](function () {
            return resolve(false);
          });
        });
      }
      /**
       * Creates a new {@link MasterSwitchApi} from the provided parameters.
       *
       * @param {string} apiKey The apiKey of the experience.
       * @param {string} experienceKey The identifier of the experience.
       * @param {GlobalStorage} globalStorage The {@link GlobalStorage} instance.
       * @returns {MasterSwitchApi} The new {@link MasterSwitchApi} instance.
       */

    }], [{
      key: "from",
      value: function from(apiKey, experienceKey, globalStorage) {
        var requestConfig = {
          apiKey: apiKey,
          baseUrl: 'https://answersstatus.pagescdn.com/',
          endpoint: "".concat(apiKey, "/").concat(experienceKey, "/status.json")
        };
        return new MasterSwitchApi(requestConfig, globalStorage);
      }
    }]);

    return MasterSwitchApi;
  }();

  var markdownItForInline = function for_inline_plugin(md, ruleName, tokenType, iteartor) {

    function scan(state) {
      var i, blkIdx, inlineTokens;

      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== 'inline') {
          continue;
        }

        inlineTokens = state.tokens[blkIdx].children;

        for (i = inlineTokens.length - 1; i >= 0; i--) {
          if (inlineTokens[i].type !== tokenType) {
            continue;
          }

          iteartor(inlineTokens, i);
        }
      }
    }

    md.core.ruler.push(ruleName, scan);
  };

  var rtfConverter_min = createCommonjsModule(function (module, exports) {
  !function(e,r){module.exports=r();}(commonjsGlobal,function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:{};function r(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}var t,n=(function(t,n){t.exports=function e(t,n,o){function s(a,l){if(!n[a]){if(!t[a]){var c=r;if(!l&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[a]={exports:{}};t[a][0].call(p.exports,function(e){var r=t[a][1][e];return s(r||e)},p,p.exports,e,t,n,o);}return n[a].exports}for(var i=r,a=0;a<o.length;a++)s(o[a]);return s}({1:[function(e,r,t){r.exports=e("entities/lib/maps/entities.json");},{"entities/lib/maps/entities.json":52}],2:[function(e,r,t){r.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"];},{}],3:[function(e,r,t){var n="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",o="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",s=new RegExp("^(?:"+n+"|"+o+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),i=new RegExp("^(?:"+n+"|"+o+")");r.exports.HTML_TAG_RE=s,r.exports.HTML_OPEN_CLOSE_TAG_RE=i;},{}],4:[function(e,r,t){var n=Object.prototype.hasOwnProperty;function o(e,r){return n.call(e,r)}function s(e){return !(e>=55296&&e<=57343||e>=64976&&e<=65007||65535==(65535&e)||65534==(65535&e)||e>=0&&e<=8||11===e||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function i(e){if(e>65535){var r=55296+((e-=65536)>>10),t=56320+(1023&e);return String.fromCharCode(r,t)}return String.fromCharCode(e)}var a=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,l=new RegExp(a.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),c=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,u=e("./entities"),p=/[&<>"]/,h=/[&<>"]/g,f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function d(e){return f[e]}var m=/[.?*+^$[\]\\(){}|-]/g,_=e("uc.micro/categories/P/regex");t.lib={},t.lib.mdurl=e("mdurl"),t.lib.ucmicro=e("uc.micro"),t.assign=function(e){return Array.prototype.slice.call(arguments,1).forEach(function(r){if(r){if("object"!=typeof r)throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){e[t]=r[t];});}}),e},t.isString=function(e){return "[object String]"===function(e){return Object.prototype.toString.call(e)}(e)},t.has=o,t.unescapeMd=function(e){return e.indexOf("\\")<0?e:e.replace(a,"$1")},t.unescapeAll=function(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(l,function(e,r,t){return r||function(e,r){var t=0;return o(u,r)?u[r]:35===r.charCodeAt(0)&&c.test(r)&&s(t="x"===r[1].toLowerCase()?parseInt(r.slice(2),16):parseInt(r.slice(1),10))?i(t):e}(e,t)})},t.isValidEntityCode=s,t.fromCodePoint=i,t.escapeHtml=function(e){return p.test(e)?e.replace(h,d):e},t.arrayReplaceAt=function(e,r,t){return [].concat(e.slice(0,r),t,e.slice(r+1))},t.isSpace=function(e){switch(e){case 9:case 32:return !0}return !1},t.isWhiteSpace=function(e){if(e>=8192&&e<=8202)return !0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return !0}return !1},t.isMdAsciiPunct=function(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return !0;default:return !1}},t.isPunctChar=function(e){return _.test(e)},t.escapeRE=function(e){return e.replace(m,"\\$&")},t.normalizeReference=function(e){return e=e.trim().replace(/\s+/g," "),"Ṿ"==="ẞ".toLowerCase()&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()};},{"./entities":1,mdurl:58,"uc.micro":65,"uc.micro/categories/P/regex":63}],5:[function(e,r,t){t.parseLinkLabel=e("./parse_link_label"),t.parseLinkDestination=e("./parse_link_destination"),t.parseLinkTitle=e("./parse_link_title");},{"./parse_link_destination":6,"./parse_link_label":7,"./parse_link_title":8}],6:[function(e,r,t){var n=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var o,s,i=r,a={ok:!1,pos:0,lines:0,str:""};if(60===e.charCodeAt(r)){for(r++;r<t;){if(10===(o=e.charCodeAt(r)))return a;if(62===o)return a.pos=r+1,a.str=n(e.slice(i+1,r)),a.ok=!0,a;92===o&&r+1<t?r+=2:r++;}return a}for(s=0;r<t&&32!==(o=e.charCodeAt(r))&&!(o<32||127===o);)if(92===o&&r+1<t)r+=2;else{if(40===o&&s++,41===o){if(0===s)break;s--;}r++;}return i===r?a:0!==s?a:(a.str=n(e.slice(i,r)),a.lines=0,a.pos=r,a.ok=!0,a)};},{"../common/utils":4}],7:[function(e,r,t){r.exports=function(e,r,t){var n,o,s,i,a=-1,l=e.posMax,c=e.pos;for(e.pos=r+1,n=1;e.pos<l;){if(93===(s=e.src.charCodeAt(e.pos))&&0==--n){o=!0;break}if(i=e.pos,e.md.inline.skipToken(e),91===s)if(i===e.pos-1)n++;else if(t)return e.pos=c,-1}return o&&(a=e.pos),e.pos=c,a};},{}],8:[function(e,r,t){var n=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var o,s,i=0,a=r,l={ok:!1,pos:0,lines:0,str:""};if(r>=t)return l;if(34!==(s=e.charCodeAt(r))&&39!==s&&40!==s)return l;for(r++,40===s&&(s=41);r<t;){if((o=e.charCodeAt(r))===s)return l.pos=r+1,l.lines=i,l.str=n(e.slice(a+1,r)),l.ok=!0,l;10===o?i++:92===o&&r+1<t&&(r++,10===e.charCodeAt(r)&&i++),r++;}return l};},{"../common/utils":4}],9:[function(e,r,t){var n=e("./common/utils"),o=e("./helpers"),s=e("./renderer"),i=e("./parser_core"),a=e("./parser_block"),l=e("./parser_inline"),c=e("linkify-it"),u=e("mdurl"),p=e("punycode"),h={default:e("./presets/default"),zero:e("./presets/zero"),commonmark:e("./presets/commonmark")},f=/^(vbscript|javascript|file|data):/,d=/^data:image\/(gif|png|jpeg|webp);/;function m(e){var r=e.trim().toLowerCase();return !f.test(r)||!!d.test(r)}var _=["http:","https:","mailto:"];function g(e){var r=u.parse(e,!0);if(r.hostname&&(!r.protocol||_.indexOf(r.protocol)>=0))try{r.hostname=p.toASCII(r.hostname);}catch(e){}return u.encode(u.format(r))}function k(e){var r=u.parse(e,!0);if(r.hostname&&(!r.protocol||_.indexOf(r.protocol)>=0))try{r.hostname=p.toUnicode(r.hostname);}catch(e){}return u.decode(u.format(r))}function b(e,r){if(!(this instanceof b))return new b(e,r);r||n.isString(e)||(r=e||{},e="default"),this.inline=new l,this.block=new a,this.core=new i,this.renderer=new s,this.linkify=new c,this.validateLink=m,this.normalizeLink=g,this.normalizeLinkText=k,this.utils=n,this.helpers=n.assign({},o),this.options={},this.configure(e),r&&this.set(r);}b.prototype.set=function(e){return n.assign(this.options,e),this},b.prototype.configure=function(e){var r,t=this;if(n.isString(e)&&!(e=h[r=e]))throw new Error('Wrong `markdown-it` preset "'+r+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&t[r].ruler2.enableOnly(e.components[r].rules2);}),this},b.prototype.enable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0));},this),t=t.concat(this.inline.ruler2.enable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},b.prototype.disable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0));},this),t=t.concat(this.inline.ruler2.disable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},b.prototype.use=function(e){var r=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,r),this},b.prototype.parse=function(e,r){if("string"!=typeof e)throw new Error("Input data should be a String");var t=new this.core.State(e,this,r);return this.core.process(t),t.tokens},b.prototype.render=function(e,r){return r=r||{},this.renderer.render(this.parse(e,r),this.options,r)},b.prototype.parseInline=function(e,r){var t=new this.core.State(e,this,r);return t.inlineMode=!0,this.core.process(t),t.tokens},b.prototype.renderInline=function(e,r){return r=r||{},this.renderer.render(this.parseInline(e,r),this.options,r)},r.exports=b;},{"./common/utils":4,"./helpers":5,"./parser_block":10,"./parser_core":11,"./parser_inline":12,"./presets/commonmark":13,"./presets/default":14,"./presets/zero":15,"./renderer":16,"linkify-it":53,mdurl:58,punycode:60}],10:[function(e,r,t){var n=e("./ruler"),o=[["table",e("./rules_block/table"),["paragraph","reference"]],["code",e("./rules_block/code")],["fence",e("./rules_block/fence"),["paragraph","reference","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","reference","blockquote","list"]],["hr",e("./rules_block/hr"),["paragraph","reference","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","reference","blockquote"]],["reference",e("./rules_block/reference")],["heading",e("./rules_block/heading"),["paragraph","reference","blockquote"]],["lheading",e("./rules_block/lheading")],["html_block",e("./rules_block/html_block"),["paragraph","reference","blockquote"]],["paragraph",e("./rules_block/paragraph")]];function s(){this.ruler=new n;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()});}s.prototype.tokenize=function(e,r,t){for(var n,o=this.ruler.getRules(""),s=o.length,i=r,a=!1,l=e.md.options.maxNesting;i<t&&(e.line=i=e.skipEmptyLines(i),!(i>=t))&&!(e.sCount[i]<e.blkIndent);){if(e.level>=l){e.line=t;break}for(n=0;n<s&&!o[n](e,i,t,!1);n++);e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),(i=e.line)<t&&e.isEmpty(i)&&(a=!0,i++,e.line=i);}},s.prototype.parse=function(e,r,t,n){var o;e&&(o=new this.State(e,r,t,n),this.tokenize(o,o.line,o.lineMax));},s.prototype.State=e("./rules_block/state_block"),r.exports=s;},{"./ruler":17,"./rules_block/blockquote":18,"./rules_block/code":19,"./rules_block/fence":20,"./rules_block/heading":21,"./rules_block/hr":22,"./rules_block/html_block":23,"./rules_block/lheading":24,"./rules_block/list":25,"./rules_block/paragraph":26,"./rules_block/reference":27,"./rules_block/state_block":28,"./rules_block/table":29}],11:[function(e,r,t){var n=e("./ruler"),o=[["normalize",e("./rules_core/normalize")],["block",e("./rules_core/block")],["inline",e("./rules_core/inline")],["linkify",e("./rules_core/linkify")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")]];function s(){this.ruler=new n;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1]);}s.prototype.process=function(e){var r,t,n;for(n=this.ruler.getRules(""),r=0,t=n.length;r<t;r++)n[r](e);},s.prototype.State=e("./rules_core/state_core"),r.exports=s;},{"./ruler":17,"./rules_core/block":30,"./rules_core/inline":31,"./rules_core/linkify":32,"./rules_core/normalize":33,"./rules_core/replacements":34,"./rules_core/smartquotes":35,"./rules_core/state_core":36}],12:[function(e,r,t){var n=e("./ruler"),o=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["strikethrough",e("./rules_inline/strikethrough").tokenize],["emphasis",e("./rules_inline/emphasis").tokenize],["link",e("./rules_inline/link")],["image",e("./rules_inline/image")],["autolink",e("./rules_inline/autolink")],["html_inline",e("./rules_inline/html_inline")],["entity",e("./rules_inline/entity")]],s=[["balance_pairs",e("./rules_inline/balance_pairs")],["strikethrough",e("./rules_inline/strikethrough").postProcess],["emphasis",e("./rules_inline/emphasis").postProcess],["text_collapse",e("./rules_inline/text_collapse")]];function i(){var e;for(this.ruler=new n,e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1]);for(this.ruler2=new n,e=0;e<s.length;e++)this.ruler2.push(s[e][0],s[e][1]);}i.prototype.skipToken=function(e){var r,t,n=e.pos,o=this.ruler.getRules(""),s=o.length,i=e.md.options.maxNesting,a=e.cache;if(void 0===a[n]){if(e.level<i)for(t=0;t<s&&(e.level++,r=o[t](e,!0),e.level--,!r);t++);else e.pos=e.posMax;r||e.pos++,a[n]=e.pos;}else e.pos=a[n];},i.prototype.tokenize=function(e){for(var r,t,n=this.ruler.getRules(""),o=n.length,s=e.posMax,i=e.md.options.maxNesting;e.pos<s;){if(e.level<i)for(t=0;t<o&&!(r=n[t](e,!1));t++);if(r){if(e.pos>=s)break}else e.pending+=e.src[e.pos++];}e.pending&&e.pushPending();},i.prototype.parse=function(e,r,t,n){var o,s,i,a=new this.State(e,r,t,n);for(this.tokenize(a),s=this.ruler2.getRules(""),i=s.length,o=0;o<i;o++)s[o](a);},i.prototype.State=e("./rules_inline/state_inline"),r.exports=i;},{"./ruler":17,"./rules_inline/autolink":37,"./rules_inline/backticks":38,"./rules_inline/balance_pairs":39,"./rules_inline/emphasis":40,"./rules_inline/entity":41,"./rules_inline/escape":42,"./rules_inline/html_inline":43,"./rules_inline/image":44,"./rules_inline/link":45,"./rules_inline/newline":46,"./rules_inline/state_inline":47,"./rules_inline/strikethrough":48,"./rules_inline/text":49,"./rules_inline/text_collapse":50}],13:[function(e,r,t){r.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}};},{}],14:[function(e,r,t){r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}};},{}],15:[function(e,r,t){r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}};},{}],16:[function(e,r,t){var n=e("./common/utils").assign,o=e("./common/utils").unescapeAll,s=e("./common/utils").escapeHtml,i={};function a(){this.rules=n({},i);}i.code_inline=function(e,r,t,n,o){var i=e[r];return "<code"+o.renderAttrs(i)+">"+s(e[r].content)+"</code>"},i.code_block=function(e,r,t,n,o){var i=e[r];return "<pre"+o.renderAttrs(i)+"><code>"+s(e[r].content)+"</code></pre>\n"},i.fence=function(e,r,t,n,i){var a,l,c,u,p=e[r],h=p.info?o(p.info).trim():"",f="";return h&&(f=h.split(/\s+/g)[0]),0===(a=t.highlight&&t.highlight(p.content,f)||s(p.content)).indexOf("<pre")?a+"\n":h?(l=p.attrIndex("class"),c=p.attrs?p.attrs.slice():[],l<0?c.push(["class",t.langPrefix+f]):c[l][1]+=" "+t.langPrefix+f,u={attrs:c},"<pre><code"+i.renderAttrs(u)+">"+a+"</code></pre>\n"):"<pre><code"+i.renderAttrs(p)+">"+a+"</code></pre>\n"},i.image=function(e,r,t,n,o){var s=e[r];return s.attrs[s.attrIndex("alt")][1]=o.renderInlineAsText(s.children,t,n),o.renderToken(e,r,t)},i.hardbreak=function(e,r,t){return t.xhtmlOut?"<br />\n":"<br>\n"},i.softbreak=function(e,r,t){return t.breaks?t.xhtmlOut?"<br />\n":"<br>\n":"\n"},i.text=function(e,r){return s(e[r].content)},i.html_block=function(e,r){return e[r].content},i.html_inline=function(e,r){return e[r].content},a.prototype.renderAttrs=function(e){var r,t,n;if(!e.attrs)return "";for(n="",r=0,t=e.attrs.length;r<t;r++)n+=" "+s(e.attrs[r][0])+'="'+s(e.attrs[r][1])+'"';return n},a.prototype.renderToken=function(e,r,t){var n,o="",s=!1,i=e[r];return i.hidden?"":(i.block&&-1!==i.nesting&&r&&e[r-1].hidden&&(o+="\n"),o+=(-1===i.nesting?"</":"<")+i.tag,o+=this.renderAttrs(i),0===i.nesting&&t.xhtmlOut&&(o+=" /"),i.block&&(s=!0,1===i.nesting&&r+1<e.length&&("inline"===(n=e[r+1]).type||n.hidden?s=!1:-1===n.nesting&&n.tag===i.tag&&(s=!1))),o+=s?">\n":">")},a.prototype.renderInline=function(e,r,t){for(var n,o="",s=this.rules,i=0,a=e.length;i<a;i++)n=e[i].type,void 0!==s[n]?o+=s[n](e,i,r,t,this):o+=this.renderToken(e,i,r);return o},a.prototype.renderInlineAsText=function(e,r,t){for(var n="",o=0,s=e.length;o<s;o++)"text"===e[o].type?n+=e[o].content:"image"===e[o].type&&(n+=this.renderInlineAsText(e[o].children,r,t));return n},a.prototype.render=function(e,r,t){var n,o,s,i="",a=this.rules;for(n=0,o=e.length;n<o;n++)"inline"===(s=e[n].type)?i+=this.renderInline(e[n].children,r,t):void 0!==a[s]?i+=a[e[n].type](e,n,r,t,this):i+=this.renderToken(e,n,r,t);return i},r.exports=a;},{"./common/utils":4}],17:[function(e,r,t){function n(){this.__rules__=[],this.__cache__=null;}n.prototype.__find__=function(e){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===e)return r;return -1},n.prototype.__compile__=function(){var e=this,r=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){r.indexOf(e)<0&&r.push(e);});}),e.__cache__={},r.forEach(function(r){e.__cache__[r]=[],e.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||e.__cache__[r].push(t.fn));});});},n.prototype.at=function(e,r,t){var n=this.__find__(e),o=t||{};if(-1===n)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=r,this.__rules__[n].alt=o.alt||[],this.__cache__=null;},n.prototype.before=function(e,r,t,n){var o=this.__find__(e),s=n||{};if(-1===o)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:r,enabled:!0,fn:t,alt:s.alt||[]}),this.__cache__=null;},n.prototype.after=function(e,r,t,n){var o=this.__find__(e),s=n||{};if(-1===o)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:r,enabled:!0,fn:t,alt:s.alt||[]}),this.__cache__=null;},n.prototype.push=function(e,r,t){var n=t||{};this.__rules__.push({name:e,enabled:!0,fn:r,alt:n.alt||[]}),this.__cache__=null;},n.prototype.enable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!0,t.push(e);},this),this.__cache__=null,t},n.prototype.enableOnly=function(e,r){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1;}),this.enable(e,r);},n.prototype.disable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!1,t.push(e);},this),this.__cache__=null,t},n.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},r.exports=n;},{}],18:[function(e,r,t){var n=e("../common/utils").isSpace;r.exports=function(e,r,t,o){var s,i,a,l,c,u,p,h,f,d,m,_,g,k,b,v,y,x,C,A,w=e.lineMax,D=e.bMarks[r]+e.tShift[r],E=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return !1;if(62!==e.src.charCodeAt(D++))return !1;if(o)return !0;for(l=f=e.sCount[r]+D-(e.bMarks[r]+e.tShift[r]),32===e.src.charCodeAt(D)?(D++,l++,f++,s=!1,v=!0):9===e.src.charCodeAt(D)?(v=!0,(e.bsCount[r]+f)%4==3?(D++,l++,f++,s=!1):s=!0):v=!1,d=[e.bMarks[r]],e.bMarks[r]=D;D<E&&(i=e.src.charCodeAt(D),n(i));)9===i?f+=4-(f+e.bsCount[r]+(s?1:0))%4:f++,D++;for(m=[e.bsCount[r]],e.bsCount[r]=e.sCount[r]+1+(v?1:0),u=D>=E,k=[e.sCount[r]],e.sCount[r]=f-l,b=[e.tShift[r]],e.tShift[r]=D-e.bMarks[r],x=e.md.block.ruler.getRules("blockquote"),g=e.parentType,e.parentType="blockquote",A=!1,h=r+1;h<t&&(e.sCount[h]<e.blkIndent&&(A=!0),D=e.bMarks[h]+e.tShift[h],E=e.eMarks[h],!(D>=E));h++)if(62!==e.src.charCodeAt(D++)||A){if(u)break;for(y=!1,a=0,c=x.length;a<c;a++)if(x[a](e,h,t,!0)){y=!0;break}if(y){e.lineMax=h,0!==e.blkIndent&&(d.push(e.bMarks[h]),m.push(e.bsCount[h]),b.push(e.tShift[h]),k.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}d.push(e.bMarks[h]),m.push(e.bsCount[h]),b.push(e.tShift[h]),k.push(e.sCount[h]),e.sCount[h]=-1;}else{for(l=f=e.sCount[h]+D-(e.bMarks[h]+e.tShift[h]),32===e.src.charCodeAt(D)?(D++,l++,f++,s=!1,v=!0):9===e.src.charCodeAt(D)?(v=!0,(e.bsCount[h]+f)%4==3?(D++,l++,f++,s=!1):s=!0):v=!1,d.push(e.bMarks[h]),e.bMarks[h]=D;D<E&&(i=e.src.charCodeAt(D),n(i));)9===i?f+=4-(f+e.bsCount[h]+(s?1:0))%4:f++,D++;u=D>=E,m.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(v?1:0),k.push(e.sCount[h]),e.sCount[h]=f-l,b.push(e.tShift[h]),e.tShift[h]=D-e.bMarks[h];}for(_=e.blkIndent,e.blkIndent=0,(C=e.push("blockquote_open","blockquote",1)).markup=">",C.map=p=[r,0],e.md.block.tokenize(e,r,h),(C=e.push("blockquote_close","blockquote",-1)).markup=">",e.lineMax=w,e.parentType=g,p[1]=e.line,a=0;a<b.length;a++)e.bMarks[a+r]=d[a],e.tShift[a+r]=b[a],e.sCount[a+r]=k[a],e.bsCount[a+r]=m[a];return e.blkIndent=_,!0};},{"../common/utils":4}],19:[function(e,r,t){r.exports=function(e,r,t){var n,o,s;if(e.sCount[r]-e.blkIndent<4)return !1;for(o=n=r+1;n<t;)if(e.isEmpty(n))n++;else{if(!(e.sCount[n]-e.blkIndent>=4))break;o=++n;}return e.line=o,(s=e.push("code_block","code",0)).content=e.getLines(r,o,4+e.blkIndent,!0),s.map=[r,e.line],!0};},{}],20:[function(e,r,t){r.exports=function(e,r,t,n){var o,s,i,a,l,c,u,p=!1,h=e.bMarks[r]+e.tShift[r],f=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return !1;if(h+3>f)return !1;if(126!==(o=e.src.charCodeAt(h))&&96!==o)return !1;if(l=h,h=e.skipChars(h,o),(s=h-l)<3)return !1;if(u=e.src.slice(l,h),i=e.src.slice(h,f),96===o&&i.indexOf(String.fromCharCode(o))>=0)return !1;if(n)return !0;for(a=r;!(++a>=t||(h=l=e.bMarks[a]+e.tShift[a],f=e.eMarks[a],h<f&&e.sCount[a]<e.blkIndent));)if(e.src.charCodeAt(h)===o&&!(e.sCount[a]-e.blkIndent>=4||(h=e.skipChars(h,o))-l<s||(h=e.skipSpaces(h))<f)){p=!0;break}return s=e.sCount[r],e.line=a+(p?1:0),(c=e.push("fence","code",0)).info=i,c.content=e.getLines(r+1,a,s,!0),c.markup=u,c.map=[r,e.line],!0};},{}],21:[function(e,r,t){var n=e("../common/utils").isSpace;r.exports=function(e,r,t,o){var s,i,a,l,c=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return !1;if(35!==(s=e.src.charCodeAt(c))||c>=u)return !1;for(i=1,s=e.src.charCodeAt(++c);35===s&&c<u&&i<=6;)i++,s=e.src.charCodeAt(++c);return !(i>6||c<u&&!n(s)||!o&&(u=e.skipSpacesBack(u,c),(a=e.skipCharsBack(u,35,c))>c&&n(e.src.charCodeAt(a-1))&&(u=a),e.line=r+1,(l=e.push("heading_open","h"+String(i),1)).markup="########".slice(0,i),l.map=[r,e.line],(l=e.push("inline","",0)).content=e.src.slice(c,u).trim(),l.map=[r,e.line],l.children=[],(l=e.push("heading_close","h"+String(i),-1)).markup="########".slice(0,i),0))};},{"../common/utils":4}],22:[function(e,r,t){var n=e("../common/utils").isSpace;r.exports=function(e,r,t,o){var s,i,a,l,c=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return !1;if(42!==(s=e.src.charCodeAt(c++))&&45!==s&&95!==s)return !1;for(i=1;c<u;){if((a=e.src.charCodeAt(c++))!==s&&!n(a))return !1;a===s&&i++;}return !(i<3||!o&&(e.line=r+1,(l=e.push("hr","hr",0)).map=[r,e.line],l.markup=Array(i+1).join(String.fromCharCode(s)),0))};},{"../common/utils":4}],23:[function(e,r,t){var n=e("../common/html_blocks"),o=e("../common/html_re").HTML_OPEN_CLOSE_TAG_RE,s=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+n.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(o.source+"\\s*$"),/^$/,!1]];r.exports=function(e,r,t,n){var o,i,a,l,c=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return !1;if(!e.md.options.html)return !1;if(60!==e.src.charCodeAt(c))return !1;for(l=e.src.slice(c,u),o=0;o<s.length&&!s[o][0].test(l);o++);if(o===s.length)return !1;if(n)return s[o][2];if(i=r+1,!s[o][1].test(l))for(;i<t&&!(e.sCount[i]<e.blkIndent);i++)if(c=e.bMarks[i]+e.tShift[i],u=e.eMarks[i],l=e.src.slice(c,u),s[o][1].test(l)){0!==l.length&&i++;break}return e.line=i,(a=e.push("html_block","",0)).map=[r,i],a.content=e.getLines(r,i,e.blkIndent,!0),!0};},{"../common/html_blocks":2,"../common/html_re":3}],24:[function(e,r,t){r.exports=function(e,r,t){var n,o,s,i,a,l,c,u,p,h,f=r+1,d=e.md.block.ruler.getRules("paragraph");if(e.sCount[r]-e.blkIndent>=4)return !1;for(h=e.parentType,e.parentType="paragraph";f<t&&!e.isEmpty(f);f++)if(!(e.sCount[f]-e.blkIndent>3)){if(e.sCount[f]>=e.blkIndent&&(l=e.bMarks[f]+e.tShift[f],c=e.eMarks[f],l<c&&(45===(p=e.src.charCodeAt(l))||61===p)&&(l=e.skipChars(l,p),(l=e.skipSpaces(l))>=c))){u=61===p?1:2;break}if(!(e.sCount[f]<0)){for(o=!1,s=0,i=d.length;s<i;s++)if(d[s](e,f,t,!0)){o=!0;break}if(o)break}}return !!u&&(n=e.getLines(r,f,e.blkIndent,!1).trim(),e.line=f+1,(a=e.push("heading_open","h"+String(u),1)).markup=String.fromCharCode(p),a.map=[r,e.line],(a=e.push("inline","",0)).content=n,a.map=[r,e.line-1],a.children=[],(a=e.push("heading_close","h"+String(u),-1)).markup=String.fromCharCode(p),e.parentType=h,!0)};},{}],25:[function(e,r,t){var n=e("../common/utils").isSpace;function o(e,r){var t,o,s,i;return o=e.bMarks[r]+e.tShift[r],s=e.eMarks[r],42!==(t=e.src.charCodeAt(o++))&&45!==t&&43!==t?-1:o<s&&(i=e.src.charCodeAt(o),!n(i))?-1:o}function s(e,r){var t,o=e.bMarks[r]+e.tShift[r],s=o,i=e.eMarks[r];if(s+1>=i)return -1;if((t=e.src.charCodeAt(s++))<48||t>57)return -1;for(;;){if(s>=i)return -1;if(!((t=e.src.charCodeAt(s++))>=48&&t<=57)){if(41===t||46===t)break;return -1}if(s-o>=10)return -1}return s<i&&(t=e.src.charCodeAt(s),!n(t))?-1:s}r.exports=function(e,r,t,n){var i,a,l,c,u,p,h,f,d,m,_,g,k,b,v,y,x,C,A,w,D,E,q,F,S,L,z,T,I=!1,R=!0;if(e.sCount[r]-e.blkIndent>=4)return !1;if(e.listIndent>=0&&e.sCount[r]-e.listIndent>=4&&e.sCount[r]<e.blkIndent)return !1;if(n&&"paragraph"===e.parentType&&e.tShift[r]>=e.blkIndent&&(I=!0),(q=s(e,r))>=0){if(h=!0,S=e.bMarks[r]+e.tShift[r],k=Number(e.src.substr(S,q-S-1)),I&&1!==k)return !1}else{if(!((q=o(e,r))>=0))return !1;h=!1;}if(I&&e.skipSpaces(q)>=e.eMarks[r])return !1;if(g=e.src.charCodeAt(q-1),n)return !0;for(_=e.tokens.length,h?(T=e.push("ordered_list_open","ol",1),1!==k&&(T.attrs=[["start",k]])):T=e.push("bullet_list_open","ul",1),T.map=m=[r,0],T.markup=String.fromCharCode(g),v=r,F=!1,z=e.md.block.ruler.getRules("list"),C=e.parentType,e.parentType="list";v<t;){for(E=q,b=e.eMarks[v],p=y=e.sCount[v]+q-(e.bMarks[r]+e.tShift[r]);E<b;){if(9===(i=e.src.charCodeAt(E)))y+=4-(y+e.bsCount[v])%4;else{if(32!==i)break;y++;}E++;}if((u=(a=E)>=b?1:y-p)>4&&(u=1),c=p+u,(T=e.push("list_item_open","li",1)).markup=String.fromCharCode(g),T.map=f=[r,0],D=e.tight,w=e.tShift[r],A=e.sCount[r],x=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=c,e.tight=!0,e.tShift[r]=a-e.bMarks[r],e.sCount[r]=y,a>=b&&e.isEmpty(r+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,r,t,!0),e.tight&&!F||(R=!1),F=e.line-r>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=x,e.tShift[r]=w,e.sCount[r]=A,e.tight=D,(T=e.push("list_item_close","li",-1)).markup=String.fromCharCode(g),v=r=e.line,f[1]=v,a=e.bMarks[r],v>=t)break;if(e.sCount[v]<e.blkIndent)break;if(e.sCount[r]-e.blkIndent>=4)break;for(L=!1,l=0,d=z.length;l<d;l++)if(z[l](e,v,t,!0)){L=!0;break}if(L)break;if(h){if((q=s(e,v))<0)break}else if((q=o(e,v))<0)break;if(g!==e.src.charCodeAt(q-1))break}return (T=h?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1)).markup=String.fromCharCode(g),m[1]=v,e.line=v,e.parentType=C,R&&function(e,r){var t,n,o=e.level+2;for(t=r+2,n=e.tokens.length-2;t<n;t++)e.tokens[t].level===o&&"paragraph_open"===e.tokens[t].type&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2);}(e,_),!0};},{"../common/utils":4}],26:[function(e,r,t){r.exports=function(e,r){var t,n,o,s,i,a,l=r+1,c=e.md.block.ruler.getRules("paragraph"),u=e.lineMax;for(a=e.parentType,e.parentType="paragraph";l<u&&!e.isEmpty(l);l++)if(!(e.sCount[l]-e.blkIndent>3||e.sCount[l]<0)){for(n=!1,o=0,s=c.length;o<s;o++)if(c[o](e,l,u,!0)){n=!0;break}if(n)break}return t=e.getLines(r,l,e.blkIndent,!1).trim(),e.line=l,(i=e.push("paragraph_open","p",1)).map=[r,e.line],(i=e.push("inline","",0)).content=t,i.map=[r,e.line],i.children=[],i=e.push("paragraph_close","p",-1),e.parentType=a,!0};},{}],27:[function(e,r,t){var n=e("../common/utils").normalizeReference,o=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var i,a,l,c,u,p,h,f,d,m,_,g,k,b,v,y,x=0,C=e.bMarks[r]+e.tShift[r],A=e.eMarks[r],w=r+1;if(e.sCount[r]-e.blkIndent>=4)return !1;if(91!==e.src.charCodeAt(C))return !1;for(;++C<A;)if(93===e.src.charCodeAt(C)&&92!==e.src.charCodeAt(C-1)){if(C+1===A)return !1;if(58!==e.src.charCodeAt(C+1))return !1;break}for(c=e.lineMax,v=e.md.block.ruler.getRules("reference"),m=e.parentType,e.parentType="reference";w<c&&!e.isEmpty(w);w++)if(!(e.sCount[w]-e.blkIndent>3||e.sCount[w]<0)){for(b=!1,p=0,h=v.length;p<h;p++)if(v[p](e,w,c,!0)){b=!0;break}if(b)break}for(k=e.getLines(r,w,e.blkIndent,!1).trim(),A=k.length,C=1;C<A;C++){if(91===(i=k.charCodeAt(C)))return !1;if(93===i){d=C;break}10===i?x++:92===i&&++C<A&&10===k.charCodeAt(C)&&x++;}if(d<0||58!==k.charCodeAt(d+1))return !1;for(C=d+2;C<A;C++)if(10===(i=k.charCodeAt(C)))x++;else if(!o(i))break;if(!(_=e.md.helpers.parseLinkDestination(k,C,A)).ok)return !1;if(u=e.md.normalizeLink(_.str),!e.md.validateLink(u))return !1;for(C=_.pos,x+=_.lines,a=C,l=x,g=C;C<A;C++)if(10===(i=k.charCodeAt(C)))x++;else if(!o(i))break;for(_=e.md.helpers.parseLinkTitle(k,C,A),C<A&&g!==C&&_.ok?(y=_.str,C=_.pos,x+=_.lines):(y="",C=a,x=l);C<A&&(i=k.charCodeAt(C),o(i));)C++;if(C<A&&10!==k.charCodeAt(C)&&y)for(y="",C=a,x=l;C<A&&(i=k.charCodeAt(C),o(i));)C++;return !(C<A&&10!==k.charCodeAt(C)||!(f=n(k.slice(1,d)))||!s&&(void 0===e.env.references&&(e.env.references={}),void 0===e.env.references[f]&&(e.env.references[f]={title:y,href:u}),e.parentType=m,e.line=r+x+1,0))};},{"../common/utils":4}],28:[function(e,r,t){var n=e("../token"),o=e("../common/utils").isSpace;function s(e,r,t,n){var s,i,a,l,c,u,p,h;for(this.src=e,this.md=r,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,h=!1,a=l=u=p=0,c=i.length;l<c;l++){if(s=i.charCodeAt(l),!h){if(o(s)){u++,9===s?p+=4-p%4:p++;continue}h=!0;}10!==s&&l!==c-1||(10!==s&&l++,this.bMarks.push(a),this.eMarks.push(l),this.tShift.push(u),this.sCount.push(p),this.bsCount.push(0),h=!1,u=0,p=0,a=l+1);}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1;}s.prototype.push=function(e,r,t){var o=new n(e,r,t);return o.block=!0,t<0&&this.level--,o.level=this.level,t>0&&this.level++,this.tokens.push(o),o},s.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},s.prototype.skipEmptyLines=function(e){for(var r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},s.prototype.skipSpaces=function(e){for(var r,t=this.src.length;e<t&&(r=this.src.charCodeAt(e),o(r));e++);return e},s.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!o(this.src.charCodeAt(--e)))return e+1;return e},s.prototype.skipChars=function(e,r){for(var t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e},s.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e},s.prototype.getLines=function(e,r,t,n){var s,i,a,l,c,u,p,h=e;if(e>=r)return "";for(u=new Array(r-e),s=0;h<r;h++,s++){for(i=0,p=l=this.bMarks[h],c=h+1<r||n?this.eMarks[h]+1:this.eMarks[h];l<c&&i<t;){if(a=this.src.charCodeAt(l),o(a))9===a?i+=4-(i+this.bsCount[h])%4:i++;else{if(!(l-p<this.tShift[h]))break;i++;}l++;}u[s]=i>t?new Array(i-t+1).join(" ")+this.src.slice(l,c):this.src.slice(l,c);}return u.join("")},s.prototype.Token=n,r.exports=s;},{"../common/utils":4,"../token":51}],29:[function(e,r,t){var n=e("../common/utils").isSpace;function o(e,r){var t=e.bMarks[r]+e.blkIndent,n=e.eMarks[r];return e.src.substr(t,n-t)}function s(e){var r,t=[],n=0,o=e.length,s=0,i=0,a=!1,l=0;for(r=e.charCodeAt(n);n<o;)96===r?a?(a=!1,l=n):s%2==0&&(a=!0,l=n):124!==r||s%2!=0||a||(t.push(e.substring(i,n)),i=n+1),92===r?s++:s=0,++n===o&&a&&(a=!1,n=l+1),r=e.charCodeAt(n);return t.push(e.substring(i)),t}r.exports=function(e,r,t,i){var a,l,c,u,p,h,f,d,m,_,g,k;if(r+2>t)return !1;if(p=r+1,e.sCount[p]<e.blkIndent)return !1;if(e.sCount[p]-e.blkIndent>=4)return !1;if((c=e.bMarks[p]+e.tShift[p])>=e.eMarks[p])return !1;if(124!==(a=e.src.charCodeAt(c++))&&45!==a&&58!==a)return !1;for(;c<e.eMarks[p];){if(124!==(a=e.src.charCodeAt(c))&&45!==a&&58!==a&&!n(a))return !1;c++;}for(l=o(e,r+1),h=l.split("|"),m=[],u=0;u<h.length;u++){if(!(_=h[u].trim())){if(0===u||u===h.length-1)continue;return !1}if(!/^:?-+:?$/.test(_))return !1;58===_.charCodeAt(_.length-1)?m.push(58===_.charCodeAt(0)?"center":"right"):58===_.charCodeAt(0)?m.push("left"):m.push("");}if(-1===(l=o(e,r).trim()).indexOf("|"))return !1;if(e.sCount[r]-e.blkIndent>=4)return !1;if(h=s(l.replace(/^\||\|$/g,"")),(f=h.length)>m.length)return !1;if(i)return !0;for((d=e.push("table_open","table",1)).map=g=[r,0],(d=e.push("thead_open","thead",1)).map=[r,r+1],(d=e.push("tr_open","tr",1)).map=[r,r+1],u=0;u<h.length;u++)(d=e.push("th_open","th",1)).map=[r,r+1],m[u]&&(d.attrs=[["style","text-align:"+m[u]]]),(d=e.push("inline","",0)).content=h[u].trim(),d.map=[r,r+1],d.children=[],d=e.push("th_close","th",-1);for(d=e.push("tr_close","tr",-1),d=e.push("thead_close","thead",-1),(d=e.push("tbody_open","tbody",1)).map=k=[r+2,0],p=r+2;p<t&&!(e.sCount[p]<e.blkIndent)&&-1!==(l=o(e,p).trim()).indexOf("|")&&!(e.sCount[p]-e.blkIndent>=4);p++){for(h=s(l.replace(/^\||\|$/g,"")),d=e.push("tr_open","tr",1),u=0;u<f;u++)d=e.push("td_open","td",1),m[u]&&(d.attrs=[["style","text-align:"+m[u]]]),(d=e.push("inline","",0)).content=h[u]?h[u].trim():"",d.children=[],d=e.push("td_close","td",-1);d=e.push("tr_close","tr",-1);}return d=e.push("tbody_close","tbody",-1),d=e.push("table_close","table",-1),g[1]=k[1]=p,e.line=p,!0};},{"../common/utils":4}],30:[function(e,r,t){r.exports=function(e){var r;e.inlineMode?((r=new e.Token("inline","",0)).content=e.src,r.map=[0,1],r.children=[],e.tokens.push(r)):e.md.block.parse(e.src,e.md,e.env,e.tokens);};},{}],31:[function(e,r,t){r.exports=function(e){var r,t,n,o=e.tokens;for(t=0,n=o.length;t<n;t++)"inline"===(r=o[t]).type&&e.md.inline.parse(r.content,e.md,e.env,r.children);};},{}],32:[function(e,r,t){var n=e("../common/utils").arrayReplaceAt;function o(e){return /^<\/a\s*>/i.test(e)}r.exports=function(e){var r,t,s,i,a,l,c,u,p,h,f,d,m,_,g,k,b,v,y=e.tokens;if(e.md.options.linkify)for(t=0,s=y.length;t<s;t++)if("inline"===y[t].type&&e.md.linkify.pretest(y[t].content))for(i=y[t].children,m=0,r=i.length-1;r>=0;r--)if("link_close"!==(l=i[r]).type){if("html_inline"===l.type&&(v=l.content,/^<a[>\s]/i.test(v)&&m>0&&m--,o(l.content)&&m++),!(m>0)&&"text"===l.type&&e.md.linkify.test(l.content)){for(p=l.content,b=e.md.linkify.match(p),c=[],d=l.level,f=0,u=0;u<b.length;u++)_=b[u].url,g=e.md.normalizeLink(_),e.md.validateLink(g)&&(k=b[u].text,k=b[u].schema?"mailto:"!==b[u].schema||/^mailto:/i.test(k)?e.md.normalizeLinkText(k):e.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,""),(h=b[u].index)>f&&((a=new e.Token("text","",0)).content=p.slice(f,h),a.level=d,c.push(a)),(a=new e.Token("link_open","a",1)).attrs=[["href",g]],a.level=d++,a.markup="linkify",a.info="auto",c.push(a),(a=new e.Token("text","",0)).content=k,a.level=d,c.push(a),(a=new e.Token("link_close","a",-1)).level=--d,a.markup="linkify",a.info="auto",c.push(a),f=b[u].lastIndex);f<p.length&&((a=new e.Token("text","",0)).content=p.slice(f),a.level=d,c.push(a)),y[t].children=i=n(i,r,c);}}else for(r--;i[r].level!==l.level&&"link_open"!==i[r].type;)r--;};},{"../common/utils":4}],33:[function(e,r,t){var n=/\r\n?|\n/g,o=/\0/g;r.exports=function(e){var r;r=(r=e.src.replace(n,"\n")).replace(o,"�"),e.src=r;};},{}],34:[function(e,r,t){var n=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,o=/\((c|tm|r|p)\)/i,s=/\((c|tm|r|p)\)/gi,i={c:"©",r:"®",p:"§",tm:"™"};function a(e,r){return i[r.toLowerCase()]}function l(e){var r,t,n=0;for(r=e.length-1;r>=0;r--)"text"!==(t=e[r]).type||n||(t.content=t.content.replace(s,a)),"link_open"===t.type&&"auto"===t.info&&n--,"link_close"===t.type&&"auto"===t.info&&n++;}function c(e){var r,t,o=0;for(r=e.length-1;r>=0;r--)"text"!==(t=e[r]).type||o||n.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),"link_open"===t.type&&"auto"===t.info&&o--,"link_close"===t.type&&"auto"===t.info&&o++;}r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&(o.test(e.tokens[r].content)&&l(e.tokens[r].children),n.test(e.tokens[r].content)&&c(e.tokens[r].children));};},{}],35:[function(e,r,t){var n=e("../common/utils").isWhiteSpace,o=e("../common/utils").isPunctChar,s=e("../common/utils").isMdAsciiPunct,i=/['"]/,a=/['"]/g,l="’";function c(e,r,t){return e.substr(0,r)+t+e.substr(r+1)}function u(e,r){var t,i,u,p,h,f,d,m,_,g,k,b,v,y,x,C,A,w,D,E,q;for(D=[],t=0;t<e.length;t++){for(i=e[t],d=e[t].level,A=D.length-1;A>=0&&!(D[A].level<=d);A--);if(D.length=A+1,"text"===i.type){u=i.content,h=0,f=u.length;e:for(;h<f&&(a.lastIndex=h,p=a.exec(u));){if(x=C=!0,h=p.index+1,w="'"===p[0],_=32,p.index-1>=0)_=u.charCodeAt(p.index-1);else for(A=t-1;A>=0&&"softbreak"!==e[A].type&&"hardbreak"!==e[A].type;A--)if("text"===e[A].type){_=e[A].content.charCodeAt(e[A].content.length-1);break}if(g=32,h<f)g=u.charCodeAt(h);else for(A=t+1;A<e.length&&"softbreak"!==e[A].type&&"hardbreak"!==e[A].type;A++)if("text"===e[A].type){g=e[A].content.charCodeAt(0);break}if(k=s(_)||o(String.fromCharCode(_)),b=s(g)||o(String.fromCharCode(g)),v=n(_),(y=n(g))?x=!1:b&&(v||k||(x=!1)),v?C=!1:k&&(y||b||(C=!1)),34===g&&'"'===p[0]&&_>=48&&_<=57&&(C=x=!1),x&&C&&(x=!1,C=b),x||C){if(C)for(A=D.length-1;A>=0&&(m=D[A],!(D[A].level<d));A--)if(m.single===w&&D[A].level===d){m=D[A],w?(E=r.md.options.quotes[2],q=r.md.options.quotes[3]):(E=r.md.options.quotes[0],q=r.md.options.quotes[1]),i.content=c(i.content,p.index,q),e[m.token].content=c(e[m.token].content,m.pos,E),h+=q.length-1,m.token===t&&(h+=E.length-1),u=i.content,f=u.length,D.length=A;continue e}x?D.push({token:t,pos:p.index,single:w,level:d}):C&&w&&(i.content=c(i.content,p.index,l));}else w&&(i.content=c(i.content,p.index,l));}}}}r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&i.test(e.tokens[r].content)&&u(e.tokens[r].children,e);};},{"../common/utils":4}],36:[function(e,r,t){var n=e("../token");function o(e,r,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=r;}o.prototype.Token=n,r.exports=o;},{"../token":51}],37:[function(e,r,t){var n=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,o=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;r.exports=function(e,r){var t,s,i,a,l,c,u=e.pos;return !(60!==e.src.charCodeAt(u)||(t=e.src.slice(u)).indexOf(">")<0||(o.test(t)?(s=t.match(o),a=s[0].slice(1,-1),l=e.md.normalizeLink(a),!e.md.validateLink(l)||(r||((c=e.push("link_open","a",1)).attrs=[["href",l]],c.markup="autolink",c.info="auto",(c=e.push("text","",0)).content=e.md.normalizeLinkText(a),(c=e.push("link_close","a",-1)).markup="autolink",c.info="auto"),e.pos+=s[0].length,0)):!n.test(t)||(i=t.match(n),a=i[0].slice(1,-1),l=e.md.normalizeLink("mailto:"+a),!e.md.validateLink(l)||(r||((c=e.push("link_open","a",1)).attrs=[["href",l]],c.markup="autolink",c.info="auto",(c=e.push("text","",0)).content=e.md.normalizeLinkText(a),(c=e.push("link_close","a",-1)).markup="autolink",c.info="auto"),e.pos+=i[0].length,0))))};},{}],38:[function(e,r,t){r.exports=function(e,r){var t,n,o,s,i,a,l=e.pos,c=e.src.charCodeAt(l);if(96!==c)return !1;for(t=l,l++,n=e.posMax;l<n&&96===e.src.charCodeAt(l);)l++;for(o=e.src.slice(t,l),s=i=l;-1!==(s=e.src.indexOf("`",i));){for(i=s+1;i<n&&96===e.src.charCodeAt(i);)i++;if(i-s===o.length)return r||((a=e.push("code_inline","code",0)).markup=o,a.content=e.src.slice(l,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=i,!0}return r||(e.pending+=o),e.pos+=o.length,!0};},{}],39:[function(e,r,t){function n(e,r){var t,n,o,s,i,a,l,c,u={},p=r.length;for(t=0;t<p;t++)if((o=r[t]).length=o.length||0,o.close){for(u.hasOwnProperty(o.marker)||(u[o.marker]=[-1,-1,-1]),i=u[o.marker][o.length%3],a=-1,n=t-o.jump-1;n>i;n-=s.jump+1)if((s=r[n]).marker===o.marker&&(-1===a&&(a=n),s.open&&s.end<0&&s.level===o.level&&(l=!1,(s.close||o.open)&&(s.length+o.length)%3==0&&(s.length%3==0&&o.length%3==0||(l=!0)),!l))){c=n>0&&!r[n-1].open?r[n-1].jump+1:0,o.jump=t-n+c,o.open=!1,s.end=t,s.jump=c,s.close=!1,a=-1;break}-1!==a&&(u[o.marker][(o.length||0)%3]=a);}}r.exports=function(e){var r,t=e.tokens_meta,o=e.tokens_meta.length;for(n(0,e.delimiters),r=0;r<o;r++)t[r]&&t[r].delimiters&&n(0,t[r].delimiters);};},{}],40:[function(e,r,t){function n(e,r){var t,n,o,s,i,a,l=r.length;for(t=l-1;t>=0;t--)95!==(n=r[t]).marker&&42!==n.marker||-1!==n.end&&(o=r[n.end],a=t>0&&r[t-1].end===n.end+1&&r[t-1].token===n.token-1&&r[n.end+1].token===o.token+1&&r[t-1].marker===n.marker,i=String.fromCharCode(n.marker),(s=e.tokens[n.token]).type=a?"strong_open":"em_open",s.tag=a?"strong":"em",s.nesting=1,s.markup=a?i+i:i,s.content="",(s=e.tokens[o.token]).type=a?"strong_close":"em_close",s.tag=a?"strong":"em",s.nesting=-1,s.markup=a?i+i:i,s.content="",a&&(e.tokens[r[t-1].token].content="",e.tokens[r[n.end+1].token].content="",t--));}r.exports.tokenize=function(e,r){var t,n,o=e.pos,s=e.src.charCodeAt(o);if(r)return !1;if(95!==s&&42!==s)return !1;for(n=e.scanDelims(e.pos,42===s),t=0;t<n.length;t++)e.push("text","",0).content=String.fromCharCode(s),e.delimiters.push({marker:s,length:n.length,jump:t,token:e.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t=e.tokens_meta,o=e.tokens_meta.length;for(n(e,e.delimiters),r=0;r<o;r++)t[r]&&t[r].delimiters&&n(e,t[r].delimiters);};},{}],41:[function(e,r,t){var n=e("../common/entities"),o=e("../common/utils").has,s=e("../common/utils").isValidEntityCode,i=e("../common/utils").fromCodePoint,a=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,l=/^&([a-z][a-z0-9]{1,31});/i;r.exports=function(e,r){var t,c,u=e.pos,p=e.posMax;if(38!==e.src.charCodeAt(u))return !1;if(u+1<p)if(35===e.src.charCodeAt(u+1)){if(c=e.src.slice(u).match(a))return r||(t="x"===c[1][0].toLowerCase()?parseInt(c[1].slice(1),16):parseInt(c[1],10),e.pending+=s(t)?i(t):i(65533)),e.pos+=c[0].length,!0}else if((c=e.src.slice(u).match(l))&&o(n,c[1]))return r||(e.pending+=n[c[1]]),e.pos+=c[0].length,!0;return r||(e.pending+="&"),e.pos++,!0};},{"../common/entities":1,"../common/utils":4}],42:[function(e,r,t){for(var n=e("../common/utils").isSpace,o=[],s=0;s<256;s++)o.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){o[e.charCodeAt(0)]=1;}),r.exports=function(e,r){var t,s=e.pos,i=e.posMax;if(92!==e.src.charCodeAt(s))return !1;if(++s<i){if((t=e.src.charCodeAt(s))<256&&0!==o[t])return r||(e.pending+=e.src[s]),e.pos+=2,!0;if(10===t){for(r||e.push("hardbreak","br",0),s++;s<i&&(t=e.src.charCodeAt(s),n(t));)s++;return e.pos=s,!0}}return r||(e.pending+="\\"),e.pos++,!0};},{"../common/utils":4}],43:[function(e,r,t){var n=e("../common/html_re").HTML_TAG_RE;r.exports=function(e,r){var t,o,s,i=e.pos;return !(!e.md.options.html||(s=e.posMax,60!==e.src.charCodeAt(i)||i+2>=s||33!==(t=e.src.charCodeAt(i+1))&&63!==t&&47!==t&&!function(e){var r=32|e;return r>=97&&r<=122}(t)||!(o=e.src.slice(i).match(n))||(r||(e.push("html_inline","",0).content=e.src.slice(i,i+o[0].length)),e.pos+=o[0].length,0)))};},{"../common/html_re":3}],44:[function(e,r,t){var n=e("../common/utils").normalizeReference,o=e("../common/utils").isSpace;r.exports=function(e,r){var t,s,i,a,l,c,u,p,h,f,d,m,_,g="",k=e.pos,b=e.posMax;if(33!==e.src.charCodeAt(e.pos))return !1;if(91!==e.src.charCodeAt(e.pos+1))return !1;if(c=e.pos+2,(l=e.md.helpers.parseLinkLabel(e,e.pos+1,!1))<0)return !1;if((u=l+1)<b&&40===e.src.charCodeAt(u)){for(u++;u<b&&(s=e.src.charCodeAt(u),o(s)||10===s);u++);if(u>=b)return !1;for(_=u,(h=e.md.helpers.parseLinkDestination(e.src,u,e.posMax)).ok&&(g=e.md.normalizeLink(h.str),e.md.validateLink(g)?u=h.pos:g=""),_=u;u<b&&(s=e.src.charCodeAt(u),o(s)||10===s);u++);if(h=e.md.helpers.parseLinkTitle(e.src,u,e.posMax),u<b&&_!==u&&h.ok)for(f=h.str,u=h.pos;u<b&&(s=e.src.charCodeAt(u),o(s)||10===s);u++);else f="";if(u>=b||41!==e.src.charCodeAt(u))return e.pos=k,!1;u++;}else{if(void 0===e.env.references)return !1;if(u<b&&91===e.src.charCodeAt(u)?(_=u+1,(u=e.md.helpers.parseLinkLabel(e,u))>=0?a=e.src.slice(_,u++):u=l+1):u=l+1,a||(a=e.src.slice(c,l)),!(p=e.env.references[n(a)]))return e.pos=k,!1;g=p.href,f=p.title;}return r||(i=e.src.slice(c,l),e.md.inline.parse(i,e.md,e.env,m=[]),(d=e.push("image","img",0)).attrs=t=[["src",g],["alt",""]],d.children=m,d.content=i,f&&t.push(["title",f])),e.pos=u,e.posMax=b,!0};},{"../common/utils":4}],45:[function(e,r,t){var n=e("../common/utils").normalizeReference,o=e("../common/utils").isSpace;r.exports=function(e,r){var t,s,i,a,l,c,u,p,h,f="",d=e.pos,m=e.posMax,_=e.pos,g=!0;if(91!==e.src.charCodeAt(e.pos))return !1;if(l=e.pos+1,(a=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)return !1;if((c=a+1)<m&&40===e.src.charCodeAt(c)){for(g=!1,c++;c<m&&(s=e.src.charCodeAt(c),o(s)||10===s);c++);if(c>=m)return !1;for(_=c,(u=e.md.helpers.parseLinkDestination(e.src,c,e.posMax)).ok&&(f=e.md.normalizeLink(u.str),e.md.validateLink(f)?c=u.pos:f=""),_=c;c<m&&(s=e.src.charCodeAt(c),o(s)||10===s);c++);if(u=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<m&&_!==c&&u.ok)for(h=u.str,c=u.pos;c<m&&(s=e.src.charCodeAt(c),o(s)||10===s);c++);else h="";(c>=m||41!==e.src.charCodeAt(c))&&(g=!0),c++;}if(g){if(void 0===e.env.references)return !1;if(c<m&&91===e.src.charCodeAt(c)?(_=c+1,(c=e.md.helpers.parseLinkLabel(e,c))>=0?i=e.src.slice(_,c++):c=a+1):c=a+1,i||(i=e.src.slice(l,a)),!(p=e.env.references[n(i)]))return e.pos=d,!1;f=p.href,h=p.title;}return r||(e.pos=l,e.posMax=a,e.push("link_open","a",1).attrs=t=[["href",f]],h&&t.push(["title",h]),e.md.inline.tokenize(e),e.push("link_close","a",-1)),e.pos=c,e.posMax=m,!0};},{"../common/utils":4}],46:[function(e,r,t){var n=e("../common/utils").isSpace;r.exports=function(e,r){var t,o,s=e.pos;if(10!==e.src.charCodeAt(s))return !1;for(t=e.pending.length-1,o=e.posMax,r||(t>=0&&32===e.pending.charCodeAt(t)?t>=1&&32===e.pending.charCodeAt(t-1)?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),s++;s<o&&n(e.src.charCodeAt(s));)s++;return e.pos=s,!0};},{"../common/utils":4}],47:[function(e,r,t){var n=e("../token"),o=e("../common/utils").isWhiteSpace,s=e("../common/utils").isPunctChar,i=e("../common/utils").isMdAsciiPunct;function a(e,r,t,n){this.src=e,this.env=t,this.md=r,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[];}a.prototype.pushPending=function(){var e=new n("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},a.prototype.push=function(e,r,t){this.pending&&this.pushPending();var o=new n(e,r,t),s=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),o.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(o),this.tokens_meta.push(s),o},a.prototype.scanDelims=function(e,r){var t,n,a,l,c,u,p,h,f,d=e,m=!0,_=!0,g=this.posMax,k=this.src.charCodeAt(e);for(t=e>0?this.src.charCodeAt(e-1):32;d<g&&this.src.charCodeAt(d)===k;)d++;return a=d-e,n=d<g?this.src.charCodeAt(d):32,p=i(t)||s(String.fromCharCode(t)),f=i(n)||s(String.fromCharCode(n)),u=o(t),(h=o(n))?m=!1:f&&(u||p||(m=!1)),u?_=!1:p&&(h||f||(_=!1)),r?(l=m,c=_):(l=m&&(!_||p),c=_&&(!m||f)),{can_open:l,can_close:c,length:a}},a.prototype.Token=n,r.exports=a;},{"../common/utils":4,"../token":51}],48:[function(e,r,t){function n(e,r){var t,n,o,s,i,a=[],l=r.length;for(t=0;t<l;t++)126===(o=r[t]).marker&&-1!==o.end&&(s=r[o.end],(i=e.tokens[o.token]).type="s_open",i.tag="s",i.nesting=1,i.markup="~~",i.content="",(i=e.tokens[s.token]).type="s_close",i.tag="s",i.nesting=-1,i.markup="~~",i.content="","text"===e.tokens[s.token-1].type&&"~"===e.tokens[s.token-1].content&&a.push(s.token-1));for(;a.length;){for(t=a.pop(),n=t+1;n<e.tokens.length&&"s_close"===e.tokens[n].type;)n++;t!==--n&&(i=e.tokens[n],e.tokens[n]=e.tokens[t],e.tokens[t]=i);}}r.exports.tokenize=function(e,r){var t,n,o,s,i=e.pos,a=e.src.charCodeAt(i);if(r)return !1;if(126!==a)return !1;if(n=e.scanDelims(e.pos,!0),o=n.length,s=String.fromCharCode(a),o<2)return !1;for(o%2&&(e.push("text","",0).content=s,o--),t=0;t<o;t+=2)e.push("text","",0).content=s+s,e.delimiters.push({marker:a,length:0,jump:t,token:e.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t=e.tokens_meta,o=e.tokens_meta.length;for(n(e,e.delimiters),r=0;r<o;r++)t[r]&&t[r].delimiters&&n(e,t[r].delimiters);};},{}],49:[function(e,r,t){function n(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return !0;default:return !1}}r.exports=function(e,r){for(var t=e.pos;t<e.posMax&&!n(e.src.charCodeAt(t));)t++;return t!==e.pos&&(r||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)};},{}],50:[function(e,r,t){r.exports=function(e){var r,t,n=0,o=e.tokens,s=e.tokens.length;for(r=t=0;r<s;r++)o[r].nesting<0&&n--,o[r].level=n,o[r].nesting>0&&n++,"text"===o[r].type&&r+1<s&&"text"===o[r+1].type?o[r+1].content=o[r].content+o[r+1].content:(r!==t&&(o[t]=o[r]),t++);r!==t&&(o.length=t);};},{}],51:[function(e,r,t){function n(e,r,t){this.type=e,this.tag=r,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1;}n.prototype.attrIndex=function(e){var r,t,n;if(!this.attrs)return -1;for(r=this.attrs,t=0,n=r.length;t<n;t++)if(r[t][0]===e)return t;return -1},n.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e];},n.prototype.attrSet=function(e,r){var t=this.attrIndex(e),n=[e,r];t<0?this.attrPush(n):this.attrs[t]=n;},n.prototype.attrGet=function(e){var r=this.attrIndex(e),t=null;return r>=0&&(t=this.attrs[r][1]),t},n.prototype.attrJoin=function(e,r){var t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r;},r.exports=n;},{}],52:[function(e,r,t){r.exports={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",amp:"&",AMP:"&",andand:"⩕",And:"⩓",and:"∧",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angmsd:"∡",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",apacir:"⩯",ap:"≈",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxHd:"╤",boxhD:"╥",boxHD:"╦",boxhu:"┴",boxHu:"╧",boxhU:"╨",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsolb:"⧅",bsol:"\\",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",capand:"⩄",capbrcup:"⩉",capcap:"⩋",cap:"∩",Cap:"⋒",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cir:"○",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cup:"∪",Cup:"⋓",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",Darr:"↡",dArr:"⇓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",ddagger:"‡",ddarr:"⇊",DD:"ⅅ",dd:"ⅆ",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrowBar:"⤓",downarrow:"↓",DownArrow:"↓",Downarrow:"⇓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVectorBar:"⥖",DownLeftVector:"↽",DownRightTeeVector:"⥟",DownRightVectorBar:"⥗",DownRightVector:"⇁",DownTeeArrow:"↧",DownTee:"⊤",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",Ecirc:"Ê",ecirc:"ê",ecir:"≖",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",edot:"ė",eDot:"≑",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp13:" ",emsp14:" ",emsp:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",ge:"≥",gE:"≧",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",gescc:"⪩",ges:"⩾",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gla:"⪥",gl:"≷",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gtcc:"⪧",gtcir:"⩺",gt:">",GT:">",Gt:"≫",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",harrcir:"⥈",harr:"↔",hArr:"⇔",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",Im:"ℑ",imof:"⊷",imped:"Ƶ",Implies:"⇒",incare:"℅",in:"∈",infin:"∞",infintie:"⧝",inodot:"ı",intcal:"⊺",int:"∫",Int:"∬",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larrb:"⇤",larrbfs:"⤟",larr:"←",Larr:"↞",lArr:"⇐",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",latail:"⤙",lAtail:"⤛",lat:"⪫",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",LeftArrowBar:"⇤",leftarrow:"←",LeftArrow:"←",Leftarrow:"⇐",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVectorBar:"⥙",LeftDownVector:"⇃",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTeeArrow:"↤",LeftTee:"⊣",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangleBar:"⧏",LeftTriangle:"⊲",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVectorBar:"⥘",LeftUpVector:"↿",LeftVectorBar:"⥒",LeftVector:"↼",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",lescc:"⪨",les:"⩽",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",llarr:"⇇",ll:"≪",Ll:"⋘",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoustache:"⎰",lmoust:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftrightarrow:"⟷",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longmapsto:"⟼",longrightarrow:"⟶",LongRightArrow:"⟶",Longrightarrow:"⟹",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",ltcc:"⪦",ltcir:"⩹",lt:"<",LT:"<",Lt:"≪",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",midast:"*",midcir:"⫰",mid:"∣",middot:"·",minusb:"⊟",minus:"−",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natural:"♮",naturals:"ℕ",natur:"♮",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",ne:"≠",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nlE:"≦̸",nle:"≰",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangleBar:"⧏̸",NotLeftTriangle:"⋪",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangleBar:"⧐̸",NotRightTriangle:"⋫",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",nparallel:"∦",npar:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",nprec:"⊀",npreceq:"⪯̸",npre:"⪯̸",nrarrc:"⤳̸",nrarr:"↛",nrArr:"⇏",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",Ocirc:"Ô",ocirc:"ô",ocir:"⊚",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",orarr:"↻",Or:"⩔",or:"∨",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",otimesas:"⨶",Otimes:"⨷",otimes:"⊗",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",para:"¶",parallel:"∥",par:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plus:"+",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",prap:"⪷",Pr:"⪻",pr:"≺",prcue:"≼",precapprox:"⪷",prec:"≺",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",pre:"⪯",prE:"⪳",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportional:"∝",Proportion:"∷",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarr:"→",Rarr:"↠",rArr:"⇒",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",Re:"ℜ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrowBar:"⇥",rightarrow:"→",RightArrow:"→",Rightarrow:"⇒",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVectorBar:"⥕",RightDownVector:"⇂",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTeeArrow:"↦",RightTee:"⊢",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangleBar:"⧐",RightTriangle:"⊳",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVectorBar:"⥔",RightUpVector:"↾",RightVectorBar:"⥓",RightVector:"⇀",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoustache:"⎱",rmoust:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",scap:"⪸",Scaron:"Š",scaron:"š",Sc:"⪼",sc:"≻",sccue:"≽",sce:"⪰",scE:"⪴",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdotb:"⊡",sdot:"⋅",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",solbar:"⌿",solb:"⧄",sol:"/",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squ:"□",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succapprox:"⪸",succ:"≻",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",Sup:"⋑",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",therefore:"∴",Therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",ThinSpace:" ",thinsp:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",timesbar:"⨱",timesb:"⊠",times:"×",timesd:"⨰",tint:"∭",toea:"⤨",topbot:"⌶",topcir:"⫱",top:"⊤",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",uarr:"↑",Uarr:"↟",uArr:"⇑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrowBar:"⤒",uparrow:"↑",UpArrow:"↑",Uparrow:"⇑",UpArrowDownArrow:"⇅",updownarrow:"↕",UpDownArrow:"↕",Updownarrow:"⇕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTeeArrow:"↥",UpTee:"⊥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",Vcy:"В",vcy:"в",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",veebar:"⊻",vee:"∨",Vee:"⋁",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xharr:"⟷",xhArr:"⟺",Xi:"Ξ",xi:"ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",yuml:"ÿ",Yuml:"Ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",zfr:"𝔷",Zfr:"ℨ",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"};},{}],53:[function(e,r,t){function n(e){var r=Array.prototype.slice.call(arguments,1);return r.forEach(function(r){r&&Object.keys(r).forEach(function(t){e[t]=r[t];});}),e}function o(e){return Object.prototype.toString.call(e)}function s(e){return "[object Function]"===o(e)}function i(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var a={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},l={"http:":{validate:function(e,r,t){var n=e.slice(r);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,r,t){var n=e.slice(r);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?r>=3&&":"===e[r-3]?0:r>=3&&"/"===e[r-3]?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,r,t){var n=e.slice(r);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},c="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",u="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function p(r){var t=r.re=e("./lib/re")(r.__opts__),n=r.__tlds__.slice();function a(e){return e.replace("%TLDS%",t.src_tlds)}r.onCompile(),r.__tlds_replaced__||n.push(c),n.push(t.src_xn),t.src_tlds=n.join("|"),t.email_fuzzy=RegExp(a(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(a(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(a(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(a(t.tpl_host_fuzzy_test),"i");var l=[];function u(e,r){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+r)}r.__compiled__={},Object.keys(r.__schemas__).forEach(function(e){var t=r.__schemas__[e];if(null!==t){var n,i={validate:null,link:null};if(r.__compiled__[e]=i,"[object Object]"===o(t))return function(e){return "[object RegExp]"===o(e)}(t.validate)?i.validate=(n=t.validate,function(e,r){var t=e.slice(r);return n.test(t)?t.match(n)[0].length:0}):s(t.validate)?i.validate=t.validate:u(e,t),void(s(t.normalize)?i.normalize=t.normalize:t.normalize?u(e,t):i.normalize=function(e,r){r.normalize(e);});!function(e){return "[object String]"===o(e)}(t)?u(e,t):l.push(e);}}),l.forEach(function(e){r.__compiled__[r.__schemas__[e]]&&(r.__compiled__[e].validate=r.__compiled__[r.__schemas__[e]].validate,r.__compiled__[e].normalize=r.__compiled__[r.__schemas__[e]].normalize);}),r.__compiled__[""]={validate:null,normalize:function(e,r){r.normalize(e);}};var p=Object.keys(r.__compiled__).filter(function(e){return e.length>0&&r.__compiled__[e]}).map(i).join("|");r.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+p+")","i"),r.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+p+")","ig"),r.re.pretest=RegExp("("+r.re.schema_test.source+")|("+r.re.host_fuzzy_test.source+")|@","i"),function(e){e.__index__=-1,e.__text_cache__="";}(r);}function h(e,r){var t=e.__index__,n=e.__last_index__,o=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+r,this.lastIndex=n+r,this.raw=o,this.text=o,this.url=o;}function f(e,r){var t=new h(e,r);return e.__compiled__[t.schema].normalize(t,e),t}function d(e,r){if(!(this instanceof d))return new d(e,r);var t;r||(t=e,Object.keys(t||{}).reduce(function(e,r){return e||a.hasOwnProperty(r)},!1)&&(r=e,e={})),this.__opts__=n({},a,r),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=n({},l,e),this.__compiled__={},this.__tlds__=u,this.__tlds_replaced__=!1,this.re={},p(this);}d.prototype.add=function(e,r){return this.__schemas__[e]=r,p(this),this},d.prototype.set=function(e){return this.__opts__=n(this.__opts__,e),this},d.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return !1;var r,t,n,o,s,i,a,l;if(this.re.schema_test.test(e))for((a=this.re.schema_search).lastIndex=0;null!==(r=a.exec(e));)if(o=this.testSchemaAt(e,r[2],a.lastIndex)){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+o;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||l<this.__index__)&&null!==(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(s=t.index+t[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=t.index+t[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&e.indexOf("@")>=0&&null!==(n=e.match(this.re.email_fuzzy))&&(s=n.index+n[1].length,i=n.index+n[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=i)),this.__index__>=0},d.prototype.pretest=function(e){return this.re.pretest.test(e)},d.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0},d.prototype.match=function(e){var r=0,t=[];this.__index__>=0&&this.__text_cache__===e&&(t.push(f(this,r)),r=this.__last_index__);for(var n=r?e.slice(r):e;this.test(n);)t.push(f(this,r)),n=n.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null},d.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,r,t){return e!==t[r-1]}).reverse(),p(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,p(this),this)},d.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url);},d.prototype.onCompile=function(){},r.exports=d;},{"./lib/re":54}],54:[function(e,r,t){r.exports=function(r){var t={};return t.src_Any=e("uc.micro/properties/Any/regex").source,t.src_Cc=e("uc.micro/categories/Cc/regex").source,t.src_Z=e("uc.micro/categories/Z/regex").source,t.src_P=e("uc.micro/categories/P/regex").source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|"),t.src_pseudo_letter="(?:(?![><｜]|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|[><｜]|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!"+t.src_ZCc+"|[.]).|"+(r&&r["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+t.src_ZCc+").|\\!(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t};},{"uc.micro/categories/Cc/regex":61,"uc.micro/categories/P/regex":63,"uc.micro/categories/Z/regex":64,"uc.micro/properties/Any/regex":66}],55:[function(e,r,t){var n={};function o(e,r){var t;return "string"!=typeof r&&(r=o.defaultChars),t=function(e){var r,t,o=n[e];if(o)return o;for(o=n[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),o.push(t);for(r=0;r<e.length;r++)t=e.charCodeAt(r),o[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return o}(r),e.replace(/(%[a-f0-9]{2})+/gi,function(e){var r,n,o,s,i,a,l,c="";for(r=0,n=e.length;r<n;r+=3)(o=parseInt(e.slice(r+1,r+3),16))<128?c+=t[o]:192==(224&o)&&r+3<n&&128==(192&(s=parseInt(e.slice(r+4,r+6),16)))?(c+=(l=o<<6&1984|63&s)<128?"��":String.fromCharCode(l),r+=3):224==(240&o)&&r+6<n&&(s=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),128==(192&s)&&128==(192&i))?(c+=(l=o<<12&61440|s<<6&4032|63&i)<2048||l>=55296&&l<=57343?"���":String.fromCharCode(l),r+=6):240==(248&o)&&r+9<n&&(s=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),a=parseInt(e.slice(r+10,r+12),16),128==(192&s)&&128==(192&i)&&128==(192&a))?((l=o<<18&1835008|s<<12&258048|i<<6&4032|63&a)<65536||l>1114111?c+="����":(l-=65536,c+=String.fromCharCode(55296+(l>>10),56320+(1023&l))),r+=9):c+="�";return c})}o.defaultChars=";/?:@&=+$,#",o.componentChars="",r.exports=o;},{}],56:[function(e,r,t){var n={};function o(e,r,t){var s,i,a,l,c,u="";for("string"!=typeof r&&(t=r,r=o.defaultChars),void 0===t&&(t=!0),c=function(e){var r,t,o=n[e];if(o)return o;for(o=n[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),/^[0-9a-z]$/i.test(t)?o.push(t):o.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2));for(r=0;r<e.length;r++)o[e.charCodeAt(r)]=e[r];return o}(r),s=0,i=e.length;s<i;s++)if(a=e.charCodeAt(s),t&&37===a&&s+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(s+1,s+3)))u+=e.slice(s,s+3),s+=2;else if(a<128)u+=c[a];else if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&s+1<i&&(l=e.charCodeAt(s+1))>=56320&&l<=57343){u+=encodeURIComponent(e[s]+e[s+1]),s++;continue}u+="%EF%BF%BD";}else u+=encodeURIComponent(e[s]);return u}o.defaultChars=";/?:@&=+$,-_.!~*'()#",o.componentChars="-_.!~*'()",r.exports=o;},{}],57:[function(e,r,t){r.exports=function(e){var r="";return r+=e.protocol||"",r+=e.slashes?"//":"",r+=e.auth?e.auth+"@":"",e.hostname&&-1!==e.hostname.indexOf(":")?r+="["+e.hostname+"]":r+=e.hostname||"",r+=e.port?":"+e.port:"",r+=e.pathname||"",r+=e.search||"",r+=e.hash||""};},{}],58:[function(e,r,t){r.exports.encode=e("./encode"),r.exports.decode=e("./decode"),r.exports.format=e("./format"),r.exports.parse=e("./parse");},{"./decode":55,"./encode":56,"./format":57,"./parse":59}],59:[function(e,r,t){function n(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null;}var o=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,a=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),l=["'"].concat(a),c=["%","/","?",";","#"].concat(l),u=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,h=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,f={javascript:!0,"javascript:":!0},d={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};n.prototype.parse=function(e,r){var t,n,s,a,l,m=e;if(m=m.trim(),!r&&1===e.split("#").length){var _=i.exec(m);if(_)return this.pathname=_[1],_[2]&&(this.search=_[2]),this}var g=o.exec(m);if(g&&(g=g[0],s=g.toLowerCase(),this.protocol=g,m=m.substr(g.length)),(r||g||m.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(l="//"===m.substr(0,2))||g&&f[g]||(m=m.substr(2),this.slashes=!0)),!f[g]&&(l||g&&!d[g])){var k,b,v=-1;for(t=0;t<u.length;t++)-1!==(a=m.indexOf(u[t]))&&(-1===v||a<v)&&(v=a);for(-1!==(b=-1===v?m.lastIndexOf("@"):m.lastIndexOf("@",v))&&(k=m.slice(0,b),m=m.slice(b+1),this.auth=k),v=-1,t=0;t<c.length;t++)-1!==(a=m.indexOf(c[t]))&&(-1===v||a<v)&&(v=a);-1===v&&(v=m.length),":"===m[v-1]&&v--;var y=m.slice(0,v);m=m.slice(v),this.parseHost(y),this.hostname=this.hostname||"";var x="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!x){var C=this.hostname.split(/\./);for(t=0,n=C.length;t<n;t++){var A=C[t];if(A&&!A.match(p)){for(var w="",D=0,E=A.length;D<E;D++)A.charCodeAt(D)>127?w+="x":w+=A[D];if(!w.match(p)){var q=C.slice(0,t),F=C.slice(t+1),S=A.match(h);S&&(q.push(S[1]),F.unshift(S[2])),F.length&&(m=F.join(".")+m),this.hostname=q.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),x&&(this.hostname=this.hostname.substr(1,this.hostname.length-2));}var L=m.indexOf("#");-1!==L&&(this.hash=m.substr(L),m=m.slice(0,L));var z=m.indexOf("?");return -1!==z&&(this.search=m.substr(z),m=m.slice(0,z)),m&&(this.pathname=m),d[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this},n.prototype.parseHost=function(e){var r=s.exec(e);r&&(":"!==(r=r[0])&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e);},r.exports=function(e,r){if(e&&e instanceof n)return e;var t=new n;return t.parse(e,r),t};},{}],60:[function(r,t,n){(function(e){!function(r){var o="object"==typeof n&&n&&!n.nodeType&&n,s="object"==typeof t&&t&&!t.nodeType&&t,i="object"==typeof e&&e;i.global!==i&&i.window!==i&&i.self!==i||(r=i);var a,l,c=2147483647,u=36,p=1,h=26,f=38,d=700,m=72,_=128,g="-",k=/^xn--/,b=/[^\x20-\x7E]/,v=/[\x2E\u3002\uFF0E\uFF61]/g,y={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},x=u-p,C=Math.floor,A=String.fromCharCode;function w(e){throw new RangeError(y[e])}function D(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function E(e,r){var t=e.split("@"),n="";t.length>1&&(n=t[0]+"@",e=t[1]);var o=(e=e.replace(v,".")).split("."),s=D(o,r).join(".");return n+s}function q(e){for(var r,t,n=[],o=0,s=e.length;o<s;)(r=e.charCodeAt(o++))>=55296&&r<=56319&&o<s?56320==(64512&(t=e.charCodeAt(o++)))?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),o--):n.push(r);return n}function F(e){return D(e,function(e){var r="";return e>65535&&(r+=A((e-=65536)>>>10&1023|55296),e=56320|1023&e),r+=A(e)}).join("")}function S(e,r){return e+22+75*(e<26)-((0!=r)<<5)}function L(e,r,t){var n=0;for(e=t?C(e/d):e>>1,e+=C(e/r);e>x*h>>1;n+=u)e=C(e/x);return C(n+(x+1)*e/(e+f))}function z(e){var r,t,n,o,s,i,a,l,f,d,k,b=[],v=e.length,y=0,x=_,A=m;for((t=e.lastIndexOf(g))<0&&(t=0),n=0;n<t;++n)e.charCodeAt(n)>=128&&w("not-basic"),b.push(e.charCodeAt(n));for(o=t>0?t+1:0;o<v;){for(s=y,i=1,a=u;o>=v&&w("invalid-input"),k=e.charCodeAt(o++),((l=k-48<10?k-22:k-65<26?k-65:k-97<26?k-97:u)>=u||l>C((c-y)/i))&&w("overflow"),y+=l*i,!(l<(f=a<=A?p:a>=A+h?h:a-A));a+=u)i>C(c/(d=u-f))&&w("overflow"),i*=d;r=b.length+1,A=L(y-s,r,0==s),C(y/r)>c-x&&w("overflow"),x+=C(y/r),y%=r,b.splice(y++,0,x);}return F(b)}function T(e){var r,t,n,o,s,i,a,l,f,d,k,b,v,y,x,D=[];for(e=q(e),b=e.length,r=_,t=0,s=m,i=0;i<b;++i)(k=e[i])<128&&D.push(A(k));for(n=o=D.length,o&&D.push(g);n<b;){for(a=c,i=0;i<b;++i)(k=e[i])>=r&&k<a&&(a=k);for(a-r>C((c-t)/(v=n+1))&&w("overflow"),t+=(a-r)*v,r=a,i=0;i<b;++i)if((k=e[i])<r&&++t>c&&w("overflow"),k==r){for(l=t,f=u;!(l<(d=f<=s?p:f>=s+h?h:f-s));f+=u)x=l-d,y=u-d,D.push(A(S(d+x%y,0))),l=C(x/y);D.push(A(S(l,0))),s=L(t,v,n==o),t=0,++n;}++t,++r;}return D.join("")}if(a={version:"1.4.1",ucs2:{decode:q,encode:F},decode:z,encode:T,toASCII:function(e){return E(e,function(e){return b.test(e)?"xn--"+T(e):e})},toUnicode:function(e){return E(e,function(e){return k.test(e)?z(e.slice(4).toLowerCase()):e})}},o&&s)if(t.exports==o)s.exports=a;else for(l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);else r.punycode=a;}(this);}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],61:[function(e,r,t){r.exports=/[\0-\x1F\x7F-\x9F]/;},{}],62:[function(e,r,t){r.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;},{}],63:[function(e,r,t){r.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;},{}],64:[function(e,r,t){r.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;},{}],65:[function(e,r,t){t.Any=e("./properties/Any/regex"),t.Cc=e("./categories/Cc/regex"),t.Cf=e("./categories/Cf/regex"),t.P=e("./categories/P/regex"),t.Z=e("./categories/Z/regex");},{"./categories/Cc/regex":61,"./categories/Cf/regex":62,"./categories/P/regex":63,"./categories/Z/regex":64,"./properties/Any/regex":66}],66:[function(e,r,t){r.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;},{}],67:[function(e,r,t){r.exports=e("./lib/");},{"./lib/":9}]},{},[67])(67);}(t={exports:{}},t.exports),t.exports);function o(e,r){var t,n,o,s,i=e.pos,a=e.src.charCodeAt(i);if(r)return !1;if(43!==a)return !1;if(o=(n=e.scanDelims(e.pos,!0)).length,s=String.fromCharCode(a),o<2)return !1;for(o%2&&(e.push("text","",0).content=s,o--),t=0;t<o;t+=2)e.push("text","",0).content=s+s,e.delimiters.push({marker:a,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0}function s(e){var r,t,n,o,s,i=[],a=e.delimiters,l=e.delimiters.length;for(r=0;r<l;r++)43===(n=a[r]).marker&&-1!==n.end&&(o=a[n.end],(s=e.tokens[n.token]).type="u_open",s.tag="u",s.nesting=1,s.markup="++",s.content="",(s=e.tokens[o.token]).type="u_close",s.tag="u",s.nesting=-1,s.markup="++",s.content="","text"===e.tokens[o.token-1].type&&"+"===e.tokens[o.token-1].content&&i.push(o.token-1));for(;i.length;){for(t=(r=i.pop())+1;t<e.tokens.length&&"u_close"===e.tokens[t].type;)t++;r!==--t&&(s=e.tokens[t],e.tokens[t]=e.tokens[r],e.tokens[r]=s);}}var i=function(e){e.inline.ruler.after("emphasis","underline",o),e.inline.ruler2.after("emphasis","underline",s);};return new(function(){function e(){this._md=n("commonmark"),this.addPlugin(i);}var r=e.prototype;return r.addPlugin=function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];t.unshift(e),this._md.use.apply(this._md,t);},r.disablePlugin=function(e){this._md.disable(e,!0);},r.toHTML=function(e){return this._md.render(e)},e}())});
  });

  /**
   * This class leverages the {@link RtfConverter} library to perform Rich Text to
   * HTML conversions.
   */

  var RichTextFormatterImpl =
  /*#__PURE__*/
  function () {
    function RichTextFormatterImpl() {
      _classCallCheck(this, RichTextFormatterImpl);
    }

    _createClass(RichTextFormatterImpl, [{
      key: "format",

      /**
       * Generates an HTML representation of the provided Rich Text field value. Note that
       * the HTML will contain a wrapper div. This is to support click analytics for Rich Text
       * links.
       *
       * @param {string} fieldValue A Rich Text field value.
       * @param {string} fieldName The name of the field, to be included in the payload of a click
       *                           analytics event. This parameter is optional.
       * @param {Object|string} targetConfig Configuration object specifying the 'target' behavior for
       *                          the various types of links. If a string is provided, it is assumed that
       *                          is the 'target' behavior across all types of links. This parameter is optional.
       * @returns {string} The HTML representation of the field value, serialized as a string.
       */
      value: function format(fieldValue, fieldName, targetConfig) {
        var _this = this;

        if (typeof fieldValue !== 'string') {
          throw new AnswersCoreError("Rich text \"".concat(fieldValue, "\" needs to be a string. Currently is a ").concat(_typeof(fieldValue)));
        }

        var pluginName = this._generatePluginName();

        rtfConverter_min.addPlugin(markdownItForInline, pluginName, 'link_open', function (tokens, idx) {
          return _this._urlTransformer(tokens, idx, targetConfig);
        });
        fieldName = fieldName || '';
        var html = "<div class=\"js-yxt-rtfValue\" data-field-name=\"".concat(fieldName, "\">\n") + "".concat(rtfConverter_min.toHTML(fieldValue)) + '</div>'; // Because all invocations of this method share the same {@link RtfConverter}, we must make sure to
        // disable the plugin added above. Otherwise, it will be applied in all subsequent conversions.

        rtfConverter_min.disablePlugin(pluginName);
        return html;
      }
      /**
       * An inline token parser for use with the {@link iterator} Markdown-it plugin.
       * This token parser adds a cta-type data attribute to any link it encounters.
       */

    }, {
      key: "_urlTransformer",
      value: function _urlTransformer(tokens, idx, targetConfig) {
        targetConfig = targetConfig || {};
        var target;

        if (typeof targetConfig === 'string') {
          target = targetConfig;
        }

        var href = tokens[idx].attrGet('href');
        var ctaType;

        if (href.startsWith('mailto')) {
          ctaType = 'EMAIL';
          target = target || targetConfig.email;
        } else if (href.startsWith('tel')) {
          ctaType = 'TAP_TO_CALL';
          target = target || targetConfig.phone;
        } else {
          ctaType = 'VIEW_WEBSITE';
          target = target || targetConfig.url;
        }

        tokens[idx].attrSet('data-cta-type', ctaType);
        target && tokens[idx].attrSet('target', target);
      }
      /**
       * A function that generates a unique UUID to serve as the name for a
       * Markdown-it plugin.
       *
       * @returns {string} the UUID.
       */

    }, {
      key: "_generatePluginName",
      value: function _generatePluginName() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
    }]);

    return RichTextFormatterImpl;
  }();

  var RichTextFormatter = new RichTextFormatterImpl();

  function isValidContext(context) {
    // should be both valid JSON and a map
    var parsed;

    try {
      parsed = JSON.parse(context);
    } catch (e) {
      return false;
    }

    if (!parsed) {
      return false;
    }

    return _typeof(parsed) === 'object' && !Array.isArray(parsed);
  }

  /** @typedef {import('./core/services/searchservice').default} SearchService */

  /** @typedef {import('./core/services/autocompleteservice').default} AutoCompleteService */

  /** @typedef {import('./core/services/questionanswerservice').default} QuestionAnswerService */

  /** @typedef {import('./core/services/errorreporterservice').default} ErrorReporterService */

  /** @typedef {import('./core/services/analyticsreporterservice').default} AnalyticsReporterService */

  /**
   * @typedef Services
   * @property {SearchService} searchService
   * @property {AutoCompleteService} autoCompleteService
   * @property {QuestionAnswerService} questionAnswerService
   * @property {ErrorReporterService} errorReporterService
   */

  var DEFAULTS = {
    locale: 'en'
  };
  /**
   * The main Answers interface
   */

  var Answers =
  /*#__PURE__*/
  function () {
    function Answers() {
      _classCallCheck(this, Answers);

      if (!Answers.setInstance(this)) {
        return Answers.getInstance();
      }
      /**
       * A reference to the Component base class for custom
       * components to extend
       */


      this.Component = Component;
      /**
       * A reference to the AnalyticsEvent base class for reporting
       * custom analytics
       */

      this.AnalyticsEvent = AnalyticsEvent;
      /**
       * A reference to the FilterNodeFactory class for creating {@link FilterNode}s.
       */

      this.FilterNodeFactory = FilterNodeFactory;
      /**
       * A reference of the renderer to use for the components
       * This is provided during initialization.
       * @type {Renderer}
       */

      this.renderer = new Renderers.Handlebars();
      /**
       * A reference to the formatRichText function.
       * @type {Function}
       */

      this.formatRichText = function (markdown, eventOptionsFieldName, targetConfig) {
        return RichTextFormatter.format(markdown, eventOptionsFieldName, targetConfig);
      };
      /**
       * A local reference to the component manager
       * @type {ComponentManager}
       */


      this.components = ComponentManager.getInstance();
      /**
       * A local reference to the core api
       * @type {Core}
       */

      this.core = null;
      /**
       * A callback function to invoke once the library is ready.
       * Typically fired after templates are fetched from server for rendering.
       */

      this._onReady = function () {};
      /**
       * @type {boolean}
       * @private
       */


      this._eligibleForAnalytics = false;
      /**
       * @type {Services}
       * @private
       */

      this._services = null;
      /**
       * @type {AnalyticsReporterService}
       * @private
       */

      this._analyticsReporterService = null;
    }

    _createClass(Answers, [{
      key: "init",

      /**
       * Initializes the SDK with the provided configuration. Note that before onReady
       * is ever called, a check to the relevant Answers Status page is made.
       *
       * @param {Object} config The Answers configuration.
       * @param {Object} statusPage An override for the baseUrl and endpoint of the
       *                            experience's Answers Status page.
       */
      value: function init(config, statusPage) {
        var _this = this;

        window.performance.mark('yext.answers.initStart');
        var parsedConfig = this.parseConfig(config);
        this.validateConfig(parsedConfig);
        parsedConfig.search = new SearchConfig(parsedConfig.search);
        parsedConfig.verticalPages = new VerticalPagesConfig(parsedConfig.verticalPages);
        var globalStorage = new GlobalStorage();
        var persistentStorage = new PersistentStorage({
          updateListener: parsedConfig.onStateChange,
          resetListener: function resetListener(data) {
            if (!data[StorageKeys.QUERY]) {
              _this.core.clearResults();
            } else {
              _this.core.globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.QUERY_PARAMETER);
            }

            if (!data[StorageKeys.SEARCH_OFFSET]) {
              _this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, 0);
            }

            globalStorage.setAll(data);
          }
        });
        globalStorage.setAll(persistentStorage.getAll());
        globalStorage.set(StorageKeys.SEARCH_CONFIG, parsedConfig.search);
        globalStorage.set(StorageKeys.VERTICAL_PAGES_CONFIG, parsedConfig.verticalPages);
        globalStorage.set(StorageKeys.LOCALE, parsedConfig.locale);
        globalStorage.set(StorageKeys.SESSIONS_OPT_IN, parsedConfig.sessionTrackingEnabled);
        parsedConfig.noResults && globalStorage.set(StorageKeys.NO_RESULTS_CONFIG, parsedConfig.noResults);

        if (globalStorage.getState(StorageKeys.QUERY)) {
          globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.QUERY_PARAMETER);
        }

        var context = globalStorage.getState(StorageKeys.API_CONTEXT);

        if (context && !isValidContext(context)) {
          persistentStorage["delete"](StorageKeys.API_CONTEXT, true);
          globalStorage["delete"](StorageKeys.API_CONTEXT);
          console.error("Context parameter \"".concat(context, "\" is invalid, omitting from the search."));
        }

        if (globalStorage.getState(StorageKeys.REFERRER_PAGE_URL) === null) {
          globalStorage.set(StorageKeys.REFERRER_PAGE_URL, urlWithoutQueryParamsAndHash(document.referrer));
        }

        this._masterSwitchApi = statusPage ? new MasterSwitchApi(_objectSpread({
          apiKey: parsedConfig.apiKey
        }, statusPage), globalStorage) : MasterSwitchApi.from(parsedConfig.apiKey, parsedConfig.experienceKey, globalStorage);
        this._services = parsedConfig.mock ? getMockServices() : getServices(parsedConfig, globalStorage);
        this._eligibleForAnalytics = parsedConfig.businessId != null; // TODO(amullings): Initialize with other services

        if (this._eligibleForAnalytics && parsedConfig.mock) {
          this._analyticsReporterService = new NoopAnalyticsReporter();
        } else if (this._eligibleForAnalytics) {
          this._analyticsReporterService = new AnalyticsReporter(parsedConfig.experienceKey, parsedConfig.experienceVersion, parsedConfig.businessId, parsedConfig.analyticsOptions, parsedConfig.environment); // listen to query id updates

          globalStorage.on('update', StorageKeys.QUERY_ID, function (id) {
            return _this._analyticsReporterService.setQueryId(id);
          });
          this.components.setAnalyticsReporter(this._analyticsReporterService);
          initScrollListener(this._analyticsReporterService);
        }

        this.core = new Core({
          apiKey: parsedConfig.apiKey,
          globalStorage: globalStorage,
          persistentStorage: persistentStorage,
          experienceKey: parsedConfig.experienceKey,
          fieldFormatters: parsedConfig.fieldFormatters,
          experienceVersion: parsedConfig.experienceVersion,
          locale: parsedConfig.locale,
          searchService: this._services.searchService,
          autoCompleteService: this._services.autoCompleteService,
          questionAnswerService: this._services.questionAnswerService,
          analyticsReporter: this._analyticsReporterService,
          onVerticalSearch: parsedConfig.onVerticalSearch,
          onUniversalSearch: parsedConfig.onUniversalSearch
        });

        if (parsedConfig.onStateChange && typeof parsedConfig.onStateChange === 'function') {
          parsedConfig.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
        }

        this.components.setCore(this.core).setRenderer(this.renderer);

        this._setDefaultInitialSearch(parsedConfig.search);

        this._onReady = parsedConfig.onReady || function () {};

        if (parsedConfig.useTemplates === false || parsedConfig.templateBundle) {
          if (parsedConfig.templateBundle) {
            this.renderer.init(parsedConfig.templateBundle);
          }

          this._handlePonyfillCssVariables(parsedConfig.disableCssVariablesPonyfill, this._invokeOnReady.bind(this));

          return this;
        } // Templates are currently downloaded separately from the CORE and UI bundle.
        // Future enhancement is to ship the components with templates in a separate bundle.


        this.templates = new DefaultTemplatesLoader(function (templates) {
          _this.renderer.init(templates);

          _this._handlePonyfillCssVariables(parsedConfig.disableCssVariablesPonyfill, _this._invokeOnReady.bind(_this));
        });
        return this;
      }
      /**
       * Checks the experience's Answer Status page before invoking onReady. If the status is
       * disabled, onReady is not called.
       */

    }, {
      key: "_invokeOnReady",
      value: function _invokeOnReady() {
        var _this2 = this;

        window.performance.mark('yext.answers.statusStart');

        var handleFulfilledMasterSwitch = function handleFulfilledMasterSwitch(isDisabled) {
          window.performance.mark('yext.answers.statusEnd');
          return !isDisabled && _this2._onReady();
        };

        var handleRejectedMasterSwitch = function handleRejectedMasterSwitch() {
          window.performance.mark('yext.answers.statusEnd');
          return _this2._onReady();
        };

        this._masterSwitchApi.isDisabled().then(handleFulfilledMasterSwitch, handleRejectedMasterSwitch);
      }
      /**
       * Calls the CSS vars ponyfill, if opted-in, and invokes the callback
       * regardless of if there was an error/success. If opted-out, only invokes the callback.
       * @param {boolean} option to opt out of the css variables ponyfill
       * @param callback {Function} always called after function
       */

    }, {
      key: "_handlePonyfillCssVariables",
      value: function _handlePonyfillCssVariables(ponyfillDisabled, callback) {
        window.performance.mark('yext.answers.ponyfillStart');

        if (!ponyfillDisabled) {
          this.ponyfillCssVariables({
            onFinally: function onFinally() {
              window.performance.mark('yext.answers.ponyfillEnd');
              callback();
            }
          });
        } else {
          window.performance.mark('yext.answers.ponyfillEnd');
          callback();
        }
      }
    }, {
      key: "domReady",
      value: function domReady(cb) {
        DOM.onReady(cb);
      }
    }, {
      key: "onReady",
      value: function onReady(cb) {
        this._onReady = cb;
        return this;
      }
      /**
       * Parses the config provided by the user. In the parsed config, any options not supplied by the
       * user are given default values.
       * @param {Object} config The user supplied config.
       */

    }, {
      key: "parseConfig",
      value: function parseConfig(config) {
        var parsedConfig = Object.assign({}, DEFAULTS, config);
        var sessionTrackingEnabled = true;

        if (typeof config.sessionTrackingEnabled === 'boolean') {
          sessionTrackingEnabled = config.sessionTrackingEnabled;
        }

        parsedConfig.sessionTrackingEnabled = sessionTrackingEnabled;
        var sandboxPrefix = "".concat(SANDBOX, "-");
        parsedConfig.apiKey.includes(sandboxPrefix) ? parsedConfig.environment = SANDBOX : parsedConfig.environment = PRODUCTION;
        parsedConfig.apiKey = parsedConfig.apiKey.replace(sandboxPrefix, '');
        return parsedConfig;
      }
      /**
       * Validates the Answers config object to ensure things like api key and experience key are
       * properly set.
       * @param {Object} config The Answers config.
       */

    }, {
      key: "validateConfig",
      value: function validateConfig(config) {
        // TODO (tmeyer): Extract this method into it's own class. Investigate the use of JSON schema
        // to validate these configs.
        if (typeof config.apiKey !== 'string') {
          throw new Error('Missing required `apiKey`. Type must be {string}');
        }

        if (typeof config.experienceKey !== 'string') {
          throw new Error('Missing required `experienceKey`. Type must be {string}');
        }

        if (config.onVerticalSearch && typeof config.onVerticalSearch !== 'function') {
          throw new Error('onVerticalSearch must be a function. Current type is: ' + _typeof(config.onVerticalSearch));
        }

        if (config.onUniversalSearch && typeof config.onUniversalSearch !== 'function') {
          throw new Error('onUniversalSearch must be a function. Current type is: ' + _typeof(config.onUniversalSearch));
        }
      }
      /**
       * Register a custom component type so it can be created via
       * addComponent and used as a child component
       * @param {Component} componentClass
       */

    }, {
      key: "registerComponentType",
      value: function registerComponentType(componentClass) {
        this.components.register(componentClass);
      }
    }, {
      key: "addComponent",
      value: function addComponent(type, opts) {
        if (typeof opts === 'string') {
          opts = {
            container: opts
          };
        }

        try {
          this.components.create(type, opts).mount();
        } catch (e) {
          throw new AnswersComponentError('Failed to add component', type, e);
        }

        return this;
      }
      /**
       * Remove the component - and all of its children - with the given name
       * @param {string} name The name of the component to remove
       */

    }, {
      key: "removeComponent",
      value: function removeComponent(name) {
        this.components.removeByName(name);
      }
    }, {
      key: "createComponent",
      value: function createComponent(opts) {
        return this.components.create('Component', opts).mount();
      }
    }, {
      key: "registerHelper",
      value: function registerHelper(name, cb) {
        this.renderer.registerHelper(name, cb);
        return this;
      }
      /**
       * Compile and add a template to the current renderer
       * @param {string} templateName The unique name for the template
       * @param {string} template The handlebars template string
       */

    }, {
      key: "registerTemplate",
      value: function registerTemplate(templateName, template) {
        this.renderer.registerTemplate(templateName, template);
      }
      /**
       * Opt in or out of convertion tracking analytics
       * @param {boolean} optIn
       */

    }, {
      key: "setConversionsOptIn",
      value: function setConversionsOptIn(optIn) {
        if (this._eligibleForAnalytics) {
          this._analyticsReporterService.setConversionTrackingEnabled(optIn);
        }
      }
      /**
       * Opt in or out of session cookies
       * @param {boolean} optIn
       */

    }, {
      key: "setSessionsOptIn",
      value: function setSessionsOptIn(optIn) {
        this.core.globalStorage.set(StorageKeys.SESSIONS_OPT_IN, optIn);
      }
      /**
       * Sets a search query on initialization for vertical searchers that have a
       * defaultInitialSearch provided, if the user hasn't already provided their
       * own via URL param.
       * @param {SearchConfig} searchConfig
       * @private
       */

    }, {
      key: "_setDefaultInitialSearch",
      value: function _setDefaultInitialSearch(searchConfig) {
        if (searchConfig.defaultInitialSearch == null || !searchConfig.verticalKey) {
          return;
        }

        var prepopulatedQuery = this.core.globalStorage.getState(StorageKeys.QUERY);

        if (prepopulatedQuery != null) {
          return;
        }

        this.core.globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.INITIALIZE);
        this.core.setQuery(searchConfig.defaultInitialSearch);
      }
      /**
       * Sets the geolocation tag in global storage, overriding other inputs. Do not use in conjunction
       * with other components that will set the geolocation internally.
       * @param {number} lat
       * @param {number} long
       */

    }, {
      key: "setGeolocation",
      value: function setGeolocation(lat, lng) {
        this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
          lat: lat,
          lng: lng,
          radius: 0
        });
      }
      /*
       * Updates the css styles with new current variables. This is useful when the css
       * variables are updated dynamically (e.g. through js) or if the css variables are
       * added after the ANSWERS.init
       *
       * To solve issues with non-zero max-age cache controls for link/script assets in IE11,
       * we add a cache busting parameter so that XMLHttpRequests succeed.
       *
       * @param {Object} config Additional config to pass to the ponyfill
       */

    }, {
      key: "ponyfillCssVariables",
      value: function ponyfillCssVariables() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        cssVars({
          onlyLegacy: true,
          onError: config.onError || function () {},
          onSuccess: config.onSuccess || function () {},
          onFinally: config.onFinally || function () {},
          onBeforeSend: function onBeforeSend(xhr, node, url) {
            try {
              var uriWithCacheBust = new URL(url);
              var params = new SearchParams(uriWithCacheBust.search);
              params.set('_', new Date().getTime());
              uriWithCacheBust.search = params.toString();
              xhr.open('GET', uriWithCacheBust.toString());
            } catch (e) {// Catch the error and continue if the URL provided in the asset is not a valid URL
            }
          }
        });
      }
      /*
       * Adds context as a parameter for the query API calls.
       * @param {Object} context The context object passed in the API calls
       */

    }, {
      key: "setContext",
      value: function setContext(context) {
        var contextString = JSON.stringify(context);

        if (!isValidContext(contextString)) {
          console.error("Context parameter \"".concat(context, "\" is invalid, omitting from the search."));
          return;
        }

        this.core.globalStorage.set(StorageKeys.API_CONTEXT, contextString);
      }
    }], [{
      key: "setInstance",
      value: function setInstance(instance) {
        if (!this.instance) {
          this.instance = instance;
          return true;
        }

        return false;
      }
    }, {
      key: "getInstance",
      value: function getInstance() {
        return this.instance;
      }
    }]);

    return Answers;
  }();
  /**
   * @param {Object} config
   * @param {GlobalStorage} globalStorage
   * @returns {Services}
   */


  function getServices(config, globalStorage) {
    return {
      searchService: new SearchApi({
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        locale: config.locale,
        environment: config.environment
      }),
      autoCompleteService: new AutoCompleteApi({
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        locale: config.locale,
        environment: config.environment
      }, globalStorage),
      questionAnswerService: new QuestionAnswerApi({
        apiKey: config.apiKey,
        environment: config.environment
      }, globalStorage),
      errorReporterService: new ErrorReporter({
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        printVerbose: config.debug,
        sendToServer: !config.suppressErrorReports,
        environment: config.environment
      }, globalStorage)
    };
  }
  /**
   * @returns {Services}
   */


  function getMockServices() {
    return {
      searchService: new MockSearchService(),
      autoCompleteService: new MockAutoCompleteService(),
      questionAnswerService: new MockQuestionAnswerService(),
      errorReporterService: new ConsoleErrorReporter()
    };
  }
  /**
   * Initialize the scroll event listener to send analytics events
   * when the user scrolls to the bottom. Debounces scroll events so
   * they are processed after the user stops scrolling
   */


  function initScrollListener(reporter) {
    var DEBOUNCE_TIME = 100;
    var timeout = null;

    var sendEvent = function sendEvent() {
      if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
        var event = new AnalyticsEvent('SCROLL_TO_BOTTOM_OF_PAGE');

        if (reporter.getQueryId()) {
          reporter.report(event);
        }
      }
    };

    document.addEventListener('scroll', function () {
      clearTimeout(timeout);
      timeout = setTimeout(sendEvent, DEBOUNCE_TIME);
    });
  }

  var ANSWERS = new Answers();

  return ANSWERS;

}));
