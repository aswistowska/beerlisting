export default class BeerSelectorView {
    constructor(element) {
        this.element = element;
    }

    render() {
        return `<h1>Hello... it's me you looking for?!</h1>`;
    }

    bind() {
        this.element.innerHTML = this.render();
    }
}