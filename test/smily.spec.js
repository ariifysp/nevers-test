const SmilyService = require('../service/smily.service')

describe('countSmilyFace', () => {
  test('shoud return 0 no smily face', () => {
    const data = { input: [";]", ":-}", ";("] }
    const expected = 0
    expect(SmilyService.countSmilyFace(data)).toBe(expected)
  })

  test('shoud return 4 with smily face', () => {
    const data = { input: [":~D", ";-)", ";)", ":D"] }
    const expected = 4
    expect(SmilyService.countSmilyFace(data)).toBe(expected)
  })

  test('shoud return 0 for empty array', () => {
    const data = { input: [] }
    const expected = 0
    expect(SmilyService.countSmilyFace(data)).toBe(expected)
  })
})