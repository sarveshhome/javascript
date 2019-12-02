/**
 * Default Parameters
 */

//ES5 
/*
function SarveshPerson(firstName,yearOfBirth,lastName,nationlity)
{
    //if two line not defined then output will be below
    lastName === undefined ? lastName = 'sarvesh' : lastName=lastName;
    nationlity===undefined ? nationlity ='India' : nationlity = nationlity;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationlity = nationlity;
}
*/

//ES6
function SarveshPerson(firstName,yearOfBirth,lastName='singh',nationlity='india')
{ 
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationlity = nationlity;
}

var sarvesh = new SarveshPerson('sarvesh',1991);
console.log(sarvesh);

var puja  = new SarveshPerson('puja',1981,'singh','Nepal');

/**
 * output: - 
 * SarveshPerson {firstName: "sarvesh", lastName: undefined, yearOfBirth: 1991, nationlity: undefined}
 */




