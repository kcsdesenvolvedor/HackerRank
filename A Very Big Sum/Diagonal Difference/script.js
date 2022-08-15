'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    var somaDiagonalDireita = 0;
    var somaDiagonalEsquerda = 0;
    var j = arr.length-1;

    for(let i = 0; i < arr.length; i++){
        for(let c = 0; c < arr.length; c++){
            if(arr[i][c] < -100 || arr[i][c] > 100)
                return; 
        }
    }
    for(let i = 0; i < arr.length; i++){
        somaDiagonalDireita += arr[i][i];       
    }
    
    for(let i = 0; i < arr.length; i++){
        somaDiagonalEsquerda += arr[i][j--]
    }

    return Math.abs(somaDiagonalDireita - somaDiagonalEsquerda);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
