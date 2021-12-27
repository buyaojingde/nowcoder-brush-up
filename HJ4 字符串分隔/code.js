var readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var K = 2;
var inputs = [];
rl.on("line", function (data) {
  inputs.push(...data.trim().split(""));
  let p = 0;
  while (p < inputs.length) {
    var output = "";
    for (let i = p; i < p + 8; i++) {
      var s = inputs[i];
      if (s) {
        output += s.toString();
      } else {
        output += "0";
      }
    }
    console.log(output);
    p += 8;
  }
  input = [];
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
  inputs.push(...data.trim().split(""));
  let p = 0;
  while (p < inputs.length) {
    var output = "";
    for (let i = p; i < p + 8; i++) {
      var s = inputs[i];
      if (s) {
        output += s.toString();
      } else {
        output += "0";
      }
    }
    console.log(output);
    p += 8;
  }
  inputs = [];
}

var ss = "asda";
var s = "1";
var sss = "gfhfghfhg";
input(ss);
input(s);
input(sss);
