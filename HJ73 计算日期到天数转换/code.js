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

function checkRunnian(year) {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
}

function algorithmExe(inputArr) {
  var data = inputArr[0].split(" ").map((item) => Number(item));
  var year = data[0];
  var month = data[1];
  var day = data[2];
  if (month <= 2) {
    var num31 = Math.floor(month / 2);
    console.log(num31 * 31 + day);
  } else if (month <= 7) {
    var num31 = Math.floor(month / 2);
    var num30 = Math.floor((month - 1) / 2);
    var sum = num31 * 31 + num30 * 30 + day;
    if (checkRunnian(year)) {
      sum--;
    } else {
      sum -= 2;
    }
    console.log(sum);
  } else {
    var num31 = Math.floor((month - 7) / 2);
    var num30 = Math.floor((month - 8) / 2);
    var sum = num31 * 31 + num30 * 30 + day;
    var sum731 = checkRunnian(year) ? 213 : 212;
    console.log(sum + sum731);
  }
}

algorithmExe(["1982 3 4"]);
algorithmExe(["2012 12 31"]);

process.exit();
