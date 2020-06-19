// @ts-nocheck

import { Validator, SubjectType } from '../types'
import deepmerge from 'deepmerge'

export function all<V1 extends Validator>(validator1: V1): Validator<Partial<SubjectType<V1>>, Partial<ReturnType<V1>>>
export function all<V1 extends Validator, V2 extends Validator>(validator1: V1, validator2: V2): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator>(validator1: V1, validator2: V2, validator3: V3): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>> & Partial<ReturnType<V9>>>
export function all<V1 extends Validator, V2 extends Validator, V3 extends Validator, V4 extends Validator, V5 extends Validator, V6 extends Validator, V7 extends Validator, V8 extends Validator, V9 extends Validator, V10 extends Validator>(validator1: V1, validator2: V2, validator3: V3, validator4: V4, validator5: V5, validator6: V6, validator7: V7, validator8: V8, validator9: V9, validator10: V10): Validator<Partial<SubjectType<V1>> & Partial<SubjectType<V2>> & Partial<SubjectType<V3>> & Partial<SubjectType<V4>> & Partial<SubjectType<V5>> & Partial<SubjectType<V6>> & Partial<SubjectType<V7>> & Partial<SubjectType<V8>> & Partial<SubjectType<V9>> & Partial<SubjectType<V10>>, Partial<ReturnType<V1>> & Partial<ReturnType<V2>> & Partial<ReturnType<V3>> & Partial<ReturnType<V4>> & Partial<ReturnType<V5>> & Partial<ReturnType<V6>> & Partial<ReturnType<V7>> & Partial<ReturnType<V8>> & Partial<ReturnType<V9>> & Partial<ReturnType<V10>>>

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
