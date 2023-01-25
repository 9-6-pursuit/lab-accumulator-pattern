/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  for (const val of rolls) {
    if (rolls.length === 0){
      return true
    } else if (typeof val !== "number"){
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
  for (const iterator of rolls) {
    if (iterator === value) {
      return value
    } 
  }
  return null
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArr = []
  for (const iterator of rolls) {
    if (iterator >= lowest) {
      newArr.push(iterator)
    }
  }
  return newArr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let newObj = {}
  let num1 = 0
  let num2 = 0
  let num3 = 0
  let num4 = 0
  let num5 = 0
  let num6 = 0

  for (const iterator of rolls) {
    switch (iterator) {
      case 1:
        num1 ++
        newObj["1"] = num1
        break;
      case 2:
        num2 ++
        newObj["2"] = num2
        break;
      case 3:
        num3 ++
        newObj["3"] = num3
        break;
      case 4:
        num4 ++
        newObj["4"] = num4
        break;
      case 5:
        num5 ++
        newObj["5"] = num5
        break;
      case 6:
        num6 ++
        newObj["6"] = num6
        break;
    }
  }
  return newObj
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
