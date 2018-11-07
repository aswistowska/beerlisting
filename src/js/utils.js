function renderPhBackgroundColor(pH){
    if (pH > 5.5){
        return "RGB(207,86,46)";
    }
    if (pH >= 4.6) {
        return "RGB(249, 173, 11)";
    }
    if (pH <= 4.5) {
        return "RGB(253, 192, 9)";
    }
}

export function renderBeerParameters(beer) {
    const pHColor = renderPhBackgroundColor(beer.ph);

    const beerAbv = beer.abv? `<li class="squares"><p>ABV</p><p>${beer.abv}</p></li>` : "";
    const beerIbu = beer.ibu? `<li class="squares"><p>IBU</p><p>${beer.ibu}</p></li>` : "";
    const beerPh = beer.ph? `<li class="squares" style="background-color: ${pHColor}"><p>pH</p><p>${beer.ph}</p></li>` : "";

    return `<ul>${beerAbv}${beerIbu}${beerPh}</ul>`;

}