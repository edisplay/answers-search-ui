/** @module Core */

import SearchDataTransformer from './search/searchdatatransformer';

import VerticalResults from './models/verticalresults';
import UniversalResults from './models/universalresults';
import QuestionSubmission from './models/questionsubmission';
import Filter from './models/filter';
import SearchIntents from './models/searchintents';
import Navigation from './models/navigation';
import AlternativeVerticals from './models/alternativeverticals';
import DirectAnswer from './models/directanswer';
import LocationBias from './models/locationbias';
import QueryTriggers from './models/querytriggers';

import StorageKeys from './storage/storagekeys';
import AnalyticsEvent from './analytics/analyticsevent';

/** @typedef {import('./services/searchservice').default} SearchService */
/** @typedef {import('./services/autocompleteservice').default} AutoCompleteService */
/** @typedef {import('./services/questionanswerservice').default} QuestionAnswerService */

/**
 * Core is the main application container for all of the network and storage
 * related behaviors of the application.
 */
export default class Core {
  constructor (config = {}) {
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
   * @param {object} query The query details
   * @param {string} query.input The input to search for
   * @param {string} query.filter The filter to use in the search
   * @param {string} query.facetFilter The facet filter to use in the search
   * @param {number} query.limit The max number of results to include, max of 50
   * @param {number} query.offset The results offset, for fetching more results of the same query
   * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
   * @param {boolean} query.append If true, adds the results of this query to the end of the current results, defaults false
   */
  verticalSearch (verticalKey, query) {
    if (!query.append) {
      this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
      this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
      this.globalStorage.set(StorageKeys.LOCATION_BIAS, {});
    }

    const queryTrigger = this.getQueryTriggerForSearchApi(
      this.globalStorage.getState(StorageKeys.QUERY_TRIGGER)
    );
    return this._searcher
      .verticalSearch(verticalKey, {
        limit: this.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit,
        geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
        ...query,
        isDynamicFiltersEnabled: this._isDynamicFiltersEnabled,
        skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
        queryTrigger: queryTrigger,
        sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN),
        sortBys: this.globalStorage.getState(StorageKeys.SORT_BYS)
      })
      .then(response => SearchDataTransformer.transformVertical(response, this._fieldFormatters, verticalKey))
      .then(data => {
        this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);
        this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);
        this.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);
        this.globalStorage.set(StorageKeys.ALTERNATIVE_VERTICALS, data[StorageKeys.ALTERNATIVE_VERTICALS]);

