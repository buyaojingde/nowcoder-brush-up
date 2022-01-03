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
  var itemNum = Number(inputArr[0]);
  var cmdList = inputArr[1].split("");
  var current = 1;
  var page = [1, itemNum];
  var mulPage = false;
  if (itemNum > 4) {
    page[1] = 4;
    mulPage = true;
  }
  for (let i = 0; i < cmdList.length; i++) {
    const cmd = cmdList[i];
    if (cmd === "U") {
      if (current <= page[0]) {
        if (page[0] === 1) {
          current = itemNum;
          page[1] = itemNum;
          page[0] = mulPage ? itemNum - 3 : 1;
        } else {
          current--;
          page[1]--;
          page[0]--;
        }
      } else {
        current--;
      }
    } else if (cmd === "D") {
      if (current >= page[1]) {
        if (page[1] === itemNum) {
          current = 1;
          page[1] = mulPage ? 4 : itemNum;
          page[0] = 1;
        } else {
          current++;
          page[1]++;
          page[0]++;
        }
      } else {
        current++;
      }
    }
  }
  if (mulPage) {
    page.splice(1, 0, page[0] + 1, page[0] + 2);
  } else {
    for (let i = 1; i < itemNum - 1; i++) {
      page.splice(i, 0, page[0] + 1);
    }
  }
  console.log(page.join(" "));
  console.log(current);
}

// algorithmExe(["10", "UUUU"]);
// algorithmExe(["4", "UUUU"]);
algorithmExe([
  "2",
  "DUDUDDUUDUDDDDUDUDDDUUDDUDDUDUDUDDDUDUDUUDDUUDDUUUDUDUUUDDUDUDDUUDUDDDDUDUDUUDUDDDDDUU",
]);
process.exit();
