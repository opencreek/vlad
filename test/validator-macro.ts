import { Validator } from "../src/types.ts";
import { assertEquals } from "./testingDeps.ts";

export function buildValidatorTest<T, E>(
  validatorFunction: Validator<T, E>,
  expectedError: E,
): (value: T, shouldValidate: boolean) => void {
  return function validatorTest(
    value: T | undefined,
    shouldValidate: boolean,
  ): void {
    const validationResult = validatorFunction(value);

    if (shouldValidate) {
      assertEquals(validationResult, undefined);
    } else {
      assertEquals(validationResult, expectedError);
    }
  };
}
