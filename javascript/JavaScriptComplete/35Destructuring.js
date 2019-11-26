/**
 * Destructuring
 */

 //ES5 
 var sarvesh5 = ['sarvesh',27];
 var name5 = sarvesh5[0];
 var age5 = sarvesh5[1];
 console.log(name5);
 console.log(age5);
 /**
  * Output:
  * sarvesh
  * 27
  */

  //ES6
  const [name,age] = ['singh',28];
  console.log(name);
  console.log(age);
  /**
   * output: 
   * singh
   * 28
   */


   const obj = {
       firstName : 'Sarvesh',
       lastName : 'Singh'
   }

   const { firstName,lastName } =obj;
   console.log(firstName);
   console.log(lastName);

   const {firstName: a, lastName :b} = obj;
   console.log(a);
   console.log(b);
/**
 * output: 
 * Sarvesh 
 * Singh
 */


 function calcAgeRetirement(year){
        const age = new Date().getFullYear() - year;
        return [age, 65 -age];
 }

 const [age3,retirement]  = calcAgeRetirement(1991);
 console.log(age3);
 console.log(retirement);

 /**
  * output
  * 28
  * 27 
  */