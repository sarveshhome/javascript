//console.log(this);
//output :- {}

const user= {
    username: "shyam",
    price: 777,
    destination: "SSE",
    displayInfo : function(){
        console.log(`${this.username }, which is working as ${this.destination}  ` );
        console.log(this);  
        /**output:
         * 
         * 
            {
            username: 'shyam',
            price: 777,
            destination: 'SSE',
            displayInfo: [Function: displayInfo]
            }
         */
    }
}

//user.displayInfo;

// user.displayInfo();
// user.username ="gopal";
// user.displayInfo();



//console.log(this);  //outpu : {}

// const Test =function(){
//     username: "shravan";
//     console.log(this);
// }

// const Test =()=> {
//     username: "shravan";
//     console.log(this);
// }

//Test();


/******arrow function */

//const Test= ()=> {}

//Explicit return
// const Test= (nubmer1, number2)=> {
//     return nubmer1 + number2;
// }


//Implicit Return, single line
const Test= (nubmer1, number2)=> (nubmer1 + number2)

// parenthesis use in react
//Note: if you use {}  then return must be use,,,other wise use parenthesis

//Implicit Return, Multi line
// const Test= (nubmer1, number2)=> (
//      nubmer1 + number2
// )

//Implicit Return, Issue retrun Object
//const Test= (nubmer1, number2)=> {nubmer1 + number2}   //undefined

//Implicit Return, Issue retrun Object
//const Test= (nubmer1, number2) => ({ value: nubmer1 + number2 })

//const Test= (nubmer1, number2) => ([{ value: nubmer1 + number2 },{valueTwo: number2 + nubmer1}]);

console.log(Test(7,9));

console.table([Test(2,4),Test(3,7)]);