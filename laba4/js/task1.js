'use strict';

 window.onload = () => {
     changeImg();
 };

let form = document.forms[0];
let picture = document.getElementById('img');

let latinSymbols = (char) => {
    return /[a-z]/i.test(char);
};

let numberSymbol = (element) => {
    return Number(element) > 0 && Number(element) < 2000;
};

function changeImg() {

    let isValid = true;
    form.onsubmit = () =>{

        document.getElementById('alter_text').style="border-color: none";
        document.getElementById('imgHeight').style="border-color: none";

        let newHeight = form.imgHeight.value;
        //start
        if(!numberSymbol(newHeight)){
            document.getElementById('imgHeight').style="border-color: red";
        }else {
            picture.style.height = newHeight + 'px';
        }
        // end - wrote this code as example js validation
        // at HTML wrote type of input - number - it`s better, isn`t it ?
        let newWidth = form.imgWidth.value;
        picture.style.width = newWidth + 'px';

        let newBorderWidth = form.borderWidth.value;
        picture.style.border = newBorderWidth + 'px solid';

        let newBorderColor = form.borderColor.value;
        picture.style.borderColor = newBorderColor;

        let newAltText = form.alterText.value;
        if(!latinSymbols(newAltText)){
            document.getElementById('alter_text').style="border-color: red";
        }else {
            picture.setAttribute('alt',`${newAltText}`);
        }

        return false;
    };

}

