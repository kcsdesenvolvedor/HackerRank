'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var positivos = 0;
    var negativos = 0;
    var zero = 0;
    
    if(arr.length <= 100 && arr.length > 0){
        arr.forEach(n => {
        if(n < -100 || n > 100)
            return;
            
        if(n > 0){
            positivos++;
        }else if(n < 0){
            negativos++;
        }else{
            zero++;
        }        
    });
    
    var razaoPositivos = positivos/arr.length;
    var razaoNegativos = negativos/arr.length;
    var razaoZero = zero/arr.length;
    
    console.log(razaoPositivos.toFixed(6));
    console.log(razaoNegativos.toFixed(6));
    console.log(razaoZero.toFixed(6));
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}