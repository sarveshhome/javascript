var sarvesh={
    name: 'Sarvesh',
    age : 29,
    job : 'ITProf',
    presentation: function(style,timeofday){
        if (style ==='formal') {
            console.log('Good ' + timeofday + 
            ' , Ladies and Gentleman ! I\'m ' +
             this.name + ', I\'m a '+
             this.job + ' and I\'m ' +
             this.age + ' years old.'
             );
        }
        else if (style === 'friendly') {
            console.log('Hey! what\'s up? ' +  
             this.name + ', I\'m a '+
             this.job + ' and I\'m ' +
             this.age + ' years old. Have a nice ' + 
             timeofday + '.');
        }
        else
        {
            
        }        
    }
};


var sana ={
    name: 'sana',
    age : 35,
    job : 'designer' 
};

sarvesh.presentation('formal','moring');

sarvesh.presentation.call(sana,'friendly','afternoon');

//sarvesh.presentation.apply(sana,['friendly','afternoon']);


var sarveshFriendly= sarvesh.presentation.bind(sarvesh,'friendly');
sarveshFriendly('morning');
sarveshFriendly('night');

var sanaFormal = sarvesh.presentation.bind(sana,'formal');
sanaFormal('afternoon');


var years =[1993,1983,1975,1965,1999];
 
 //Generic Function
 function arrayCalc(arr, fun){
     var arrRes = [];
     for (let i = 0; i < arr.length; i++) {
         arrRes.push(fun(arr[i]));         
     }
     return arrRes;
 }

 function calculateAge(el){
     return 2016-el;
 }

function isFullAge(limit,el){
    return el>= limit;
}
var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullChaina = arrayCalc(ages,isFullAge.bind(this,20));
console.log(fullChaina);

