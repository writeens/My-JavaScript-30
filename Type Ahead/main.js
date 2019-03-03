const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
// add event listener to text input and predictions
const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

// empty array to store cities after retrieving them via the fetch API
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch) {
    return cities.filter((item) => {
        // match the word with an item
        // This shows how to use a regular expression with a variable
        const regex = new RegExp(wordToMatch, "gi");
        return item.city.match(regex) || item.state.match(regex);
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// handles the changes to the text box
function displayMatches() {
    const matchArray = findMatches(this.value);
    const html = matchArray.map((item) => {
        const regexo = new RegExp(this.value, "gi");
        const cityName = item.city.replace(regexo, `<span class = "hl">${this.value}</span>`);
        const stateName = item.city.replace(regexo, `<span class = "hl">${this.value}</span>`);
        return `
        <li>
            <span class = "name">${cityName}, ${stateName}<span>
            <span class = "population">${numberWithCommas(item.population)}<span>
        <li>`;
    }).join("");
    suggestions.innerHTML = html;
}


// handles entire change events
// search.addEventListener("change", displayMatches);
// handles key up events
search.addEventListener("keyup", displayMatches);
