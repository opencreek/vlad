import { Validator, PrimitiveErrors, ObjectTopLevelError } from '../types'

export function requiredObject(message: string): Validator<object, ObjectTopLevelError<PrimitiveErrors>> {
    return function requiredValidator(value: object | undefined): ObjectTopLevelError<PrimitiveErrors> | undefined {
        if (value === undefined || value === null)
            return { _self: [ message ] }
        
        return undefined
    }
}
