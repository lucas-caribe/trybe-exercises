// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
const strings = require('./strings');

describe('Testing upperCase', () => {
  const mockUpperCase = jest
    .spyOn(strings, 'upperCase')
    .mockImplementation((string) => string.toLowerCase());

  it('should have been called', () => {
    mockUpperCase('xablau');
    expect(mockUpperCase).toHaveBeenCalled();
  });

  it('should return a lowercase string', () => {
    expect(mockUpperCase('XABLAU')).toBe('xablau');
  });

  it('should return an uppercase string', () => {
    mockUpperCase.mockRestore();
    expect(strings.upperCase('xablau')).toBe('XABLAU');
  });
});
