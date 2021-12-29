var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 2;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var key = inputArr[0].split("");
  var mingwen = inputArr[1];
  var key2 = [];
  for (let i = 0; i < key.length; i++) {
    var exist = false;
    for (let j = 0; j < key2.length; j++) {
      if (key2.includes(key[i])) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      key2.push(key[i]);
    }
  }
  for (let i = 97; i <= 122; i++) {
    var zimu = String.fromCharCode(i);
    if (!key2.includes(zimu)) {
      key2.push(zimu);
    }
  }
  var outStrs = [];
  for (let i = 0; i < mingwen.length; i++) {
    var mCharCode = mingwen[i].charCodeAt();
    var mIndex = mCharCode - 97;
    outStrs.push(key2[mIndex]);
  }
  console.log(outStrs.join(""));
}
algorithmExe(["4"]);
process.exit();
