/**
 * Classes
 * 
 * Q: What is Static Method in classes
 * A: static method is method which is simple attached the class but not inherited to instance classes so that object create through the class
 */

 var Person5 = function(name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;

 }
 Person5.prototype.calculateAge= function(){
     var age = new Date().getFullYear() - this.yearOfBirth;
     console.log(age);

 }

 var sarvesh5  = new Person5('Sarvesh',1989,'ITProfessional');

 //ES6
class Person6{
    constructor(name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
 
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
      
    }
    
    static greeting(){
        console.log('hey you can do it !');
    }
}

var sarvesh6 = new Person6('Sarvesh',1989,'ITProfessional');

Person6.greeting();