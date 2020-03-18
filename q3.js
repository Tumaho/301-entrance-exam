'use strict'

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// this code for put the date.
var fullDate = new Date();
var today = fullDate.getDate();
var month = months[fullDate.getMonth()];
var year = fullDate.getFullYear();
var dateToday = document.getElementById('dateP');
dateToday.textContent = `${month} ${today} ${year}`;




var resultList = document.getElementById('orderList');
var theList = document.createElement('ol');
resultList.appendChild(theList);

var arrayOfObjects = [];

function activities(act, actDate) {
    this.act = act;
    this.actDate = actDate;

    arrayOfObjects.push(this);
}
var submitt = document.getElementById('submitResult');
submitt.addEventListener('click', function (event) {
    event.preventDefault();
    
    
    var input1 = document.getElementById('doneToday').value;
    var input2 = document.getElementById('dateSelected').value;
    console.log(input1);
    

    var liE = document.createElement('li');
    theList.appendChild(liE);
    
    liE.textContent = `${input1} at ${input2}`;

    new activities(input1, input2);
    setData();
   


});


function setData() {
    var userData = JSON.stringify(arrayOfObjects);
    localStorage.setItem('obada', userData);
}

function getData() {
    var userData = localStorage.getItem('obada');
    if (userData) {
        arrayOfObjects = JSON.parse(userData);

        
        for(var i=0; i<arrayOfObjects.length;i++){
        var liE = document.createElement('li');
        theList.appendChild(liE);
        liE.textContent = `${arrayOfObjects[i].act} at ${arrayOfObjects[i].actDate}`;}
    }
}
getData();
