var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var inputLines = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});
function extractCalcStr(strArr, brackets1, brackets2) {
  var leftB = strArr.indexOf(brackets1);
  if (leftB !== -1) {
    var rightB = strArr.lastIndexOf(brackets2);
    if (rightB !== -1) {
      return {
        sub: strArr.slice(leftB + 1, rightB),
        left: leftB,
        right: rightB,
      };
    }
  }
  return null;
}
function spliceStr(resStr, start, end, targetStr) {
  return resStr.substring(0, start) + targetStr + resStr.substring(end);
}
function calcStr(strNumArr) {
  var bigB = extractCalcStr(strNumArr, "{", "}");
  if (bigB) {
    var bigRes = calcStr(bigB.sub);
    var bigStr = strNumArr.splice(
      bigB.left,
      bigB.right - bigB.left + 1,
      bigRes
    );
    return calcStr(strNumArr);
  }
  var midB = extractCalcStr(strNumArr, "[", "]");
  if (midB) {
    var midRes = calcStr(midB.sub);
    var midStr = strNumArr.splice(
      midB.left,
      midB.right - midB.left + 1,
      midRes
    );
    return calcStr(strNumArr);
  }
  var smallB = extractCalcStr(strNumArr, "(", ")");
  if (smallB) {
    var smallRes = calcStr(smallB.sub);
    var smallStr = strNumArr.splice(
      smallB.left,
      smallB.right - smallB.left + 1,
      smallRes
    );
    return calcStr(strNumArr);
  }
  var nums = strNumArr;
  if (nums[0] === "-") {
    // 出现了负数，前面加个0
    var num1 = Number(nums[1]);
    nums[1] = 0 - num1;
    nums.shift();
  }
  var i = 0;
  while (i < nums.length) {
    if (nums[i] === "*") {
      var num1 = Number(nums[i - 1]);
      var num2 = Number(nums[i + 1]);
      var res12 = num1 * num2;
      nums.splice(i - 1, 3, res12);
      continue;
    }
    if (nums[i] === "/") {
      var num1 = Number(nums[i - 1]);
      var num2 = Number(nums[i + 1]);
      var res12 = num1 / num2;
      nums.splice(i - 1, 3, res12);
      continue;
    }
    i++;
  }
  i = 0;
  while (i < nums.length) {
    if (nums[i] === "+") {
      var num1 = Number(nums[i - 1]);
      var num2 = Number(nums[i + 1]);
      var res12 = num1 + num2;
      nums.splice(i - 1, 3, res12);
      continue;
    }
    if (nums[i] === "-") {
      var num1 = Number(nums[i - 1]);
      var num2 = Number(nums[i + 1]);
      var res12 = num1 - num2;
      nums.splice(i - 1, 3, res12);
      continue;
    }
    i++;
  }
  if (nums.length > 1) {
    throw new Error("sb");
  }
  var calcedStr = nums[0];
  return calcedStr;
}
function algorithmExe(inputArr) {
  const inStr = inputArr[0].split("");
  // 数字被拆分的，合并一下
  var newInArr = [];
  for (let i = 0; i < inStr.length; i++) {
    const element = inStr[i];
    if (newInArr.length > 0) {
      var last = newInArr[newInArr.length - 1];
      if (last.charCodeAt() >= 48 && last.charCodeAt() <= 57) {
        if (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
          newInArr[newInArr.length - 1] = last + element;
        }else{
          newInArr.push(element);
        }
      }else{
        newInArr.push(element);
      }
    }else{
      newInArr.push(element);
    }
  }

  const calcResult = calcStr(newInArr);
  console.log(calcResult);
}
var testStr = "3+2*{1+2*[-4/(8-6)+7]}";
var testStr2 = "5-3+9*6*(6-10-2)";
// algorithmExe(["5 2 3 2 4 3 5 2 1 4 3"]);
algorithmExe([testStr2]);
// console.log(extractCalcStr(testStr.split(""), "{", "}"));
process.exit();
