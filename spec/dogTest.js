//var dog = require('../app/dog.js')
describe("Dog test", function () {
    it("dog should bark with hauuu", function () {
        expect(window.dog.bark()).toBe("hauuu")
    })
})
