/*****************
 * If / else statements 
 */


 var firstname = 'Sarvesh';
 var civilStatus ='single';

 if (civilStatus === 'married') {
     console.log( firstname +' is married!');
 } else {
     console.log( firstname + ' is not married');
 }



 //decision
 
 var massSarvesh = 68;//Kg
 var heightSarvesh = 6.8; //Meters


 var massKumar = 77;
 var heightKumar  = 7.9; //meter


 var BMISarvesh = massSarvesh / (heightSarvesh * heightSarvesh);
 var BMIKumar  = massKumar / (heightKumar * heightKumar);


 console.log('BMISarvesh ' + BMISarvesh);
 console.log('BMIKumar ' + BMIKumar);