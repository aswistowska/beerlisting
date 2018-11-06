export default class SingleBeerView {
    constructor(element) {
        this.element = element;
    }

    setBeer(beer) {
        this.element.innerHTML = this.render(beer);
        console.log(beer);
    }

    render(beer) {
        return `<article class="single-beer-container">
        <div class="single-beer-content">
            <img src="${beer.imageUrl}">
           <div class="single-beer-description">
            <h1>${beer.name}</h1><p>${beer.description}</p>
            <ul>
            <li class="squares"><p>ABV</p><p>${beer.abv}</p></li>
            <li class="squares"><p>IBU</p><p>${beer.ibu}</p></li>
            <li class="squares"><p>pH</p><p>${beer.ph}</p></li></ul>
            <button id="ingredients">Ingredients</button></div></div>
           </article>`;

    }


}