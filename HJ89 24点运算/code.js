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

function puke2Num(str) {
  var num = Number(str);
  if (!isNaN(Number(str))) {
    return num;
  }
  if (str === "J") return 11;
  if (str === "Q") return 12;
  if (str === "K") return 13;
  if (str === "A") return 1;
  return null;
}
function check(nums) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!element) {
      return false;
    }
  }
  return true;
}

function extracOpe(ope) {
  switch (ope) {
    case 0:
      return "+";
    case 1:
      return "-";
    case 2:
      return "-";
    case 3:
      return "*";
    case 4:
      return "/";
    case 5:
      return "/";
  }
}

function calc(a, b) {
  return [a + b, a - b, b - a, a * b, a / b, b / a];
}
function algorithmExe(inputArr) {
  var pukeNums = inputArr[0].split(" ").map((item) => puke2Num(item));
  if (!check(pukeNums)) {
    console.log("ERROR");
    return;
  }
  for (let i = 0; i < pukeNums.length - 1; i++) {
    const a = pukeNums[i];
    for (let j = 0; j < pukeNums.length; j++) {
      if (j === i) continue;
      const b = pukeNums[j];
      var calcs = calc(a, b);
      for (let k = 0; k < calcs.length; k++) {
        var ab = calcs[k];
        for (let m = 0; m < pukeNums.length; m++) {
          if (m !== i && m !== j) {
            var calcs1 = calc(ab, pukeNums[m]);
            for (let l = 0; l < calcs1.length; l++) {
              const abc = calcs1[l];
              for (let n = 0; n < pukeNums.length; n++) {
                if (n !== m && n !== j && n !== i) {
                  var abcd = calc(abc, pukeNums[n]);
                  for (let o = 0; o < abcd.length; o++) {
                    if (abcd[o] === 24) {
                      logResult(
                        pukeNums[i],
                        pukeNums[j],
                        pukeNums[m],
                        pukeNums[n],
                        k,
                        l,
                        o
                      );
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
  console.log("NONE");
}

function num2Puke(num) {
  if (num >= 2 && num <= 10) {
    return num;
  }
  if (num === 11) return "J";
  if (num === 12) return "Q";
  if (num === 13) return "K";
  if (num === 1) return "A";
}

function logResult(a1, b1, c1, d1, ope1, ope2, ope3) {
  var a = num2Puke(a1);
  var b = num2Puke(b1);
  var c = num2Puke(c1);
  var d = num2Puke(d1);
  var str = "";
  if (ope1 === 2 || ope1 === 5) {
    str = b + extracOpe(ope1) + a;
  } else {
    str = a + extracOpe(ope1) + b;
  }
  if (ope2 === 2 || ope2 === 5) {
    str = c + extracOpe(ope2) + "(" + str + ")";
  } else {
    str = "(" + str + ")" + extracOpe(ope2) + c;
  }

  if (ope3 === 2 || ope3 === 5) {
    str = d + extracOpe(ope3) + "(" + str + ")";
  } else {
    str = "(" + str + ")" + extracOpe(ope3) + d;
  }
  console.log(str);
}
// algorithmExe(["K Q 6 K"]);
// algorithmExe(["4 2 K A"]);
algorithmExe(["K Q 6 K"]);
process.exit();
