/*************************************
 * Functions
 */

 function calculateAge(birthday){
     return 2019 - birthday;
 }

 var ageSarvesh=  calculateAge(1989);
 var ageShashi = calculateAge(1994);
 var ageTarun = calculateAge(1996);

  console.log(ageSarvesh, ageShashi, ageTarun);

  function yearUntilRetirement(year,firstName){
      var age = calculateAge(year);
      var retirement = 65 - age;
      console.log(firstName + ' retires in ' + retirement +' years.');
  }


  yearUntilRetirement(1989);
  yearUntilRetirement(1994);
  yearUntilRetirement(1996);
  