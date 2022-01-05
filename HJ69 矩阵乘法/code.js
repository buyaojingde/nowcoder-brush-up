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
  var mat1Rows = Number(inputArr[0]);
  var mat1cols = Number(inputArr[1]);
  var mat2Rows = Number(inputArr[1]);
  var mat2cols = Number(inputArr[2]);
  var mat1 = [];
  for (let i = 0; i < mat1Rows; i++) {
    var inputRow1 = inputArr[i + 3].split(" ").map((item) => Number(item));
    var col1 = [];
    for (let j = 0; j < mat1cols; j++) {
      col1.push(inputRow1[j]);
    }
    mat1.push(col1);
  }
  var mat2 = [];
  for (let i = 0; i < mat2Rows; i++) {
    var col2 = [];
    var inputRow2 = inputArr[i + 3 + mat1Rows]
      .split(" ")
      .map((item) => Number(item));
    for (let j = 0; j < mat2cols; j++) {
      col2.push(inputRow2[j]);
    }
    mat2.push(col2);
  }
  console.log(mat1);
  console.log(mat2);
  var resultMat3 = matMultiply(mat1, mat2);
  for (let i = 0; i < resultMat3.length; i++) {
    console.log(resultMat3[i].join(" "));
  }
}

function transposition(mat) {
  if (mat.length < 1) return mat;
  var colNums = mat[0].length;
  var transMat = [];
  for (let j = 0; j < colNums; j++) {
    var col = [];
    for (let i = 0; i < mat.length; i++) {
      col.push(mat[i][j]);
    }
    transMat.push(col);
  }
  return transMat;
}

function arrMultiply(arr1, arr2) {
  var sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] * arr2[i];
  }
  return sum;
}
function matMultiply(mat1, mat2) {
  var resultMat = [];
  var transMat2 = transposition(mat2);
  for (let i = 0; i < mat1.length; i++) {
    const element = mat1[i];
    var row = [];
    for (let j = 0; j < transMat2.length; j++) {
      var mul = arrMultiply(element, transMat2[j]);
      row.push(mul);
    }
    resultMat.push(row);
  }
  return resultMat;
}

algorithmExe(["2", "3", "2", "1 2 3", "3 2 1", "1 2", "2 1", "3 3"]);

process.exit();
