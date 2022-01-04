var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 2;
var inputs = [];
var totalLines = 0;
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    var mat1Rows = Number(inputs[0]);
    var mat2Rows = Number(inputs[1]);
    totalLines = mat1Rows + mat2Rows + 2 + 1;
  }
  if (inputs.length === totalLines) {
    algorithmExe(inputs);
    inputs = [];
    totalLines = 0;
  }
});

function algorithmExe(inputArr) {
  var mat1Rows = Number(inputs[0]);
  var mat1cols = Number(inputs[1]);
  var mat2Rows = Number(inputs[1]);
  var mat1cols = Number(inputs[2]);
}

process.exit();
