import test from "node:test";
import assert from "node:assert/strict";
import { clipSelection } from "../src/ui/main-menu.js";
test("inverse selection clips with an outer document and even-odd fill", () => {
  const calls = [];
  const ctx = {
    beginPath: () => calls.push("begin"),
    rect: (...r) => calls.push(r),
    clip: (rule) => calls.push(rule),
  };
  clipSelection(ctx, { x: 10, y: 20, w: 30, h: 40, inverse: true }, 100, 100);
  assert.deepEqual(calls, [
    "begin",
    [0, 0, 100, 100],
    [10, 20, 30, 40],
    "evenodd",
  ]);
});
test("similar selection clips every run, empty selection leaves context unchanged", () => {
  const calls = [];
  const ctx = {
    beginPath: () => {},
    rect: (...r) => calls.push(r),
    clip: (rule) => calls.push(rule),
  };
  clipSelection(ctx, null, 100, 100);
  assert.equal(calls.length, 0);
  clipSelection(
    ctx,
    {
      regions: [
        { x: 1, y: 2, w: 3, h: 1 },
        { x: 6, y: 2, w: 2, h: 1 },
      ],
    },
    100,
    100,
  );
  assert.deepEqual(calls, [[1, 2, 3, 1], [6, 2, 2, 1], "nonzero"]);
});
