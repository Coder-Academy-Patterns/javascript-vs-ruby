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

/*

Challenges:
1. Convert the lengths to yards using `.each` (.rb) / `.forEach` (.js), and output them
2. Convert the lengths to yards using `.map` (.rb) / `.map` (.js), and output them
3. Find the longest fish, and output it
4. Create a sorted copy of the centimetre lengths array, and output it
5. Find average fish length in centimetres

*/
