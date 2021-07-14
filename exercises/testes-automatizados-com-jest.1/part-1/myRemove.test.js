const myRemove = require('./myRemove');

describe('Testing myRemove function', () => {
  it('returns the expected arrays', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3, 4];
    const newArray = myRemove(array, 3);

    expect(array).not.toEqual(newArray);
  });

  it('should not modify the array when passed a number that is not in it', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
