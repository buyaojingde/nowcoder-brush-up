var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var cubeNum = Number(inputArr[0]);
  var sum = Math.pow(cubeNum, 3);
  var a1 = sum / cubeNum - cubeNum + 1;
  var result = a1.toString();
  for (let i = 1; i < cubeNum; i++) {
    result = result + "+" + (a1 + 2 * i);
  }
  console.log(result);
}

algorithmExe(["6"]);
process.exit();
