function wordCount(string) {
  const words = string.split(' ')
  return words.length
}

function wordFrequencyTable(string) {
  const words = string.split(' ')
  let wordCounts = {}
  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1
  })
  return wordCounts
}

const sentence = 'the brown fox jumps over the lazy dog'
console.log(`There are ${wordCount(sentence)} words in: ${sentence}`)

console.log(wordFrequencyTable(sentence))

/*

Challenges:
1. Skip conjuctions (and / or / the / of) from `wordFrequencyTable` function
2. Skip conjuctions (and / or / the / of) from `wordCount` function
3. Change the sentence to the "It was the best of times…" chapter 1 excerpt from here: https://en.wikiquote.org/wiki/A_Tale_of_Two_Cities
4. Find the five most popular words using the result of `wordFrequencyTable`

*/