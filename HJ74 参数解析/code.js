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
  var start = -1;
  var startBlank = 0;
  var arr = [];
  var tmp = [];
  for (let i = 0; i < inputStr.length; i++) {
    if (inputArr[i] === " ") {
      if (tmp.length > 0 && tmp[0] !== '"') {
        arr.push(tmp.join(""));
        tmp = [];
      }
    } else if (inputArr[i] === '"') {
      if (tmp[0] === '"') {
        arr.push(tmp.slice(1).join(""));
        tmp = [];
      } else {
        tmp.push(inputArr[i]);
      }
    } else {
      tmp.push(inputArr[i]);
    }
  }
  arr.push(tmp.join(""));
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
algorithmExe(['xcopy /s "C:\\program files" "d:"']);
process.exit();
