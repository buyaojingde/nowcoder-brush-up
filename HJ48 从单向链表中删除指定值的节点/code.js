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
  var lastNode = null;
  var currentDelNode = head;
  while (currentDelNode !== null) {
    if (currentDelNode.value === delNodeNum) {
      if (lastNode === null) {
        var headNex = currentDelNode.next;
        head = headNex;
        currentDelNode.next = null;
        currentDelNode = head;
      } else {
        var delNode = currentDelNode;
        var delNext = delNode.next;
        lastNode.next = delNext;
        delNode.next = null;
        currentDelNode = delNext;
      }
    } else {
      lastNode = currentDelNode;
      currentDelNode = currentDelNode.next;
    }
  }

  if (!head) {
    console.log(null);
  }
  var logNode = head;
  var nodeArr = [];
  while (logNode) {
    nodeArr.push(logNode.value);
    logNode = logNode.next;
  }
  console.log(nodeArr.join(" "));
}
// algorithmExe(["5 2 3 2 4 3 5 2 1 4 3"]);
algorithmExe(["1 2 2"]);
process.exit();
