import { Validator, PrimitiveErrors } from '../types'

/**
 * Builds a validator function that checks if a number is at least as big as the given number
 *
 * Example:
 *
 * ```typescript
 * const validator = min(21, 'Age must be at least 21')
 *
 * console.assert(validator(10) === [ 'Age must be at least 21' ])
 * console.assert(validator(21) === undefined)
 * console.assert(validator(30) === undefined)
 * ```
 */
export function min(minValue: number, message: string): Validator<number, PrimitiveErrors> {
    return function minValidator(subject: number | undefined): PrimitiveErrors | undefined {
        if (subject === undefined)
            return undefined

        if (subject >= minValue)
            return undefined

        return [ message ]
    }
}

