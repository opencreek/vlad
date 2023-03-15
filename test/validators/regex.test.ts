import { buildValidatorTest } from "../validator-macro.ts";

import { regex } from "../../src/validators/regex.ts";

const testMessage = "Must contain an e";
const validator = regex(/.*e.*/, testMessage);

const minTest = buildValidatorTest(validator, [testMessage]);

// Deno.test("succeeds on undefined", () => {
//   minTest(undefined, true);
// });
Deno.test("succeeds on event", () => {
  minTest("event", true);
});
Deno.test("succeeds on tre", () => {
  minTest("tre", true);
});
Deno.test("fails on empty string", () => {
  minTest("", false);
});
Deno.test("fails on r", () => {
  minTest("r", false);
});
Deno.test("fails on Dollar", () => {
  minTest("Dollar", false);
});
