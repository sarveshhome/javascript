/********************************************
 * Ternary Operator and Switch Statements
 */

 var firstName = 'Sarvesh';
 var age = 24;

 //Ternary operator

//condition ? if : else
 age>=18 ? console.log(firstName+ ' drinks beer.') : console.log(firstName + ' drinks juice');

 var drink = age>=18 ? 'beer' : 'juice';
 console.log(firstName + ' drinks ' + drink ); 

 /***
  * switch case is use if else multiple time use
  * If Break; not mention then next line also print 
  */

//switch statement
var job ='ITProfessional';
switch (job) {
    case 'ITProfessional':
       console.log(firstName + 'IT Professional ') 
        break;
    case 'Tester' :
    case 'designer':
        console.log(firstName + ' Tester test website');
        break;
    case 'seo':
        console.log( firstName + ' Search Engine optimizer');
    default:
        console.log( firstName + ' good job');
        break;
}
age = 25; //12//13//45
switch(true)
{
        case age < 13:
            console.log(firstName + ' is a boy.');
            break;
        case age>=13 && age < 20:  // Between 13 and 20  === ange >=13 AND age < 20
            console.log(firstName + ' is a teenagar.');
            break;
        case age>=20 && age < 30:  // Between 20 and 20  === ange >=13 AND age < 20
            console.log(firstName + ' is a younger man.');
            break;
        default:        
            console.log(firstName + ' is a man.'); 
                                                                                                           
}

