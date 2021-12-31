var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 2;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var unSpliceStr = inputArr[0];
  var spliceIndex = Number(inputArr[1]);
  console.log(unSpliceStr.substring(0, spliceIndex));
}
algorithmExe(["ffIKEHauv", "1"]);
process.exit();
