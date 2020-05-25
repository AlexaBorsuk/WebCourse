'use strict';

let numberOfBottles = prompt('how many bottles do you want? ');

function bottleShooting(number) {
    if (number === '0') {
        document.write(`Invalid number of bottles <br>`);
    }else {
        document.write(`You have ${number} bottle(s) <br>`);
    }

    while (number > 0){
        number--;
        if (number === 0){
            document.write(`You do not have any bottles <br>`);
        }else {
            document.write(`You have ${number} bottle(s) <br>`);
        }
    }
}

bottleShooting(numberOfBottles);