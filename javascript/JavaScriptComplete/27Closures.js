/**************
 * Closures
 ************/


 function retirement(retirementAge) {
       var s  = ' years left retirement ';
        return function(yearOfBirth){
            var age = 2019- yearOfBirth;
            console.log((retirementAge - age) + s);
        };
 }

var retirementIndia =  retirement(60)(1990);
//other calling process
var retirementIndia =  retirement(60);
retirementIndia(1990);


var retirementSriLanka =  retirement(58)(1990);

//Execution Stack
//Scope Chain

function interviewQuestion(job)
{
    return function(name){
        if (job ==='ITProf') {
            console.log(name + ' , what is object and function in javascript? ');
        }
        else if(job==='designer')
        {
            console.log(name + ' , can you explain what is UI ');
        }
        else
        {
            console.log('hello ' + name + ' what do you do ?'); 
        }
    };   

}

interviewQuestion('designer')('Sarvesh');