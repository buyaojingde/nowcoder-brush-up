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
    for (let j = 0; j < keyVs.length; j++) {
      var existInt = keyVs[j][0];
      if (kv[0] === existInt) {
        keyVs[j][1] += kv[1];
        existB = true;
      } else {
      }
    }
    if (!existB){
      var endKey = keyVs[keyVs.length - 1][0];
      var addKey = kv[0];
      for (let i = 0; i < keyVs.length; i++) {
        const element = array[i];
        
      }
      keyVs.push(kv);
    } 
  }
  for (let i = 0; i < keyVs.length; i++) {
    console.log(keyVs[i][0] + " " + keyVs[i][1]);
  }
}

var ss = ["0 1", "0 2", "1 2", "3 4"];

deal(ss);
