const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

function append(header, ret) {
    const h = document.createElement("h3");
    const p = document.createElement("p");
    let k = document.createTextNode(header);
    let n = document.createTextNode(ret);
    h.appendChild(k);
    document.body.appendChild(h);
    p.appendChild(n);
    document.body.appendChild(p)
}
const kata1 = () => JSON.stringify(gotCitiesCSV.split(","))
const kata2 = () => JSON.stringify(bestThing.split(" "))
const kata3 = () => JSON.stringify(gotCitiesCSV.split(",").join(";"))
const kata4 = () => JSON.stringify(lotrCitiesArray.slice(0,5).toString())

append("1. Display an array from the cities in gotCitiesCSV", kata1())
append("2. Display an array of words from the sentence in bestThing", kata2())
append("3. Display a string separated by semi-colons instead of commas from gotCitiesCSV", kata3())
append("4. Display a a CSV (comma-separated) string from the lotrCitiesArray", kata4())