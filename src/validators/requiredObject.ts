import { ObjectTopLevelError, PrimitiveErrors, Validator } from "../types.ts";
import {
  object,
  PropertiesValidatorInput,
  PropertiesValidatorResult,
  ValidatorMap,
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
export function requiredObject<V extends ValidatorMap>(
  message: string,
  validatorMap?: V,
): Validator<
  PropertiesValidatorInput<V>,
  Partial<ObjectTopLevelError<PrimitiveErrors>> & PropertiesValidatorResult<V>
> {
  const objectValidator: Validator<
    PropertiesValidatorInput<V>,
    PropertiesValidatorResult<V>
  > = validatorMap ? object(validatorMap) : () => undefined;
  return function requiredObjectValidator(value) {
    if (value === undefined || value === null) {
      return {
        _self: [message],
        ...objectValidator({}),
      } as PropertiesValidatorResult<V> & ObjectTopLevelError<PrimitiveErrors>;
    }

    return objectValidator(value);
  };
}
