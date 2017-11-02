def word_count(string)
  words = string.split(' ')
  words.count
end

def word_count_table(string)
  words = string.split(' ')
  word_counts = Hash.new(0)
  words.each do |word|
    word_counts[word] += 1
  end
  word_counts
end

sentence = 'the brown fox jumps over the lazy dog'
puts "There are #{word_count(sentence)} words in: #{sentence}"

puts word_count_table(sentence)
