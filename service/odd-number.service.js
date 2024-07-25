/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (data) => {
    // TODO : start your code here
    const numberArray = data.input
    const frequency = {}

    for (const number of numberArray) {
      frequency[number] = (frequency[number] || 0) + 1
    }

    for (const key in frequency) {
      if (frequency[key] % 2 !== 0) {
        return Number(key)
      }
    }

    return null
}


module.exports = {
    findOddNumber
}