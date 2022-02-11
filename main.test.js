import {capitalize, reverseString, calculator, caesarCipher, analizeArray} from './main';

test('first character of "dog" capitalized', () => {
  expect(capitalize('dog')).toBe('Dog');
});

test('reversed "dolphin"', () => {
  expect(reverseString('dolphin')).toBe('nihplod');
});

test('1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('5 - 3 = 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('2 * 3 = 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('8 / 2 = 4', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('basic cipher', () => {
  expect(caesarCipher('i love led zeppelin', 3)).toBe('l oryh ohg chssholq');
});

test('cipher keeping case', () => {
  expect(caesarCipher('I love Led Zeppelin', 6)).toBe('O rubk Rkj Fkvvkrot');
});

test('cipher with punctuation', () => {
  expect(caesarCipher('I love Led Zeppelin. I really do!', 13)).toBe('V ybir Yrq Mrccryva. V ernyyl qb!');
});

test('analizes an array of numbers', () => {
  expect(analizeArray([2, 5, 10, 8, 9, 14])).toEqual({average: 8, min: 2, max: 14, length: 6});
});