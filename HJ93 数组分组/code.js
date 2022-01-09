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
  var length = Number(inputArr[0]);
  var arr = inputArr[1]
    .split(" ")
    .map((item) => Number(item))
    .slice(0, length);
  var sum3 = 0;
  var sum5 = 0;
  var sumOther = 0;
  var otherArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element !== 0 && element % 3 === 0) {
      sum3 += element;
      continue;
    }
    if (element !== 0 && element % 5 === 0) {
      sum5 += element;
      continue;
    }
    sumOther += element;
    otherArr.push(element);
  }
  var target = sumOther + sum3 - sum5;
  if (target % 2 !== 0) {
    console.log(false);
    return;
  } else {
    target = target / 2;
    console.log(findTarget(otherArr, target, sumOther));
  }
}

function findTarget(arr, target, sumArr) {
  if (target === 0) {
    return true;
  }
  var mat = [];
  var row0 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target || sumArr - arr[i] === target) return true;
    row0.push(arr[i]);
  }
  mat.push(row0);
  for (let i = 1; i < arr.length; i++) {
    var rowNex = [];
    mat.push(rowNex);
  }
  for (let i = 1; i < arr.length / 2 + 1; i++) {
    mat[i] = [];
    for (let j = 0; j < arr.length; j++) {
      for (let k = j + i; k < mat[0].length; k++) {
        var rowCurrent = mat[i - 1][j] + mat[0][k];
        if (rowCurrent === target || sumArr - rowCurrent === target)
          return true;
        mat[i].push(rowCurrent);
      }
    }
  }
  return false;
}

algorithmExe(["13", "3 0 1 3 -2 -1 4 -2 -1 5 0 -2 -2   "]);
// algorithmExe(["4", "1 5 -5 1"]);
// algorithmExe(["3", "3 5 8"]);
process.exit();
