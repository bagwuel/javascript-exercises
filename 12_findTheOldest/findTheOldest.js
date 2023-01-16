const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// const findTheOldest = function(array) {
//     let ageArray = [];
//     for (let i = 0; i < array.length; i++) {
//         let age = getAge( array[i].yearOfBirth, array[i].yearOfDeath);
//         let name = array[i]['name'];
//         ageArray.push({name, age})
//     }
//     ageArray.sort((a,b) => b.age - a.age)
//     let oldest = ageArray[0].name;
//     return (oldest);
// };

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };

// Do not edit below this line
module.exports = findTheOldest;
