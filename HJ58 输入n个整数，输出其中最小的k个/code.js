var readLine = require("readline");
rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var lineNum = 2;
var inputs = [];
rl.on("line",function(input){
    inputs.push(input);
    if(inputs.length === lineNum){
        algorithmExe(inputs);
        inputs = [];
    }
});

function algorithmExe(inputArr){
   var arr = inputArr[1].split(" ").map(itme=>Number(itme));
   arr.sort((a,b)=>{
       return a-b;});
   var k = Number(inputArr[0].split(" ")[1]);
   var result = arr.slice(0,k);
   console.log(result.join(" "));
    
}

// var testArr = ["12","qw","lk","cxvxv"];
// var result1 = testArr.slice(0,2);
// console.log(result);