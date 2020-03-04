import { Validator, PrimitiveErrors, ObjectTopLevelError } from '../types'

export function maxItems(length: number, message: string): Validator<Array<any>, ObjectTopLevelError<PrimitiveErrors>> {
    return function minItemsValidator(value: Array<any> | undefined): ObjectTopLevelError<PrimitiveErrors> | undefined {
        if (value === undefined)
            return undefined

        const { length: subjectLength } = value

        if (subjectLength <= length)
            return undefined

        return { _self: [ message ] }
    }
}
