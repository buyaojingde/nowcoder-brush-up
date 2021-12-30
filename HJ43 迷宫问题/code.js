var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  var matsRows;
  if (inputs.length === inputLines) {
    var matsRows = Number(inputs[0].split(" ")[0]) + 1;
  }
  if (matsRows === inputs.length) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var rows = Number(inputs[0].split(" ")[0]);
  var columns = Number(inputs[0].split(" ")[1]);
  var mat = [];
  for (let i = 0; i < rows; i++) {
    var rowTmp = [];
    var inputRow = inputArr[i + 1].split(" ");
    rowTmp.push(...inputRow);
    mat.push(rowTmp);
  }
  function isEnd(rowNum, columnNum) {
    return rowNum === rows - 1 && columnNum === columns - 1;
  }

  var path = [];
  var currentI = 0;
  var currentJ = 0;
  while (isEnd(currentI, currentJ)) {}
}

process.exit();
