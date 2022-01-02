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
  const n = Number(inputArr[0]);
  if (n == 1 || n == 2) {
    console.log(-1);
  } else if (n % 4 == 3 || n % 4 == 1) {
    console.log(2);
  } else if (n % 4 == 0) {
    console.log(3);
  } else {
    console.log(4);
  }
}

algorithmExe(["4"]);
process.exit();
