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

function algorithmExe(inputArr) {
  var nums = inputArr[0].split(" ").map((item) => Number(item));
  for (let i = 0; i < nums.length - 1; i++) {
    const a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      var calcs = calc(a, b);
      for (let k = 0; k < calcs.length; k++) {
        var ab = calcs[k];
        for (let m = 0; m < nums.length; m++) {
          if (m !== i && m !== j) {
            var calcs1 = calc(ab, nums[m]);
            for (let l = 0; l < calcs1.length; l++) {
              const abc = calcs1[l];
              for (let n = 0; n < nums.length; n++) {
                if (n !== m && n !== j && n !== i) {
                  var abcd = calc(abc, nums[n]);
                  for (let o = 0; o < abcd.length; o++) {
                    if (abcd[o] === 24) {
                      logResult(nums[i], nums[j], nums[m], nums[n], k, l, o);
                      console.log(true);
                      return;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(false);
  return;
}

function calc(a, b) {
  return [a + b, a - b, b - a, a * b, a / b, b / a];
}

function logResult(a, b, c, d, ope1, ope2, ope3) {
  var str = "";
  if (ope1 === 2 || ope1 === 5) {
    str = b + extracOpe(ope1) + a;
  } else {
    str = a + extracOpe(ope1) + b;
  }
  if (ope2 === 2 || ope2 === 5) {
    str = c + extracOpe(ope2) + str;
  } else {
    str = str + extracOpe(ope2) + c;
  }

  if (ope3 === 2 || ope3 === 5) {
    str = d + extracOpe(ope3) + str;
  } else {
    str = str + extracOpe(ope3) + d;
  }
  str = str + " = 24"
  console.log(str);
}

function extracOpe(ope) {
  switch (ope) {
    case 0:
      return " + ";
    case 1:
      return " - ";
    case 2:
      return " - ";
    case 3:
      return " * ";
    case 4:
      return " / ";
    case 5:
      return " / ";
  }
}

algorithmExe(["7 2 1 10"]);
process.exit();
