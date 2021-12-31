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
  const inStr = inputArr[1].split(" ");
  const delIndex = Number(inputArr[2]);
  if(delIndex === 0) {
      console.log(0);
      return;
  }
  console.log(inStr[inStr.length - delIndex]);
}

process.exit();
