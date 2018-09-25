const {
  fromHex,
  fromRomanNumerals
} = require('./index.js')

describe('numberConverters', () => {
  describe('fromHex', () => {
    test('converts DEADBEEF to 3735928559', () => {
      expect(fromHex('DEADBEEF')).toBe(3735928559)
    })
  })

  describe('fromRomanNumerals', () => {
    test('converts IIIV to 2', () => {
      expect(fromRomanNumerals('IIIV')).toBe(2)
    })

    test('converts VIII to 8', () => {
      expect(fromRomanNumerals('VIII')).toBe(8)
    })
  })
})
