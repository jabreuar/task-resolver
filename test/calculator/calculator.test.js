const calculator = require('../../src/calculator/calculator');

test('Should apply addition operation', () => {
  // given
  const left = 10;
  const right = 5;
  const result = 15;

  // when
  const operation = 'addition';

  // then
  expect(calculator[operation](left, right)).toBe(result);
});

test('Should apply subtraction operation', () => {
  // given
  const left = 10;
  const right = 5;
  const result = 5;

  // when
  const operation = 'subtraction';

  // then
  expect(calculator[operation](left, right)).toBe(result);
});

test('Should apply multiplication operation', () => {
  // given
  const left = 10;
  const right = 5;
  const result = 50;

  // when
  const operation = 'multiplication';

  // then
  expect(calculator[operation](left, right)).toBe(result);
});

test('Should apply division operation', () => {
  // given
  const left = 10;
  const right = 5;
  const result = 2;

  // when
  const operation = 'division';

  // then
  expect(calculator[operation](left, right)).toBe(result);
});


test('Should apply remainder operation', () => {
  // given
  const left = 20;
  const right = 10;
  const result = 0;

  // when
  const operation = 'remainder';

  // then
  expect(calculator[operation](left, right)).toBe(result);
});