var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 1;
var inputs = [];
var cmdMap = new Map([
  ["reset", "reset what"],
  ["reset board", "board fault"],
  ["board add", "where to add"],
  ["board delete", "no board at all"],
  ["reboot backplane", "impossible"],
  ["backplane abort", "install first"],
]);
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var cmdStr = inputArr[0];
  var cmdLength = cmdStr.split(" ");
  var matchCmdArr = [];
  for (const key of cmdMap.keys()) {
    var keyCount = key.split(" ");
    if (cmdLength.length !== keyCount.length) {
      continue;
    }
    var find = key;
    for (let i = 0; i < cmdLength.length; i++) {
      const element = cmdLength[i];
      if (keyCount[i].substring(0, element.length) !== element) {
        find = null;
        break;
      }
    }
    if (find) {
      matchCmdArr.push(find);
    }
  }
  if (matchCmdArr.length === 1) {
    var matchCmd = matchCmdArr[0];
    console.log(cmdMap.get(matchCmd));
    return;
  }
  console.log("unknown command");
}

// algorithmExe(["reset"]);
// algorithmExe(["reset board"]);
// algorithmExe(["board add"]);
// algorithmExe(["board delet"]);
// algorithmExe(["reboot backplane"]);
// algorithmExe(["backplane abort"]);
algorithmExe(["bo a"]);
process.exit();
