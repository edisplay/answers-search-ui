import Component from '../component';
import Filter from '../../../core/models/filter';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';

/**
 * LocationBiasComponent will show the user where is used for location bias and allow user to
 * improve accuracy with HTML5 geolocation.
 *
 * @extends Component
 */
export default class LocationBiasComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * Recieve updates from storage based on this index
     * @type {StorageKey}
     */
    this.moduleId = StorageKeys.LOCATION_BIAS;

    /**
     * The optional vertical key for vertical search configuration
     * If not provided, when location updated,
     * a universal search will be triggered.
     * @type {string}
     */
    this._verticalKey = config.verticalKey || null;

    /**
     * The element used for updating location
     * Optionally provided.
     * @type {string} CSS selector
     */
    this._updateLocationEl = config.updateLocationEl || '.js-locationBias-update-location';

    this._locationDisplayName = '';

    this._accuracy = '';

    this._allowUpdate = true;
  }

  static get type () {
    return 'LocationBias';
  }

  static defaultTemplateName () {
    return 'search/locationbias';
  }

  onMount () {
    if (!this._allowUpdate) {
      return;
    }
    DOM.on(this._updateLocationEl, 'click', (e) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            radius: position.coords.accuracy
          });
          this._doSearch();
        }, (err) => {
          if (err.code === 1) {
            this.core.globalStorage.delete(StorageKeys.GEOLOCATION);
            this._allowUpdate = false;
            this.setState({
              locationDisplayName: this._locationDisplayName,
              accuracy: this._accuracy
            });
          }
        });
      }
      // TODO: Should we throw error or warning here if no geolocation?
    });
  }

  setState (data, val) {
    this._locationDisplayName = data.locationDisplayName;
    this._accuracy = data.accuracy;
    return super.setState(Object.assign({}, data, {
      locationDisplayName: this._getLocationDisplayName(data),
      accuracyText: this._getAccuracyHelpText(data.accuracy),
      isPreciseLocation: data.accuracy === 'DEVICE' && this._allowUpdate,
      isUnknownLocation: data.accuracy === 'UNKNOWN',
      shouldShow: data.accuracy !== undefined,
      allowUpdate: this._allowUpdate
    }, val));
  }

  _getLocationDisplayName (data) {
    if (data.accuracy === 'UNKNOWN') {
      return 'Unknown Location';
    }
    return data.locationDisplayName;
  }

  _getAccuracyHelpText (accuracy) {
    switch (accuracy) {
      case 'IP':
        return 'based on your internet address';
      case 'DEVICE':
        return 'based on your device';
      default:
        return '';
    }
  }

  _doSearch () {
    let query = this.core.globalStorage.getState(StorageKeys.QUERY);
    if (this._verticalKey) {
      const allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
      const totalFilter = allFilters.length > 1
        ? Filter.and(...allFilters)
        : allFilters[0];
      const facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
      this.core.verticalSearch(this._verticalKey, {
        input: query,
        filter: JSON.stringify(totalFilter),
        offset: this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0,
        facetFilter: JSON.stringify(facetFilter)
      });
    } else {
      this.core.search(query);
    }
  }
}