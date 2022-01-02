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
  const depth = Number(inputArr[0]);
  var mat = [];
  for (let i = 0; i < 2; i++) {
    mat.push([]);
  }
  mat[0][0] = 1;
  var result = -1;
  for (let i = 1; i < depth; i++) {
    for (let j = 0; j < i + 1; j++) {
      var upIndex = j - 1;
      var upIndexLeft = j - 2;
      var upIndexRight = j === i ? j - 2 : j;
      var leftUp = mat[0][upIndexLeft] ? mat[0][upIndexLeft] : 0;
      var midUp = mat[0][upIndex] ? mat[0][upIndex] : 0;
      var rightUp = mat[0][upIndexRight] ? mat[0][upIndexRight] : 0;
      mat[1][j] = leftUp + midUp + rightUp;
      if (i === depth - 1) {
        if (mat[1][j] % 2 === 0) {
          console.log(j + 1);
          return;
        }
      }
    }
    for (let k = 0; k < i + 1; k++) {
      mat[0][k] = mat[1][k];
    }
  }
  console.log(result);
}

algorithmExe(["4"]);
process.exit();
