const googleDatabase = [
  'cats.com',
  'recipes.com',
  'animals.com',
  'flowers.com',
  'pictures.com',
  'catspictures.com'
]

const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter(website => {
    return website.includes(searchInput);
  })

  return matches.length > 3 ? matches.slice(0,3) : matches;
}

console.log(googleSearch("cats"));