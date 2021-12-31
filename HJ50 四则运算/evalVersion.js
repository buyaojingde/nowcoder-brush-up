var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var inputLines = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  const inStr = inputArr[0]
  var evalStr = inStr.replace("{","(");
  evalStr = evalStr.replace("}",")");
  
  console.log(eval(evalStr));
}
var testStr = "3+2*{1+2*[-4/(8-6)+7]}";
var testStr2 = "5-3+9*6*(6-10-2)";
// algorithmExe(["5 2 3 2 4 3 5 2 1 4 3"]);
algorithmExe([testStr2]);
// console.log(extractCalcStr(testStr.split(""), "{", "}"));
process.exit();
