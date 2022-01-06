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
  var arr = inputArr[1].split(" ").map((item) => Number(item));
}

algorithmExe(["4", "1 5 -5 1"]);
algorithmExe(["3", "3 5 8"]);
process.exit();
