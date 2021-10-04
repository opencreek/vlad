import { ObjectTopLevelError, PrimitiveErrors, Validator } from "../types.ts";

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
export function minItems(
  length: number,
  message: string,
): Validator<Array<any>, ObjectTopLevelError<PrimitiveErrors>> {
  return function minItemsValidator(
    value: Array<any> | undefined,
  ): ObjectTopLevelError<PrimitiveErrors> | undefined {
    if (value === undefined) {
      return undefined;
    }

    const { length: subjectLength } = value;

    if (subjectLength >= length) {
      return undefined;
    }

    return { _self: [message] };
  };
}
