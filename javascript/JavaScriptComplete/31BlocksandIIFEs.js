/**
 * Blocks and IIFEs
 */

 //ES6 
 {
     const a =1;
     let b = 2;
     var d = 5;
 }
 //console.log(a + b); //output : error:  a is not defined
 console.log(d);

 //ES5
 (function(){
    var c =3;
 })();
 console.log(c);
/**
 * output:
 * c is not defined
 */
