/**
 * Arrow Functions Basics
 * 
 */

 const years = [1991,1967,1983,1939];

 //ES5
 var ages5 = years.map(function(element){
        return 2019 - element;
 });
console.log(ages5)

 //ES6
 const ages6 = years.map(element => 2019 - element);
console.log(ages6);
