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
var ones = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "forteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var twieties = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

var ranges = ["hundred", "thousand", "million", "billion"];
function algorithmExe(inputArr) {
  var numStr = inputArr[0].split("");
  var num = Number(inputArr[0]);
  var numLength = numStr.length;
  var outStr = "";
  var bi = Math.floor(num / 1000000000);
  if (bi > 0) {
    outStr = hundredNum(bi) + " billion ";
  }
  num = num - bi * 1000000000;
  var mi = Math.floor(num / 1000000);
  if (mi > 0) {
    outStr = outStr + hundredNum(mi) + " million ";
  }

  num = num - mi * 1000000;
  var th = Math.floor(num / 1000);
  if (th > 0) {
    outStr = outStr + hundredNum(th) + " thousand ";
  }
  num = num - th * 1000;
  outStr = outStr + hundredNum(num);
  console.log(outStr);
}

function hundredNum(num) {
  if (num > 999) return;
  var outStr = "";
  var hu = Math.floor(num / 100);
  var hasHu = false;
  if (hu > 0) {
    outStr = ones[hu] + " hundred ";
    hasHu = true;
  }
  num = num - hu * 100;
  var shi = Math.floor(num / 10);
  if (shi > 0) {
    if (hasHu) {
      outStr = outStr + "and ";
    }
    if (shi === 1) {
      num = num - 10;
      outStr = outStr + tens[num];
      return outStr;
    } else {
      num = num - shi * 10;
      outStr = outStr + twieties[shi];
      if (num > 0) {
        outStr += " " + ones[num];
        return outStr;
      }
      return outStr;
    }
  }
  if (num > 0) {
    if (hasHu) {
      outStr += "and " + ones[num];
      return outStr;
    }
    return ones[num];
  }
  return outStr;
}

// algorithmExe(["1652510"]);
// algorithmExe(["100"]);
// algorithmExe(["101"]);
// algorithmExe(["60830"]);
// algorithmExe(["110"]);
algorithmExe(["1403523"]);

process.exit();
