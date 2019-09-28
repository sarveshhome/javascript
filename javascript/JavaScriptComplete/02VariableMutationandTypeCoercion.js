/**********************************************
 * Variable Mutation and Type coercion
 */

 var firstname = 'sarvesh';
 var age = 26;

 //type coercion
 console.log(firstname + ' ' + age);
 
 console.log(typeof (firstname + ' ' + age));

var job, isMarried;
job = 'ItProcessional';
isMarried = false;

console.log(firstname + ' is a '+ age + ' year old '+ job + '. Is he married? '+ isMarried);

//variable mutation
age ='twenty six';
job ='Geek';

console.log(firstname + ' is a ' + age + ' year old ' + job + ' .Is he married? '+ isMarried);

var lastname = prompt('What is his last Name?');
console.log(firstname +' '+ lastname);




