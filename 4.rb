def word_count(string)
  words = string.split(' ')
  words.count
end

sentence = 'the brown fox jumps over the lazy dog'
puts "There are #{word_count(sentence)} words in: #{sentence}"
