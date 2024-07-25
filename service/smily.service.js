/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (data) => {
    // TODO : start your code here
    const strArray = data.input
    const smileyPattern = /^[:;][-~]?[)D]$/

    let count = 0
    for (const face of strArray) {
      if (smileyPattern.test(face)) {
        count++
      }
    }

    return count
}

module.exports = {
    countSmilyFace
}
