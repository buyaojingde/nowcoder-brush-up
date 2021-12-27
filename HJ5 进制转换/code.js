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
  var input = inputs[0].split("");
  var num = 0;
  if (input[0] === "0" && input[1] === "x") {
    for (let i = input.length - 1; i >= 2; i--) {
      var di = input[i].charCodeAt();
      var wei = 0;
      if (di >= 65 && di <= 70) {
        wei = di - 55;
      } else {
        wei = parseInt(input[i]);
      }
      var powNum = input.length - i - 1;
      num += wei * Math.pow(16, powNum);
    }
    console.log(num);
  }
}

console.log("A".charCodeAt());
console.log("B".charCodeAt());
console.log("C".charCodeAt());
console.log("D".charCodeAt());
console.log("E".charCodeAt());
var ss = ["0xA12"];
deal(ss);
