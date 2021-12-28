var readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var k = 1;
var inputs = [];
rl.on("line",function(input){
    inputs.push(input);
    if(inputs.length === k){
        deal(inputs);
        inputs = [];
    }
});
var x = 0;
var y = 0;
function deal(inputArr){
    var coordArr = inputArr[0].split(";");
    for(var i = 0;i<coordArr.length;i++){
        var coordItem = coordArr[i];
        var first = coordItem.slice(0,1);
        var coordNum = Number(coordItem.slice(1),10);
        if(!isNaN(coordNum)){
            if(first === "A"){
                  x -=coordNum;  
            }
            if(first === "D"){
                  x +=coordNum;  
            }
            if(first === "W"){
                  y +=coordNum;  
            }
            if(first === "S"){
                  y -=coordNum;  
            }
        }
    }
    console.log(x + "," + y);
}