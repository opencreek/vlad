import { buildValidatorTest } from "../validator-macro.ts";
import { minItems } from "../../src/validators/minItems.ts";

const testMessage = "Not enough items";
const validator = minItems(2, testMessage);
const minItemsTest = buildValidatorTest(validator, { _self: [testMessage] });

Deno.test("fails on empty array", () => {
  minItemsTest([], false);
});
Deno.test("fails on array with less items", () => {
  minItemsTest(["asdf"], false);
});
Deno.test("succeeds on array with exactly enough items", () => {
  minItemsTest([1, "asdf"], true);
});
Deno.test("succeeds on array with more items", () => {
  minItemsTest([true, {}, "asdf"], true);
});
