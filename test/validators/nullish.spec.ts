import test from 'ava'

import buildValidatorMacro from '../validator-macro'
import { nullish } from '../../src/validators/nullish'

const testMessage = 'Should be equal'
const validator = nullish(testMessage)
const nullishTest = buildValidatorMacro(validator, [ testMessage ])

test('succeeds on undefined', nullishTest, undefined, true)
test('succeeds on null', nullishTest, null, true)
test('fails on zero', nullishTest, 0, false)
test('fails on empty string', nullishTest, '', false)
test('fails on empty object', nullishTest, {}, false)
test('fails on empty array', nullishTest, [], false)

