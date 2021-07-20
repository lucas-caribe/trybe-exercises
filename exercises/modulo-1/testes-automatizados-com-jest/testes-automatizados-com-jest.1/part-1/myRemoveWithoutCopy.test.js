const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Testing myRemoveWithoutCopy function', () => {
  it('returns the expected arrays', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should modify the original array', () => {
    const array = [1, 2, 3, 4];
    const newArray = myRemoveWithoutCopy(array, 3);

    expect(array).toEqual(newArray);
  });

  it('should not modify the array when passed a number that is not in it', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
