import { someOf } from "../../src/validators/someOf.ts";
import { is, maxItems, minItems } from "../../src/vlad.ts";
import { assertEquals } from "../testingDeps.ts";

Deno.test("should not change the result of a single is validator", () => {
  const validator = someOf(
    is(false, "Should be false"),
  );
  const output = validator(false);

  assertEquals(output, undefined);
});

Deno.test("should not change the result of a single min validator", () => {
  const validator = someOf(
    minItems(5, "Should have at least 5 items"),
  );
  const output = validator([1]);

  assertEquals(output, { _self: ["Should have at least 5 items"] });
});

Deno.test("should correctly type check with multiple validators", () => {
  const validator = someOf(
    minItems(3, "Must have at least 2 items"),
    minItems(5, "Must have at least 5 items"),
  );
  const output = validator(["asdf"]);
  const a = output?._self;

  assertEquals(a, ["Must have at least 2 items", "Must have at least 5 items"]);
});

Deno.test("should validate, if at least one of the validators passes", () => {
  const validator = someOf(
    minItems(3, "Must have at least 2 items"),
    maxItems(2, "Must have a maximum of 2 items"),
  );
  const output = validator(["asdf", 3]);

  assertEquals(output, undefined);
});
