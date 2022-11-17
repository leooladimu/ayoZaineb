module.exports = function reverseString(string) {
  if (typeof string !== 'string') {
    throw TypeError('TYPE ERROR');
  }
  return string.split('').reverse().join('');

};