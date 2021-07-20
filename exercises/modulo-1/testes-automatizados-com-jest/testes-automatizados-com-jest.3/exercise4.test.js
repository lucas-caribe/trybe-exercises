// Faça o mock do arquivo.
// Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string
// em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última
// letra de uma string. A terceira deve receber três strings e concatená-las.
const strings = require('./strings');

jest.mock('./strings');

describe('Testing upperCase', () => {
  strings.upperCase.mockImplementation((string) => string.toLowerCase());

  it('should have been called', () => {
    strings.upperCase('xablau');
    expect(strings.upperCase).toHaveBeenCalled();
  });

  it('should return a lower case string', () => {
    expect(strings.upperCase('XABLAU')).toBe('xablau');
  });
});

describe('Testing firstLetter', () => {
  strings.firstLetter.mockImplementation((string) => string[string.length - 1]);

  it('should have been called', () => {
    strings.firstLetter('var');
    expect(strings.firstLetter).toHaveBeenCalled();
  });

  it('should return the first character of a string', () => {
    expect(strings.firstLetter('var')).toBe('r');
  });
});

describe('Testing concat', () => {
  strings.concat.mockImplementation((a, b, c) => a + b + c);

  it('should have been called', () => {
    strings.concat('a', 'b', 'c');
    expect(strings.concat).toHaveBeenCalled();
  });

  it('should concat 3 strings', () => {
    expect(strings.concat('a', 'b', 'c')).toEqual('abc');
  });
});
