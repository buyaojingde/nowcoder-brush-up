var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 1;
var inputs = [];
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var intputNums = inputArr[0].split(" ").map((item) => Number(item));
  var nodeNum = intputNums[0];
  var head = { value: intputNums[1], next: null };
  var delNodeNum = intputNums[intputNums.length - 1];
  for (let i = 2; i < intputNums.length - 1; i = i + 2) {
    var nextNodeNum = intputNums[i];
    var nextNode = { value: nextNodeNum, next: null };
    var currentNodeNum = intputNums[i + 1];
    var currentNode1 = head;
    while (currentNode1.value !== currentNodeNum) {
      currentNode1 = currentNode1.next;
    }
    if (currentNode1.next) {
      var nextNextNode = currentNode1.next;
      nextNode.next = nextNextNode;
      currentNode1.next = nextNode;
    } else {
      currentNode1.next = nextNode;
    }
  }
  if (delNodeNum === head.value) {
    var headNex = head.next;
    if (!headNex) {
      console.log(null);
      return;
    }
    head.next = null;
    head = headNex;
  } else {
    var lastNode = head;
    while (lastNode.next.value !== delNodeNum) {
      if (!lastNode.next) {
        lastNode = null;
        break;
      }
      lastNode = lastNode.next;
    }
    var delNode = lastNode.next;
    var delNext = delNode.next;
    lastNode.next = delNext;
  }
  var logNode = head;
  var nodeArr = [];
  while (logNode) {
    nodeArr.push(logNode.value);
    logNode = logNode.next;
  }
  console.log(nodeArr.join(" "));
}
algorithmExe(["5 2 3 2 4 3 5 2 1 4 3"]);
process.exit();
