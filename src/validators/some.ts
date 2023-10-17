// @ts-nocheck Deepmerge magic, will be replaced

import { SubjectType, Validator } from "../types.ts";
import { deepMerge } from "../deps.ts";

/**
 * Builds a validator function that validates, if at least one of the given validators passes
 *
 * Example:
 *
 * ```typescript
 * const validator = some(
 *     minItems(3, 'Cannot submit less than three names'),
 *     minItems(2, 'Cannot submit less than two names'),
 * )
 *
 * console.assert(validator([ "test" ]) === {
 *     _self: [ 'Cannot submit less than three names', 'Cannot submit more than three names' ],
 * })
 * console.assert(validator([ 'Kim', null ]) === undefined)
 * ```
 */
// deno-fmt-ignore
export function some<V1 extends Validator>(validator1: V1): Validator<Partial<SubjectType<V1>>, PartialReturnOrPrimitive<V1>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator>(validator1: V1, validator2: V2): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator, V3 extends Validator>(validator1: V1, validator2: V2, validator3: V3): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6> & PartialReturnOrPrimitive<V7>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6> & PartialReturnOrPrimitive<V7> & PartialReturnOrPrimitive<V8>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6> & PartialReturnOrPrimitive<V7> & PartialReturnOrPrimitive<V8> & PartialReturnOrPrimitive<V9>>
// deno-fmt-ignore
export function some<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator, V10 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9, validator10: V10): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>> & Partial<SubjectType<V10>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6> & PartialReturnOrPrimitive<V7> & PartialReturnOrPrimitive<V8> & PartialReturnOrPrimitive<V9> & PartialReturnOrPrimitive<V10>>

export function some(...validators) {
  if (validators.length === 0) {
    throw new Error("some requires at least one validator");
  }
  return function someValidator(subject, context) {
    const errors = validators
      .map((it) => it(subject, context));

    if (errors.some((it) => it == undefined)) {
      return undefined;
    }
    return errors
      .reduce(
        (acc, cur) => {
          if (cur === undefined) {
            return acc;
          }

          if (acc == undefined) {
            return cur;
          }

          if (Array.isArray(acc) && Array.isArray(cur)) {
            return [...acc, ...cur];
          }

          return deepMerge(acc, cur);
        },
        undefined,
      );
  };
}
