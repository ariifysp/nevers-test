const ManipulateService = require('../service/manipulate.service')

describe('manipulate', () => {
  test('should return all permutations for a string of length 1', () => {
    const data = { input: 'a' }
    const expected = ['a']
    expect(ManipulateService.manipulate(data)).toEqual(expected)
  })

  test('should return all permutations for a string of length 2', () => {
    const data = { input: 'ab' }
    const expected = ['ab', 'ba']
    expect(ManipulateService.manipulate(data)).toEqual(expected)
  })

  test('should return all permutations for a string of length 3', () => {
    const data = { input: 'abc' }
    const expected = ['abc','acb','bac','bca','cab','cba']
    expect(ManipulateService.manipulate(data)).toEqual(expected)
  })

  test('should return empty array for an empty string', () => {
    const data = { input: '' }
    const expected = ['']
    expect(ManipulateService.manipulate(data)).toEqual(expected)
  })

  test('should handle duplicate characters', () => {
    const data = { input: 'aabb' }
    const expected = ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
    expect(ManipulateService.manipulate(data)).toEqual(expected)
  })
})