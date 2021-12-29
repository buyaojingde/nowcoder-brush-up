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
  var high = Number(inputArr[0]);
  var powRes = Math.pow(0.5, 5);
  var res = high * 4 * (1 - powRes) - high;
  console.log(res);
  console.log(high * powRes);
}
algorithmExe(["9"]);
process.exit();
