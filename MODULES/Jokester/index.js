const jokes = require("give-me-a-joke"); //a node package
const colors = require("colors")
// console.dir(jokes);
jokes.getRandomDadJoke(function(joke){
    console.log(joke.rainbow);
})
console.log("My name is Dikshant Kanela".blue);