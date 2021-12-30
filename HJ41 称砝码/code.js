var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 3;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var fmCount = inputArr[0].split(" ").map((item) => Number(item))[0];
  var fmTypes = inputArr[1].split(" ").map((item) => Number(item));
  var fmTypeNums = inputArr[2].split(" ").map((item) => Number(item));
  var newArrs = [];
  for (let i = 0; i < fmCount; i++) {
    fmOneCount = fmTypeNums[i];
    for (let j = 0; j < fmOneCount; j++) {
      newArrs.push(fmTypes[i]);
    }
  }
  var outArr = [0];
  for (let i = 0; i < newArrs.length; i++) {
    var newFmNum = newArrs[i];
    var outArrLength = outArr.length;
    for (let j = 0; j < outArrLength; j++) {
      var newFm = outArr[j] + newFmNum;
      quchongAdd(outArr, newFm);
    }
  }
  console.log(outArr.length);
}

function quchongAdd(arrAdd, item) {
  // 去重
  if (!arrAdd.includes(item)) {
    arrAdd.push(item);
  }
}

// algorithmExe(["2", "1 2", "2 1"]);
// algorithmExe([
//   "10",
//   "4 185 35 191 26 148 149 3 172 147",
//   "3 5 2 1 5 5 3 1 4 2",
// ]);
algorithmExe([
  "10",
  "2000 1999 1998 1997 1996 1995 1994 1993 1992 1991 ",
  "10 10 10 10 10 10 10 10 10 10 ",
]);

process.exit();
