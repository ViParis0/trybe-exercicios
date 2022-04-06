const { sum, myRemove, myFizzBuzz } = require('./sum');

test('verifica se 1 + 1 é 2', () => {
    expect(sum(1, 2)).toBe(3);
})

test('verifica se 0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
})

test(`verifica se sum lança um erro em 4 + "5"`, () => {
    expect(() => { sum(4, "5") }).toThrow(Error);
})


test('Verifica se myRemove retorna [1, 2, 4] dados parametros [1, 2, 3, 4], 3', () => {
    expect( myRemove([1, 2, 3, 4], 3) ).toEqual([1, 2, 4]);
})

test('Verifica se myRemove não retorna [1, 2, 3, 4] dados parametros [1, 2, 3, 4], 3', () => {
    expect( myRemove([1, 2, 3, 4], 3) ).not.toEqual([1, 2, 3, 4]);
})

test('Verifica se myRemove retorna [1, 2, 4] dados parametros [1, 2, 3, 4], 5', () => {
    expect( myRemove([1, 2, 3, 4], 5) ).toEqual([1, 2, 3, 4]);
})