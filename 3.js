function displayPerson(person) {
  const firstName = person.firstName
  const lastName = person.lastName
  console.log(`  ${firstName} ${lastName}`)
}

function displayMovie(movie) {
  const title = movie.title
  const yearReleased = movie.yearReleased
  const stars = movie.stars
  const director = movie.director

  console.log(`Title: ${title}`)
  console.log(`Year released: ${yearReleased}`)
  console.log(`Stars:`)
  stars.forEach(displayPerson)
  stars.forEach((person) => {
    displayPerson(person)
  })
  console.log(`Director: ${director}`)
  console.log(`---`)
}

const forestGump = {
  title: 'Forest Gump',
  yearReleased: 1994,
  stars: [
    { firstName: 'Tom', lastName: 'Hanks' },
    { firstName: 'Robin', lastName: 'Wright' }
  ],
  director: 'Robert Zemeckis'
}

const backToTheFuture = {
  title: 'Back to the Future',
  yearReleased: 1985,
  stars: [
    { firstName: 'Michael J.', lastName: 'Fox' },
    { firstName: 'Christopher', lastName: 'Lloyd' }
  ],
  director: 'Robert Zemeckis'
}

const deepImpact = {
  title: 'Deep Impact',
  yearReleased: 1998,
  stars: [
    { firstName: 'The', lastName: 'Asteroid' },
    { firstName: 'Elijah', lastName: 'Wood' },
    { firstName: 'Morgan', lastName: 'Freeman' }
  ],
  director: 'Mimi Leder'
}

displayMovie(forestGump)
displayMovie(backToTheFuture)
displayMovie(deepImpact)

/*

Challenges:
1. Add another three movies
2. Add a property for director to each movie, and display it
3. Convert people from being strings (`Tom Hanks`) to objects (with e.g. first & last name)

*/
