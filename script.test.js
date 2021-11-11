const googleSearch = require('./script')

const dbMock = [
  'aliexpress.com',
  'fedex.com',
  'aoixpress.com',
  'google.com'
]
it("it is a test", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("ex", dbMock)).toEqual(['aliexpress.com','fedex.com']);
})