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
