import Home from '../page_objects/housinghomepage.js';
import Results from '../page_objects/housingresultspage.js';
import CitySearch from '../page_objects/cityBasedSearchPage.js';
import { expect } from 'chai'

describe('Housing dot com search Demo', () => {

    before('On the housinghomepage ...', () => {
        Home.open();
        Home.city.waitForExist();
        Home.city.waitForVisible();
        Home.city.click();
        Home.searchBar.waitForExist();
        Home.searchBar.waitForVisible();

    });

    it('A user searches for "Outer Ring Road"', () => {
        Home.searchBar.click();
        CitySearch.searchBar.waitForExist();
        CitySearch.searchBar.waitForVisible();
        //CitySearch.searchBar.click();
        CitySearch.searchBar.setValue("outer ring road");
        CitySearch.dynamicResult.click();
        CitySearch.viewResult.waitForEnabled();
        CitySearch.viewResult.click();
    });

    it('Shows a positive number of results', () => {
        Results.resultsCount.waitForExist();
        Results.resultsCount.waitForVisible();
        //regex drags nums out of results text and pushes to an array
        const regex = /\d\s*\-\s*(\d+){1}\s*(?:of)?(\s*\d+)?\s*.*/g
        const nums = regex.exec(Results.resultsCount.getText());
        expect(parseInt(nums[1])).to.be.above(0);
    });

});
