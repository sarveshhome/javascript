/**
 * Variable Declarations with let and const
 */


 //ES5

 var name5 ='Sarvesh Kumar';
 var age5= 27;
 name5 = 'Sarvesh Singh';
 console.log(name5);


 //ES6
 const name6 ='Sarvesh Kumar';
 let age6 = 27;
 //name6 = 'Sarvesh singh'; /**Assignment to constant variable.*/
 console.log(name6);

 //ES5
 function driversLicence5(passedTest){
    if (passedTest) {
        var firstName = 'Sarvesh';
        var yearOfBirth = 1990;
        
    }
    console.log(firstName + ' , born in '+ yearOfBirth +', is now offically allowed to drive car');
 }

 driversLicence5(true);

 //ES6
 function driversLicence6(passedTest){
    let firstName = 'Sarvesh';
    const yearOfBirth = 1990;  
    if (passedTest) {
        firstName = 'Sarvesh';        
    }
    console.log(firstName + ' , born in '+ yearOfBirth +', is now offically allowed to drive car');
}

driversLicence6(true);



let i = 27;
for(let i=0;i<5; i++)
{
    //block chain varible not change 
    console.log(i);
}
console.log(i);
//output 
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 27
 */


 
var x = 29;
for(var x=0;x<5; x++)
{
    //block chain varible not change 
    console.log(x);
}
console.log(x);
//output 
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 */


/**
 * conclusion
 * let : change the value over time
 * const : variable can't reassign
 */