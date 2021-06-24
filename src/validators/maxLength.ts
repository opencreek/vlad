import { Validator, PrimitiveErrors } from '../types'

/**
 * Builds a validator function that checks if a string has not more than the given amount of characters
 *
 * Example:
 *
 * ```typescript
 * const validator = maxLength(5, 'Initials cannot be longer than 5 charactes')
 *
 * console.assert(validator('RSSWART') === [ 'Initials cannot be longer than 5 charactes' ])
 * console.assert(validator('LS') === undefined)
 * ```
 */
export function maxLength(length: number, message: string): Validator<string, PrimitiveErrors> {
    return function maxLengthValidator(value: string | undefined): PrimitiveErrors | undefined {
        if (value === undefined)
            return undefined

        const { length: subjectLength } = value

        if (subjectLength <= length)
            return undefined

        return [ message ]
    }
}

