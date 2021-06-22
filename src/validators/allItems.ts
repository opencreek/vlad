import { Validator, SubjectType } from '../types'

export type ItemsErrors<E> = { [index: number]: E }

export function allItems<V extends Validator>(validator: V): Validator<Array<SubjectType<V>>, ItemsErrors<ReturnType<V>>> {
    return function allItemsValidator(array: Array<SubjectType<V>> | undefined, context: object | undefined): ItemsErrors<ReturnType<V>> | undefined {
        if (array === undefined)
            return undefined

        const errorEntries = array
            .map((value, index) => [ index, validator(value, context) ])
            .filter(([ _, errors ]) => errors !== undefined)

        if (errorEntries.length === 0)
            return undefined

        return Object.fromEntries(errorEntries)
    }
}

