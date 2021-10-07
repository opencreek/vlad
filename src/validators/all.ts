// @ts-nocheck Deepmerge magic, will be replaced

import { SubjectType, Validator } from "../types.ts";
import { deepmerge } from "../deepmerge.ts";

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
// deno-fmt-ignore
export function all<V1 extends Validator>(validator1: V1): Validator<Partial<SubjectType<V1>>, Partial<ReturnType<V1>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator>(validator1: V1, validator2: V2): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator>(validator1: V1, validator2: V2, validator3: V3): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>> & Partial<ReturnType<V9>>>
// deno-fmt-ignore
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator, V10 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9, validator10: V10): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>> & Partial<SubjectType<V10>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>> & Partial<ReturnType<V9>> & Partial<ReturnType<V10>>>

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

          return deepmerge(acc, cur);
        },
        undefined,
      );
  };
}
