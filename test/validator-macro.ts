import { Errors, Validator } from "../src/types.ts";
import { assertEquals } from "./testingDeps.ts";

export function buildValidatorTest<T, E extends Errors>(
  validatorFunction: Validator<T, E>,
  expectedError: E,
): (value: T | undefined, shouldValidate: boolean) => void {
  return function validatorTest(value, shouldValidate) {
    const validationResult = validatorFunction(value);

    if (shouldValidate) {
      assertEquals(validationResult, undefined);
    } else {
      assertEquals(validationResult, expectedError);
    }
  };
}
