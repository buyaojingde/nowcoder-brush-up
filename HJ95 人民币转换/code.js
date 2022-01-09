/*
 *@description: NP问题，01背包，动态规划
 *@author: lianbo
 *@date: 2022-01-09 15:52:04
 */
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
  var rmb = Number(inputArr[0]);
}

algorithmExe(["151121.15"]);
process.exit();
