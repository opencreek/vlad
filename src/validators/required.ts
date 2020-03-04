import { Validator, PrimitiveErrors } from '../types'

export function required(message: string): Validator<any, PrimitiveErrors> {
    return function requiredValidator(value: any): PrimitiveErrors | undefined {
        if (typeof value === 'number' || typeof value === 'boolean')
            return undefined

        if (value)
            return undefined

        return [ message ]
    }
}
