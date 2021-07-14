const { encode, decode } = require('./encodeDecode');

describe('Testing function definitions', () => {
  test('if encode is defined', () => {
    expect(encode).toBeDefined();
  });

  test('if decode is defined', () => {
    expect(decode).toBeDefined();
  });
});

describe('Testing function results', () => {
  it('should return the encoded vowels', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });

  it('should return the decoded numbers', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  it('should not encode anything but vowels', () => {
    expect(encode('xyz')).toBe('xyz');
  });

  it('should not decode anything but numbers', () => {
    expect(decode('xyz')).toBe('xyz');
  });

  it("should not change the parameter's length", () => {
    expect(encode('xyz').length).toBe(3);
    expect(decode('xyz').length).toBe(3);
  });
});
