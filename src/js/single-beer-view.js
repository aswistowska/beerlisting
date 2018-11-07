import {renderBeerParameters, renderPhBackgroundColor} from "./utils";

export default class SingleBeerView {
    constructor(element) {
        this.element = element;
    }

    setBeer(beer) {
        this.element.innerHTML = this.render(beer);
        const ingredientsButton = document.getElementById("ingredients");
        ingredientsButton.addEventListener("click", this.showModal.bind(this));
        const modalCloseButton = document.getElementById("close-modal");
        modalCloseButton.addEventListener("click", this.hideModal.bind(this));
        const anotherBeerButton = document.getElementById("render-another-beer");
        anotherBeerButton.addEventListener("click", function() { window.app.showRandomBeer();});

        // console.log(beer);
    }

    get modal() {
        return document.getElementById("ingredients-modal");
    }

    showModal() {
        this.modal.classList.remove("hidden");
        window.onclick = function(event) {
            if (event.target == this.modal) {
                this.hideModal();
            }
        }.bind(this);
    }

    hideModal() {
        this.modal.classList.add("hidden");
        window.onclick = null;
    }

    render(beer) {
        //console.log(beer.ingredients);
        const modal = this.renderIngredients(beer.ingredients);
        const parameters = renderBeerParameters(beer);

        return `<article class="single-beer-container">
        <div class="single-beer-content">
            <img src="${beer.imageUrl}">
           <div class="single-beer-description">
            <h1>${beer.name}</h1>
            <h2>${beer.tagline}</h2>
            <p>${beer.description}</p>
            ${parameters}
            <button id="ingredients">Ingredients</button></div></div>
           </article>${modal}<button id="render-another-beer">Give me another beer</button>`;

    }

    renderIngredients(ingredients) {
        //console.log(ingredients);
        const renderedMalt = ingredients.malt.map(ingredient => this.renderIngredient(ingredient)).join(", ");
        const renderedHops = ingredients.hops.map(ingredient => this.renderIngredient(ingredient)).join(", ");

        return `<div class="modal hidden" id="ingredients-modal">
                <div class="modal-content">
                <span class="close" id="close-modal">&times;</span>
                <dl><dt>Malt:</dt><dd>${renderedMalt}</dd>
                <dt>Hops:</dt><dd>${renderedHops}</dd>
                <dt>Yeast:</dt><dd>${ingredients.yeast}</dd></dl></div></div>`;
    }

    renderIngredient(ingredient) {
        return `${ingredient.name} (${ingredient.value} ${ingredient.unit})`;
    }
}