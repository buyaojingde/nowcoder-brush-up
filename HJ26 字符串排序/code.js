var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var k = 1;
var inputs = [];

rl.on("line", function (input) {
  inputs.push(input);
  if (inputs.length === k) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var inputCodes = inputArr[0].split("");
  var outputArr = [];
  var selects = [];
  for (var i = 0; i < inputCodes.length; i++) {
    var chatCode = inputCodes[i].charCodeAt();
    if (
      (chatCode >= 97 && chatCode <= 122) ||
      (chatCode >= 65 && chatCode <= 90)
    ) {
      var minIndex = 27;
      var selectIndex = -1;
      for (var j = 0; j < inputCodes.length; j++) {
        if (selects.includes(j)) continue;
        var chatCode1 = inputCodes[j].charCodeAt();
        if (chatCode1 >= 97 && chatCode1 <= 122) {
          var cha = chatCode1 - 97;
          if (cha < minIndex) {
            minIndex = cha;
            selectIndex = j;
          }
        }
        if (chatCode1 >= 65 && chatCode1 <= 90) {
          var cha = chatCode1 - 65;
          if (cha < minIndex) {
            minIndex = cha;
            selectIndex = j;
          }
        }
      }
      outputArr[i] = inputCodes[selectIndex];
      selects.push(selectIndex);
    } else {
      outputArr[i] = inputCodes[i];
    }
  }
  console.log(outputArr.join(""));
}
