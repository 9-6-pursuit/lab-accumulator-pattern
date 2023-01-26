/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {

  
  let result = true

  for (let i = 0; i < rolls.length; i++) {
    if(typeof rolls[i] !== "number"){
result = false
   }
    else{
      result = true
    }
  }
  return result
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let  hasValue = null

  for( i = 0; i < rolls.length; i++){
    if(rolls.includes(value)){
      hasValue = value
    }
    else {
      hasValue = null
    }
  }
  return hasValue
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newRolls = []

  for (i = 0; i < rolls.length; i++){

    if(rolls[i] >= lowest){
      newRolls.push(rolls[i])
    }
else if (rolls.length === 0){
    return newRolls
}
  }
  return newRolls
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
//   let counter = {}
//   let amount = 0

// for (let index = 0; index < rolls.length; index++) {
//   for (let f = 1; f <= 6; f++) {
//     if( rolls[index] === f ){
//          amount += 1
//     }
//   }
//   if (!counter.hasOwnProperty(rolls[index])){
//     counter[rolls[index]] = amount 
//   }
// }
//  return counter
//   }

  const rollCounter = {};
    for (let i = 0; i < rolls.length; i++) {
      if (rolls[i] == 1) {
        rollCounter['1'] = rollCounter['1'] + 1 || 1;
      }
      if (rolls[i] == 2) {
        rollCounter['2'] = rollCounter['2'] + 1 || 1;
      }
      if (rolls[i] == 3) {
        rollCounter['3'] = rollCounter['3'] + 1 || 1;
      }
      if (rolls[i] == 4) {
        rollCounter['4'] = rollCounter['4'] + 1 || 1;
      }
      if (rolls[i] == 5) {
        rollCounter['5'] = rollCounter['5'] + 1 || 1;
      }
      if (rolls[i] == 6) {
        rollCounter['6'] = rollCounter['6'] + 1 || 1;
      }
    }
    return rollCounter;
  }

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
