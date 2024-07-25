/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (data) => {
    // TODO : start your code here
    const text = data.input
    const results = []

    if (text.length === 1) return [text]

    const textArray = text.split('')

    const shuffings = (arr, m = []) => {
      if (arr.length === 0) {
        results.push(m.join(''))
      } else {
        for (let i = 0; i < arr.length; i++) {
          const current = arr.slice()
          const next = current.splice(i, 1)
          shuffings(current.slice(), m.concat(next))
        }
      }
    }

    shuffings(textArray)
    
    return [...results.filter((val, i) => results.indexOf(val) === i)]
}

module.exports = {
    manipulate
}