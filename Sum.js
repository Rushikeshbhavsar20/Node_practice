console.log("Hey this is Sum.js file and this statment is printingh from the Sum.js file")

var  x = "om"
function sum(a,b){
  const sum = a + b;
  return sum;
}

//exporting one thing
     //module.exports = sum;

//exporting multiple things
module.exports = {
    x : x,
    sum : sum,
}