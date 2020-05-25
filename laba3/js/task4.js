'use strict';
let arr = [
    {value: 100, type: 'USD'},
    {value: 215, type: 'EUR'},
    {value: 7, type: 'EUR'},
    {value: 99, type: 'USD'},
    {value: 354, type: 'USD'},
    {value: 12, type: 'EUR'},
    {value: 77, type: 'USD'},
];

//console.log(arr);

let resultSum = arr.filter(x => x.type === 'USD' && x.value < 100)
    .map(newArr => newArr.value).reduce((previousValue, currentValue)=> previousValue + currentValue);

console.log(resultSum);

let resultMultiple = arr.filter(x => {return x.type === 'EUR'}).map(newArr => {return {value: newArr.value*2, type: newArr.type}});
//console.log(resultMultiple);


let message = function(resSum, resArr){
    let str = resSum + "<br/>" + resArr;
    return str;
};

//document.write(message(resultSum,resultMultiple));