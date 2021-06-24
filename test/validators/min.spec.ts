import test from 'ava'

import buildValidatorMacro from '../validator-macro'

import { min } from '../../src/validators/min'

const testMessage = 'Must be at least 3.2'
const validator = min(3.2, testMessage)
const minTest = buildValidatorMacro(validator, [ testMessage ])

test('succeeds on undefined', minTest, undefined, true)
test('succeeds on 3.2', minTest, 3.2, true)
test('succeeds on 100', minTest, 100, true)
test('fails on 2', minTest, 2, false)
test('fails on -.2', minTest, -.2, false)
test('fails on 0', minTest, 0, false)

