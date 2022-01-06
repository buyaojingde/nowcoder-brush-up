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
  var str = inputArr[0];
  var max = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    for (let j = str.length - 1; j > i; j--) {
      const element1 = str[j];
      var subMax = 0;
      if (element === element1) {
        for (let k = 0; k < (j - i) / 2; k++) {
          if (str[i + k] === str[j - k] && i + k !== j - k) {
            subMax++;
          } else {
            sumMax = 0;
            break;
          }
        }
        var sum = subMax * 2;
        if ((j - i + 1) % 2 !== 0) sum++;
        if (sum > max) {
          max = sum;
        }
      }
    }
  }
  console.log(max);
}
algorithmExe(["cdabbacc"]);
process.exit();
