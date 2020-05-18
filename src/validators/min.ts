import { Validator, PrimitiveErrors } from '../types'

export function min(minValue: number, message: string): Validator<number, PrimitiveErrors> {
    return function minValidator(subject: number | undefined): PrimitiveErrors | undefined {
        if (subject === undefined)
            return undefined

        if (subject >= minValue)
            return undefined

        return [ message ]
    }
}
