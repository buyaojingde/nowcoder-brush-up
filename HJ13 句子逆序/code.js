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
  var inputArr = inputs[0].split(" ").reverse().join(" ");
  console.log(inputArr);
}

var ss = ["nowcoder"];

deal(ss);
