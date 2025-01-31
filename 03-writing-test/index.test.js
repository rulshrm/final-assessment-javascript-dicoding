// import function dari index.js
import { sum } from "./index";

it("menjumlahkan dua angka", () => {
  expect(sum(1, 2)).toBe(3);
});