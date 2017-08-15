//const Page = require('./page')
import Page from "./page";

class ResultsPage extends Page {

    get resultsCount()  { return browser.element('.results-range'); }

    open() {
        super.open();
    }

}

export default new ResultsPage();
