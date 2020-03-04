import test from 'ava'

import buildValidatorMacro from '../validator-macro'

import { required } from '../../src/validators/required'

const testMessage = 'This is required'
const validator = required(testMessage)
const requiredTest = buildValidatorMacro(validator, [ testMessage ])

test('fails on null', requiredTest, null, false)
test('fails on undefined', requiredTest, undefined, false)
test('fails on empty string', requiredTest, '', false)

test('succeeds on non-empty string', requiredTest, 'asdf', true)

test('succeeds on zero', requiredTest, 0, true)
test('succeeds on positive number', requiredTest, 12, true)
test('succeeds on negative number', requiredTest, -23, true)

test('succeeds on true', requiredTest, true, true)
test('succeeds on false', requiredTest, false, true)

test('succeeds on empty array', requiredTest, [], true)
test('succeeds on filled array', requiredTest, [ 0 ], true)

test('succeeds on object', requiredTest, {}, true)
