fish_lengths_feet = [2, 3.4, 1.2, 0.4, 0.9, 2.9]
min_length_feet = 1.5
legal_fish_in_feet = []

fish_lengths_feet.each do |length_feet|
  if length_feet < min_length_feet
    puts "This #{length_feet}ft long fish is too short"
  else
    puts "This #{length_feet}ft long fish is good"
    legal_fish_in_feet << length_feet
  end
end

puts "There are #{legal_fish_in_feet.count} legal fish"

legal_fish_in_centimetres = legal_fish_in_feet.map do |length_feet|
  length_feet * 30.48
end

puts "Legal fish in cm: #{legal_fish_in_centimetres}"