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
  var subStr = inputArr[0];
  var subStr1 = inputArr[1];
  var short = subStr.length < subStr1.length ? subStr : subStr1;
  var longStr = subStr.length < subStr1.length ? subStr1 : subStr;
  var max = 0;
  var maxSubStr = null;
  for (let index = 0; index < short.length; index++) {
    for (let j = index; j <= short.length; j++) {
      var subStrTmp = short.substring(index, j);
      if (longStr.includes(subStrTmp)) {
        if (subStrTmp.length > max) {
          max = subStrTmp.length;
          maxSubStr = subStrTmp;
        }
      }
    }
  }
  if (maxSubStr) {
    console.log(maxSubStr);
  }
}

algorithmExe(["abcdefghijklmnop", "abcsafjklmnopqrstuvw"]);
process.exit();
