import { Errors, Validator } from "../types.ts";

export type ObjectValidators<
  V extends Validator<any, Errors> = Validator<any, Errors>,
> = {
  [property: string]: V;
};

export type ObjectValidatorSubject<V extends ObjectValidators> =
  | {
    [property in keyof V]?: V[property] extends Validator<infer S, Errors>
      ? S | undefined
      : never;
  }
  | undefined;

export type ObjectValidatorResult<V extends ObjectValidators> =
  | {
    [property in keyof V]?: V[property] extends Validator<any, infer E> ? E
      : never;
  }
  | undefined;

/**
 * Builds a validator function that applies the given validator map to the properties
 * in the given object, returning a map of errors.
 *
 * Example:
 *
 * ```typescript
 * const validator = object({
 *     age: min(12, 'Age must be at least 12 to ride the rollercoaster'),
 *     name: requiredPrimitive('Must submit a name'),
 * })
 *
 * console.assert(validator({ age: 4 }) === {
 *     age: [ 'Age must be at least 12 to ride the rollercoaster' ],
 *     name: [ 'Must submit a name' ],
 * })
 * console.assert(validator({ age: 13 }) === {
 *     name: [ 'Must submit a name' ],
 * })
 * console.assert(validator({ age: 15, name: 'Kim' }) === undefined)
 * ```
 */
export function object<
  V extends ObjectValidators,
>(
  validatorMap: V,
): Validator<ObjectValidatorSubject<V>, ObjectValidatorResult<V>> {
  return function objectValidator(subject, context) {
    if (subject === undefined) {
      return undefined;
    }

    const errorEntries = Object
      .keys(validatorMap)
      .map((key) =>
        [
          key,
          validatorMap[key](subject[key], context),
        ] as const
      )
      .filter(([_, errors]) => errors !== undefined);

    if (errorEntries.length === 0) {
      return undefined;
    }

    return Object.fromEntries(errorEntries) as ObjectValidatorResult<V>;
  };
}

/**
 * @deprecated Use `object` instead.
 */
export const properties = object;
