import { ObjectTopLevelError, PrimitiveErrors, Validator } from "../types.ts";

/**
 * Builds a validator function that checks if an array has no more than the given amount of elements
 *
 * Example:
 *
 * ```typescript
 * const validator = maxItems(2, 'Must be a pair')
 *
 * console.assert(validator([ 1, {}, '' ]) === { _self: [ 'Must be a pair' ] })
 * console.assert(validator([]) === undefined)
 * ```
 */
export function maxItems(
  length: number,
  message: string,
): Validator<Array<unknown>, ObjectTopLevelError<PrimitiveErrors>> {
  return function minItemsValidator(
    value: Array<unknown> | undefined,
  ): ObjectTopLevelError<PrimitiveErrors> | undefined {
    if (value === undefined) {
      return undefined;
    }

    const { length: subjectLength } = value;

    if (subjectLength <= length) {
      return undefined;
    }

    return { _self: [message] };
  };
}
