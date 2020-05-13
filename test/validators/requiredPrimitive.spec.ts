import test from 'ava'

import buildValidatorMacro from '../validator-macro'

import { requiredPrimitive } from '../../src/validators/requiredPrimitive'

const testMessage = 'This is required'
const validator = requiredPrimitive(testMessage)
const requiredTest = buildValidatorMacro(validator, [ testMessage ])

test('fails on null', requiredTest, null, false)
test('fails on undefined', requiredTest, undefined, false)

test('succeeds on empty string', requiredTest, '', true)
test('succeeds on non-empty string', requiredTest, 'asdf', true)

test('succeeds on zero', requiredTest, 0, true)
test('succeeds on positive number', requiredTest, 12, true)
test('succeeds on negative number', requiredTest, -23, true)

test('succeeds on true', requiredTest, true, true)
test('succeeds on false', requiredTest, false, true)
