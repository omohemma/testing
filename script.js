const googleDatabase = [
  'cats.com',
  'recipes.com',
  'animals.com',
  'flowers.com',
  'pictures.com',
  'catspictures.com'
]

//Use Dependency Injection For Db
const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  })

  return matches.length > 3 ? matches.slice(0,3) : matches;
}

// console.log(googleSearch("cats", googleDatabase));

//commonjs export
module.exports = googleSearch;