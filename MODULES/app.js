const math= require('./export'); //requiring a node module or a file
console.log(math.add(6,9));  //15
const otherDirectory = require('./Require_Complete_Directory')
console.log("Content of other directory : ", otherDirectory)
// const {add,PI} = require('./export'); //requiring a node module or a file
// console.log(add(6,9));  //15
