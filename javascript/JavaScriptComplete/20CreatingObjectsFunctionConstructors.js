var sarvesh={
        name:'sarvesh',
        yearofBirth: 1989,
        job:'ITProf'
};

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

Person.prototype.lastName = 'singh';


var sarvesh = new Person('Sarvesh',1989,'teacher');
var shashi =  new Person('shashi',1990,'doctor');
var Tarun = new Person('tarun',1991,'journalist');

sarvesh.calculateAge();
shashi.calculateAge();
Tarun.calculateAge();


console.log(sarvesh.lastName);
console.log(shashi.lastName);
console.log(Tarun.lastName);

console.log(sarvesh);