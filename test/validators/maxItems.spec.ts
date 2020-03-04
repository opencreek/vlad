import test from 'ava'

import buildValidatorMacro from '../validator-macro'

import { maxItems } from '../../src/validators/maxItems'

const testMessage = 'Too many items'
const validator = maxItems(3, testMessage)
const maxItemsTest = buildValidatorMacro(validator, { _self: [ testMessage ] })

test('succeeds on empty array', maxItemsTest, [], true)
test('succeeds on array with less items', maxItemsTest, [ 'asdf' ], true)
test('succeeds on array with exactly maximum items', maxItemsTest, [ 1, 'asdf', true ], true)
test('fails on array with more items', maxItemsTest, [ true, {}, 'asdf', 0 ], false)
