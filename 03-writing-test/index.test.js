import { test as bunTest } from 'bun:test';
import { sum } from "./index";
import assert from 'assert';

bunTest("menjumlahkan dua angka", () => {
  assert.strictEqual(sum(1, 2), 3, "Expected sum(1, 2) to be 3");
});