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
  var input = inputs[0];
  var num = parseInt(input);
  var numStr = "";
  var beichu = 2;
  while (num !== 1) {
    while (beichu <= num) {
      if (num % beichu === 0) {
        numStr += beichu + " ";
        num = num / beichu;
        break;
      }
      beichu++;
    }
  }
  console.log(numStr);
}

var ss = ["180"];
deal(ss);
