/**********************************
 * Immediately Invoked Function Expressions (IIFE)
 */


 /*
 function game()
 {
     var score = Math.random() * 10 ;
     console.log(score>=5);
 }
 game();

*/

//self excution
/*
(function(){
    var score = Math.random() * 10 ;
    console.log(score>=5);
    })();
 */

 //with parameter
 (function(goodLuckNumer){
    var score = Math.random() * 10 ;
    console.log(score>=5);
    })(5);
