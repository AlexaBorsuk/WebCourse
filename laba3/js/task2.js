'use strict';

let numberOfRows = prompt('Please input number  of rows for Pascale Triangle: ', '3');

let makePaskalTriangle = function(rows) {
    let trigon = [[1], [1, 1]];
    let str = `TRIGON OF PASKAL<br/>`;
    if(rows === '0'){
        return alert('Invalid number of rows!');
    }
    if(rows === '1'){
        return [[1]];
    } else if(rows === '2'){
        return  [[1], [1, 1]];
    } else {
        for(let i = 1; i < rows; i++){
            generateRow(trigon);

        }
        str += stringForHtml(trigon);
    }
    return str;
};

let generateRow = function(trigon){
    let previous = trigon[trigon.length - 1];
    let newRow = [1];
    for(let i = 0; i < previous.length - 1; i++){
        let current = previous[i];
        let next = previous[i+1];
        newRow.push(current + next);
    }
    newRow.push(1);
    return trigon.push(newRow);
};

let stringForHtml = function(array){
    let str = '<br/>';
    //array.forEach(element => str += element + '<br/>');
    return array.reduce((str, current) => str + current + '<br/>' );
};

document.write(makePaskalTriangle(numberOfRows));
