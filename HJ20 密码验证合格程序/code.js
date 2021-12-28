var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var k = 1;
var inputs = [];

rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === k) {
    deal(inputs);
    inputs = [];
  }
});

function deal(inputArr) {
  var inStr = inputArr[0];
  var strArr = inStr.split("");
  if (strArr.length <= 8) {
    console.log("NG");
    return;
  }
  var strNum = [0, 0, 0, 0];
  for (var i = 0; i < strArr.length; i++) {
    var cCode = strArr[i].charCodeAt();
    if (cCode >= 48 && cCode <= 57 && strNum[0] !== 1) {
      strNum[0] = 1;
      continue;
    }
    if (cCode >= 97 && cCode <= 122 && strNum[1] !== 1) {
      strNum[1] = 1;
      continue;
    }
    if (cCode >= 65 && cCode <= 90 && strNum[2] !== 1) {
      strNum[2] = 1;
      continue;
    }
    if (strNum[3] !== 1) {
      strNum[3] = 1;
    }
  }
  var strCount = 0;
  for (var i = 0; i < 4; i++) {
    strCount += strNum[i];
  }
  if (strCount >= 3) {
    // 子串重复校验
    for (var i = 0; i < strArr.length - 6; i++) {
      var zi1 = inStr.slice(i, i + 3);
      for (var j = i + 3; j < strArr.length - 3; j++) {
        var zi2 = inStr.slice(j, j + 3);
        if (zi1 === zi2) {
          console.log("NG");
          return;
        }
      }
    }
    console.log("OK");
  } else {
    console.log("NG");
  }
}
