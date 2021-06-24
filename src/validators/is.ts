import { Validator, PrimitiveErrors } from '../types'

/**
 * Builds a validator function that checks if a value is equal to the given value
 *
 * Example:
 *
 * ```typescript
 * const validator = is(13, 'Value should be 13')
 *
 * console.assert(validator('foo') === [ 'Value should be 13' ])
 * console.assert(validator(13) === undefined)
 * ```
 */
export function is<T>(expected: T, message: string): Validator<T, PrimitiveErrors> {
    return function isValidator(subject: T | undefined): PrimitiveErrors | undefined {
        if (subject === expected)
            return undefined

        return [ message ]
    }
}

