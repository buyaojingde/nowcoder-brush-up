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
  var num = Number(inputArr[0]);
  for (let i = 1; i <= num; i++) {
    var outNums = [];
    for (let j = 1; j <= num - i + 1; j++) {
      var ij1 = i + j - 1;
      var dcqh = (ij1 * ij1 + ij1) / 2 - i + 1;
      outNums.push(dcqh);
    }
    var outStr = outNums.join(" ");
    console.log(outStr);
  }
}
algorithmExe(["4"]);
process.exit();
