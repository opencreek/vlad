import { all } from "../../src/validators/all.ts";
import {
  allItems,
  is,
  maxItems,
  minItems,
  requiredPrimitive,
} from "../../src/vlad.ts";
import { min } from "../../src/validators/min.ts";
import { assertEquals } from "../testingDeps.ts";

Deno.test("should not change the result of a single is validator", () => {
  const validator = all(
    is(false, "Should be false"),
  );
  const output = validator(false);

  assertEquals(output, undefined);
});
Deno.test("should not change the result of a single min validator", () => {
  const validator = all(
    minItems(5, "Should have at least 5 items"),
  );
  const output = validator([1]);

  assertEquals(output, { _self: ["Should have at least 5 items"] });
});
Deno.test("should merge errors for two primitive validators", () => {
  const validator = all(
    requiredPrimitive("Is required"),
    min(2, "Must be at least 2"),
  );
  const output = validator(1);

  assertEquals(output, ["Must be at least 2"]);
});
Deno.test("should merge errors for two top level object errors", () => {
  const validator = all(
    minItems(3, "Must have at least 2 items"),
    maxItems(1, "Must have a maximum of 1 item"),
  );
  const output = validator(["asdf", 3]);

  assertEquals(output, {
    _self: ["Must have at least 2 items", "Must have a maximum of 1 item"],
  });
});

Deno.test("should correctly type check with multiple validators", () => {
  const validator = all(
    minItems(3, "Must have at least 2 items"),
    allItems(requiredPrimitive("should be there")),
  );
  const output = validator(["asdf", 3]);
  const a = output?._self;

  assertEquals(a, ["Must have at least 2 items"]);
});

Deno.test("should merge complicated errors correctly", () => {
  const validator = all(
    requiredPrimitive("date required"),
    () => {
      return ["other date error"];
    },
  );

  const output = validator(undefined);
  assertEquals(output, ["date required", "other date error"]);
});
