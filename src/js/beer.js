import Ingredients from "./ingredients";

export default class Beer {

    constructor(json) {
        console.log(json);
        this.json = json;
    }

    get imageUrl() {
        return this.json["image_url"];
    }

    get name() {
        return this.json["name"];
    }

    get description() {
        return this.json["description"];
    }

    get abv() {
        return this.json["abv"];
    }

    get ibu() {
        return this.json["ibu"];
    }

    get ph() {
        return this.json["ph"];
    }

    get ingredients() {
        return new Ingredients(this.json["ingredients"]);
    }
}