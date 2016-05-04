var cat = require('../app/cat.js')
describe("Cat test", function () {
    it("cat should meow with miau", function () {
        expect(cat.meow()).toBe("miau")
    })
})