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

function mnFunc(apple, panel) {
  if (apple < 0 || panel < 0) {
    return 0;
  }
  if (apple === 1 || panel === 1) {
    return 1;
  }
  return mnFunc(apple, panel - 1) + mnFunc(apple - panel, panel);
}

function algorithmExe(inputArr) {
  var mn = inputArr[0].split(" ").map((item) => Number(item));
  var m = mn[0];
  var n = mn[1];
  var result = mnFunc(m, n);
  console.log(result);
}

algorithmExe(["7 3"]);
process.exit();
