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
  var [m, n] = inputArr[0].split(" ").map((item) => Number(item));
  var x = 0,
    y = 0;
  var total = [];
  var path = [[0, 0]];
  go(x, y, m, n, path, total);
  console.log(total.length);
}

function go(x, y, endX, endY, path, totalPath) {
  if (x === endX && y === endY) {
    totalPath.push(path);
    return;
  }
  if (x < endX) {
    var newPath = [...path];
    newPath.push([x + 1, y]);
    go(x + 1, y, endX, endY, newPath, totalPath);
  }

  if (y < endY) {
    var newPath1 = [...path];
    newPath1.push([x, y + 1]);
    go(x, y + 1, endX, endY, newPath1, totalPath);
  }
}
algorithmExe(["2 2"]);
process.exit();
