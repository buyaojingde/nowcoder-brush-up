var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 1;
var inputs = [];
var totalLines = 0;
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    var mat1Rows = Number(inputs[0]);
    totalLines = mat1Rows + 2;
  }
  if (inputs.length === totalLines) {
    algorithmExe(inputs);
    inputs = [];
    totalLines = 0;
  }
});

function calcNums(mat1, mat2) {
  var sum = mat1.row * mat2.col * mat1.col + mat1.sum + mat2.sum;
  return { row: mat1.row, col: mat2.col, sum: sum };
}

function extracBra(arr) {
  if (!arr.includes("(")) {
    var start = arr[0];
    for (let i = 1; i < arr.length; i++) {
      start = calcNums(start, arr[i]);
    }
    return start;
  } else {
    var start = -1;
    var end = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
        start = i;
      } else if (arr[i] === ")") {
        end = i;
      }
      if (start !== -1 && end !== -1) {
        var calcArr = extracBra(arr.slice(start + 1, end));
        arr.splice(start, end - start + 1, calcArr);
        break;
      }
    }
    return extracBra(arr);
  }
}

function algorithmExe(inputArr) {
  var matNums = Number(inputArr[0]);
  var matMulType = inputArr[matNums + 1].split("");
  var matArr = [];
  var index = 1;
  for (let i = 0; i < matMulType.length; i++) {
    if (matMulType[i] === "(" || matMulType[i] === ")") {
      matArr.push(matMulType[i]);
    } else {
      var matData = inputArr[index].split(" ");
      matArr.push({ row: Number(matData[0]), col: Number(matData[1]), sum: 0 });
      index++;
    }
  }
  var calcSum = extracBra(matArr).sum;
  console.log(calcSum);
}
algorithmExe(["3", "50 10", "10 20", "20 5", "(A(BC))"]);

process.exit();
