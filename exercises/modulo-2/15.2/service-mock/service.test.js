const generateRandomNumber = require('./generateRandomNumber');
const fetchDogPicture = require('./fetchDogPicture');
const manipulateStrings = require('./manipulateStrings');
const { expect, it } = require('@jest/globals');

jest.mock('./generateRandomNumber');
jest.mock('./fetchDogPicture');

describe('Testing the generateRandomNumber funcion', () => {
  generateRandomNumber.mockReturnValue(10);

  test('if the function is called once and if it returns 10', () => {
    const returnedValue = generateRandomNumber();

    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(returnedValue).toBe(10);
  });

  test('mocking implementation once', () => {
    generateRandomNumber.mockImplementationOnce((a, b) => a / b);

    let returnedValue = generateRandomNumber(10, 2);

    expect(generateRandomNumber).toHaveBeenCalled();
    expect(returnedValue).toBe(5);

    returnedValue = generateRandomNumber();

    expect(generateRandomNumber).toHaveBeenCalledTimes(3);
    expect(returnedValue).toBe(10);
  });

  test('mocking and clearing implementation', () => {
    generateRandomNumber.mockImplementationOnce((a, b, c) => a * b * c);

    let returnedValue = generateRandomNumber(2, 2, 2);

    expect(generateRandomNumber).toHaveBeenCalledTimes(4);
    expect(returnedValue).toBe(8);

    generateRandomNumber.mockClear();
    returnedValue = generateRandomNumber();

    expect(generateRandomNumber).toHaveBeenCalled();
    expect(returnedValue).toBe(10);

    generateRandomNumber.mockImplementationOnce((a) => a * 2);

    returnedValue = generateRandomNumber(2);

    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
    expect(returnedValue).toBe(4);
  });
});

describe('Testing string manipulation module', () => {
  it('should return a lowercase string, then an uppercase string', () => {
    const getUpperCaseStringMock = jest
      .spyOn(manipulateStrings, 'getUpperCaseString')
      .mockImplementation((str) => str.toLowerCase());

    let returnedValue = getUpperCaseStringMock('OPA');

    manipulateStrings.getUpperCaseString('nada');

    expect(getUpperCaseStringMock).toHaveBeenCalled();
    expect(returnedValue).toBe('opa');

    manipulateStrings.getUpperCaseString.mockRestore();

    returnedValue = manipulateStrings.getUpperCaseString('opa');

    expect(returnedValue).toBe('OPA');
  });

  it('should return the last letter, then the last letter', () => {
    const getFirstLetterMock = jest
      .spyOn(manipulateStrings, 'getFirstLetter')
      .mockImplementation((str) => str[str.length - 1]);

    let returnedValue = getFirstLetterMock('opa');

    manipulateStrings.getFirstLetter('nada');

    expect(getFirstLetterMock).toHaveBeenCalled();
    expect(returnedValue).toBe('a');

    manipulateStrings.getFirstLetter.mockRestore();

    returnedValue = manipulateStrings.getFirstLetter('opa');

    expect(returnedValue).toBe('o');
  });

  it('should concatenate 3 strings, then 2 strings', () => {
    const concatStringsMock = jest
      .spyOn(manipulateStrings, 'concatStrings')
      .mockImplementation((a, b, c) => a + b + c);

    let returnedValue = concatStringsMock('xa', 'blau', '!');

    manipulateStrings.concatStrings('xa', 'blau', '!');

    expect(concatStringsMock).toHaveBeenCalled();
    expect(returnedValue).toBe('xablau!');

    manipulateStrings.concatStrings.mockRestore();

    returnedValue = manipulateStrings.concatStrings('xa', 'blau');

    expect(returnedValue).toBe('xablau');
  });
});

describe('testing the dog api function', () => {
  fetchDogPicture
    .mockImplementationOnce(() => Promise.resolve('request success'))
    .mockImplementationOnce(() => Promise.reject('request failed'));

  it('should return success', () => {
    expect(fetchDogPicture()).resolves.toBe('request success');
  });

  it('should return failed', () => {
    expect(fetchDogPicture()).rejects.toBe('request failed');
  });
});
