import { PrimitiveErrors, Validator } from "../types.ts";

/**
 * Builds a validator function that checks a given string against a regex
 *
 * Example:
 *
 * ```typescript
 * const validator = regex(/^.*e.*$/, 'Must contain an e')
 *
 * console.assert(validator('Dollar') === [ 'Must contain an e' ])
 * console.assert(validator('events') === undefined)
 * ```
 */
export function regex(
  expression: RegExp,
  message: string,
): Validator<string, PrimitiveErrors> {
  if (expression.flags.includes("g") || expression.flags.includes("y")) {
    throw new Error("regex validator does not support global or sticky regex");
  }

  return function regexValidator(
    value: string | undefined,
  ): PrimitiveErrors | undefined {
    if (value === undefined) {
      return undefined;
    }

    if (typeof value !== "string") {
      return undefined;
    }

    if (expression.test(value)) {
      return undefined;
    }

    return [message];
  };
}
