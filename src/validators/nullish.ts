import { Validator, PrimitiveErrors } from '../types'

/**
 * Builds a validator function that checks if a given value is `null` or `undefined`
 *
 * Example:
 *
 * ```typescript
 * const validator = nullish('Age cannot be set by user')
 *
 * console.assert(validator('Kim') === [ 'Age cannot be set by user' ])
 * console.assert(validator(undefined) === undefined)
 * console.assert(validator(null) === undefined)
 * ```
 */
export function nullish(message: string): Validator<any, PrimitiveErrors> {
    return function nullishValidator(subject: any | undefined): PrimitiveErrors | undefined {
        if (subject === undefined || subject === null)
            return undefined

        return [ message ]
    }
}

