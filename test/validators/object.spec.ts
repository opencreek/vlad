import { requiredPrimitive } from "../../src/validators/requiredPrimitive.ts";
import { minLength } from "../../src/validators/minLength.ts";
import { object } from "../../src/validators/object.ts";
import { assertEquals } from "../testingDeps.ts";

type User = {
  age?: number;
  name?: string;
};

const validator = object({
  age: requiredPrimitive("Age is required"),
  name: minLength(4, "Name must be at least 4 characters long"),
});

function propertiesTest(
  value: User,
  expected: ReturnType<typeof validator>,
): void {
  const validationResult = validator(value);

  assertEquals(validationResult, expected);
}

Deno.test("fails on age", () => {
  propertiesTest({ name: "Carlo" }, { age: ["Age is required"] });
});
Deno.test("fails on short name", () => {
  propertiesTest({ age: 10, name: "C" }, {
    name: ["Name must be at least 4 characters long"],
  });
});
Deno.test("succeeds on age only", () => {
  propertiesTest({ age: 15 }, undefined);
});
