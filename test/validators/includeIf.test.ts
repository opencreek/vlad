import {
  includeIf,
  is,
  minItems,
  object,
  requiredPrimitive,
} from "../../src/vlad.ts";
import { assertEquals } from "../testingDeps.ts";

Deno.test("should not change the result of a single is validator", () => {
  const validator = includeIf(
    () => true,
    is(false, "Should be false"),
  );
  const output = validator(false);

  assertEquals(output, undefined);
});

Deno.test("Should correctly include validator on condition", () => {
  const validator = includeIf(
    (value: Array<number>) => (value?.[0] ?? 0) < 5,
    minItems(4, "Should have at least 5 items"),
  );
  const outputInvalid = validator([1]);
  const outputValid = validator([6]);

  assertEquals(outputInvalid, { _self: ["Should have at least 5 items"] });
  assertEquals(outputValid, undefined);
});

Deno.test("Should correctly include validator on static condition - true", () => {
  const validator = includeIf(
    true,
    minItems(4, "Should have at least 5 items"),
  );
  const outputInvalid = validator([1]);

  assertEquals(outputInvalid, { _self: ["Should have at least 5 items"] });
});

Deno.test("Should correctly include validator on static condition - false", () => {
  const validator = includeIf(
    false,
    minItems(4, "Should have at least 5 items"),
  );
  const outputInvalid = validator([1]);

  assertEquals(outputInvalid, undefined);
});

Deno.test("Should correctly infer types from the boolean condition", () => {
  const validator = includeIf(
    (value: { length: number }) => value.length > 5,
    object({
      foo: requiredPrimitive("foo is required"),
    }),
  );
  const outputInvalid = validator({ length: 6 });
  const outputValid = validator({ length: 6, foo: "bla" });
  const outputValid2 = validator({ length: 2 });

  assertEquals(outputInvalid, { foo: ["foo is required"] });
  assertEquals(outputValid, undefined);
  assertEquals(outputValid2, undefined);
});
