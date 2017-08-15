import Page from "./page";
class CitySearchPage extends Page {

    //get city()  { return browser.element('.city-select'); }
    get searchBar()  { return browser.element(".main-input"); }
    get newsearchBar()  { return browser.element(".tagger-input-container"); }
    get dynamicResult()  { return browser.element("li.item.active"); }
    get viewResult()  { return browser.element(".search-initiator-btn"); }

    open() {
        super.open();
    }

    // submit() {
    //     this.form.submitForm();
    // }

}

export default new CitySearchPage();
