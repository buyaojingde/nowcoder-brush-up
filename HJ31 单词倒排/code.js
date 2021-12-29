var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputCount = 1;
var inputs = [];

rl.on("line", function (input) {
  inputs.push(input.trim());
  if (inputs.length === inputCount) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputs) {
  var ens = inputs[0].split("");
  var noOther = addBlank(ens);
  noOther.unshift(" ");
  var outs = [];
  var start = -1;
  var end = -1;
  for (let i = noOther.length - 1; i >= 0; i--) {
    if (noOther[i] !== " ") {
      if (end === -1) {
        end = i;
      }
    } else {
      if (end !== -1) {
        start = i;
      }
    }
    if (start !== -1 && end !== -1) {
      var word = noOther.slice(start + 1, end + 1).join("");
      outs.push(word);
      start = -1;
      end = -1;
    }
  }
  console.log(outs.join(" "));
}

function addBlank(inStr) {
  var outStr = [];
  for (let i = 0; i < inStr.length; i++) {
    var charCode = inStr[i].charCodeAt();
    if (
      !(
        (charCode <= 90 && charCode >= 65) ||
        (charCode <= 122 && charCode >= 97)
      )
    ) {
      outStr.push(" ");
    } else {
      outStr.push(inStr[i]);
    }
  }
  return outStr;
}
var testStr = ["$bo*y gi!r#l"];
var testStr1 = ["I am a student"];
var testStr2 = ["wyZksmG XY ReXA Pedt mabjlFdGmJUseHz GzciYPmv OFKis SQzQAeQexsgy ZVrsqqSbHdQF AKPJECiP vOgIXvbuJTDnpPcCD GWlPWTGQSWyaZtxHd ydpT pHSeYKetXH RdBcHmggvESwIEWlBtYq H VdkLHvSGupDEFOfH BcWxbNOQOOYYhBNEz MAFjrzTFKWZOCGGZazCn Ef owSLRoGJXMWAR pLdQQWx ZSRXXCUOSetMNfSOnRk jDhskr WHBmEifhgEEBoT CJNtdFFM n UAbfJKuoVfoqAvbEcv MnDWh"];
// var bland = addBlank(testStr.split(""));
// console.log(bland);

algorithmExe(testStr2);
process.exit();
