/********************************************
 * Truthy and Falsy Values and Equality Operators
 */

// falsy values: undefined,null,0,'',NaN
// truthy values : NOT falsy values

var height;

height =23;
if (height || height ===0) {
    console.log('Variable is defined');
}
else{
    console.log('Variable has NOT been defined ' + typeof(height));
}

//Equality Operators
if (height =='23') { //height ==='23'
    console.log('The == operator does type coercion!');
}
