export default class Ingredient {
    constructor(json) {
        this.json = json;
    }

    get name() {
        return this.json["name"];
    }

    get value() {
        return this.json["amount"]["value"];
    }

    get unit() {
        return this.json["amount"]["unit"];
    }
}