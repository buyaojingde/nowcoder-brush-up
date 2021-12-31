var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 9;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var mat = [];
  var blank = [];
  for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index].split(" ").map((item) => Number(item));
    var elementArr = [];
    for (let j = 0; j < element.length; j++) {
      elementArr.push(element[j]);
      if (element[j] === 0) {
        blank.push([i, j]);
      }
    }
    mat.push(elementArr);
  }
  function findRow(rowIndex) {
    return mat[rowIndex];
  }
  function findCol(clmnIndex) {
    var columnArr = [];
    for (let i = 0; i < mat.length; i++) {
      columnArr.push(mat[i][clmnIndex]);
    }
    return columnArr;
  }

  function getSection(a) {
    var start = Math.floor(a / 3) * 3;
    var end = Math.ceil((a + 1) / 3) * 3 - 1;
    return [start, end];
  }

  function findMinBox(row, column) {
    var startAndRowRow = getSection(row);
    var startAndRowCol = getSection(column);
    var minBoxMat = [];
    for (let i = startAndRowRow[0]; i <= startAndRowRow[1]; i++) {
      for (let j = startAndRowCol[0]; j <= startAndRowCol[1]; j++) {
        minBoxMat.push(mat[i][j]);
      }
    }
    return minBoxMat;
  }

  function findSol(arr, sols1) {
    var sols = [];
    for (let i = 1; i <= 9; i++) {
      if (!arr.includes(i)) {
        if (!sols1.includes(i)) {
          sols.push(i);
        }
      }
    }
    return sols;
  }
  function solution(row, column) {
    var rows = findRow(row);
    var columns = findCol(column);
    var minMat = findMinBox(row, column);
    var sols1 = findSol(rows, []);
    var sols2 = findSol(columns, sols1);
    var sols3 = findSol(minMat, sols2);
  }

  function checkRow(i, j) {
    for (let k = 0; k < 9; k++) {
      if (k != j && mat[i][k] === mat[i][j]) {
        return false;
      }
    }
    return true;
  }

  function checkColumn(i, j) {
    // 同列
    for (let k = 0; k < 9; k++) {
      if (k != i && mat[k][j] == mat[i][j]) {
        return false;
      }
    }
    return true;
  }

  function checkBox(i, j, value) {
    var minBox = findMinBox(i, j);
    for (let k = 0; k < 9; k++) {
      if (minBox[k] == value) {
        return false;
      }
    }
    return true;
  }

  function checkMat(i, j, value) {
    return checkRow(i, j) && checkColumn(i, j) && checkBox(i, j, value);
  }

  function recursiveSol(solValue, currentSol) {
    if (currentSol.child) {
      for (let i = 0; i < currentSol.sols.length; i++) {
        mat[currentSol.row][currentSol.column] = solValue;
        if (!checkMat(currentSol.row, currentSol.column, solValue)) {
          continue;
        }
        if (recursiveSol(currentSol.sols[i], currentSol.child)) {
          return true;
        }
      }
    } else {
      if (checkSolved(currentSol, solValue)) {
        return true;
      } else {
        return false;
      }
    }
  }

  function checkSolved(nodeSolved, nodeValue) {
    mat[nodeSolved.row][nodeSolved.column] = nodeValue;
    if (checkMat()) {
      return true;
    }
    return false;
  }
  var unSolveds = [];
  for (let i = 0; i < blank.length; i++) {
    var row = blank[i][0];
    var column = blank[i][1];

    var sols = solution(row, column);
    if (sols.length === 1) {
      mat[i][j] = sols[0];
    } else {
      var unSolved = { row: i, column: j, sols: sols, child: null };
      if (unSolveds.length > 0) {
        var lastSolved = unSolveds[unSolveds.length - 1];
        lastSolved.child = unSolved;
      }
    }
  }
}



algorithmExe([
  "0 9 2 4 8 1 7 6 3",
  "4 1 3 7 6 2 9 8 5",
  "8 6 7 3 5 9 4 1 2",
  "6 2 4 1 9 5 3 7 8",
  "7 5 9 8 4 3 1 2 6",
  "1 3 8 6 2 7 5 9 4",
  "2 7 1 5 3 8 6 4 9",
  "3 8 6 9 1 4 2 5 7",
  "0 4 5 2 7 6 8 3 1",
]);
process.exit();
