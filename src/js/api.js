import Beer from "./beer";

const API_BASE_URL = "https://api.punkapi.com/v2";

export default class Api{

    constructor(baseUrl=API_BASE_URL) {
        this.baseUrl = baseUrl;
    }

    fetchBeerApi(page=1, perPage=6) {
        const url = `${this.baseUrl}/beers?page=${page}&per_page=${perPage}`;

        return fetch(url)
            .then(response => response.json())
            .then(myJson => myJson.map(json => new Beer(json)));
    }

    fetchRandomBeerApi() {
        const url = `${this.baseUrl}/beers/random`;

        return fetch(url)
            .then(response => response.json())
            .then(myJson => new Beer(myJson[0]));
    }
    findBeers(name, hops, abv, ibu, ebc){
        const params = [];
        function encodeStr(variable, value) {
            if(value) {
                const encoded= encodeURIComponent(value.replace(" ", "_"));
                params.push(`${variable}=${encoded}`);
            }
        }
        function encodeInt(variable, value, range=0) {
            if(value) {
                const min = value-range;
                const max = value + range + 1;
                params.push(`${variable}_gt=${min}`);
                params.push(`${variable}_lt=${max}`);
            }
        }
        encodeStr("beer_name", name);
        encodeStr("hops", hops);
        encodeInt("abv", abv);
        encodeInt("ibu", ibu, 3);
        encodeInt("ebc", ebc, 5);
        params.push("per_page=78");

        const joinedParams = params.join("&");
        const url = `https://api.punkapi.com/v2/beers?${joinedParams}`;
        return fetch(url)
            .then(response => response.json())
            .then(myJson => myJson.map(json => new Beer(json)));
    }
}
