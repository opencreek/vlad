import {
  CompositeErrors,
  Errors,
  PrimitiveErrors,
  SelfErrors,
  SubjectType,
  Validator,
} from "../types.ts";

// deno-fmt-ignore
export type JoinedErrors<E1 extends Errors, E2 extends Errors> =
    E1 extends PrimitiveErrors<infer L1>
        ? E2 extends PrimitiveErrors<infer L2>
            ? PrimitiveErrors<L1 | L2>
        : E2 extends CompositeErrors
            ? MergedCompositeErrors<SelfErrors<L1>, E2>
        : E2 extends undefined
            ? E1
        : never
    : E1 extends CompositeErrors
        ? E2 extends PrimitiveErrors<infer L2>
            ? MergedCompositeErrors<E1, SelfErrors<L2>>
        : E2 extends CompositeErrors
            ? MergedCompositeErrors<E1, E2>
        : E1
    : E1 extends undefined
        ? E2
    : never

type MergedCompositeErrors<
  E1 extends CompositeErrors,
  E2 extends CompositeErrors,
> =
  & {
    [property in Exclude<keyof NonNullable<E1>, keyof NonNullable<E2>>]?:
      NonNullable<E1>[property];
  }
  & {
    [property in Exclude<keyof NonNullable<E2>, keyof NonNullable<E1>>]?:
      NonNullable<E2>[property];
  }
  & {
    [property in keyof NonNullable<E1> & keyof NonNullable<E2>]?: JoinedErrors<
      NonNullable<E1>[property],
      NonNullable<E2>[property]
    >;
  };

export function joinErrors<E1 extends Errors, E2 extends Errors>(
  a: E1,
  b: E1,
): JoinedErrors<E1, E2> {
  if (a === undefined) {
    // @ts-ignore join magic
    return b;
  }

  if (b === undefined) {
    // @ts-ignore join magic
    return a;
  }

  const aIsPrimitive = Array.isArray(a);
  const bIsPrimitive = Array.isArray(b);

  if (aIsPrimitive && bIsPrimitive) {
    // @ts-ignore join magic
    return [...a, ...b];
  }

  const left = aIsPrimitive ? { _self: a } : a;
  const right = bIsPrimitive ? { _self: b } : b;

  // @ts-ignore join magic
  return joinCompositeErrors(left, right);
}

export function joinCompositeErrors<
  E1 extends NonNullable<CompositeErrors>,
  E2 extends NonNullable<CompositeErrors>,
>(a: E1, b: E2): MergedCompositeErrors<E1, E2> {
  const ret: MergedCompositeErrors<E1, E2> = {};

  for (const prop in a) {
    if (!(prop in b)) {
      // @ts-ignore join magic
      ret[prop] = a[prop];
    }

    // @ts-ignore join magic
    ret[prop] = joinErrors(a[prop], b[prop]);
  }

  for (const prop in b) {
    if (!(prop in a)) {
      // @ts-ignore join magic
      ret[prop] = b[prop];
    }
  }

  return ret;
}

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
export function all<V1 extends Validator, V2 extends Validator>(validator1: V1, validator2: V2): Validator<
    Partial<SubjectType<V1>> & Partial<SubjectType<V2>>,
    JoinedErrors<ReturnType<V1>, ReturnType<V2>>
>
// deno-fmt-ignore
//export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator>(validator1: V1, validator2: V2, validator3: V3): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>>>
//// deno-fmt-ignore
//export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>>>
//// deno-fmt-ignore
//export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>>>
//// deno-fmt-ignore
//export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>>>
//// deno-fmt-ignore
//export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>>>
//// deno-fmt-ignore
//export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>>>
//// deno-fmt-ignore
//export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>> & Partial<ReturnType<V9>>>
//// deno-fmt-ignore
//export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator, V10 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9, validator10: V10): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>> & Partial<SubjectType<V10>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>> & Partial<ReturnType<V9>> & Partial<ReturnType<V10>>>

// @ts-ignore js impl
export function all(...validators) {
  // @ts-ignore js impl
  return function allValidator(subject, context) {
    return validators
      .map(it => it(subject, context))
      .reduce(joinErrors, undefined);
  };
}
