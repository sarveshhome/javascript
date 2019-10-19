/******************************************
 * The Prototype Chain in the Console
 *********************************/


var Person = function(name,yearofBirth,job){
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
    // this.calculateAge = function(){
    //     console.log(2019-this.yearofBirth);
    // }
};

Person.prototype.calculateAge = function(){
    console.log(2019-this.yearofBirth);
};
var sarvesh = new Person('Sarvesh',1989,'teacher');

Person.prototype.lastName = 'singh';

console.log(Person.prototype);
console.log('Person.prototype.prototype : ' +Person.prototype.prototype); 

console.log(Person.prototype == sarvesh.__proto__);

console.log('sarvesh.__proto__.__proto__   : ' + sarvesh.__proto__.__proto__);
console.log('sarvesh.__proto__   : ' + sarvesh.__proto__);

console.log('sarvesh.hasOwnProperty(\'job\') : ' + sarvesh.hasOwnProperty('job'));
