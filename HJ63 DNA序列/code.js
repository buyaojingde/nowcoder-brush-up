var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 2;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var dnaStr = inputArr[0].split("");
  var n = Number(inputArr[1]);
  
  console.log(count);
}

algorithmExe(["AACTGTGCACGACCTGA", "5"]);
process.exit();
