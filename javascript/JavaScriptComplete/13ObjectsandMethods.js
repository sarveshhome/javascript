/*********************
 * Objects and Methods
 *********************/

var sarvesh = {
    //key:value
    firstName: "Sarvesh",
    lastName : "kumar",
    birthYear :1995,
    family:['kumar','singh','ram','shyam'],
    job : 'ITProf',
    isMarried : false,
    // calAge: function(birthYear){
    //     return 2019 - birthYear;
    // }
    
    // calAge: function(){
    //     return 2019 -this.birthYear;
    // }

    calAge: function(){
        this.age = 2019 -this.birthYear;
    }

};

//console.log(sarvesh.calAge(1995));

//console.log(sarvesh.calAge());

//sarvesh.age = sarvesh.calAge();

sarvesh.calAge();
console.log(sarvesh);
