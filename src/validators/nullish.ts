import { Validator, PrimitiveErrors } from '../types'

export function nullish(message: string): Validator<any, PrimitiveErrors> {
    return function nullishValidator(subject: any | undefined): PrimitiveErrors | undefined {
        if (subject === undefined || subject === null)
            return undefined

        return [ message ]
    }
}
