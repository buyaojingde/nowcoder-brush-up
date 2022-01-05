var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 2;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var str1 = inputArr[0];
  var str2 = inputArr[1];
  var max = 0;
  for (let i = 0; i < str1.length; i++) {
    const str1sub = str1[i];
    for (let j = 0; j < str2.length; j++) {
      const str2sub = str2[j];
      if (str2sub === str1sub) {
        var subStrLength = 0;
        for (let k = j; k < str2.length; k++) {
          if (str2[k] === str1[i + k - j]) {
            subStrLength++;
          } else {
            break;
          }
        }
        if (subStrLength > max) {
          max = subStrLength;
        }
      } else {
      }
    }
  }
  console.log(max);
}

algorithmExe(["asdfas", "werasdfaswer"]);
process.exit();
