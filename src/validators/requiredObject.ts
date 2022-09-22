import { SelfErrors, Validator } from "../types.ts";
import {
  object,
  ObjectValidatorResult,
  ObjectValidators,
  ObjectValidatorSubject,
} from "./object.ts";

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
export function requiredObject<E>(
  message: E,
): Validator<
  // we actually want all non-primitives here
  // deno-lint-ignore ban-types
  object,
  SelfErrors<E>
>;
export function requiredObject<V extends ObjectValidators, E>(
  message: E,
  validatorMap: V,
): Validator<
  ObjectValidatorSubject<V>,
  | SelfErrors<E>
  | ObjectValidatorResult<V>
  | SelfErrors<E> & ObjectValidatorResult<V>
>;
export function requiredObject<V extends ObjectValidators, E>(
  message: E,
  validatorMap?: V,
): Validator<
  ObjectValidatorSubject<V>,
  | SelfErrors<E>
  | ObjectValidatorResult<V>
  | SelfErrors<E> & ObjectValidatorResult<V>
> {
  const objectValidator: Validator<
    ObjectValidatorSubject<V>,
    ObjectValidatorResult<V>
  > = validatorMap ? object(validatorMap) : () => undefined;
  return function requiredObjectValidator(value) {
    if (value === undefined || value === null) {
      return {
        _self: [message],
        ...objectValidator({}),
      };
    }

    return objectValidator(value);
  };
}
