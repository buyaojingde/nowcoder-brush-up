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

function algorithmExe(inputArr) {
  var str = inputArr[0];
  var result = [];
  var starNum = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    const eleCode = element.charCodeAt();
    if (eleCode >= 48 && eleCode <= 57) {
      // 数字
      if (starNum === 0) {
        result.push("*");
        result.push(element);
        starNum = 1;
      } else {
        result.push(element);
      }
      if(i === str.length - 1){
        result.push("*");
      }
    } else {
      if (starNum !== 0) {
        result.push("*");
        result.push(element);
        starNum = 0;
      } else {
        result.push(element);
      }
    }
  }
  console.log(result.join(""));
}
algorithmExe(["Jkdi234klowe90a3"]);
algorithmExe(["5151"]);
process.exit();
