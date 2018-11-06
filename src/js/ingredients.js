import Ingredient from "./ingredient";

export default class Ingredients {
    constructor(json) {
        this.json = json;
    }

    get malt() {
        let malt = this.json["malt"];
        return malt.map(json => new Ingredient(json));
    }

    get hops() {
        let hops = this.json["hops"];
        return hops.map(json => new Ingredient(json));
    }

    get yeast() {
        return this.json["yeast"];
    }
}