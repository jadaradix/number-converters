const fromHex = (string) => {
  const overflowHexCharacterMap = {
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
  }
  let a = 0
  string.split('').reverse().forEach((character, index) => {
    const c = overflowHexCharacterMap[character] || parseInt(character, 10)
    const v = (c * Math.pow(16, index))
    a += v
  })
  return a
}

const fromRomanNumerals = (string) => {
  const m = {
    'V': 5,
    'I': 1,
    'X': 10
  }
  const buckets = {
    '5': 0,
    '1': 0,
    '10': 0
  }
  let a = 0
  const decs = string.split('').map(rn => m[rn])
  decs.forEach((dn, index) => {
    buckets[dn] += dn
    if (index > 0 && dn > decs[index - 1]) {
      a -= buckets[decs[index - 1]]
      buckets[decs[index - 1]] = 0
    }
    if (index > 0 && dn < decs[index - 1]) {
      a += buckets[decs[index - 1]]
      buckets[decs[index - 1]] = 0
    }
  })
  a += buckets[decs[decs.length - 1]]
  return a
}

module.exports = {
  fromHex,
  fromRomanNumerals
}
