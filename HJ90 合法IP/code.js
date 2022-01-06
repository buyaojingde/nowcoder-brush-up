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

function algorithmExe(inputArr) {
  var ipStr = inputArr[0].split(".");
  if (ipStr.length !== 4) {
    console.log("NO");
    return;
  }
  for (let index = 0; index < ipStr.length; index++) {
    const element = ipStr[index];
    if (element.length > 0) {
      for (let i = 0; i < element.length; i++) {
        const charItem = element[i];
        if (charItem.charCodeAt() >= 48 && charItem.charCodeAt() <= 57) {
        } else {
          console.log("NO");
          return;
        }
      }
    }
    if (element.length > 1) {
      if (element[0] === "0") {
        console.log("NO");
        return;
      }
    }
    if (element === "") {
      console.log("NO");
      return;
    }
    const ipItem = Number(element);
    if (isNaN(ipItem)) {
      console.log("NO");
      return;
    }
    if (ipItem >= 0 && ipItem <= 255) {
    } else {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
// algorithmExe(["10.138.15.1"]);
algorithmExe(["01.2.3.8"]);
process.exit();
