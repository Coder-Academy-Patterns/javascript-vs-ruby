function wordCount(string) {
  const words = string.split(' ')
  return words.length
}

const sentence = 'the brown fox jumps over the lazy dog'
console.log(`There are ${wordCount(sentence)} words in: ${sentence}`)
