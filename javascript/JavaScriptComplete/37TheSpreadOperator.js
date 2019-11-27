/**
 * The Spread Operator
 */

 function addFourAges(a,b,c,d){
     return a+b+c+d;
 }
 var sum1 = addFourAges(19,31,13,22);
console.log(sum1);
//output : 85

//ES5
var ages = [19,31,13,22];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);
//output : 85

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);
/**
 * output 
 * 85
 */
const familySarvesh =['Sarvesh','anvesh','parvati'];
const familyShashi = ['shashi','prabath','puja'];
const bigfamily = [...familySarvesh,'lucy',...familyShashi];
console.log(bigfamily);

/**
 * output 
 * ["Sarvesh", "anvesh", "parvati", "lucy", "shashi", "prabath", "puja"]
 */

 const h = document.querySelector('h1');
 const boxes = document.querySelectorAll('.box');
 const all = [h,...boxes];

 Array.from(all).forEach(cur=> cur.style.color ='purple');
 