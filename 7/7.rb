require 'date'
require 'time'

puts "Now: #{Time.now}"

puts "Today: #{Date.today}"


now = Time.now.iso8601
file_path = File.join(__dir__, 'timestamp.txt')
File.write(file_path, now)
