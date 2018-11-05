import Api from "./api";
import GridView from "./grid-view";
import SingleBeer from "./single-beer-view";

window.onload = function () {
    const api = new Api();
    const gridView = new GridView("grid");
    api.fetchBeerApi().then(
        beers => gridView.setBeers(beers)
    );
};