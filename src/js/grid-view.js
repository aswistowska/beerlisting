export default class GridView {
    constructor(element) {
        this.element = element;
    }

    setBeers(beersList) {
        // console.log(beersList);
        this.element.innerHTML = this.render(beersList);
    }

    renderBeer(beer) {
        return `<article class="grid-beers-container">
        <img src="${beer.imageUrl}">
        <div class="grid-descriptions-box">
        <h1>${beer.name}</h1><p>${beer.description}</p>
        </div>
        <ul><li class="squares"><p>ABV</p><p>${beer.abv}</p></li>
        <li class="squares"><p>IBU</p><p>${beer.ibu}</p></li>
        <li class="squares"><p>pH</p><p>${beer.ph}</p></li></ul></article>`;
    }

    render(beersList) {
        const renderedBeerList = beersList.map(beer => this.renderBeer(beer)).join("");
        return `<section>${renderedBeerList}</section>`;
    }
}