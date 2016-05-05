'use strict';
import {dog} from './../app/dog';
describe("Dog test", function () {
    it("dog should bark with hauuu", function () {
        expect(dog.bark()).toBe("hauuu")
    })
})
