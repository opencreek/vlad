import { Validator } from "../types.ts";
import { PrimitiveErrors } from "../vlad.ts";

/**
 * Builds a validator function that checks if an array has at least the given amount of elements
 *
 * Example:
 *
 * ```typescript
 * const validator = minItems(1, 'Must not be empty')
 *
 * console.assert(validator([]) === [ 'Must not be empty' ])
 * console.assert(validator([ {}, [] ]) === undefined)
 * ```
 */
export function minItems<E>(
  length: number,
  message: E,
): Validator<ReadonlyArray<unknown>, PrimitiveErrors<E>> {
  return function minItemsValidator(
    value: ReadonlyArray<unknown> | undefined,
  ): PrimitiveErrors<E> {
    if (value === undefined) {
      return undefined;
    }

    const { length: subjectLength } = value;

    if (subjectLength >= length) {
      return undefined;
    }

    return [message];
  };
}
