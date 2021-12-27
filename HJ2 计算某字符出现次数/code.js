var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var K = 2;
var inputs = [];
rl.on('line', function(data) {
    inputs.push(data.trim());
    if (K == inputs.length) { //
        var result = deal(inputs);

        console.log(result);
        inputs.length = 0;

    }
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var s1 = inputs[0].split("");
    var s2 = inputs[1].toLowerCase();
    var len = s1.length;
    let count = 0;
    for(var i = 0;i<len;i++){
        if(s1[i].toLowerCase()=== s2){
            count ++;
        }
    }  
    
    return count;
}

var ss = "ABCaD";
var s = "a";
console.log(deal([ss,s]));