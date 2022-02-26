var readLine = require("readline");
var rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var inputs = [];
var lienNum = 2;
rl.on("line", function (input) {
  inputs.push(input);
  if (inputs.length === lienNum) {
    algorithmExe();
    inputs = [];
  }
});

function algorithmExe() {
  var array = inputs[1].split(" ").map((item) => Number(item));
  var negativeCount =0;
  var positive =0;
  var positiveSum =0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element<0){
      negativeCount++;
    }
    if(element>0){
      positive++;
      positiveSum += element;
    }
  }
  console.log(negativeCount+" "+(positiveSum/positive).toFixed(1));
}
