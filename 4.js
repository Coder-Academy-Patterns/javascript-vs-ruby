// This will exclude conjuctive words such as: the, of, or, and
function lexicalWordsFrom(string) {
  const words = string.split(' ')
  
  let lexicalWords = []
  words.forEach((word) => {
    if (word === 'the' || word === 'and' || word === 'of' || word === 'or') {
      // Skip
    }
    else {
      lexicalWords.push(word)
    }
  })

  return lexicalWords
}

function wordCount(string) {
  let lexicalWords = lexicalWordsFrom(string)
  return lexicalWords.length
}

function wordFrequencyTable(string) {
  let lexicalWords = lexicalWordsFrom(string)
  let wordCounts = {}
  lexicalWords.forEach((word) => {
    word = word.toLowerCase()
    wordCounts[word] = (wordCounts[word] || 0) + 1
  })
  return wordCounts
}

// const sentence = 'the quick brown fox jumps over the lazy dog'
const sentence = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.'
console.log(`There are ${wordCount(sentence)} words in: ${sentence}`)

console.log(wordFrequencyTable(sentence))

const freqTable = wordFrequencyTable(sentence)


/*

Challenges:
1. Skip conjuctions (and / or / the / of) from `wordFrequencyTable` function
2. Skip conjuctions (and / or / the / of) from `wordCount` function
3. Change the sentence to the "It was the best of times…" chapter 1 excerpt from here: https://en.wikiquote.org/wiki/A_Tale_of_Two_Cities
4. Update `wordFrequencyTable` to count 'It' and 'it' as the same word
5. Find the five most popular words using the result of `wordFrequencyTable`

*/