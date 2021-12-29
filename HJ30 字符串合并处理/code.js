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

function algorithmExe(inputs) {
  var ens = inputs[0].split(" ").join("");
  var jiStrs = [];
  var ouStrs = [];
  for (let i = 0; i < ens.length; i++) {
    if (i % 2 === 0) {
      ouStrs.push(ens[i]);
    } else {
      jiStrs.push(ens[i]);
    }
  }
  jiStrs.sort((a, b) => {
    return a.charCodeAt() - b.charCodeAt();
  });
  ouStrs.sort((a, b) => {
    return a.charCodeAt() - b.charCodeAt();
  });
  var outs = [];
  for (let i = 0; i < ouStrs.length; i++) {
    outs[i * 2] = ouStrs[i];
  }
  for (let i = 0; i < jiStrs.length; i++) {
    outs[i * 2 + 1] = jiStrs[i];
  }
  var outs2 = [];
  for (let i = 0; i < outs.length; i++) {
    var charC = outs[i].charCodeAt();
    if (
      (charC >= 48 && charC <= 57) ||
      (charC >= 65 && charC <= 70) ||
      (charC >= 97 && charC <= 102)
    ) {
      var num10 = parseInt(outs[i], 16);
      var numStr2 = de22(num10);
      var reverseNum2 = numStr2.split("").reverse().join("");
      var num102 = parseInt(reverseNum2, 2);
      var outNum16 = num102.toString(16).toUpperCase();
      outs2.push(outNum16);
    } else {
      outs2.push(outs[i]);
    }
  }
  console.log(outs2.join(""));
}

function de22(numIn) {
  var str2 = numIn.toString(2);
  var str2Length = str2.length;
  for (let i = 0; i < 4 - str2Length; i++) {
    str2 = "0" + str2;
  }
  return str2;
}

// algorithmExe(["DKSq8qykpgKIZxiRKmQ9QkZt909PffE6Gyfc57dBx7p20D42bWJRzKqGGCzzQ4p7Z32Dsx2Cf8G2841lPuAZNb K0fHodOVFlbl220ov260TPOrmZ328d1E89OatcL88EXr622RdklXtXazO7wMoc6DEKU45eQ5VBUy2YFjgJXhAWK8umt8F17X5IE74tTG526SEwCd9520r5NvA20H6T28YVeP5nbQ4459I9G7W qXr9OOvzq9Do5WF8M4ANEkto79IQ3tF9sPK36q2w8y4In9BR1mOm"]);
// algorithmExe(["ab CD"]);
algorithmExe(["123 15"]);

process.exit();
