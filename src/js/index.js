import Api from "./api";
import GridView from "./grid-view";
import SingleBeerView from "./single-beer-view";


// TODO: move App to own file
class App {
    /*
    It's like Activity but there no intents
    showGrid - creates GridView
    showRandomBeer - creates BeerView
     */
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.api = new Api();

        // TODO: parse `window.location.hash` to decide if show grid or show random beer
        this.showGrid();
    }

    cleanNavClass() {

        document.querySelectorAll("nav a").forEach(element => element.classList.remove("active"));
    }

    showGrid(page = 1) {
        // TODO: set `window.location.hash`
        this.element.innerHTML = ""; // TODO: loader?

        const gridView = new GridView(this.element);
        this.api.fetchBeerApi(page).then(
            beers => gridView.setBeers(beers)
        );
    }

    showRandomBeer() {
        this.element.innerHTML = ""; // TODO: loader?
        // TODO: set `window.location.hash`
        // TODO: create BeerView class and
        const beerView = new SingleBeerView(this.element);
        this.api.fetchRandomBeerApi().then(
            beer => beerView.setBeer(beer)
        );
    }

}

// the same as window.onload, but better - you can have only one window.onload but it's possible to
// add any number of listeners - if there is other js script (ads etc) it's less possible to break them
window.addEventListener("load", function(){

    // window.app -> it's not best way to do it, but you can use onclick="app...." in html
    // better way is do document.getElementsBy
    window.app = new App("app");
});

