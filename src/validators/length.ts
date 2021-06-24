import { Validator, PrimitiveErrors } from '../types'

/**
 * Builds a validator function that checks if a given string has the given length or not
 *
 * Example:
 *
 * ```typescript
 * const validator = length(3, 'Currency Code must be excactly three chars long')
 *
 * console.assert(validator('Dollar') === [ 'Currency Code must be excactly three chars long' ])
 * console.assert(validator('USD') === undefined)
 * ```
 */
export function length(length: number, message: string): Validator<string, PrimitiveErrors> {
    return function lengthValidator(value: string | undefined): PrimitiveErrors | undefined {
        if (value === undefined)
            return undefined

        const { length: subjectLength } = value

        if (subjectLength === length)
            return undefined

        return [ message ]
    }
}

