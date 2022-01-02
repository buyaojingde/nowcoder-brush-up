var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});



function algorithmExe(inputArr) {
  var n = Number(inputArr[0]);
  var str2 = n.toString(2).split("");
  var count =0;
  for (let i = 0; i < str2.length; i++) {
    if(str2[i]==="1"){
      count++;
    }
  }
  console.log(count);
}

algorithmExe(["5"]);
process.exit();
