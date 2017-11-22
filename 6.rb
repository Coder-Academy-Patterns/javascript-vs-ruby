def format_ordinal(number)
  hundred_units = number % 100
  if hundred_units == 11 || hundred_units == 12 || hundred_units == 13
    return "#{number}th"
  end

  digit = number % 10
  case digit
  when 1
    "#{number}st"
  when 2
    "#{number}nd"
  when 3
    "#{number}rd"
  else
    "#{number}th"
  end
end

(1..25).each do |n|
  puts format_ordinal(n)
end

puts format_ordinal(100)
puts format_ordinal(101)
puts format_ordinal(102)
puts format_ordinal(103)
puts format_ordinal(104)

puts format_ordinal(111)
puts format_ordinal(112)
puts format_ordinal(113)

puts format_ordinal(213)
