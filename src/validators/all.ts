import { Validator, SubjectType, PrimitiveErrors } from '../types'
import deepmerge from 'deepmerge'

// type TupleToUnion<T extends Array<unknown>> = T[number]
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
type OptionalFoo = { foo: string } | undefined
type OptionalBar = { bar: string } | undefined
type Test = UnionToIntersection<OptionalFoo | OptionalBar>
// type TupleToIntersection<T extends Array<unknown>> = UnionToIntersection<TupleToUnion<T>>

// type ReturnTuple<V extends Array<Validator>> = {
//     [K in keyof V]: ReturnType<V[K] extends Validator ? V[K] : never>
// }
// type SubjectTuple<V extends Array<Validator>> = {
//     [K in keyof V]: SubjectType<V[K] extends Validator ? V[K] : never>
// }

export function all<V1 extends Validator, V2 extends Validator>(validator1: V1, validator2: V2): Validator<SubjectType<V1> & SubjectType<V2>, ReturnType<V1> | ReturnType<V2>>
export function all<V extends Array<Validator>>(
    ...validators: V
): Validator<TupleToIntersection<SubjectTuple<V>>, TupleToIntersection<ReturnTuple<V>>> {
    return function allValidator(
        subject: TupleToIntersection<SubjectTuple<V>> | undefined,
        context: object | undefined,
    ): TupleToIntersection<ReturnTuple<V>> | undefined {
        return validators
            .map(it => it(subject, context))
            .reduce<TupleToIntersection<ReturnTuple<V>> | undefined>(
                (acc, cur) => deepmerge(acc, cur),
                undefined,
            )
    }
}
