export default class BeerSelectorView {
    constructor(element) {
        this.element = element;
    }

    render() {
        return `<div class="beer-selector">
                    <form>
                        <h2>Pick a beer</h2>
                        <div class="form-row">
                            <label class="large" for="name">Name</label><input id="name">
                            <label class="large" for="hops">Hops</label><input id="hops">
                        </div>  
                        <div class="form-row">
                            <label for="abv">Abv</label><input id="abv">
                            <label for="ibu">Ibu </label><input id="ibu">
                            <label for="ebc">Ebc</label><input id="ebc">
                        </div>
                        <div class="form-row">
                            <button id="find-beer">Find beer</button>
                        </div>
                    </form>
                </div>`;
    }

    bind() {
        this.element.innerHTML = this.render();
        const findButoon = document.getElementById("find-beer");
        findButoon.addEventListener("click", function () {
            alert("Hello. My name is Inigo Montoya. You killed my father. Prepare to die.");
        });
    }
}