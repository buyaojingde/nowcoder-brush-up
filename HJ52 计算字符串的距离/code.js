var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var inputLines = 2;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  const inStr1 = inputArr[0].split("");
  const inStr2 = inputArr[1].split("");
  //子串相同的个数
  var mat = [];
  for (let j = 0; j <= inStr1.length; j++) {
    var tmp = [];
    mat.push(tmp);
  }
  for (let i = 0; i <= inStr1.length; i++) {
    mat[i][0] = i;
  }
  for (let j = 0; j <= inStr2.length; j++) {
    mat[0][j] = j;
  }

  for (let i = 1; i <= inStr1.length; i++) {
    for (let j = 1; j <= inStr2.length; j++) {
      if (inStr1[i - 1] === inStr2[j - 1]) {
        mat[i][j] = mat[i - 1][j - 1];
      } else {
        mat[i][j] =
          Math.min(mat[i - 1][j], mat[i][j - 1], mat[i - 1][j - 1]) + 1;
      }
    }
  }
  var res = mat[inStr1.length][inStr2.length];
  console.log(res);
}

algorithmExe(["abcdefg", "abcdef"]);
process.exit();
