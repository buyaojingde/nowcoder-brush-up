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
  var str = inputArr[0];
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) count++;
  }
  console.log(count);
}
process.exit();
