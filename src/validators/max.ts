import { PrimitiveErrors, Validator } from "../types.ts";

/**
 * Builds a validator function that checks if a number is at most as big as the given number
 *
 * Example:
 *
 * ```typescript
 * const validator = max(99, 'Age must be at most 99')
 *
 * console.assert(validator(100) === [ 'Age must be at least 21' ])
 * console.assert(validator(21) === undefined)
 * console.assert(validator(30) === undefined)
 * ```
 */
export function max(
  minValue: number,
  message: string,
): Validator<number, PrimitiveErrors> {
  return function maxValidator(
    subject: number | undefined,
  ): PrimitiveErrors | undefined {
    if (subject === undefined) {
      return undefined;
    }

    if (subject <= minValue) {
      return undefined;
    }

    return [message];
  };
}
