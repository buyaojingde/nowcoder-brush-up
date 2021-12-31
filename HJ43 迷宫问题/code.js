/*
 *@description: 只找一条路径，没有比较最短路径（反正可以过），最短路径的话就要把多条路径找到了比较或者其他性能更好的方法
 *@author: lianbo 
 *@date: 2021-12-31 14:02:44
*/
var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputLines = 1;
var inputs = [];
var matsRows;
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputLines) {
    matsRows = Number(inputs[0].split(" ")[0]) + 1;
  }
  if (matsRows === inputs.length) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputArr) {
  var rcStr = inputArr[0].split(" ");
  var rows = Number(rcStr[0]);
  var columns = Number(rcStr[1]);
  var mat = [];
  for (let i = 0; i < rows; i++) {
    var rowTmp = [];
    var inputRow = inputArr[i + 1].split(" ");
    for (let j = 0; j < inputRow.length; j++) {
      var node = {};
      node.x = j;
      node.y = i;
      node.value = inputRow[j];
      node.isPath = true;
      rowTmp.push(node);
    }
    mat.push(rowTmp);
  }
  function isEnd(endNode) {
    return endNode.x === columns - 1 && endNode.y === rows - 1;
  }

  function goNexts(nodeFrom) {
    var nextNodes = [];
    var nodeLeft = nodeFrom.y + 1 < rows && mat[nodeFrom.y + 1][nodeFrom.x];
    if (nodeLeft && nodeLeft.value !== "1") {
      if (!path.includes(nodeLeft)) {
        nextNodes.push(nodeLeft);
      }
    }
    var nodeRight = nodeFrom.y - 1 >= 0 && mat[nodeFrom.y - 1][nodeFrom.x];
    if (nodeRight && nodeRight.value !== "1") {
      if (!path.includes(nodeRight)) {
        nextNodes.push(nodeRight);
      }
    }
    var nodeUp = mat[nodeFrom.y][nodeFrom.x + 1];
    if (nodeUp && nodeUp.value !== "1") {
      if (!path.includes(nodeUp)) {
        nextNodes.push(nodeUp);
      }
    }
    var nodeDown = mat[nodeFrom.y][nodeFrom.x - 1];
    if (nodeDown && nodeDown.value !== "1") {
      if (!path.includes(nodeDown)) {
        nextNodes.push(nodeDown);
      }
    }
    return nextNodes;
  }

  var currentNode = mat[0][0];
  var path = [currentNode];
  var forkNodes = [];
  // 使用深度遍历需要一个节点
  while (!isEnd(currentNode)) {
    var nextNodes = goNexts(currentNode);
    if (nextNodes.length > 1) {
      forkNodes.push(currentNode);
    }
    if (nextNodes.length > 0) {
      currentNode = nextNodes[0];
      path.push(currentNode);
    } else {
      var lastFork = forkNodes[forkNodes.length - 1];
      var goNextsFromFork = goNexts(lastFork);
      while (goNextsFromFork.length === 0) {
        forkNodes.pop();
        lastFork = forkNodes[forkNodes.length - 1];
        goNextsFromFork = goNexts(lastFork);
      }
      var endNodeIndex = path.indexOf(currentNode);
      currentNode = lastFork;
      var forkNodeIndex = path.indexOf(currentNode);
      for (let i = forkNodeIndex + 1; i <= endNodeIndex; i++) {
        path[i].isPath = false;
      }
    }
  }
  for (let i = 0; i < path.length; i++) {
    if (path[i].isPath) {
      console.log("(" + path[i].y + "," + path[i].x + ")");
    }
  }
  // console.log(path);
}
// algorithmExe([
//   "5 5",
//   "0 1 0 0 0",
//   "0 1 1 1 0",
//   "0 0 0 0 0",
//   "0 1 1 1 0",
//   "0 0 0 1 0",
// ]);
algorithmExe(["3 2", "0 1", "0 1", "0 0"]);
process.exit();
