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

function findTarget(array, target, arraySum) {
  if (target === 0) return true;
  var mat = [];
  var row0 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target || arraySum - array[i] === target) return true;
    row0.push([i]);
  }
  mat.push(row0);
  for (let i = 1; i < array.length; i++) {
    var rowNex = [];
    mat.push(rowNex);
  }
  for (let i = 1; i < array.length / 2 + 1; i++) {
    mat[i] = [];
    for (let j = 0; j < mat[i - 1].length; j++) {
      var lastIndex = mat[i - 1][j][mat[i - 1][j].length - 1];
      for (let k = lastIndex + 1; k < mat[0].length; k++) {
        var lastArr = [...mat[i - 1][j]];
        var firstArr = mat[0][k];
        lastArr.push(...firstArr);
        var sum = sumArr(lastArr, array);
        if (sum === target || arraySum - sum === target) {
          return true;
        }
        mat[i].push(lastArr);
      }
    }
  }
  return false;
}

function sumArr(arrIndeces, array) {
  var sum = 0;
  for (let i = 0; i < arrIndeces.length; i++) {
    sum += array[arrIndeces[i]];
  }
  return sum;
}

function comArr(array) {
  var mat = [];
  var row0 = [];
  for (let i = 0; i < array.length; i++) {
    row0.push([i]);
  }
  mat.push(row0);
  for (let i = 1; i < array.length; i++) {
    var rowNex = [];
    mat.push(rowNex);
  }
  for (let i = 1; i < array.length; i++) {
    mat[i] = [];
    for (let j = 0; j < mat[i - 1].length; j++) {
      var lastIndex = mat[i - 1][j][mat[i - 1][j].length - 1];
      for (let k = lastIndex + 1; k < mat[0].length; k++) {
        var lastArr = [...mat[i - 1][j]];
        var firstArr = mat[0][k];
        lastArr.push(...firstArr);

        mat[i].push(lastArr);
      }
    }
  }
  console.log(mat);
}

comArr([1, 2, 3, 4, 5, 6]);
// algorithmExe(["13", "3 0 1 3 -2 -1 4 -2 -1 5 0 -2 -2   "]);
// algorithmExe(["4", "1 5 -5 1"]);
// algorithmExe(["3", "3 5 8"]);
process.exit();
