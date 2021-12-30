const { checkPrime } = require("crypto");
var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 3;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var mask = inputArr[0].split(".").map((item) => Number(item));
  var ip1 = inputArr[1].split(".").map((item) => Number(item));
  var ip2 = inputArr[2].split(".").map((item) => Number(item));
  if (!checkMask(mask) || !checkIP(ip1) || !checkIP(ip2)) {
    console.log(1);
    return;
  }
  var ip1MaskRes = andExe(mask, ip1);
  var ip2MaskRes = andExe(mask, ip2);
  if (ipEqual(ip1MaskRes, ip2MaskRes)) {
    console.log(0);
    return;
  }
  console.log(2);
}

function andExe(maskCode, ipCode) {
  var res = [];
  for (let i = 0; i < maskCode.length; i++) {
    res.push(maskCode[i] & ipCode[i]);
  }
  return res;
}

function ipEqual(mask1, mask2) {
  for (let i = 0; i < mask1.length; i++) {
    if (mask1[i] !== mask2[i]) {
      return false;
    }
  }
  return true;
}

function checkMask(items) {
  var flag = false;
  for (let i = 0; i < items.length; i++) {
    if (flag) {
      if (items[i] !== 0) {
        return false;
      }
      continue;
    }
    if (items[i] !== 255) {
      if (checkMaskItem(items[i])) {
        flag = true;
      } else {
        return false;
      }
    }
  }
  return true;
}

function checkMaskItem(item) {
  if (!checkIPItem(item)) return false;
  var str2 = item.toString(2);
  if (str2 === "0") return true;
  var str2Length = str2.length;
  if (str2Length !== 8) {
    return false;
  }
  // for (let i = 0; i < 8 - str2Length; i++) {
  //   str2 = "0" + str2;
  // }

  var flag = false;
  for (let i = 0; i < str2.length; i++) {
    if (flag) {
      if (str2[i] === "1") {
        return false;
      }
      continue;
    }
    if (str2[i] === "0") {
      flag = true;
    }
  }
  return true;
}

function checkIP(items) {
  for (let i = 0; i < items.length; i++) {
    if (!checkIPItem(items[i])) {
      return false;
    }
  }
  return true;
}

function checkIPItem(item) {
  return item >= 0 && item <= 255;
}
// algorithmExe(["255.255.255.0", "192.168.224.256", "192.168.10.4"]);
// algorithmExe(["255.0.0.0", "193.194.202.15", "232.43.7.59"]);
// algorithmExe(["255.255.255.0", "192.168.0.254", "192.168.0.1"]);
// algorithmExe(["254.255.0.0", "85.122.52.249", "10.57.28.117"]);
algorithmExe(["255.255.252.0", "173.225.245.45", "69.138.93.228"]);

process.exit();
