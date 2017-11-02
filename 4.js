function wordCount(string) {
  const words = string.split(' ')
  return words.length
}

function wordCountTable(string) {
  const words = string.split(' ')
  let wordCounts = {}
  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1
  })
  return wordCounts
}

const sentence = 'the brown fox jumps over the lazy dog'
console.log(`There are ${wordCount(sentence)} words in: ${sentence}`)

console.log(wordCountTable(sentence))
