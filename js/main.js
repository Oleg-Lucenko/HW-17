document.body.innerHTML ='<table border=1, cellspacing=0>';
let table = document.querySelector('table');

let allRows = '';

for (i = 1; i <= 10; i++) {
    allRows = allRows + '<tr>' + '</tr>';
};

table.innerHTML = allRows;

let rowsArr = document.querySelectorAll('tr');

for (j = 0; j < rowsArr.length; j++) {
    rowsArr[j].innerHTML = '';
    for (k = 0; k < rowsArr.length; k++) {
        rowsArr[j].innerHTML = rowsArr[j].innerHTML + '<td width = 25px; align = center>'+((j + 1) * rowsArr.length - rowsArr.length + (k + 1))+'</td>';
        };
    };







