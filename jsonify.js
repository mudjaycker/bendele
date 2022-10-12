const fs = require("fs");
const pays = require("./pays")
const countries = require("./countries")

const saveToJson = (path, datas) => {
  fs.writeFileSync(path, JSON.stringify(datas));
};

saveToJson("countriesPaysJson/pays.json", pays)
saveToJson("countriesPaysJson/countries.json", countries)
