// const assert = require('assert');
const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(true).then((data) => {
      expect(data).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    expect.hasAssertions();

    return answerPhone(false).catch((data) => {
      expect(data).toEqual(new Error('Infelizmente não podemos atender...'));
    });
  });
});
