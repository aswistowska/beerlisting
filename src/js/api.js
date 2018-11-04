import Beer from "./beer";

const API_BASE_URL = "https://api.punkapi.com/v2";

export default class Api{

    constructor(baseUrl=API_BASE_URL) {
        this.baseUrl = baseUrl;
    }

    fetchBeerApi(page=1, perPage=6){
        const url = `${this.baseUrl}/beers?page=${page}&per_page=${perPage}`;

        return fetch(url)
            .then(response => response.json())
            .then(function(myJson) {
                return myJson.map(json => new Beer(json));
            });
    }
}
