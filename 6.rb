def format_ordinal(number)
  return '11th' if number == 11
  return '12th' if number == 12
  return '13th' if number == 13

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
