export default class BeerSelectorView {
    constructor(element) {
        this.element = element;
    }

    render() {
        return `<div class="beer-selector">
                    <h1>Pick a beer</h1>
                    <form>
                        Name <input type="text">
                        Hops <input type="text"><br>
                        Abv <input type="text"> Ibu <input type="text"> Ebc <input type="text"><br>
                        <button>Find beer</button>
                    </form>
                </div>`;
    }

    bind() {
        this.element.innerHTML = this.render();
    }
}