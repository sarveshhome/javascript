/***********************
 * this keyword
 ***********************/
/*
 console.log(this);

 calculateAge(1996);
 function calculateAge(years)
 {
    console.log(2019 - years);
    console.log(this);
 }

 */

 var sarvesh = {
     name:'sarvesh',
     yearofBirth: 1989,
     calculateAge: function(){
         console.log(this);
         console.log(2019 - this.yearofBirth);
          
         function innerFunction()
         {
             console.log(this);
         }
         innerFunction();
     }
 }

 sarvesh.calculateAge();