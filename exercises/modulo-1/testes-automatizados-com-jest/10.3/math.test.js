const math = require('./math');

// Faça o mock da funcão subtrair e teste sua chamada.
describe('Testa a função subtrair', () => {
  test('se a função foi chamada', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'.
// Teste a chamada e o retorno.
describe('Testa a função multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  test('se a função foi chamada', () => {
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
  });

  test('se a função retorna o valor esperado', () => {
    expect(math.multiplicar()).toBe(10);
  });
});

// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma.
// Teste a chamada, o retorno e os parâmetros passados.
describe('Testa a função somar', () => {
  math.somar = jest.fn().mockImplementation((a, b) => a + b);

  test('se a função foi chamada', () => {
    math.somar();
    expect(math.somar).toHaveBeenCalled();
  });

  test('se a função retorna o valor esperado', () => {
    expect(math.somar(1, 1)).toBe(2);
  });

  test('se os parâmetros passados estão corretos', () => {
    math.somar(1, 2);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
  });
});

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'.
// Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'.
// Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
describe('Testa a função dividir', () => {
  math.dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  test('se a primeira chamada retorna o valor esperado', () => {
    expect(math.dividir(1, 1)).toBe(2);
    expect(math.dividir).toHaveBeenCalledTimes(1);
  });

  test('se a segunda chamada retorna o valor esperado', () => {
    expect(math.dividir(1, 1)).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
  });

  test('se os parâmetros passados estão corretos', () => {
    math.dividir(1, 1);
    expect(math.dividir).toHaveBeenCalledWith(1, 1);
  });
});

// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original.
// Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno.
// Restaure a implementação original da função e teste sua execução.
describe('Testa a função subtrair', () => {
  const mockSubtrair = jest.spyOn(math, 'subtrair').mockReturnValue(20);

  test('se retorna o valor esperado', () => {
    expect(mockSubtrair()).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
  });

  it('deve ter a implementação original restaurada', () => {
    mockSubtrair.mockRestore();
    expect(math.subtrair(1, 1)).toBe(0);
  });
});
