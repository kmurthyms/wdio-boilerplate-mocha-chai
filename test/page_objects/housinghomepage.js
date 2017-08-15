//const Page = require('./page')
import Page from "./page";
class HomePage extends Page {

    //get city()  { return browser.element('.city-select'); }
    get city() { return browser.element("span.city-select-image.bangalore"); }
    get searchBar()  { return browser.element(".last-search-wrapper"); }
    get submitSearch()  { return browser.element(".button.btn.primary.search-btn"); }
    get shoppingCart()  { return browser.element("#nav-cart > span.nav-cart-icon.nav-sprite'"); }

    open() {
        super.open();
    }

    // submit() {
    //     this.form.submitForm();
    // }

}

export default new HomePage();
