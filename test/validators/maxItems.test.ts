import { buildValidatorTest } from "../validator-macro.ts";
import { maxItems } from "../../src/validators/maxItems.ts";

const testMessage = "Too many items";
const validator = maxItems(3, testMessage);
const maxItemsTest = buildValidatorTest(validator, { _self: [testMessage] });

Deno.test("succeeds on empty array", () => {
  maxItemsTest([], true);
});
Deno.test("succeeds on array with less items", () => {
  maxItemsTest(["asdf"], true);
});
Deno.test("succeeds on array with exactly maximum items", () => {
  maxItemsTest([1, "asdf", true], true);
});
Deno.test("fails on array with more items", () => {
  maxItemsTest([true, {}, "asdf", 0], false);
});
