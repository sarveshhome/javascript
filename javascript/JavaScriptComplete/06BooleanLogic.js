/*********************
 * Boolean logic
 */


 var firstName = 'Sarvesh';
 var age = 14;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if(age>=13 && age < 20 ) { // Between 13 and 20  === ange >=13 AND age < 20
    console.log(firstName + ' is a teenagar.');
 }
 else if(age>=20 && age < 30 ) { // Between 20 and 30  === ange >=20 AND age < 30
    console.log(firstName + ' is a younger man.');
 }
 else
 {
     console.log(firstName + ' is a man.'); 
 }