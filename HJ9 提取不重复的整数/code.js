var readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var k = 1;
var inputs = [];
rl.on("line", function (data) {
  inputs.push(data.trim());
  if (inputs.length === k) {
    deal(inputs);
    inputs = [];
  }
});

function deal(inputs) {
  var inputArr = inputs[0].split("");
  var outArr = [];
  for (let i = inputArr.length - 1; i >= 0; i--) {
    var exist = false;
    for (let j = 0; j < outArr.length; j++) {
      if (outArr[j] === inputArr[i]) {
        exist = true;
      }
    }
    if (!exist) {
      outArr.push(inputArr[i]);
    }
  }
  var num = 0;
  for (let i = outArr.length - 1; i >= 0; i--) {
    num += parseInt(outArr[i]) * Math.pow(10, outArr.length - 1 - i);
  }
  console.log(num);
}

var ss = ["9876673"];

deal(ss);
