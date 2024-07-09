const franc = require('franc');
const langs = require('langs');
const colors = require("colors")
const input = process.argv[2]
const langCode = franc(input);

try{
    const language = langs.where("3",langCode);
    console.log("Our Best Guess is : ",language.name.blue);
}
catch(e){
    console.log("cannot find the language!");
}
