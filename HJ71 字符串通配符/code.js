var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 2;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

/*
 *@description:  去除连续的*
 *@author: lianbo
 *@date: 2022-01-05 16:37:16
 */
function simple(str1) {
  var newstr = "";
  for (let i = 0; i < str1.length; i++) {
    if (newstr[newstr.length - 1] === "*" && str1[i] === "*") continue;
    newstr += str1[i];
  }
  return newstr;
}

function algorithmExe(inputArr) {
  var str1 = inputArr[0].toUpperCase();
  var str2 = inputArr[1].toUpperCase();
  var str1 = simple(str1);
  console.log(regular(str1, 0, str2, 0));
}

function checkAZ09(str) {
  if (!str) {
    console.log("fuck");
  }
  if (str.charCodeAt() < 48) return false;
  if (str.charCodeAt() >= 48 && str.charCodeAt() <= 57) return true;
  if (str.charCodeAt() < 65) return false;
  if (str.charCodeAt() > 90) return false;
  return true;
}

function regular(reg1, i, res, j) {
  if (i === reg1.length && j === res.length) return true;
  if (i >= reg1.length || j >= res.length) return false;
  if (reg1[i] === "?") {
    return checkAZ09(res[j]) && regular(reg1, i + 1, res, j + 1);
  } else if (reg1[i] === "*") {
    return (
      regular(reg1, i + 1, res, j) ||
      (checkAZ09(res[j]) && regular(reg1, i + 1, res, j + 1)) ||
      (checkAZ09(res[j]) && regular(reg1, i, res, j + 1))
    );
  } else {
    return reg1[i] === res[j] && regular(reg1, i + 1, res, j + 1);
  }
}
// algorithmExe(["?*Bc*?", "abcd"]);
// algorithmExe(["te?t*.*", "txt12.xls"]);
algorithmExe([
  "h*h*ah**ha*h**h***hha",
  "hhhhhhhahhaahhahhhhaaahhahhahaaahhahahhhahhhahaaahaah",
]);

process.exit();
