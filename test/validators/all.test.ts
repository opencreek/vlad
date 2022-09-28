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

  assertEquals(output, ["Should have at least 5 items"]);
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

  assertEquals(output, ["Must have at least 2 items"]);
});

Deno.test("should correctly merge different error types", () => {
  const minMessage = "Must have at least 4 items";
  const itMessage = "should be there";
  const min = minItems(4, minMessage);
  const it = allItems(requiredPrimitive(itMessage));
  const validator = all(min, it);

  const subject = ["asdf", 3, undefined];
  assertEquals(min(subject), [minMessage]);
  assertEquals(it(subject), { 2: [itMessage] });
  const output = validator(subject);

  assertEquals(output, { _self: [minMessage], 2: [itMessage] });
});
