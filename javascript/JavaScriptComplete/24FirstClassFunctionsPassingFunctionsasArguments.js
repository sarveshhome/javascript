/***************************************************
 * First Class Functions Passing Functions as Arguments
 ***************************************************/

 var years =[1993,1983,1975,1965,1999];
 
 //Generic Function
 function arrayCalc(arr, fun){
     var arrRes = [];
     for (let i = 0; i < arr.length; i++) {
         arrRes.push(fun(arr[i]));         
     }
     return arrRes;
 }

 function calculateAge(el){
     return 2016-el;
 }

 function maxHeartRate(el){
     if (el>=18 && el <= 81) {
         return Math.round(206.9- (0.67 * el));
     }
     else
     {
         return -1;
     }
 }

 var ages= arrayCalc(years,calculateAge);
 console.log(ages);
//output : [ 23, 33, 41, 51, 17 ]

function isFullAge(el){
    return el>=18;
}
var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges);
//output : [ true, true, true, true, false ]

var Rates = arrayCalc(ages,maxHeartRate);
console.log(Rates);
//output : [ 191, 185, 179, 173, -1 ]

//Call by function 

