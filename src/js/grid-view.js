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
        this.element.innerHTML = this.render(beersList);
        const paginator = new PaginatorView(document.getElementById("paginator-container"));
        paginator.setPage(page);
    }

    setBeersNoPagination(beersList) {
        this.element.innerHTML = this.render(beersList);
    }

    renderBeer(beer) {
        const parameters = renderBeerParameters(beer);

        return `<article>
        <img src="${beer.imageUrl}">
            <h1>${beer.name}</h1>
            <p>${beer.description}</p>
            ${parameters}
        </article>`;
    }

    render(beersList) {
        const renderedBeerList = beersList.map(beer => this.renderBeer(beer)).join("");

        return `<section class="grid">${renderedBeerList}</section><div id="paginator-container"></div>`;
    }

}