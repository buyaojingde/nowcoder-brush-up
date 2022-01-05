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
  var str1 = inputArr[0];
  var strLong = inputArr[1];
  for (let i = 0; i < str1.length; i++) {
    if(!strLong.includes(str1[i])){
      console.log(false);
      return;
    }
  }
  console.log(true);
}

algorithmExe(["apgmlivuembu", "tyjmrcuneguxmsqwjslqvfmw"]);
process.exit();
