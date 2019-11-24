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
 let ages6 = years.map(element => 2019 - element);
console.log(ages6);

ages6 = years.map((ele,index) => `Age element ${index + 1}: ${2019 - ele}.`);
console.log(ages6);
/**
 * 0: "Age element 1: 25."1: "Age element 2: 49."2: "Age element 3: 33."3: "Age element 4: 77."length: 4__proto__: Array(0)
 */

 ages6 =  years.map((el,index) => {

     const now = new Date().getFullYear();
     const age = now - el;
     return `Age element ${index +1}: ${age}`;
 });
 console.log(ages6);