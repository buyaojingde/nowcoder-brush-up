var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineNum = 1;
var inputs = [];
var lineNum1 = 0;
rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === lineNum) {
    lineNum1 = Number(inputs[0]) + 2;
  }
  if (inputs.length === lineNum1) {
    algorithmExe(inputs);
    inputs = [];
    lineNum1 = 0;
  }
});

function algorithmExe(inputArr) {
  var sortNum = Number(inputArr[0]);
  var sortType = Number(inputArr[1]);
  var students = [];
  for (let i = 0; i < sortNum; i++) {
    var stu = inputArr[i + 2].split(" ");
    var student = { name: stu[0], score: stu[1] };
    students.push(student);
  }
  if (sortType === 0) {
    students.sort((a, b) => {
      return b.score - a.score;
    });
  } else {
    students.sort((a, b) => {
      return a.score - b.score;
    });
  }
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " " + students[i].score);
  }
}

algorithmExe(["3", "1", "fang 90", "yang 50", "ning 70"]);
process.exit();
