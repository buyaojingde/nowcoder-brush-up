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
  var month = Number(inputArr[0]);
  var tuziNum = [1,1];
  for (let i = 2; i < month; i++) {
    tuziNum[i] = tuziNum[i - 1] + tuziNum[i - 2];
  }
  console.log(tuziNum[month - 1]);
}
algorithmExe(["9"]);
process.exit();
