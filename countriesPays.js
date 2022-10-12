const countries = require("./countries")
const pays = require("./pays")

let translateCountriesName = {
    french: () => pays,
    english: () => countries
}
// exemple of usation
// console.log(translateCountriesName.french()); 
module.exports = translateCountriesName