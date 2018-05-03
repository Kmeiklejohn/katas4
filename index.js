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

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


const kata1 = () => JSON.stringify(gotCitiesCSV.split(","))
const kata2 = () => JSON.stringify(bestThing.split(" "))
const kata3 = () => JSON.stringify(gotCitiesCSV.split(",").join(";"))
const kata4 = () => JSON.stringify(lotrCitiesArray.slice().toString())
const kata5 = () => JSON.stringify(lotrCitiesArray.slice(0, 5).toString())
const kata6 = () => JSON.stringify(lotrCitiesArray.slice(-5).toString())
const kata7 = () => JSON.stringify(lotrCitiesArray.slice(2, 5).toString())
const kata8 = () => {
    JSON.stringify(lotrCitiesArray.splice(2, 1).toString())
    return lotrCitiesArray;
}
const kata9 = () => {
    JSON.stringify(lotrCitiesArray.splice(4,3).toString())
    return lotrCitiesArray;
}
const kata10 = () => {
    JSON.stringify(lotrCitiesArray.splice(2,1,'Rohan').toString())
    return lotrCitiesArray;
}
const kata11 = () => {
    JSON.stringify(lotrCitiesArray.splice(4,0,'Deadlest Marshes').toString())
    return lotrCitiesArray;
}
const kata12 = () => JSON.stringify(bestThing).slice(1,15)
const kata13 = () => JSON.stringify(bestThing).slice(-13)
const kata14 = () => JSON.stringify(bestThing).slice(23,38)
const kata15 = () => JSON.stringify(bestThing).substring(1,15)
const kata16 = () => JSON.stringify(bestThing).substring(23,38)
const kata17 = () => JSON.stringify(bestThing).indexOf("only")
const kata18 = () => JSON.stringify(bestThing).lastIndexOf()
const kata19 = () => {
    JSON.stringify(gotCitiesCSV.split(","))
         if(gotCitiesCSV.includes("aa","ee")){
          return gotCitiesCSV===true;
         }


}
const kata20 = () => JSON.stringify(lotrCitiesArray)




append('1. Display an array from the cities in gotCitiesCSV', kata1())
append('2. Display an array of words from the sentence in bestThing', kata2())
append('3. Display a string separated by semi-colons instead of commas from gotCitiesCSV', kata3())
append('4. Display a CSV (comma-separated) string from the lotrCitiesArray', kata4())
append('5. Display the first 5 cities in lotrCitiesArray.', kata5())
append('6. Display the last 5 cities in lotrCitiesArray', kata6())
append('7. Display the 3rd to 5th city in lotrCitiesArray', kata7())
append('8. Use splice to remove "Rohan" lotrCitiesArray', kata8())
append('9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray', kata9())
append('10. Using splice, add "Rohan" back to in lotrCitiesArray right after "Gondor"', kata10())
append('11. Using splice, rename "Dead Marshes" to Deadlest Marshes" in lotrCitiesArray', kata11())
append('12. Using slice, display the first 14 charaters from bestThing', kata12())
append('13. Using slice, display the last 12 charaters from bestThing', kata13())
append('14. Using slice, display charaters between the 23rd and 38th position', kata14())
append('15. Repeat #13 using substring instead of slice ', kata15())
append('16. Repeat #14 using substring instead of slice ', kata16())
append('17. Find and display the index of "only" in bestThing ', kata17())
append('18. Find and display the index of the last word in bestThing', kata18())
append('19. Find and display all cities from gotCitiesCSV that use double vowels ("aa","ee",ect.)', kata19())
append('20. Find and display all cities from lotrCitiesArray that end with "or"', kata20())
append('21. Find and display all the words in bestThing that start with a "b"', kata21())
append('22. Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"', kata22())
append('23. Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"', kata23())
append('24. Display the index of "Mirkwood" in lotrCitiesArray', kata24())
append('25. Find and display the first city in lotrCitiesArray that has more than one word', kata25())
append('26. Reverse the order in lotrCitiesArray', kata26())
append('27. Sort lotrCitiesArray alphabetically', kata27())
append('28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)', kata28())
append('29. Using pop, remove the last city from lotrCitiesArray', kata29())
append('30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array', kata30())
append('31. Using shift, remove the first city from lotrCitiesArray', kata31())
append('32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array', kata32())
