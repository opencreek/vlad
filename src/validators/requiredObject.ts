// deno-lint-ignore-file ban-types

import { ObjectTopLevelError, PrimitiveErrors, Validator } from "../types.ts";

/**
 * Builds a validator function that checks if the given object value is neither `undefined` nor `null`
 *
 * Example:
 *
 * ```typescript
 * const validator = requiredObject('Person is required')
 *
 * console.assert(validator(null) === [ 'Person is required' ])
 * console.assert(validator(undefined) === [ 'Person is required' ])
 * console.assert(validator({ name: 'Kim' }) === undefined)
 * ```
 */
export function requiredObject(
  message: string,
): Validator<object, ObjectTopLevelError<PrimitiveErrors>> {
  return function requiredValidator(value) {
    if (value === undefined || value === null) {
      return { _self: [message] };
    }

    return undefined;
  };
}
