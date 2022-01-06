var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 5;
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
  if (m > 0 && n > 0) {
    console.log(0);
  } else {
    console.log(-1);
  }
  var switchXY = inputArr[1].split(" ").map((item) => Number(item));
  function func1() {
    if (switchXY[0] < 0 || switchXY[0] >= m) {
      console.log(-1);
      return;
    }
    if (switchXY[2] < 0 || switchXY[2] >= m) {
      console.log(-1);
      return;
    }
    if (switchXY[1] < 0 || switchXY[1] >= n) {
      console.log(-1);
      return;
    }
    if (switchXY[3] < 0 || switchXY[3] >= n) {
      console.log(-1);
      return;
    }
    console.log(0);
  }
  func1();
  var rowInsert = Number(inputArr[2]);
  if (rowInsert < 0 || rowInsert >= m || m === 9) {
    console.log(-1);
  } else {
    console.log(0);
  }
  var colInsert = Number(inputArr[3]);
  if (colInsert < 0 || colInsert >= n || n === 9) {
    console.log(-1);
  } else {
    console.log(0);
  }
  var searchMN = inputArr[4].split(" ").map((item) => Number(item));

  if (searchMN[0] < 0 || searchMN[0] >= m) {
    console.log(-1);
    return;
  }
  if (searchMN[1] < 0 || searchMN[1] >= n) {
    console.log(-1);
    return;
  }
  console.log(0);
}
algorithmExe(["4 7", "4 2 3 2", "3", "3", "4 7"]);
process.exit();
