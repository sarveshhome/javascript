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





