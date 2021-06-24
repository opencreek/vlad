import { Validator, PrimitiveErrors } from '../types'

type Primitive =
    | number
    | boolean
    | string
    | symbol
    | null
    | undefined

/**
 * Builds a validator function that checks if the given primitive value is neither `undefined` nor `null`
 *
 * Example:
 *
 * ```typescript
 * const validator = requiredPrimitive('Name is required')
 *
 * console.assert(validator(null) === [ 'Name is required' ])
 * console.assert(validator(undefined) === [ 'Name is required' ])
 * console.assert(validator('Kim') === undefined)
 * ```
 */
export function requiredPrimitive(message: string): Validator<Primitive, PrimitiveErrors> {
    return function requiredValidator(value: Primitive): PrimitiveErrors | undefined {
        if (value === undefined || value === null)
            return [ message ]

        return undefined
    }
}

