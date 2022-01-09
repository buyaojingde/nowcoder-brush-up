/*
 *@description: NP问题，01背包，动态规划
 *@author: lianbo
 *@date: 2022-01-09 15:52:04
 */
var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 4;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var peopleNum = Number(inputArr[0]);
  var peoples = inputArr[1].split(" ").slice(0, peopleNum);
  var tikNum = Number(inputArr[2]);
  var tiks = inputArr[3].split(" ").slice(0, tikNum);
  var ticTj = [];
  for (let i = 0; i < peopleNum; i++) {
    ticTj.push(0);
  }
  var invalid = 0;
  for (let i = 0; i < tiks.length; i++) {
    var valid = false;
    for (let j = 0; j < peoples.length; j++) {
      var peo = peoples[j];
      if (peo === tiks[i]) {
        ticTj[j]++;
        valid = true;
        break;
      }
    }
    if (!valid) {
      invalid++;
    }
  }
  for (let i = 0; i < peoples.length; i++) {
    console.log(peoples[i] + " : " + ticTj[i]);
  }
  console.log("Invalid : " + invalid);
}

algorithmExe(["4", "A B C D", "8", "A D E CF A GG A B"]);
process.exit();
