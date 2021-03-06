var readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var k = 0;
var inputs = [];
rl.on("line", function (data) {
  if (k === 0) {
    k = parseInt(data.trim());
  } else {
    inputs.push(data.trim());
  }
  if (inputs.length === k) {
    deal(inputs);
    inputs = [];
  }
});

function deal(inputs) {
  var keyVs = [];
  for (let i = 0; i < inputs.length; i++) {
    var kvStr = inputs[i].split(" ");
    var kv = [parseInt(kvStr[0]), parseInt(kvStr[1])];
    var existB = false;
    var index = 0;
    for (let j = 0; j < keyVs.length; j++) {
      var existInt = keyVs[j][0];
      if (kv[0] === existInt) {
        keyVs[j][1] += kv[1];
        existB = true;
      } else if (kv[0] > existInt) {
        index = j + 1;
      }
    }
    if (!existB) {
      keyVs.splice(index,0,kv);
    }
  }
  for (let i = 0; i < keyVs.length; i++) {
    console.log(keyVs[i][0] + " " + keyVs[i][1]);
  }
}

var ss = ["0 1", "1 2", "0 2", "3 4"];

deal(ss);
