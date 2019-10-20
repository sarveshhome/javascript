/**************************
 * Primitives vs. Objects
 ***************************/

//primitives
 var a =27;
 var b = a;
a =47 ;
console.log(a);
console.log(b);
//output : 47
//output : 27 

//Objects
var obj1={
    name:'sarvesh',
    age:27
};
var obj2 = obj1;
obj1.age =29;

console.log(obj1.age);
console.log(obj2.age);
//output : 29
//output : 29


//Functions
var age = 27;
var obj = {
    name: 'sarva',
    city: 'goa'
};
function change(a,b)
{
    a =29;
    b.city = 'Andaman & Nicobar';
}

change(age,obj);

console.log(age);
console.log(obj.city);
//output : 27
//output : Andaman & Nicobar Islands

//notes: primitives value no chnage where object change bcz ref


