/***************************
 * Objects and Properties
 **************************/

//Object literal
 var sarvesh = {
        //key:value
        firstName: "Sarvesh",
        lastName : "kumar",
        birthYear :1995,
        family:['kumar','singh','ram','shyam'],
        job : 'ITProf',
        isMarried : false
 };

 console.log(sarvesh.firstName);
 console.log(sarvesh['lastName']);
 var x = 'birthYear';
 console.log(sarvesh[x]);

 //new Object syntax
 var kumar = new Object();
 kumar.firstName ='Sana';
 kumar['lastName'] ='singh';
 kumar.birthYear =1991;
 console.log(kumar);
