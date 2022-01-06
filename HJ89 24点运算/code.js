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

function puke2Num(str) {
  var num = Number(str);
  if (!isNaN(Number(str))) {
    return num;
  }
  if (str === "J") return 11;
  if (str === "Q") return 12;
  if (str === "K") return 13;
  if (str === "A") return 1;
}
function algorithmExe(inputArr) {
  var pukeNums = inputArr[0].split(" ").map((item) => puke2Num(item));
}
algorithmExe(["K Q 6 K"]);
process.exit();
