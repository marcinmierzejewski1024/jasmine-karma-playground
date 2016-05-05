'use strict';
import {cat} from './../app/cat';
describe("Cat test", function () {
    it("cat should meow with miau", function () {
        expect(cat.meow()).toBe("miau")
    })
})