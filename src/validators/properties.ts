import { Validator } from '../types'

type ValidatorMap = { [property: string]: Validator }
export type PropertiesValidatorInput<V extends ValidatorMap> = { [property in keyof V]?: Parameters<V[property]>[0] }
export type PropertiesValidatorResult<V extends ValidatorMap> = { [property in keyof V]?: ReturnType<V[property]> }

export function properties<
    V extends ValidatorMap
>(validatorMap: V,): Validator<PropertiesValidatorInput<V>, PropertiesValidatorResult<V>> {
    return function propertiesValidator(
        subject: PropertiesValidatorInput<V> | undefined,
        context: object | undefined,
    ): PropertiesValidatorResult<V> | undefined {
        if (subject === undefined)
            return undefined

        const errorEntries = Object
            .keys(validatorMap)
            .map(key => [ key, validatorMap[key](subject[key], context) ] as const)
            .filter(([ _, errors ]) => errors !== undefined)

        if (errorEntries.length === 0)
            return undefined

        return Object.fromEntries(errorEntries)
    }
}
