
import sum from "./index";

test('parameter pertama bukan angka', () => {
  expect(sum('a', 2)).toBe(0);
});

test('parameter kedua bukan angka', () => {
  expect(sum(1, 'b')).toBe(0);
});

test('kedua parameter bukan angka', () => {
  expect(sum('c', 'd')).toBe(0);
});

test('parameter pertama negatif', () => {
  expect(sum(-1, 2)).toBe(0);
});

test('parameter kedua negatif', () => {
  expect(sum(1, -2)).toBe(0);
});

test('kedua parameter negatif', () => {
  expect(sum(-1, -2)).toBe(0);
});

test('kedua parameter valid positif', () => {
  expect(sum(1, 2)).toBe(3);
});

test('satu parameter valid dan satu parameter negatif', () => {
  expect(sum(5, -5)).toBe(0);
});

test('kedua parameter valid dan positif lebih besar', () => {
  expect(sum(1000, 2000)).toBe(3000);
});

test('satu parameter adalah nol', () => {
  expect(sum(0, 5)).toBe(5);
});
