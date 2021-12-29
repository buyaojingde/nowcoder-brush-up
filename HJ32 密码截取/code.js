var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputCount = 1;
var inputs = [];

rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputCount) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputs) {
  var ens = inputs[0].split("");
  var maxSymm = [];
  for (let i = 0; i < ens.length; i++) {
    var find = false;
    var endIndex = -1;
    for (let j = ens.length - 1; j > i; j--) {
      if (ens[i] === ens[j]) {
        find = true;
        endIndex = j;
        if (endIndex !== -1) {
          var sub = ens.slice(i, endIndex + 1);
          if (isSymmetric(sub)) {
            maxSymm.push(sub.length);
          }
        }
      }
    }
  }
  var maxLength = Math.max(...maxSymm);
  console.log(maxLength);
}

function isSymmetric(subStr) {
  var lengthHalf = subStr.length / 2;
  for (let i = 0; i < lengthHalf; i++) {
    if (subStr[i] !== subStr[subStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
// var testStr = ["ABBA"];
var testStr1 = ["tmikrmvnkzwffmuycgffiqnrepltnfvnggtmwkzmpjpcfuhmdcdlrupmqbimvppbnqinwcuidfckveonfgcknihwztkvrikfunegxfboluzjhxkoxdvdxoczqdkyjziqmjnnrbvcolyxijemlujjofuojdwfhcgzmmnsznhbv"];
// var testStr2 = ["12HHHHA"];
// var bland = addBlank(testStr.split(""));
// console.log(bland);

// algorithmExe(testStr);
algorithmExe(testStr1);
// algorithmExe(testStr2);
process.exit();
