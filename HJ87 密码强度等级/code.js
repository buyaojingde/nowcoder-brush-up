const { count } = require("console");
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

function charCount(str) {
  var upperCase = 0;
  var lowerCase = 0;
  var numberCount = 0;
  var symbolCount = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
      upperCase++;
    } else if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {
      lowerCase++;
    } else if (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
      numberCount++;
    } else {
      symbolCount++;
    }
  }
  return [upperCase, lowerCase, numberCount, symbolCount];
}

function algorithmExe(inputArr) {
  var password = inputArr[0];
  var sum = 0;
  var [u, l, n, s] = charCount(password);
  if (password.length <= 4) {
    sum += 5;
  } else if (password.length <= 7) {
    sum += 10;
  } else {
    sum += 25;
  }
  if (u + l === 0) {
    sum += 0;
  } else if ((u > 0 && l === 0) || (l > 0 && u === 0)) {
    sum += 10;
  } else {
    sum += 20;
  }
  if (n === 0) {
    sum += 0;
  } else if (n === 1) {
    sum += 10;
  } else {
    sum += 20;
  }
  if (s === 0) {
    sum += 0;
  } else if (s === 1) {
    sum += 10;
  } else {
    sum += 25;
  }
  var fullUporFullLower = (u > 0 && l === 0) || (l > 0 && u === 0);
  if (u + l > 0 && n > 0 && s === 0) {
    sum += 2;
  } else if (fullUporFullLower && n > 0 && s > 0) {
    sum += 3;
  } else if (u > 0 && l > 0 && n > 0 && s > 0) {
    sum += 5;
  }
  if (sum >= 90) {
    console.log("VERY_SECURE");
  } else if (sum >= 80) {
    console.log("SECURE");
  } else if (sum >= 70) {
    console.log("VERY_STRONG");
  } else if (sum >= 60) {
    console.log("STRONG");
  } else if (sum >= 50) {
    console.log("AVERAGE");
  } else if (sum >= 25) {
    console.log("WEAK");
  } else {
    console.log("VERY_WEAK");
  }
}
algorithmExe(["Aa1("]);
algorithmExe(["Jl)M:+"]);
algorithmExe(["38$@NoNoNo"]);
algorithmExe(["123"]);
process.exit();
