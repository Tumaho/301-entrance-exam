'use strict'

function greaterThan(Array,num){
    for(var i=0;i<Array.length;i++){
       if(num<Array[i]){
           counter++;
       }

    }
    return counter;
}

var arrayOfNumbers = [2,5,7,1,6];
var number=3;
var counter=0;

var result =greaterThan(arrayOfNumbers,number);
console.log(result);
