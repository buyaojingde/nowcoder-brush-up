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

function algorithmExe(inputArr) {
  var inputStr = inputArr[0];
  var arr = [];
  var tmp = [];
  for (let i = 0; i < inputStr.length; i++) {
    if (tmp.length > 0) {
      if (tmp[0] === '"') {
        if (inputStr[i] !== '"') {
          tmp.push(inputStr[i]);
        } else {
          arr.push(tmp.slice(1).join(""));
          tmp = [];
        }
      } else {
        if (inputStr[i] === " ") {
          arr.push(tmp.join(""));
          tmp = [];
        } else {
          tmp.push(inputStr[i]);
        }
      }
    } else {
      if (inputStr[i] !== " ") {
        tmp.push(inputStr[i]);
      }
    }
  }
  if (tmp.length > 0) arr.push(tmp.join(""));
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
algorithmExe(['xcopy /s "C:\\program files" "d:"']);
// algorithmExe(['u "a e i o u" r']);
process.exit();
