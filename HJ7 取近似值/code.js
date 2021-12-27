var readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var K = 1;
var inputs = [];
rl.on("line", function (data) {
  inputs.push(data.trim());
  if (inputs.length === K) {
    deal(inputs);
    inputs = [];
  }
});

function deal(inputs) {
  var inputFloat = parseFloat(inputs[0]);
  var inputInt = parseInt(inputs[0]);
  if (inputFloat - inputInt >= 0.5) {
    console.log(inputInt + 1);
  } else {
    console.log(inputInt);
  }
}

var ss = ["4564.45"];
deal(ss);
