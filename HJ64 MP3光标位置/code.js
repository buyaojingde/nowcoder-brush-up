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
  var dnaStr = inputArr[0].split("");
  var n = Number(inputArr[1]);
  var firstCG = 0;
  for (let i = 0; i < n; i++) {
    if (dnaStr[i] === "C" || dnaStr[i] === "G") firstCG++;
  }
  var start = 0;
  var cgRatio = [firstCG];
  for (let i = 1; i < dnaStr.length - n; i++) {
    var current = cgRatio[i - 1];
    if (dnaStr[i - 1] === "C" || dnaStr[i - 1] === "G") {
      current--;
    }
    if (dnaStr[n - 1 + i] === "C" || dnaStr[n - 1 + i] === "G") {
      current++;
    }
    cgRatio[i] = current;
  }
  var max = -1;
  for (let i = 0; i < cgRatio.length; i++) {
    if (cgRatio[i] > max) {
      max = cgRatio[i];
      bigIndex = i;
    }
  }
  console.log(dnaStr.slice(bigIndex, bigIndex + n).join(""));
}

var testStr = "AACTGTGCACGACCTGA";

// console.log(testStr.slice(6,11));
algorithmExe(["AACTGTGCACGACCTGA", "5"]);
process.exit();
