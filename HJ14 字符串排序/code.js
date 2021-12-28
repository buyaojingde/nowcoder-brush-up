var readLine = require("readline");
rl = readLine.createInterface({
   input: process.stdin,
    output:process.stdout,
});
var k = 0;
var inputs = [];
rl.on("line",function(input){
    if(k === 0){
        k = parseInt(input);
    }else{
        inputs.push(input);
    }
    if(inputs.length === k){
        deal(inputs);
    }
});

function deal(inputArr){
    inputArr.sort((a,b)=>{
        var aArr = a.split("");
        var bArr = b.split("");
        var maxLength = aArr.length>bArr.length?aArr.length:bArr.length;
        for(var i = 0;i<maxLength;i++){
            if(!aArr[i]) return -1;
            if(!bArr[i]) return 1;
            var aCode = aArr[i].charCodeAt();
            var bCode = bArr[i].charCodeAt();
            if(aCode>bCode){
                return 1;
            }else if(aCode<bCode){
                return -1;
            }
        }
        return 0;
    });
    for(var i = 0;i<inputArr.length;i++){
        console.log(inputArr[i]);
    }
}