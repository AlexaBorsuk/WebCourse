'use strict';
game();

function game(){
    let propose = confirm('Давай пограємо у Передбачувач майбутнього ?');
    if (propose){
        let gamer = {};
        name(gamer);
        childNumber(gamer);
        jobTitle(gamer);
        loverName(gamer);
        country(gamer);
        result(gamer);
    }    
}

function name(gamer) {
    gamer['name'] = prompt(`Як Вас звуть ?`, '_no_name_')
}

function childNumber(gamer) {
    gamer['child_number'] = prompt(`Скільки діточок Ви хочете`,'0');
}

function jobTitle(gamer) {
    gamer['job_title'] = prompt('Про яку посаду Ви мрієте ?','фрілансер');
}

function loverName(gamer) {
    gamer['lover_name'] = prompt('Як мають звати партнера Вашої мрії ?' ,'Боб');
}

function country(gamer) {
    gamer['country'] = prompt('В якій країні Ви б хотіли зустріти старість ?','Югославія');
}

function result(gamer) {
    let gameResult = `Ну що ж, ${gamer['name']}!\nВашого партнера зватимуть ${gamer['lover_name']} і Ви разом будете 
    виховувати ${gamer['child_number']} дитя(дітей) \nВаше сімейство житиме у країні - ${gamer['country']},а посада, 
    яку Ви займатимите - ${gamer['job_title']})))`;
    alert(gameResult);
}