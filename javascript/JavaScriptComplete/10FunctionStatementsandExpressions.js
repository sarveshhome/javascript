/**
 * Function Statements and Expressions
 */

 //function declaration
 //function Jobinfo(job,firstName){}


 //Function Expresssion
 var Jobinfo = function(job,firstName){
     switch(job)
     {
         case 'developer':
             return firstName  + ' developer coding the code';
         case 'designer':
             return firstName + ' designs beatiful websites';
        default:
            return firstName + ' does something';
     }
 }

 console.log(Jobinfo('devloper','sarvesh'));
 console.log(Jobinfo('designer','tarun'));
 console.log(Jobinfo('retired','pramod'));
