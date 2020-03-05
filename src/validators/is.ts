import { Validator, PrimitiveErrors } from '../types'

export function is<T>(expected: T, message: string): Validator<T, PrimitiveErrors> {
    return function isValidator(subject: T | undefined): PrimitiveErrors | undefined {
        if (subject === expected)
            return undefined

        return [ message ]
    }
}
