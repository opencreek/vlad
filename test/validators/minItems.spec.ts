import test from 'ava'

import buildValidatorMacro from '../validator-macro'

import { minItems } from '../../src/validators/minItems'

const testMessage = 'Not enough items'
const validator = minItems(2, testMessage)
const minItemsTest = buildValidatorMacro(validator, { _self: [ testMessage ] })

test('fails on empty array', minItemsTest, [], false)
test('fails on array with less items', minItemsTest, [ 'asdf' ], false)
test('succeeds on array with exactly enough items', minItemsTest, [ 1, 'asdf' ], true)
test('succeeds on array with more items', minItemsTest, [ true, {}, 'asdf' ], true)
