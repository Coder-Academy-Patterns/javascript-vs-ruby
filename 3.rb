def display_movie(movie)
  title = movie[:title]
  year_released = movie[:year_released]
  stars = movie[:stars]

  puts "Title: #{title}"
  puts "Year released: #{year_released}"
  puts "Stars: #{stars.join(', ')}"
end

forest_gump = {
  title: 'Forest Gump',
  year_released: 1994,
  stars: ['Tom Hanks', 'Robin Wright']
}

back_to_the_future = {
  title: 'Back to the Future',
  year_released: 1985,
  stars: ['Michael J. Fox', 'Christopher Lloyd']
}

display_movie(forest_gump)
display_movie(back_to_the_future)