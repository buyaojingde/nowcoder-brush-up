var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var strCodeArr = inputArr[0].split("").map((item) => item.charCodeAt());
  var alphaCount = 0;
  var blankCount = 0;
  var numberCount = 0;
  for (let i = 0; i < strCodeArr.length; i++) {
    const element = strCodeArr[i];
    if (checkAlph(element)) {
      alphaCount++;
      continue;
    }
    if (checkBlank(element)) {
      blankCount++;
      continue;
    }
    if (checkNumber(element)) {
      numberCount++;
      continue;
    }
  }
  console.log(alphaCount);
  console.log(blankCount);
  console.log(numberCount);
  console.log(strCodeArr.length - alphaCount - blankCount - numberCount);
}

function checkAlph(charCode) {
  return checkSection(charCode, 97, 122) || checkSection(charCode, 65, 90);
}

function checkBlank(charCode) {
  return checkSection(charCode, 32, 32);
}

function checkNumber(charCode) {
  return checkSection(charCode, 48, 57);
}

function checkSection(code, start, end) {
  if (code >= start && code <= end) return true;
  return false;
}

algorithmExe(["1qazxsw23 edcvfr45tgbn hy67uj m,ki89ol.\\/;p0-=\\]["]);

process.exit();
