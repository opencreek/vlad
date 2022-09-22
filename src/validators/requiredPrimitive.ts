import { PrimitiveErrors, Validator } from "../types.ts";

type Primitive =
  | number
  | boolean
  | string
  | symbol
  | null
  | undefined;

/**
 * Builds a validator function that checks if the given primitive value is neither `undefined` nor `null`
 *
 * Example:
 *
 * ```typescript
 * const validator = requiredPrimitive('Name is required')
 *
 * console.assert(validator(null) === [ 'Name is required' ])
 * console.assert(validator(undefined) === [ 'Name is required' ])
 * console.assert(validator('Kim') === undefined)
 * ```
 */
export function requiredPrimitive<E>(
  message: E,
): Validator<Primitive, PrimitiveErrors<E>> {
  return function requiredValidator(
    value: Primitive,
  ): PrimitiveErrors<E> {
    if (value === undefined || value === null) {
      return [message];
    }

    return undefined;
  };
}
