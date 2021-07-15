const myFizzBuzz = require('./myFizzBuzz');

describe('Testing myFizzBuzz', () => {
  it('should return the expected answer for valid numbers', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('should return false for invalid parameters', () => {
    expect(myFizzBuzz('1')).toBeFalsy();
    expect(myFizzBuzz([])).toBeFalsy();
    expect(myFizzBuzz({})).toBeFalsy();
  });
});
