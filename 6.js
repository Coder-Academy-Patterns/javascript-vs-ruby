function formatOrdinal(number) {
  const hundredUnits = number % 100
  if (hundredUnits === 11 || hundredUnits === 12 || hundredUnits === 13) {
    return `${number}th`
  }

  const digit = number % 10
  switch (digit) {
    case 1:
      return `${number}st`
    case 2:
      return `${number}nd`
    case 3:
      return `${number}rd`
    default:
      return `${number}th`
  }
}

for (let n = 1; n <= 25; n++) {
  console.log(formatOrdinal(n))
}

console.log(formatOrdinal(100))
console.log(formatOrdinal(101))
console.log(formatOrdinal(102))
console.log(formatOrdinal(103))
console.log(formatOrdinal(104))

console.log(formatOrdinal(111))
console.log(formatOrdinal(112))
console.log(formatOrdinal(113))

console.log(formatOrdinal(213))
