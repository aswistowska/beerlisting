import Api from "./api";
import GridView from "./grid-view";
import SingleBeerView from "./single-beer-view";
import BeerSelectorView from "./beer-selector-view";

export default class App {

    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.api = new Api();
        if(!location.hash){
            location.hash = "beers/1";
        }
        if(location.hash.startsWith("#beers/")){
            const page = parseInt(location.hash.substr(7));
            this.showGrid(page);
        } else if(location.hash === "#quick-find") {
            this.showRandomBeer();
        } else {
            this.showBeerSelector();
        }

    }

    cleanNavClass() {
        document.querySelectorAll("nav a").forEach(element => element.classList.remove("active"));
    }

    setNavClass(elementId) {
        document.getElementById(elementId).classList.add("active");
    }

    showGrid(page = 1) {
        setTimeout(function(){
            this.cleanNavClass();
            this.setNavClass("beers");
            window.location.hash = `beers/${page}`;
            this.element.innerHTML = "";
            const gridView = new GridView(this.element);
            this.api.fetchBeerApi(page).then(
                beers => gridView.setBeers(beers, page)
            );
        }.bind(this));

    }

    showRandomBeer() {
        setTimeout(function(){
            this.cleanNavClass();
            this.setNavClass("quick-find");
            window.location.hash = "quick-find";
            this.element.innerHTML = "";
            const beerView = new SingleBeerView(this.element);
            this.api.fetchRandomBeerApi().then(
                beer => beerView.setBeer(beer)
            );
        }.bind(this));

    }

    showBeerSelector() {
        setTimeout(function(){
            this.cleanNavClass();
            this.setNavClass("pick-a-beer");
            window.location.hash = "pick-a-beer";
            this.element.innerHTML = "";
            const beerSelectorView = new BeerSelectorView(this.element);
            beerSelectorView.bind();
        }.bind(this));

    }

}
