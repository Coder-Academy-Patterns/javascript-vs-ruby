function displayMovie(movie) {
  const title = movie.title
  const yearReleased = movie.yearReleased
  const stars = movie.stars

  console.log(`Title: ${title}`)
  console.log(`Year released: ${yearReleased}`)
  console.log(`Stars: ${stars.join(', ')}`)
}

const forestGump = {
  title: 'Forest Gump',
  yearReleased: 1994,
  stars: ['Tom Hanks', 'Robin Wright']
}

backToTheFuture = {
  title: 'Back to the Future',
  yearReleased: 1985,
  stars: ['Michael J. Fox', 'Christopher Lloyd']
}

displayMovie(forestGump)
displayMovie(backToTheFuture)