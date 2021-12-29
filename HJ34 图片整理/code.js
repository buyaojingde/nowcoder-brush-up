var readLine = require("readline");
rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var inputLines = 1;
var inputs = [];
rl.on("line",function(input){
    inputs.push(input.trim());
    if(inputs.length === inputLines){
        algorithmExe(inputs);
        inputs = [];
    }
});

function algorithmExe(arr){
    var strArr = arr[0].split("");
    strArr.sort((a,b)=>{
        return a.charCodeAt() - b.charCodeAt();
    });
    var outStr = strArr.join("");
    console.log(outStr);
}