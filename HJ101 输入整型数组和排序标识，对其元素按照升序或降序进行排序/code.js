var readLine = require("readline");
var rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputs = [];
rl.on("line", function (input) {
  inputs.push(input);
  if (inputs.length === 3) {
    algorithmExe();
    inputs = [];
  }
});

function algorithmExe() {
  const nums = inputs[1].split(" ").map((item) => Number(item));
  const upOrDown = Number(inputs[2]);
  nums.sort((a, b) => {
    return a - b;
  });
  if (upOrDown === 1) nums.reverse();
  console.log(nums.join(" "));
}
inputs = ["8", "1 2 4 9 3 55 64 25", "0"];
algorithmExe();
process.exit();
