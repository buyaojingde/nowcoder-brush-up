const { checkPrime } = require("crypto");
var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 3;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var mask = inputArr[0].split(".").map((item) => Number(item));
  var ip1 = inputArr[1].split(".").map((item) => Number(item));
  var ip2 = inputArr[2].split(".").map((item) => Number(item));
  if (!checkIP(mask) || !checkIP(ip1) || !checkIP(ip2)) {
    console.log(1);
    return;
  }
}

function checkIP(item) {
  return item >= 0 && item <= 255;
}
algorithmExe(["9"]);
process.exit();
