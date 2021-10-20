import { buildValidatorTest } from "../validator-macro.ts";
import { min } from "../../src/validators/min.ts";

const testMessage = "Must be at least 3.2";
const validator = min(3.2, testMessage);
const minTest = buildValidatorTest(validator, [testMessage]);

// Deno.test("succeeds on undefined", () => {
//   minTest(undefined, true);
// });
Deno.test("succeeds on 3.2", () => {
  minTest(3.2, true);
});
Deno.test("succeeds on 100", () => {
  minTest(100, true);
});
Deno.test("fails on 2", () => {
  minTest(2, false);
});
Deno.test("fails on -.2", () => {
  minTest(-.2, false);
});
Deno.test("fails on 0", () => {
  minTest(0, false);
});
