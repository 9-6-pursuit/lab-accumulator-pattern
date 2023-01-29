/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  if (rolls.length === 0) return true;

  const diceArray = [1,2,3,4,5,6]
  let itsNumber = false;
  for (let i = 0; i < rolls.length; i++) {
    const element = rolls[i];
    if (diceArray.includes(element)) {
      if(itsNumber === false) {
        itsNumber = true
      }
    } else {
      itsNumber = false
    }
    
  }
  return itsNumber;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  for (let i = 0; i < rolls.length; i++) {
    const element = rolls[i];
    if(element === value) {
      return element
    }
  }
  return null;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  const resultArray = [];
  for (let i = 0; i < rolls.length; i++) {
    if(rolls[i] >= lowest) {
      resultArray.push(rolls[i])
    }
  }
  return resultArray;
}

/***
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  console.log("rolls: ", rolls)
  const countObj = {};
  const count = 1;
  for (let i = 0; i < rolls.length; i++) {
    const roll = rolls[i];
    if(countObj[roll]){
      countObj[roll] += 1
    } else {
        countObj[roll] = 1
    }
    
    }
  console.log("countObj: ", countObj)
  return countObj;
}




// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
