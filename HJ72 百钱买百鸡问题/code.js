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
  var str1 = Number(inputArr[0]);
  var sol = [];
  for (let i = 0; i < 100; i++) {
    var solSon = [];
    for (let j = 0; j < 100 - i; j++) {
      var jc = 100 - i - j;
      if (jc % 3 === 0) {
        if (jc / 3 + i * 5 + j * 3 === 100) {
          solSon.push(i, j, jc);
        }
      }
    }
    if (solSon.length > 0) {
      sol.push(solSon);
    }
  }
  for (let i = 0; i < sol.length; i++) {
    console.log(sol[i].join(" "));
  }
}

algorithmExe(["1"]);

process.exit();
