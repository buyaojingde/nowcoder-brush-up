var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 4;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var intArr1 = inputArr[1].split(" ").map((item) => Number(item));
  var intArr2 = inputArr[3].split(" ").map((item) => Number(item));
  intArr1.push(...intArr2);
  intArr1.sort((a, b) => {
    return a - b;
  });
  var disticArr = [];
  for (let i = 0; i < intArr1.length; i++) {
    if (!disticArr.includes(intArr1[i])) {
      disticArr.push(intArr1[i]);
    }
  }
  console.log(disticArr.join(""));
}

algorithmExe(["3", "1 2 5", "4", "-1 0 3 2"]);
process.exit();
