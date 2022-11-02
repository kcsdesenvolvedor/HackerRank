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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  console.log(grades.length)
    if(grades.length > 0 && grades.length <= 60){
      grades.forEach(element => {
        if(element < 0 || element > 100){
          return;
        }
      });
      var arrayGrades = [];
    for(var i = 0; i < grades.length; i++){
      var multiple = Math.trunc(grades[i]/5+1)*5;
      var difference = multiple - grades[i];

      if(grades[i] < 38 || difference >= 3){
        arrayGrades[i] = grades[i];
      }else if(difference < 3){
        arrayGrades[i] = multiple;
      }

    }
    return arrayGrades;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
console.log(gradingStudents([68,80]));