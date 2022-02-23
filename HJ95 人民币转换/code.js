var readLine = require("readline");
var rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input);
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

var RMBStrArray = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖","拾","佰","仟","万","亿","元","角","分"];
function algorithmExe(inputArr){
  var doubleNum = inputArr[0];
}
