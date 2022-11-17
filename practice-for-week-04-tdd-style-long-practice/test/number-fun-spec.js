const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree()", () => {
    it("should return three", () => {
        let result = returnsThree();
        expect(result).to.eql(3);
    })
})

describe("reciprocal(n)", () => {
    it("should return the reciprocal of n", () => {
        const x = 1000;

        let resultX = reciprocal(x);

        expect(resultX).to.eql(.001);

    })
})
