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
                            <label for="abv">Abv</label><input id="abv" type="number">
                            <label for="ibu">Ibu</label><input id="ibu" type="number">
                            <label for="ebc">Ebc</label><input id="ebc" type="number">
                        </div>
                        <div class="form-row">
                            <button id="find-beer">Find beer</button>
                        </div>
                    </form>
                </div>`;
    }

    bind() {
        this.element.innerHTML = this.render();
        const findButton = document.getElementById("find-beer");
        findButton.addEventListener("click", this.onFindButtonClick.bind(this));
    }

    onFindButtonClick(){
        alert("Hello. My name is Inigo Montoya. You killed my father. Prepare to die.");
        const name = document.getElementById("name").value;
        const hops = document.getElementById("hops").value;
        const abv = parseInt(document.getElementById("abv").value);
        const ibu = parseInt(document.getElementById("ibu").value);
        const ebc = parseInt(document.getElementById("ebc").value);
        //console.log(name, hops, abv, ibu, ebc);
        window.app.showFoundBeers(
            name, hops, abv, ibu, ebc);
    }
}
