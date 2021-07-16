// Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const service = require('./randomNumber');

describe('Mocking randomNumber.js', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  it('should have been called', () => {
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
  });

  it('should return 10', () => {
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  });
});
