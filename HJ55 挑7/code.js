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
  var count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 7 === 0) {
      count++;
    } else if (i.toString().includes("7")) {
      count++;
    }
  }
  console.log(count);
}

algorithmExe(["30000"]);
process.exit();
