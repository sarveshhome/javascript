/*********************
 * Loops and Iteration
 **********************/

 for (let i = 0; i < 10; i++) {
    console.log(i);     
 }

 for(var i =1;i<=20;i +=2){
    console.log(i);
 }

 //loop with Array
 var sarvesh = ['sarvesh','kumar',1991,'ITprof',false];
 for (let i = 0; i < sarvesh.length; i++) {
     console.log(sarvesh[i]);     
 }


//While
console.log('while loop start');
var i =0;
while (i< sarvesh.length) {
    console.log(sarvesh[i]);
    i++;
}

//Continue and break  statements
console.log('Continue statements ');

for (let a = 0; a < sarvesh.length; a++) {
    if (typeof sarvesh[a]!== 'string') continue;
    console.log(sarvesh[a]);
        
}

console.log('break statements');
for (let a = 0; a < sarvesh.length; a++) {
    if (typeof sarvesh[a]!== 'string') break;
    console.log(sarvesh[a]);        
}

//Looping backwards
console.log('looping backwards');
for(var i = sarvesh.length; i>=0;i--)
{
    console.log(sarvesh[i]);
}