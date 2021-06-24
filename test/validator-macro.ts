import { Macro, ExecutionContext } from 'ava'

import { Validator } from '../src/types'

export default function buildValidatorMacro<T, E>(
    validatorFunction: Validator<T, E>,
    expectedError: E,
): Macro<[ T | undefined, boolean ]> {
    return function validatorMacro(t: ExecutionContext, value: T | undefined, shouldValidate: boolean): void {
        const validationResult = validatorFunction(value)

        if (shouldValidate)
            t.deepEqual(validationResult, undefined)
        else
            t.deepEqual(validationResult, expectedError)
    }
}

