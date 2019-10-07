/***********************************
 * Operator precedence
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */
var now = 2019;
var yearSarvesh = 1985;
var fullAge = 18;

//Multiple operator
var isFullAge = now - yearSarvesh >= fullAge ;
console.log(isFullAge);

//Grouping
var ageSarvesh = now - yearSarvesh;
var ageTarun = 37;
var average = (ageSarvesh + ageTarun) /2;

console.log(average);

//Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6;        //8 * 4 - 6 //32 - 6 // 26

console.log(x,y);

//More operators
x = x *2;
//x*=2;
console.log('x multiple : '+x);

x = x +1;
x+=1;
x++;
console.log('Increment right  to left : '+ x);

x--;
console.log('Decrement operator right to left : '+ x);

var z;
z = 2 ** 3;
console.log('Exponentiation ** ' + z);

/**
 *
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
 */