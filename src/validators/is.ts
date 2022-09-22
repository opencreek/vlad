import { PrimitiveErrors, Validator } from "../types.ts";

/**
 * Builds a validator function that checks if a value is equal to the given value
 *
 * Example:
 *
 * ```typescript
 * const validator = is(13, 'Value should be 13')
 *
 * console.assert(validator('foo') === [ 'Value should be 13' ])
 * console.assert(validator(13) === undefined)
 * ```
 */
export function is<T, E>(
  expected: T,
  message: E,
): Validator<T, PrimitiveErrors<E>> {
  return function isValidator(
    subject: T | undefined,
  ): PrimitiveErrors<E> | undefined {
    if (subject === expected) {
      return undefined;
    }

    return [message];
  };
}
