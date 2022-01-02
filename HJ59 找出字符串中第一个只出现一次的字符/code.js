var readLine = require("readline");
rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var lineNum = 1;
var inputs = [];
rl.on("line",function(input){
    inputs.push(input.trim());
    if(inputs.length === lineNum){
        algorithmExe(inputs);
        inputs = [];
    }
});

function algorithmExe(inputArr){
    var inStr = inputArr[0].split("");
    var tjStr = [];
    var tjIndexArr = [];
    for(var i =0;i<inStr.length;i++){
        var index = tjStr.indexOf(inStr[i])
        if(index === -1){
            tjStr.push(inStr[i]);
        }else{
           tjIndexArr.push(index);
        }
    }
    var result = null;
    for(var i = 0;i<tjStr.length;i++){
        if(!tjIndexArr.includes(i)){
            result = tjStr[i];
            break;
        }
    }
    if(result) {
        console.log(result);
    }else{
        console.log(-1)
    }
    
}