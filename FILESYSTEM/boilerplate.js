const fs = require('fs');
const currentDir = process.cwd();
console.log(currentDir);   // filesystem is the working directory
try{
    fs.mkdirSync("GAAD");
    fs.writeFileSync(`${currentDir}/GAAD/index.html`,"");
}
catch(e){
    console.log("ERRRRRORRRR")
    console.log(e)
}
