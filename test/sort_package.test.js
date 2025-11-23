import test from "node:test";
import assert from "node:assert";
import { sort } from "../dist/sort_package.js";

//Normal cases
test("REJECTED (bulky & heavy)", () => {
    assert.strictEqual(sort(220, 200, 180, 60), "REJECTED");
});

test("SPECIAL (bulky)", () => {
    assert.strictEqual(sort(180, 60, 60, 10), "SPECIAL");
});

test("SPECIAL (heavy)", () => {
    assert.strictEqual(sort(60, 80, 100, 25), "SPECIAL");
});

test("STANDARD (not bulky & not heavy)", () => {
    assert.strictEqual(sort(80, 90, 100, 15), "STANDARD");
});

// Edge cases
test("SPECIAL (bulky - volume is 1,000,000)", () => {
    assert.strictEqual(sort(100, 100, 100, 1), "SPECIAL");
});

test("SPECIAL (bulky - width is 150)", () => {
    assert.strictEqual(sort(150, 60, 60, 1), "SPECIAL");
});

test("SPECIAL (heavy - mass is 20)", () => {
    assert.strictEqual(sort(60, 60, 60, 20), "SPECIAL");
});