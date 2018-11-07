import PaginatorView from "./paginator-view";
import {renderBeerParameters} from "./utils";

export default class GridView {
    constructor(element) {
        this.element = element;
    }

    setBeers(beersList, page) {
        if(beersList.length == 0 && page > 1) {
            window.app.showGrid(page -1);
        }
        // console.log(beersList);
        this.element.innerHTML = this.render(beersList, page);
        const paginator = new PaginatorView(document.getElementById("paginator-container"));
        paginator.setPage(page);
    }

    renderBeer(beer) {
        const parameters = renderBeerParameters(beer);

        return `<article class="grid-beers-container">
        <img src="${beer.imageUrl}">
        <div class="grid-descriptions-box">
        <h1>${beer.name}</h1><p>${beer.description}</p>
        </div>
        ${parameters}
        </article>`;
    }

    render(beersList) {
        const renderedBeerList = beersList.map(beer => this.renderBeer(beer)).join("");

        return `<section>${renderedBeerList}</section><div id="paginator-container"></div>`;
    }

}