var readLine = require("readline");
var rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputs = [];
rl.on("line", function (input) {
  inputs.push(input);
  if (inputs.length === 1) {
    algorithmExe();
    inputs = [];
  }
});

function algorithmExe() {
  const num = Number(inputs[0]);
  let sum = ((2 + (num - 1) * 3 + 2) * num) / 2;

  console.log(sum);
}
