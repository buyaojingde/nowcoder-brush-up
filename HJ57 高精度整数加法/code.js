var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var inputLines = 2;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  const num0 = inputArr[0].split("").reverse();
  const num1 = inputArr[1].split("").reverse();
  var maxLength = num0.length > num1.length ? num0.length : num1.length;
  var last = 0;
  var sum = [];
  for (let i = 0; i <= maxLength; i++) {
    var n0 = Number(num0[i]);
    var n1 = Number(num1[i]);
    if (isNaN(n0)) n0 = 0;
    if (isNaN(n1)) n1 = 0;
    var result = n0 + n1 + last;
    if (result >= 10) {
      last = 1;
      sum.push(result % 10);
    } else {
      last = 0;
      sum.push(result);
    }
  }
  if(sum[maxLength] === 0) sum.pop();
  console.log(sum.reverse().join(""));
}

algorithmExe(["2876543210", "1234567890"]);
process.exit();
