import { Validator, PrimitiveErrors } from '../types'

type Primitive =
    | number
    | boolean
    | string
    | Symbol
    | null
    | undefined

export function requiredPrimitive(message: string): Validator<Primitive, PrimitiveErrors> {
    return function requiredValidator(value: Primitive): PrimitiveErrors | undefined {
        if (value === undefined || value === null)
            return [ message ]

        return undefined
    }
}
