/******************************************************
 * First Class Functions Functions Returning Functions
 *****************************************************/


function interviewQuestion(job)
{
    if (job == 'ITProf') {
        return function(name){
            console.log(name + ' , what is object and function in javascript? ');
        };
    }
    else if(job == 'designer'){
        return function(name)
        {
            console.log(name + ' , can you explain what is UI ');
        };
    }
    else{
       return function(name){
           console.log('hello ' + name + ' what do you do ?');            
       };
    }

}

var ITProfQuestion = interviewQuestion('ITProf');

ITProfQuestion('sarvesh');

var ITProfQuestion = interviewQuestion('designer');
ITProfQuestion('rahul');

ITProfQuestion('tarun');
ITProfQuestion('shashi');

interviewQuestion('mathematician')('ada lovelace');
