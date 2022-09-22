import { PrimitiveErrors, SelfErrors, Validator } from "../types.ts";

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
export function maxItems<E>(
  length: number,
  message: E,
): Validator<ReadonlyArray<unknown>, SelfErrors<E>> {
  return function minItemsValidator(
    value: ReadonlyArray<unknown> | undefined,
  ): SelfErrors<E> | undefined {
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
