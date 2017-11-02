const fishLengthsFeet = [2, 3.4, 1.2, 0.4, 0.9, 2.9]
const minLengthFeet = 1.5
let legalFishInFeet = []

fishLengthsFeet.forEach((lengthFeet) => {
  if (lengthFeet < minLengthFeet) {
    console.log(`This ${lengthFeet}ft long fish is too short`)
  }
  else {
    console.log(`This ${lengthFeet}ft long fish is good`)
    legalFishInFeet.push(lengthFeet)
  }
})

console.log(`There are ${legalFishInFeet.length} legal fish`)

legalFishInCentimetres = legalFishInFeet.map((lengthFeet) => (
  lengthFeet * 30.48
))

console.log('Legal fish in cm:', legalFishInCentimetres)