/*******************************
 *  Creating Objects Object.create
 *********************************/


 var personProto ={
     calculateAge:function(){
         console.log(2016- this.yearOfBirth);
     }
 };

 var sarvesh = Object.create(personProto);
 console.log(sarvesh);

sarvesh.name = 'sarvesh';
sarvesh.yearofBirth =1989;
sarvesh.job = 'ITProfessional';

var shashi = Object.create(personProto, {
    name:{value :'shashi'}, 
    yearOfBirth:{value:'1990'},
    job :{value:'doctor'}
});



