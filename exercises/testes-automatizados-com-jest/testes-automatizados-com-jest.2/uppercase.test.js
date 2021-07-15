const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Testing uppercase', () => {
  it('should return the expected string', () => {
    uppercase('xablau', (str) => {
      expect(str).toBe('XABLAU');
    });
  });
});
