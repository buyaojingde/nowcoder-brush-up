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

function algorithmExe(inputArr) {
  var carNum = Number(inputArr[0]);
  var inStation = inputArr[1].split(" ").map((item) => Number(item));
  var station = [];
  station.push(inStation[0]);
  ope(station, 1, inStation, []);
  outPath.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i];
      }
    }
  });
  for (let i = 0; i < outPath.length; i++) {
    console.log(outPath[i].join(" "));
  }
}
var outPath = [];
function ope(stat, index, carQueue, outStat) {
  if (index === carQueue.length) {
    while (stat.length !== 0) {
      outStat.push(stat.pop());
    }
    outPath.push(outStat);
    return;
  }

  // 出站
  if (stat.length !== 0) {
    var statNew = [...stat];
    var outNew = [...outStat];
    outNew.push(statNew.pop());
    ope(statNew, index, carQueue, outNew);
  }
  // 进站
  var statNew1 = [...stat];
  statNew1.push(carQueue[index]);
  ope(statNew1, index + 1, carQueue, [...outStat]);
}

algorithmExe(["3", "1 2 3"]);
process.exit();
