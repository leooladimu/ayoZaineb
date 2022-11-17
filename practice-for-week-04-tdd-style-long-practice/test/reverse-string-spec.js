const chai = require('chai');
const expect = chai.expect;
const reverseString = require('../problems/reverse-string');
describe('reverseString(string)', () => {
  it('should reverse input string', () => {
    const str = 'fun';
    let result = reverseString(str);
    expect(result).to.equal('nuf');
  });
  it("should throw an error if string is not typeof 'string'", () => {
    const string2 = 42;
    const string3 = [];
    const string4 = {};
    expect(() => {reverseString(string2).to.throw(Error)});
    expect(() => {reverseString(string3).to.throw(Error)});
    expect(() => {reverseString(string4).to.throw(Error)});
  })
})