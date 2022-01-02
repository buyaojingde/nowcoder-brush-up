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
  var perfect = 0;
  for (let i = 10000; i <= n; i++) {
    var sum = 1;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        sum = sum + j;
        if (sum > i) {
          break;
        }
      }
    }
    if (sum === i) {
      perfect++;
    }
  }
  console.log(perfect);
}

algorithmExe(["500000"]);
process.exit();
