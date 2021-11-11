const fetch = require('node-fetch')
const swapi = require('./script2')

it('calls swapi', function () {
  expect.assertions(1)
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87)
  })
});


it('calls swapi promise', function () {
  expect.assertions(2)
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(5)
  })
});