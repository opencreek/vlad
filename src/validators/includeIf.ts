import { ContextType, SubjectType, Validator } from "../types.ts";

function resolveCondition<V1 extends Validator>(
  subject: SubjectType<V1>,
  context: ContextType<V1>,
  condition: Condition<V1>,
): boolean {
  if (typeof condition === "function") {
    return condition(subject, context);
  }

  return condition;
}

export type Condition<V1 extends Validator> =
  | ((value: SubjectType<V1>, context: ContextType<V1>) => boolean)
  | boolean;
/**
 * Builds a validator function that validates, only if the condition is met.
 *
 * Example:
 *
 * ```typescript
 * const validator = includeIf(
 *     (value) => (value?.[0]?? 0) > 1,
 *     minItems(2, 'Cannot submit less than two values'),
 * )
 *
 * console.assert(validator([ 2 ]) === {
 *     _self: [ 'Cannot submit less than two values' ],
 * })
 * console.assert(validator([ 0 ]) === undefined)
 * ```
 */

export function includeIf<
  // deno-lint-ignore no-explicit-any
  Subject extends any,
  V1 extends Validator,
>(
  condition:
    | ((value: Subject, context: ContextType<V1>) => boolean)
    | boolean,
  validator1: V1,
): Validator<SubjectType<V1> & Subject, ReturnType<V1>> {
  return function includeIfValidator(subject, context) {
    const conditionResult = resolveCondition(subject, context, condition);

    if (!conditionResult) {
      return undefined;
    }

    return validator1(subject, context);
  } as V1;
}
