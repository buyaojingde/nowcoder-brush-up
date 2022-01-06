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
function isBomb(str) {
  if (str.length !== 4) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[0]) {
      return false;
    }
  }
  return true;
}

function isRocket(strArr) {
  if (strArr.length !== 2) return false;
  if (strArr[0] === "joker" && strArr[1] === "JOKER") return true;
  return false;
}

function bigPai(a, b) {
  if (a === "JOKER") return true;
  if (b === "JOKER") return false;
  if (a === "joker" && b !== "JOKER") return true;
  if (a === "2" && b !== "JOKER" && b !== "joker") return true;
  if (a === "A" && b !== "2") return true;
  var acode = a === "10" ? 73 : a.charCodeAt();
  var bcode = b === "10" ? 73 : b.charCodeAt();
  if (acode > bcode) return true;
  return false;
}

function algorithmExe(inputArr) {
  var [puke0, puke1] = inputArr[0].split("-").map((item) => item.split(" "));
  if (isRocket(puke0) || isRocket(puke1)) {
    console.log("joker JOKER");
    return;
  }
  if (isBomb(puke0) && isBomb(puke1)) {
    if (bigPai(puke0[0], puke1[0])) {
      console.log(puke0.join(" "));
    } else {
      console.log(puke1.join(" "));
    }
    return;
  }
  if (isBomb(puke0) && !isBomb(puke1)) {
    console.log(puke0.join(" "));
    return;
  }
  if (!isBomb(puke0) && isBomb(puke1)) {
    console.log(puke1.join(" "));
    return;
  }
  if (puke0.length !== puke1.length) {
    console.log("ERROR");
    return;
  }
  if (bigPai(puke0[0], puke1[0])) {
    console.log(puke0.join(" "));
  } else {
    console.log(puke1.join(" "));
  }
}
algorithmExe(["4 4 4 4-joker JOKER"]);
process.exit();
