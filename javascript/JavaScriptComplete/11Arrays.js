/*******************
 * Array
 */

 //Initialize new Array 
 var names = ['sarvesh','shashi','Tarun'];
 var years = new Array(1990,1994,1991);

 console.log(names[2]);
 console.log(names.length);

 //Mutate array data
 names[1] = 'prabhat';
 names[names.length] = 'ranjan';
 names[7] ='singh';
 console.log(names);

 //Different Data Type
var sarvesh = ['sarvesh','kumar',1991,'ITprof',false];

sarvesh.push('yellow'); //insert in last
sarvesh.unshift('Mr.'); //insert in first
console.log(sarvesh);

sarvesh.pop();
sarvesh.pop();
sarvesh.shift();  //remove 
console.log(sarvesh);

console.log(sarvesh.indexOf('kumar'));
console.log(sarvesh.indexOf(1992));

var isITProf = sarvesh.indexOf('ITprof')===-1 ? 'sarvesh is not ITprof':'Sarvesh IS ITProf';
console.log(isITProf);

