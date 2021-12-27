var readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var K = 2;
var inputs = [];
rl.on("line", function (data) {
  inputs.push(data.trim());
  K = parseInt(inputs[0]);
  if (K == inputs.length - 1) {
    deal(inputs);
    inputs.length = 0;
  }
});

function deal(inputs) {
  var nums = [];
  for (let index = 1; index <= K; index++) {
    var i = parseInt(inputs[index]);
    if (!nums[i]) {
      nums[i] = true;
    }
  }
  for (let i = 0; i < 500; i++) {
    if (nums[i]) {
      console.log(i);
    }
  }
}

function input(data) {
  inputs.push(data.trim());
  K = parseInt(inputs[0]);
  if (K == inputs.length - 1) {
    deal(inputs);
    inputs.length = 0;
  }
}

var ss = "ABCaD";
var s = "a";
input("3");
input("1");
input("2");
input("2");
