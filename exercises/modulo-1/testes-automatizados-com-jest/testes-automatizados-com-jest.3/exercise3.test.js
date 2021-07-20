// Ainda com a mesma função do primeiro exercício, utilizando o mock,
// crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.
// Após fazer os devidos testes para ela, resete sua implementação e crie uma nova,
// que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
const service = require('./randomNumber');

describe('Mocking randomNumber.js', () => {
  const mockRandomNumber = jest
    .spyOn(service, 'randomNumber')
    .mockImplementation((a, b, c) => a * b * c);

  it('should be called', () => {
    mockRandomNumber(1, 1, 1);
    expect(mockRandomNumber).toHaveBeenCalled();
  });

  it('should return a * b * c', () => {
    expect(mockRandomNumber(2, 2, 2)).toBe(8);
    expect(mockRandomNumber(2, 1, 0)).toBe(0);
  });

  it('should return a * b', () => {
    mockRandomNumber.mockReset();
    mockRandomNumber.mockImplementation((a, b) => a * b);
    expect(service.randomNumber(4, 2)).toBe(8);
  });
});
