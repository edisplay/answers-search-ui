import UniversalPage from '../pageobjects/universalpage';
import VerticalPage from '../pageobjects/verticalpage';
import {
  UNIVERSAL_PAGE,
  FACETS_PAGE,
  VERTICAL_PAGE,
  UNIVERSAL_SEARCH_URL_REGEX,
  VERTICAL_SEARCH_URL_REGEX
} from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { MockedUniversalAutoCompleteRequest } from '../fixtures/responses/universal/autocomplete';
import { MockedUniversalSearchRequest } from '../fixtures/responses/universal/search';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { Selector, RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  registerIE11NoCacheHook
} from '../utils';
import StorageKeys from '../../../src/core/storage/storagekeys';
import SearchRequestLogger from '../searchrequestlogger';

/**
 * This file contains acceptance tests for a universal search page.
 * Note that before any tests are run, a local HTTP server is spun
 * up to serve the search page and the dist directory of Answers.
 * This server is closed once all tests have completed.
 */

fixture`Universal search page works as expected`
  .requestHooks(
    [
      SearchRequestLogger.createUniversalSearchLogger(),
      MockedUniversalSearchRequest,
      MockedUniversalAutoCompleteRequest
    ]
  )
  .beforeEach(async t => {
    await registerIE11NoCacheHook(t, UNIVERSAL_SEARCH_URL_REGEX);
  })
  .page`${UNIVERSAL_PAGE}`;

test('Basic universal flow', async t => {
  const searchComponent = UniversalPage.getSearchComponent();
  await searchComponent.enterQuery('Tom');
  await searchComponent.clearQuery();

  await searchComponent.enterQuery('ama');
  await searchComponent.getAutoComplete().selectOption('amani farooque phone number');
  await SearchRequestLogger.waitOnSearchComplete(t);

  const sections =
        await UniversalPage.getUniversalResultsComponent().getSections();
  await t.expect(sections.length).eql(2);

  const faqsSectionTitle = await sections[1].getTitle();
  await t.expect(faqsSectionTitle.toUpperCase()).contains('FAQ');
});
