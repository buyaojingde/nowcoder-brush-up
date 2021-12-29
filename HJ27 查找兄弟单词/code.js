var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputCount = 1;
var inputs = [];

rl.on("line", function (input) {
  inputs.push(input);
  if (inputs.length === inputCount) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var inputCodes = inputArr[0].split(" ");
  var wordNum = Number(inputCodes[0]);
  var str = inputCodes.slice(1, wordNum + 1);
  var xd = inputCodes[wordNum + 1];
  var indexXd = Number(inputCodes[wordNum + 2]);
  var xdArr = [];
  for (let i = 0; i < str.length; i++) {
    // 兄弟单词判断
    if (str[i] === xd) {
      continue;
    }
    if (str[i].length !== xd.length) {
      continue;
    }
    var selects = [];
    var byXd = str[i];
    for (let j = 0; j < byXd.length; j++) {
      for (let k = 0; k < xd.length; k++) {
        if (selects.includes(k)) continue;
        if (byXd[j] === xd[k]) {
          selects.push(k);
          break;
        }
      }
    }
    if (selects.length !== byXd.length) {
      continue;
    }
    xdArr.push(str[i]);
  }
  // 字典序的排序方法
  xdArr.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      var aChar = a.charCodeAt(i);
      var bChar = b.charCodeAt(i);
      if (aChar === bChar) {
        continue;
      }
      return aChar - bChar;
    }
  });
  console.log(xdArr.length);
  if (indexXd <= xdArr.length) {
    console.log(xdArr[indexXd - 1]);
  }
}

// console.log(["3","qwe","opi","fdfdfd","qppnm"].slice(1,3+1));

process.exit();
