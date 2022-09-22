import { Errors, SubjectType, Validator } from "../types.ts";

export type ItemsErrors<E extends Errors> = { [index: number]: E };

/**
 * Builds a validator function that applies the given validator to all elements of an array
 *
 * Example:
 *
 * ```typescript
 * const validator = allItems(min(5, 'Must be at least 5'))
 *
 * console.assert(validator([ 8, 2, 3 ]) === {
 *     1: [ 'Must be at least 5' ],
 *     2: [ 'Must be at least 5' ],
 * })
 * console.assert(validator([ 5, 120 ]) === undefined)
 * console.assert(validator([]) === undefined)
 * ```
 */
export function allItems<V extends Validator>(
  validator: V,
): Validator<ReadonlyArray<SubjectType<V>>, ItemsErrors<ReturnType<V>>> {
  return function allItemsValidator(array, context) {
    if (array === undefined) {
      return undefined;
    }

    const errorEntries = array
      .map((value, index) => [index, validator(value, context)])
      .filter(([_, errors]) => errors !== undefined);

    if (errorEntries.length === 0) {
      return undefined;
    }

    return Object.fromEntries(errorEntries);
  };
}
