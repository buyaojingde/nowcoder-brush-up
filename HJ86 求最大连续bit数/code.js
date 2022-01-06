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
  var num = Number(inputArr[0]);
  var num2 = num.toString(2);
  var countBy1 = 0;
  var max = 0;
  for (let i = 0; i < num2.length; i++) {
    if (num2[i] === "1") {
      countBy1++;
    } else {
      if (countBy1 > max) {
        max = countBy1;
      }
      countBy1 = 0;
    }
  }
  if (countBy1 > max) {
    max = countBy1;
  }
  console.log(max);
}
algorithmExe(["3"]);
algorithmExe(["200"]);
process.exit();
