/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
 if (rolls.length === 0) return true;
 for (const roll of rolls) {
  if (typeof roll !== "number") {
    return false
  }
 }
 return true
  }  
  


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] === value) {
      return rolls[i]
    }
}
return null;
}

// for (let i = 0; i < rolls.length; i++) {
//   if (rolls[i] === value) {
//     return rolls[i]
//   } else if (rolls[i] !== value) {
//     return null;
// }
// }
// }


/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = []
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= lowest){
      newArray.push(rolls[i])
    } 
  }
  return newArray
}

// let newArray = []
// for (let i = 0; i < rolls.length; i++) {
//   const rolls = array[i];
  
// } if (array[i] < lowest) {
//   newArray.push(array[i])
// }
// return newArray
// }

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let rollCounts = {} ;
  if (rolls.length === 0) return rollCounts; //checking if rolls array empty, will return empty object if it is rollCounts
  for (let i = 0; i < rolls.length; i++) {
    if (!rollCounts[rolls[i]]){
      rollCounts[rolls[i]] = 1;
    } else {
      rollCounts[rolls[i]]++;
    }
  }
  return rollCounts;
}

// if (rollCounts[rolls[i] != rollCounts[rolls[i]]]){
//   rollCounts[rolls[i]] = 1;
// } else {
//   rollCounts[rolls[i]]++;
// }
// }
// return rollCounts;


// let newOnject = {}
// let rollCount = 0
// for (let i = 0; i < rolls.length; i++){
// if (rollCounts[i]){
//   newobject.push(rolls[i])
// } 
// }
// return
// }

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
