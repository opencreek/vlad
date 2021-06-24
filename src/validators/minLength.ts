import { Validator, PrimitiveErrors } from '../types'

/**
 * Builds a validator function that checks if a string has at least the given amount of characters
 *
 * Example:
 *
 * ```typescript
 * const validator = minLength(12, 'Password must be at least 12 characters long')
 *
 * console.assert(validator('secret') === [ 'Password must be at least 12 characters long' ])
 * console.assert(validator('this is maybe safer') === undefined)
 * ```
 */
export function minLength(length: number, message: string): Validator<string, PrimitiveErrors> {
    return function minLengthValidator(value: string | undefined): PrimitiveErrors | undefined {
        if (value === undefined)
            return undefined

        const { length: subjectLength } = value

        if (subjectLength >= length)
            return undefined

        return [ message ]
    }
}

