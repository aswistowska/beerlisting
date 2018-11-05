export default class GridView {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    setBeers(beersList) {
        // console.log(beersList);
        this.element.innerHTML = this.render(beersList);
    }

    renderBeer(beer) {
        return `<article><img src="${beer.imageUrl}">
        <div class="descriptions-box">
        <h1>${beer.name}</h1><p>${beer.description}</p>
        <div class="squares"><p>ABV</p><p>${beer.abv}</p></div>
        <div class="squares"><p>IBU</p><p>${beer.ibu}</p></div>
        <div class="squares"><p>pH</p><p>${beer.ph}</p></div></div></article>`;
    }

    render(beersList) {
        const renderedBeerList = beersList.map(beer => this.renderBeer(beer)).join("");
        return `<section>${renderedBeerList}</section>`;
    }
}