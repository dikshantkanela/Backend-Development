//index.js file contains the information for the entire directory that has to be exported!
const car1 = require("./car1")
const car2 = require("./car2")
const car3 = require("./car3")
const allCars = [car1,car2,car3];
// console.log(allCars)
module.exports = allCars;