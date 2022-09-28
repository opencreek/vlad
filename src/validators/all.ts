// @ts-nocheck Deepmerge magic, will be replaced

import { PrimitiveErrors, SubjectType, Validator } from "../types.ts";
import { deepMerge } from "../deps.ts";

/**
 * Builds a validator function that applies all given validators to a value, merging their results
 *
 * Example:
 *
 * ```typescript
 * const validator = all(
 *     allItems(requiredPrimitive('Names must be set')),
 *     maxItems(2, 'Cannot submit more than two names'),
 * )
 *
 * console.assert(validator([ null, 'Kim', 'Arthur' ]) === {
 *     _self: [ 'Cannot submit more than two names' ],
 *     1: [ 'Names must be set' ],
 * })
 * console.assert(validator([ 'Kim', null ]) === { 1: [ 'Names must be set' ] })
 * console.assert(validator([ 'Kim', 'Arthur', 'Monica' ]) === { _self: [ 'Cannot submit more than two names' ] })
 * console.assert(validator([ 'Kim', 'Arthur' ]) === undefined)
 * ```
 */

type PartialReturnOrPrimitive<V extends Validator> = ReturnType<V> extends
  PrimitiveErrors ? ReturnType<V> : Partial<ReturnType<V>>;
// deno-fmt-ignore
export function all<V1 extends Validator>(validator1: V1): V1
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator>(validator1: V1, validator2: V2): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator>(validator1: V1, validator2: V2, validator3: V3): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6> & PartialReturnOrPrimitive<V7>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6> & PartialReturnOrPrimitive<V7> & PartialReturnOrPrimitive<V8>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6> & PartialReturnOrPrimitive<V7> & PartialReturnOrPrimitive<V8> & PartialReturnOrPrimitive<V9>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator, V10 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9, validator10: V10): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>> & Partial<SubjectType<V10>>, PartialReturnOrPrimitive<V1> & PartialReturnOrPrimitive<V2> & PartialReturnOrPrimitive<V3> & PartialReturnOrPrimitive<V4> & PartialReturnOrPrimitive<V5> & PartialReturnOrPrimitive<V6> & PartialReturnOrPrimitive<V7> & PartialReturnOrPrimitive<V8> & PartialReturnOrPrimitive<V9> & PartialReturnOrPrimitive<V10>>

export function all(...validators) {
  return function allValidator(subject, context) {
    return validators
      .map((it) => it(subject, context))
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
