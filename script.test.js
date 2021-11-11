const googleSearch = require('./script')

const dbMock = [
  'aliexpress.com',
  'fedex.com',
  'aoixpress.com',
  'google.com'
]
describe("googleSearch Tests", () => {
  it("test gooogleSearch fn", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("ex", dbMock)).toEqual(['aliexpress.com','fedex.com']);
  })

  it("works with undefined and null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  })

  it("get not more than 3 matches", () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  })
})

