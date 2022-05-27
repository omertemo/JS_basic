// const nineteen = 19;

const prompt = require("prompt-sync")({ sigint: true });
const givenNumber = prompt("Enter a number: ");

var result = 19 - parseInt(givenNumber)

if(result < 0){
  console.log(result*3);
}else{
  console.log(result);
}

