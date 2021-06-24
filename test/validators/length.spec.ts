import test from 'ava'

import buildValidatorMacro from '../validator-macro'

import { length } from '../../src/validators/length'

const testMessage = 'Must be exactly 3 characters long'
const validator = length(3, testMessage)
const minTest = buildValidatorMacro(validator, [ testMessage ])

test('succeeds on undefined', minTest, undefined, true)
test('succeeds on ASD', minTest, 'ASD', true)
test('succeeds on tre', minTest, 'tre', true)
test('fails on empty string', minTest, '', false)
test('fails on r', minTest, 'r', false)
test('fails on et', minTest, 'et', false)
test('fails on asdf', minTest, 'asdf', false)
test('fails on qwert', minTest, 'qwert', false)

