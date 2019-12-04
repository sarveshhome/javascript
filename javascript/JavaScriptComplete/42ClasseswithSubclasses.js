/**
 * Classes with Subclasses
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

var Athlete5 = function(name,yearOfBirth,job,olymicGames,medals){
    Person5.call(this,name,yearOfBirth,job);
    this.olymicGames =olymicGames;
    this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}
var sarveshAthlete5 = new Athlete5('Sarvesh',1989,'swimmer',4,9);

sarveshAthlete5.calculateAge();
sarveshAthlete5.wonMedal();


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
 
}
class Athlete6 extends Person6{
    constructor(name,yearOfBirth,job,olymicGames,medals){
        super(name,yearOfBirth,job);
        this.olymicGames= olymicGames;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

var sarveshAthlete6 = new Athlete6('Sarvesh',1989,'swimmer',4,9);

sarveshAthlete6.calculateAge();
sarveshAthlete6.wonMedal();