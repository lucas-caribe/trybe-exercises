// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
// que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.
// Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
const service = require('./randomNumber');

describe('Mocking randomNumber.js', () => {
  service.randomNumber = jest
    .fn()
    .mockImplementation((a, b) => 'xablau')
    .mockImplementationOnce((a, b) => a / b);

  it('should return 4 / 2', () => {
    expect(service.randomNumber(4, 2)).toBe(2);
  });

  it('should return xablau', () => {
    expect(service.randomNumber(4, 2)).toBe('xablau');
  });
});
