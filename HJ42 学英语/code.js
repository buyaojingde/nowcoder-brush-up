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
  console.log(hundredNum(num));
}

function hundredNum(num) {
  var useTens = false;
  var outStr = [];
  for (let i = 1; i <= 3; i++) {
    var res1 = num % Math.pow(10, i);
    var res = res1 / Math.pow(10, i - 1);
    num = num - res * Math.pow(10, i - 1);
    if (i === 1) {
      if (res !== 0) {
        outStr.push(ones[res]);
      } else {
        useTens = true;
      }
    }
    if (i === 2) {
      if (res !== 0) {
        if (useTens) {
          outStr.push(tens[res]);
        } else {
          outStr.push(twieties[res]);
        }
      } else {
      }
    }
    if (i === 3) {
      if (res !== 0) {
        outStr.length > 0 && outStr.push("and");
        outStr.push("hundred");
        outStr.push(ones[res]);
      }
    }
  }
  return outStr.reverse().join(" ");
}

algorithmExe(["123"]);
algorithmExe(["100"]);
algorithmExe(["101"]);

process.exit();
