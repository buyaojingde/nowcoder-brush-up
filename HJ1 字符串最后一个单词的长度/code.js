const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var reversed = input.split('').reverse(); 
    var count = 0;
    for (var s of reversed) {
        if (s === ' ') {
            console.log(count);
            return;
        }
        count++;
    }
    console.log(count);
});