import { Validator, PrimitiveErrors } from '../types'

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