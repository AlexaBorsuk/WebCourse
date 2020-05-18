"use strict";
let colors = ['red', 'green', 'yellow', 'pink', 'blue'];

window.onload = () => {
    let students = [];
    students.push(new Student("Борсук", 92));
    students.push(new Student("Бортник",75));
    students.push(new Student("Волнянська",94));
    students.push(new Student("Герга",82));
    students.push(new Student("Гергелюк",42));
    students.push(new Student("Годованюк",67));
    students.push(new Student("Грисюк",89));
    students.push(new Student("Гук",77));
    students.push(new Student("Гусаківський",66));
    students.push(new Student("Діхтяренко",70));
    students.push(new Student("Задорожній",52));
    students.push(new Student("Замора",61));

    students.forEach((item, index, array)=>{
        addNewLine(item, index);
    });

    document.getElementById('addRowBtn').addEventListener('click', function () {
        addNewLine(new Student('',''), document.querySelector('table').rows.length+1);
    });

    createDiagram();
};

/*function createTR() {
    return document.createElement('tr');
}*/

function addDeleteButton(){
    let tableData = document.createElement('td');
    let a = document.createElement('a');
    a.setAttribute('href', '#task');
    a.innerHTML = 'Видалити';
    tableData.append(a);
    return tableData;
}

function addSurname(surname='', index) {
    let tableData = document.createElement('td');
    tableData.addEventListener('input', function () {
        deleteDiagram();
        createDiagram();
    });
    tableData.setAttribute('contenteditable', 'true');
    tableData.innerHTML = surname;
    return tableData;
}

function addMark(mark='0') {
    let tableData = document.createElement('td');
    tableData.addEventListener('input', function () {
        deleteDiagram();
        createDiagram();
    });
    tableData.setAttribute('contenteditable', 'true');
    tableData.innerHTML = mark;
    return tableData;
}

function addDiagramColumn(columnHeight, student, index) {
    let tableData = document.createElement('td');
    tableData.style.verticalAlign = 'bottom';
    let columnValue = document.createElement('div');
    columnValue.innerHTML = student.mark;
    columnValue.style.marginLeft = '15px';
    columnValue.style.visibility = 'hidden';
    tableData.append(columnValue);
    let div = document.createElement('div');
    if (columnHeight/2 >= 90){
        div.style.backgroundColor = 'green';
    }else if (columnHeight/2 >= 61 && columnHeight/2 < 90){
        div.style.backgroundColor = 'yellow';
    }else if (columnHeight/2 < 61){
        div.style.backgroundColor = 'red';
    }
    //div.style.backgroundColor = '#7A7666';
    div.style.width = '50px';
    div.style.height = columnHeight+'px';
    div.style.paddingBottom = '0';
    tableData.append(div);

    div.addEventListener('mouseover', function () {
        columnValue.style.visibility = 'visible';
    });

    div.addEventListener('mouseout', function () {
        columnValue.style.visibility = 'hidden';
    });

    let divSurname = document.createElement('div');
    divSurname.innerHTML = student.surname;
    divSurname.style.textAlign = 'center';
    divSurname.style.width = '50px';
    tableData.append(divSurname);
    return tableData;
}

function addNewLine(student, index) {
    let table = document.querySelector('table');
    let tableRow = document.createElement('tr');;
    tableRow.append(addDeleteButton());
    tableRow.append(addSurname(student.surname, index));
    tableRow.append(addMark(student.mark));
    table.append(tableRow);
    tableRow.querySelector('a').addEventListener('click', function () {
        tableRow.remove();
        deleteDiagram();
        createDiagram();
    });
    //createNewColumnOnDiagram();
}

function Student(surname, mark) {
    this.surname = surname;
    this.mark = mark;
}

function getStudentsFromTable (){
    let table = document.querySelector('table');
    let students = [];
    for(let i=1; i<table.rows.length; i++) {
        students.push(new Student(table.rows[i].cells[1].innerHTML, table.rows[i].cells[2].innerHTML));
    }
    return students;
}

function createDiagram(){
    let students = getStudentsFromTable();
    if(students.length === 0)
        return;

    let diagramTable = document.getElementById('diagram');

    //let max = cars.map(arr=>arr.number).
    //reduce(( max, cur ) => Math.max( max, cur ));
    let tableRow = document.createElement('tr');;
    tableRow.setAttribute('valign', 'bottom');
    students.forEach(function(item, i, student) {
        let height = item.mark*2;
        let td = addDiagramColumn(height, item, i);
        tableRow.append(td);
    });
    diagramTable.append(tableRow);
}
function deleteDiagram() {
    if(document.getElementById('diagram').rows.length>0){
        document.getElementById('diagram').rows[0].remove();
    }

}



