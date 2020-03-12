import { Validator, SubjectType } from '../types'

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

type SubjectTuple<V extends Array<Validator>> = {
    [K in keyof V]: SubjectType<V[K] extends Validator ? V[K] : never>
}
type TupledTuple<T extends Array<unknown>> = { [K in keyof T]: [ T[K] ] }
type TupleToUnion<T extends Array<unknown>> = T[number]

type SomeFuncs = [ (subject: boolean | undefined) => void, (subject: unknown | undefined) => void ]
type Subjects = SubjectTuple<SomeFuncs>
type TupledSubjects = TupledTuple<Subjects>
type TupledSubjectsUnion = TupleToUnion<TupledSubjects>
type TheUltimateIntersection = UnionToIntersection<TupledSubjectsUnion>[number]

type TupleNestedIntersection<V extends Array<Validator>> = UnionToIntersection<
    TupleToUnion<
        TupledTuple<
            SubjectTuple<
                V
            >
        >
    >
>
type UnpackTupleNesting<T extends Array<unknown>> = T[number]
type Magic<V extends Array<Validator>> = UnpackTupleNesting<
    TupleNestedIntersection<
        V
    >
>

type DoesIt<T extends Array<unknown>> = T[number]
type Test = DoesIt<[ {} ] & [ { foo: string } ]>
