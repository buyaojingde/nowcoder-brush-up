var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 1;
var inputs = [];
var nameCount = 0;
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    nameCount = Number(inputs[0]);
  }
  if (inputs.length === nameCount + 1) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  for (let i = 1; i < inputArr.length; i++) {
    const alphaItem = inputArr[i].toUpperCase().split("");
    var calcLetters = [];
    var letterNums = [];
    for (let j = 0; j < alphaItem.length; j++) {
      const letter = alphaItem[j];
      if (calcLetters.includes(letter)) continue;
      calcLetters.push(letter);
      var letterCount = 1;
      for (let k = j + 1; k < alphaItem.length; k++) {
        if (letter === alphaItem[k]) {
          letterCount++;
        }
      }
      letterNums.push(letterCount);
    }
    letterNums.sort((a, b) => {
      return b - a;
    });
    var max = 26;
    var totalMax = 0;
    for (let m = 0; m < letterNums.length; m++) {
      totalMax += max * letterNums[m];
      max--;
    }
    console.log(totalMax);
  }
}
algorithmExe(["2", "zhangsan", "lisi"]);
process.exit();
