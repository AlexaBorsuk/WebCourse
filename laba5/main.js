"use strict";

let boxForLoading = document.createElement('div');
    boxForLoading.classList.add('text-center');

let loading = document.createElement('div');
    loading.classList.add('spinner-grow');
    loading.classList.add('text-danger');
    loading.classList.add('m-5');

boxForLoading.append(loading);

let httpRequest;
let pictureRow = 5;

function loadPhotos() {
    return new Promise(function (resolve, reject) {
        if(window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType('text/xml');
            }
        }else if (window.ActiveXObject) // for IE
            return new ActiveXObject("Microsoft.XMLHTTP"); // another browsers are okay
        else if (window.XMLHttpRequest)
            return new XMLHttpRequest();
        else {
            alert("Browser does not support AJAX.");
            return null;
        }
        httpRequest.open('GET', 'https://randomuser.me/api/?results=25');
        httpRequest.responseType = "json";
        httpRequest.onload = function () {
            if (this.status === 200) {
                resolve(httpRequest.response);
            } else {
                reject(Error(httpRequest.statusText));
            }
        };
        httpRequest.onerror = function () {
            reject (new Error ("Network Error"));
        };
        httpRequest.send();
    }).then(
            element=>{
                for(let i=0; i<element.results.length; i+=pictureRow){
                    let div = document.createElement('div');
                    div.classList.add('row');
                    div.classList.add('container-fluid');

                    for(let j=0; j<pictureRow; j++){
                        let img = document.createElement('img');
                        img.setAttribute('src', element.results[i+j].picture.large);
                        img.classList.add('img-fluid');
                        img.classList.add('col');
                        img.style.padding = '10px';
                        div.append(img);
                    }
                    document.getElementById('general').append(div);
                }
                },
            error => {
                console.log(error);
            })
}

window.onload = function () {
    loadPhotos();
};

window.addEventListener('scroll', function() {
    let documentHeight = document.documentElement.getBoundingClientRect().bottom;
    let someHeight = document.documentElement.clientHeight;
    if(documentHeight <= (someHeight+100)) {
        document.body.append(boxForLoading);
        setTimeout(loadPhotos, 1500, 25);
    }
});

