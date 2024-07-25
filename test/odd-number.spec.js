const OddService = require('../service/odd-number.service')

describe('findOddNumber', () => {
  test('should return the odd number', () => {
    const data = { input: [1, 2, 1, 2, 3, 1, 2, 1, 2, 1] }
    const expected = 1
    expect(OddService.findOddNumber(data)).toBe(expected)
  })

  test('shoud return first odd number', () => {
    const data = { input: [10, 20, 30, 40] }
    const expected = 10
    expect(OddService.findOddNumber(data)).toBe(expected)
  })

  test('shoud return single input', () => {
    const data = { input: [1] }
    const expected = 1
    expect(OddService.findOddNumber(data)).toBe(expected)
  })

  test('shoud return null', () => {
    const data1 = { input: [] }
    const data2 = { input: [1, 1, 2, 2, 3, 3] }
    expect(OddService.findOddNumber(data1)).toBeNull()
    expect(OddService.findOddNumber(data2)).toBeNull()
  })
})