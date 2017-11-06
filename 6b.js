const nToSuffix = {
  11: 'th',
  12: 'th',
  13: 'th'
}

const digitToSuffix = {
  1: 'st',
  2: 'nd',
  3: 'rd'
}

const suffixForNumber = (n) => (
  nToSuffix[n] || digitToSuffix[n % 10] || 'th'
)

const formatOrdinal = (n) => `${n}${suffixForNumber(n)}`

for (let n = 1; n <= 25; n++) {
  console.log(formatOrdinal(n))
}

console.log(formatOrdinal(100))
console.log(formatOrdinal(101))
console.log(formatOrdinal(102))
console.log(formatOrdinal(103))
console.log(formatOrdinal(104))
