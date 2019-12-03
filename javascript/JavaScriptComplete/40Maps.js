/**
 * Maps
 * 
 * Q: why is use Maps
 * A: better because anything Keys which lot of possibility. Maps are iterable so that i can manipulate very easy. third size property finally add and remove very easily
 * chose  over object
 * Q:  why Maps is better than Object to create Hash Map
 * 
 */

 const question = new Map();
 question.set('question','What is the offical name of lateste mojor javascript version?');
 question.set(1, 'ES5');
 question.set(2, 'ES6');
 question.set(3,'ES2015');
 question.set(4,'ES7');
 question.set('correct',3);
 question.set(true,'Correct answer : ES2015');
 question.set(false,'Wrong,please try again');


 console.log(question.get('question'));
 console.log(question.size);

 if (question.has(4)) {
     //question.delete(4);
     console.log('answer 4 is here');
 }

 //question.clear();

 //question.forEach((value,key) => console.log(`This is ${key}, and it's set to ${value}`));


 for(let [key,value] of question.entries()){
     if (typeof(key) ==='number') {
         console.log(`Answer ${key}: ${value}`);
     }
 }

const ans = parseInt(prompt('write the correct answer'));
console.log(question.get(ans===question.get('correct')));
 
