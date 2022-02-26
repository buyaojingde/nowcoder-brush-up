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
function numWei(num) {
  if (num < 10) return 1;
  if (num < 100) return 2;
  if (num < 1000) return 3;
  if (num < 10000) return 4;
  if (num < 100000) return 5;
}
function algorithmExe() {
  const num = Number(inputs[0]);
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    const numSqrt = i * (i - 1);
    if (numSqrt % (Math.pow(10,numWei(i))) === 0) {
      sum++;
    }
  }
  console.log(sum);
}
inputs = ["2000"];
algorithmExe();
process.exit();
