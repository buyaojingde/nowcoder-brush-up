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
  var fengzi = inputArr[0].split("/").map((item) => Number(item));
  var aiji = [];
  for (let i = 0; i < fengzi[0]; i++) {
    var str = 1 +"/" + fengzi[1];
    aiji.push(str);
  }
  console.log(aiji.join("+"));
}

algorithmExe(["8/11"]);
process.exit();
