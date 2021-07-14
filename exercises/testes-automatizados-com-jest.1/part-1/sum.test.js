const sum = require('./sum');

describe('Testing sum function', () => {
  it('returns the correct sum for valid numbers', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  it('throws an error for invalid numbers', () => {
    expect(() => sum(4, '5')).toThrow(/^parameters must be numbers$/);
  });
});
