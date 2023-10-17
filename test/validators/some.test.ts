import { some } from "../../src/validators/some.ts";
import {
  is,
  maxItems,
  minItems,
  PrimitiveErrors,
  Validator,
} from "../../src/vlad.ts";
import { assertEquals } from "../testingDeps.ts";

Deno.test("should not change the result of a single is validator", () => {
  const validator = some(
    is(false, "Should be false"),
  );
  const output = validator(false);

  assertEquals(output, undefined);
});

Deno.test("should not change the result of a single min validator", () => {
  const validator = some(
    minItems(5, "Should have at least 5 items"),
  );
  const output = validator([1]);

  assertEquals(output, { _self: ["Should have at least 5 items"] });
});

Deno.test("should correctly type check with multiple validators", () => {
  const validator = some(
    minItems(3, "Must have at least 2 items"),
    minItems(5, "Must have at least 5 items"),
  );
  const output = validator(["asdf"]);
  const a = output?._self;

  assertEquals(a, ["Must have at least 2 items", "Must have at least 5 items"]);
});

Deno.test("should validate, if at least one of the validators passes", () => {
  const validator = some(
    minItems(3, "Must have at least 3 items"),
    maxItems(2, "Must have a maximum of 2 items"),
  );
  const output = validator(["asdf", 3]);

  assertEquals(output, undefined);
});

Deno.test("should correctly merge primitive errors", () => {
  const validator = some(
    minItems(3, "Must have at least 3 items"),
    minItems(2, "Must have at least 2 items"),
  );
  const output = validator(["asdf"]);

  assertEquals(output, {
    _self: ["Must have at least 3 items", "Must have at least 2 items"],
  });
});

Deno.test("should correctly infer types with primitive validators", () => {
  const validator = some(
    is(3, "must be 3"),
    is(2, "must be 2"),
  ) satisfies Validator<Partial<number>, PrimitiveErrors>;
  const output = validator(1);

  assertEquals(output, ["must be 3", "must be 2"]);
});
