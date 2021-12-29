var readLine = require("readline");
rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var inputCount = 2;
var inputs = [];

rl.on("line", function (input) {
  inputs.push(input);
  if (inputs.length === inputCount) {
    algorithmExe(inputs);
    inputs = [];
  }
});

function algorithmExe(inputs) {
  var en = encrypto(inputs[0]);
  var de = decrypto(inputs[1]);
  console.log(en);
  console.log(de);
}

function encrypto(input) {
  var out = [];
  for (let i = 0; i < input.length; i++) {
    var charC = input.charCodeAt(i);
    var outChar;
    if (charC >= 48 && charC <= 57) {
      if (charC === 57) {
        outChar = 48;
      } else {
        outChar = charC + 1;
      }
    }

    if (charC >= 97 && charC <= 122) {
      if (charC === 122) {
        outChar = 97;
      } else {
        outChar = charC + 1;
      }
      outChar -= 32;
    }
    if (charC >= 65 && charC <= 90) {
      if (charC === 90) {
        outChar = 65;
      } else {
        outChar = charC + 1;
      }
      outChar += 32;
    }
    out.push(String.fromCharCode(outChar));
  }
  return out.join("");
}

function decrypto(input) {
  var out = [];
  for (let i = 0; i < input.length; i++) {
    var charC = input.charCodeAt(i);
    var outChar;
    if (charC >= 48 && charC <= 57) {
      if (charC === 48) {
        outChar = 57;
      } else {
        outChar = charC - 1;
      }
    }

    if (charC >= 97 && charC <= 122) {
      if (charC === 97) {
        outChar = 122;
      } else {
        outChar = charC - 1;
      }
      outChar -= 32;
    }
    if (charC >= 65 && charC <= 90) {
      if (charC === 65) {
        outChar = 90;
      } else {
        outChar = charC - 1;
      }
      outChar += 32;
    }
    out.push(String.fromCharCode(outChar));
  }
  return out.join("");
}
