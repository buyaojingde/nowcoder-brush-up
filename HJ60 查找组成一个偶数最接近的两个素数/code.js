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

function checkPrime(num) {
  if (primes.includes(num)) return true;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  primes.push(num);
  return true;
}
var primes = [];
function algorithmExe(inputArr) {
  var n = Number(inputArr[0]);
  var diff = n;
  var result = [];
  for (let i = 2; i < n; i++) {
    if (checkPrime(i)) {
      if (checkPrime(n - i)) {
        var diffTmp = Math.abs(n - 2 * i);
        if (diffTmp < diff) {
          diff = diffTmp;
          result[0] = i;
          result[1] = n - i;
        }
      }
    }
  }
  console.log(result[0]);
  console.log(result[1]);
}

algorithmExe(["4"]);
process.exit();
