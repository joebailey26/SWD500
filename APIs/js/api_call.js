document.addEventListener("DOMContentLoaded", run);
var brewList = [];

function run() {
    let breweries;

    axios.get("https://api.openbrewerydb.org/breweries").then(brews => {

    brewList = brews.data;

    const HtmlElement = document.querySelector("#my_data");

    let list = brewList.map((b) => buildTemplate(b)).join(' ');

    HtmlElement.innerHTML = list;

    console.table(brewList)

}).catch(e => {
    console.log(e.error);
});
}
function buildTemplate(b) {
    return `<li>Name: ${b.name}</li>`;
}