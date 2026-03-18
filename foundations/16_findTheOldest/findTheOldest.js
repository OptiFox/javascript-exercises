const findTheOldest = function (arr) {
  let sortByAge = arr.sort((a, b) => {
    if (a.yearOfDeath == null || b.yearOfDeath == null) {
      b.yearOfDeath = new Date().getFullYear();
    }

    let aAge = a.yearOfDeath - a.yearOfBirth;
    let bAge = b.yearOfDeath - b.yearOfBirth;

    return bAge - aAge;
  });

  return sortByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
