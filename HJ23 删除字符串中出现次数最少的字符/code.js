var readLine = require("readline");
rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var k = 1;
var inputs = [];

rl.on("line",function(input){
    inputs.push(input.trim());
    if(inputs.length === k){
        doSomething(inputs);
        inputs = [];
    }
});

function doSomething(inputArr){
    var inStr = inputArr[0].split("");
    var zimuCount = [];
    for(var i = 0;i<26;i++){
        zimuCount.push(0);
    }
    for(var i =0;i<inStr.length;i++){
        var cCode = inStr[i].charCodeAt();
        var indexC = cCode - 97;
        zimuCount[indexC] ++;
    }
    var minCount = 21;
    var minIndex = 0;
    for(var i = 0;i<zimuCount.length;i++){
        if(zimuCount[i] !== 0 && zimuCount[i]<minCount){
            minCount = zimuCount[i];
            minIndex = i;
        }
    }
    var outStr = "";
     for(var i =0;i<inStr.length;i++){
        var cCode = inStr[i].charCodeAt();
        var indexC = cCode - 97;
         if(zimuCount[indexC] !== minCount && zimuCount[indexC] !== 0){
             outStr += inStr[i];
         }
    }
    console.log(outStr);
}