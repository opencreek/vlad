// @ts-nocheck

import { Validator, SubjectType, PrimitiveErrors } from '../types'
import deepmerge from 'deepmerge'

export function all<V1 extends Validator>(validator1: V1): Validator<SubjectType<V1>, ReturnType<V1>>
export function all<V1 extends Validator, V2 extends Validator>(validator1: V1, validator2: V2): Validator<SubjectType<V1> & SubjectType<V2>, ReturnType<V1> | ReturnType<V2>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator>(validator1: V1, validator2: V2, validator3: V3): Validator<SubjectType<V1> & SubjectType<V2> & SubjectType<V3>, ReturnType<V1> | ReturnType<V2> | ReturnType<V3>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4): Validator<SubjectType<V1> & SubjectType<V2> & SubjectType<V3> & SubjectType<V4>, ReturnType<V1> | ReturnType<V2> | ReturnType<V3> | ReturnType<V4>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5): Validator<SubjectType<V1> & SubjectType<V2> & SubjectType<V3> & SubjectType<V4> & SubjectType<V5>, ReturnType<V1> | ReturnType<V2> | ReturnType<V3> | ReturnType<V4> | ReturnType<V5>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6): Validator<SubjectType<V1> & SubjectType<V2> & SubjectType<V3> & SubjectType<V4> & SubjectType<V5> & SubjectType<V6>, ReturnType<V1> | ReturnType<V2> | ReturnType<V3> | ReturnType<V4> | ReturnType<V5> | ReturnType<V6>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7): Validator<SubjectType<V1> & SubjectType<V2> & SubjectType<V3> & SubjectType<V4> & SubjectType<V5> & SubjectType<V6> & SubjectType<V7>, ReturnType<V1> | ReturnType<V2> | ReturnType<V3> | ReturnType<V4> | ReturnType<V5> | ReturnType<V6> | ReturnType<V7>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8): Validator<SubjectType<V1> & SubjectType<V2> & SubjectType<V3> & SubjectType<V4> & SubjectType<V5> & SubjectType<V6> & SubjectType<V7> & SubjectType<V8>, ReturnType<V1> | ReturnType<V2> | ReturnType<V3> | ReturnType<V4> | ReturnType<V5> | ReturnType<V6> | ReturnType<V7> | ReturnType<V8>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9): Validator<SubjectType<V1> & SubjectType<V2> & SubjectType<V3> & SubjectType<V4> & SubjectType<V5> & SubjectType<V6> & SubjectType<V7> & SubjectType<V8> & SubjectType<V9>, ReturnType<V1> | ReturnType<V2> | ReturnType<V3> | ReturnType<V4> | ReturnType<V5> | ReturnType<V6> | ReturnType<V7> | ReturnType<V8> | ReturnType<V9>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator, V10 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9, validator10: V10): Validator<SubjectType<V1> & SubjectType<V2> & SubjectType<V3> & SubjectType<V4> & SubjectType<V5> & SubjectType<V6> & SubjectType<V7> & SubjectType<V8> & SubjectType<V9> & SubjectType<V10>, ReturnType<V1> | ReturnType<V2> | ReturnType<V3> | ReturnType<V4> | ReturnType<V5> | ReturnType<V6> | ReturnType<V7> | ReturnType<V8> | ReturnType<V9> | ReturnType<V10>>

export function all(...validators) {
    return function allValidator(subject, context) {
        return validators
            .map(it => it(subject, context))
            .reduce(
                (acc, cur) => {
                    if (cur === undefined)
                        return acc

                    return deepmerge(acc, cur)
                },
                undefined,
            )
    }
}
