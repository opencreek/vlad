import test from 'ava'

import buildValidatorMacro from '../validator-macro'

import { requiredObject } from '../../src/validators/requiredObject'

const testMessage = 'This is required'
const validator = requiredObject(testMessage)
const requiredTest = buildValidatorMacro(validator, { _self: [ testMessage ] })

test('fails on undefined', requiredTest, undefined, false)

test('succeeds on empty array', requiredTest, [], true)
test('succeeds on filled array', requiredTest, [ 0 ], true)

test('succeeds on object', requiredTest, {}, true)
