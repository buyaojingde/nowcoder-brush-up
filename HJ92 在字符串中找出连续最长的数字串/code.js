var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function checkNum(st) {
  if (st.charCodeAt() >= 48 && st.charCodeAt() <= 57) {
    return true;
  }
  return false;
}

function algorithmExe(inputArr) {
  var str = inputArr[0];
  var numStrSubTmp = [];
  var numStr = [];
  var max = -1;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (checkNum(element)) {
      numStrSubTmp.push(element);
    } else {
      if (numStrSubTmp.length > max) {
        max = numStrSubTmp.length;
        numStr = [[...numStrSubTmp]];
      } else if (numStrSubTmp.length === max) {
        numStr.push([...numStrSubTmp]);
      }
      numStrSubTmp = [];
    }
  }
  if (numStrSubTmp.length > max) {
    max = numStrSubTmp.length;
    numStr = [[...numStrSubTmp]];
    numStrSubTmp = [];
  } else if (numStrSubTmp.length === max) {
    numStr.push([...numStrSubTmp]);
  }
  if(numStr.length === 1){
    console.log(numStr[0].join("") + "," + numStr[0].length);
  }
  if(numStr.length > 1){
    var length = numStr[0].length
    console.log(numStr.flat().join("") + "," + length);
  }
}

algorithmExe(["abcd12345ed125ss123058789"]);
algorithmExe(["a8a72a6a5yy98y65ee1r2"]);
process.exit();
