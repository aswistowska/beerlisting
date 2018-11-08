export default class BeerSelectorView {
    constructor(element) {
        this.element = element;
    }

    render() {
        return `<div class="beer-selector">
                    <h1>Pick a beer</h1>
                    <form>
                    
                    </form>
                </div>`;
    }

    bind() {
        this.element.innerHTML = this.render();
    }
}