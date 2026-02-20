const sum = require('../lib/sum');

test('sum adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum('3', 4)).toBe(7);
});
