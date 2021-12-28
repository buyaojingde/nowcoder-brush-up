var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var ki = 0;
var iArr = null;
var kr = 0;
var rArr = null;
rl.on("line", function (input) {
  if (ki === 0) {
    var inputArr = input.split(" ").map((item) => Number(item));
    ki = inputArr[0];
    iArr = inputArr.slice(1);
  } else {
    var inputArr = input.split(" ").map((item) => Number(item));
    kr = inputArr[0];
    rArr = inputArr.slice(1);
    algorithmExe();
    ki = 0;
    iArr = null;
    kr = 0;
    rArr = null;
  }
});

function algorithmExe() {
  var quchong = [];
  for (let i = 0; i < rArr.length; i++) {
    var exist = false;
    for (let j = 0; j < quchong.length; j++) {
      if (rArr[i] === quchong[j]) {
        exist = true;
      }
    }
    if (!exist) {
      quchong.push(rArr[i]);
    }
  }
  quchong.sort((a, b) => a - b); // sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
  var containR = [];
  var numContain = function (num1, num2) {
    var num1Str = num1.toString();
    var num2Str = num2.toString();
    return num1Str.includes(num2Str);
  };
  for (let i = 0; i < quchong.length; i++) {
    var rCurrent = quchong[i];
    var rCurrentI = [];
    for (let j = 0; j < iArr.length; j++) {
      if (numContain(iArr[j], rCurrent)) {
        rCurrentI.push(...[j, iArr[j]]);
      }
    }
    if (rCurrentI.length > 0) {
      containR.push(rCurrent);
      containR.push(rCurrentI.length / 2);
      containR.push(...rCurrentI);
    }
  }
  containR.unshift(containR.length);
  var outStr = "";
  for (let i = 0; i < containR.length; i++) {
    outStr += containR[i] + " ";
  }
  console.log(outStr);
}