        if (query.append) {
          const mergedResults = this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS)
            .append(data[StorageKeys.VERTICAL_RESULTS]);
          this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
        } else {
          this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
        }

        if (data[StorageKeys.DYNAMIC_FILTERS]) {
          this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
        }
        if (data[StorageKeys.SPELL_CHECK]) {
          this.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
        }
        if (data[StorageKeys.LOCATION_BIAS]) {
          this.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);
        }
        this.globalStorage.delete('skipSpellCheck');
        this.globalStorage.delete(StorageKeys.QUERY_TRIGGER);

        const exposedParams = {
          verticalKey: verticalKey,
          queryString: query.input,
          resultsCount: this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS).resultsCount,
          resultsContext: data[StorageKeys.VERTICAL_RESULTS].resultsContext
        };
        const analyticsEvent = this.onVerticalSearch(exposedParams);
        if (typeof analyticsEvent === 'object') {
          this._analyticsReporter.report(AnalyticsEvent.fromData(analyticsEvent));
        }
      });
  }

  clearResults () {
    this.globalStorage.set(StorageKeys.QUERY, null);
    this.globalStorage.set(StorageKeys.QUERY_ID, '');
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
   * @param {string} verticalKey The vertical key to use in the search
   * @param {number} offset The offset to use in the search
   */
  verticalPage (verticalKey, offset) {
    const allFilters = this.globalStorage.getAll(StorageKeys.FILTER);
    const totalFilter = allFilters.length > 1
      ? Filter.and(...allFilters)
      : allFilters[0];
    const facetFilter = this.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
    this.verticalSearch(verticalKey, {
      input: this.globalStorage.getState(StorageKeys.QUERY),
      id: this.globalStorage.getState(StorageKeys.QUERY_ID),
      filter: JSON.stringify(totalFilter),
      facetFilter: JSON.stringify(facetFilter),
      offset
    });
  }

  search (queryString, urls) {
    this.globalStorage.set(StorageKeys.DIRECT_ANSWER, {});
    this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
    this.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, {});
    this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
    this.globalStorage.set(StorageKeys.LOCATION_BIAS, {});

    const queryTrigger = this.getQueryTriggerForSearchApi(
      this.globalStorage.getState(StorageKeys.QUERY_TRIGGER)
    );
    return this._searcher
      .universalSearch(queryString, {
        geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
        skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
        queryTrigger: queryTrigger,
        sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN)
      })
      .then(response => SearchDataTransformer.transform(response, urls, this._fieldFormatters))
      .then(data => {
        this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);
        this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);
        this.globalStorage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);
        this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);
        this.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);
        this.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
        this.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);
        this.globalStorage.delete('skipSpellCheck');
        this.globalStorage.delete(StorageKeys.QUERY_TRIGGER);

        const exposedParams = {
          queryString: queryString,
          sectionsCount: data[StorageKeys.UNIVERSAL_RESULTS].sections.length
        };
        const analyticsEvent = this.onUniversalSearch(exposedParams);
        if (typeof analyticsEvent === 'object') {
          this._analyticsReporter.report(AnalyticsEvent.fromData(analyticsEvent));
        }
      });
  }

  /**
   * Given an input, query for a list of similar results and set into storage
   *
   * @param {string} input     the string to autocomplete
   * @param {string} namespace the namespace to use for the storage key
   */
  autoCompleteUniversal (input, namespace) {
    return this._autoComplete
      .queryUniversal(input)
      .then(data => {
        this.globalStorage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
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
  autoCompleteVertical (input, namespace, verticalKey) {
    return this._autoComplete
      .queryVertical(input, verticalKey)
      .then(data => {
        this.globalStorage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
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
  autoCompleteFilter (input, config) {
    return this._autoComplete
      .queryFilter(input, config)
      .then(data => {
        this.globalStorage.set(`${StorageKeys.AUTOCOMPLETE}.${config.namespace}`, data);
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
  submitQuestion (question) {
    return this._questionAnswer
      .submitQuestion(question)
      .then(data => {
        this.globalStorage.set(
          StorageKeys.QUESTION_SUBMISSION,
          QuestionSubmission.submitted());
      });
  }

  /**
   * Stores the given sortBy into storage, to be used for the next search
   * @param {Object} sortByOptions
   */
  setSortBys (...sortByOptions) {
    const sortBys = sortByOptions.map(option => {
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
  clearSortBys () {
    this.globalStorage.delete(StorageKeys.SORT_BYS);
  }

  /**
   * Stores the given query into storage, to be used for the next search
   * @param {string} query the query to store
   */
  setQuery (query) {
    this.globalStorage.set(StorageKeys.QUERY, query);
  }

  /**
   * Stores the provided query ID, to be used in analytics
   * @param {string} queryId The query id to store
   */
  setQueryId (queryId) {
    this.globalStorage.set(StorageKeys.QUERY_ID, queryId);
  }

  /**
   * Stores the given filter into storage, to be used for the next search
   *
   * @param {string} namespace the namespace to use for the storage key
   * @param {Filter} filter    the filter to set
   */
  setFilter (namespace, filter) {
    this.globalStorage.set(`${StorageKeys.FILTER}.${namespace}`, filter);
  }

  setFacetFilter (namespace, filter) {
    this.globalStorage.set(`${StorageKeys.FACET_FILTER}.${namespace}`, filter);
  }

  /**
   * Returns the query trigger for the search API given the SDK query trigger
   * @param {QueryTriggers} queryTrigger SDK query trigger
   * @returns {QueryTriggers} query trigger if accepted by the search API, null o/w
   */
  getQueryTriggerForSearchApi (queryTrigger) {
    if (queryTrigger === QueryTriggers.QUERY_PARAMETER) {
      return null;
    }
    return queryTrigger;
  }

  enableDynamicFilters () {
    this._isDynamicFiltersEnabled = true;
  }

  on (evt, moduleId, cb) {
    return this.globalStorage.on(evt, moduleId, cb);
  }
}
