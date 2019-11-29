/**
 * RestParameters
 */
/**
 * Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.
 * What is diff between Rest Parameter and Spread Operator
 * Spread operator used is function call
 * where Rest parameter is used function decoration to aspect arbitray number of parameter
 */

 /*
 //ES5
 function isFullAge5()
 {
     //console.log(arguments);
     var argsArr = Array.prototype.slice.call(arguments);
     argsArr.forEach(function(cur){
        var ageresult= (2019- cur) >= 18;
        console.log(ageresult);
     });
 }

//isFullAge5(1991,2009,1965);
//isFullAge5(1991,2009,1965,2012,1985);


//ES6 
function IsFullAge6(...years)
{
    years.forEach(cur => console.log((2019 -cur) >=18));
}

IsFullAge6(1991,2009,1965,2012,1985);

*/

//ES5
function isFullAge5(limit)
{
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments,1);
    argsArr.forEach(function(cur){
       var ageresult= (2019- cur) >= limit;
       console.log(ageresult);
    });
}

//isFullAge5(16,1991,2009,1965);
//isFullAge5(16,1991,2009,1965,2012,1985);


//ES6 
function IsFullAge6(limit,...years)
{
   years.forEach(cur => console.log((2019 -cur) >=limit));
}

IsFullAge6(16,1991,2009,1965,2012,1985);

