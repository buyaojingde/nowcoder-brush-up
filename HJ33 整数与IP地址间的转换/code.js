var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputCount = 2;
var inputs = [];

rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputCount) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputs) {
  var ip = inputs[0].split(".").map((item) => Number(item));
  var ip10 = Number(inputs[1]);
  var outIp10 = 0;
  for (let i = 0; i < ip.length; i++) {
    outIp10 += Math.pow(256, ip.length - i - 1) * ip[i];
  }
  console.log(outIp10);
  var outIp = [];
  var chu = 256;
  for (let index = 0; index < 4; index++) {
    var re = ip10 % chu;
    ip10 = Math.floor(ip10 / chu);
    outIp.push(re);
  }
  console.log(outIp.reverse().join("."));
}
var testStr1 = ["10.0.3.193", "167969729"];
algorithmExe(testStr1);
process.exit();
