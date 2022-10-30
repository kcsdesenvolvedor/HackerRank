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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
  const arrayTime = s.split(':');
  var hh = arrayTime[0];
  var mm = arrayTime[1];
  var ss = arrayTime[2].replace(/[^0-9]/g,'');
  var format = arrayTime[2].replace(ss, '');

  if(format == 'PM' && hh != '12'){
    hh = Number(hh)+12;
  }else if(format == 'AM' && hh == '12'){
    hh = '00';
  }


  return `${hh}:${mm}:${ss}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

console.log(timeConversion('12:12:34PM'));