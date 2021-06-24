import test, { Macro } from 'ava'

import buildValidatorMacro from '../validator-macro'
import { is } from '../../src/validators/is'

const testMessage = 'Should be equal'

function isTest<T>(expected: T): Macro<[T, boolean]> {
    const validator = is(expected, testMessage)

    return buildValidatorMacro(validator, [ testMessage ])
}

test('succeeds on equal numbers', isTest(5), 5, true)
test('succeeds on different numbers', isTest(5), 10, false)
test('succeeds on equal booleans', isTest(false), false, true)
test('succeeds on different booleans', isTest(false), true, false)
test('succeeds on equal strings', isTest('foo'), 'foo', true)
test('succeeds on different strings', isTest('foo'), 'bar', false)
test('fails on equal objects', isTest({ foo: 'bar' }), { foo: 'bar' }, false)
test('fails on equal arrays', isTest([ 1, 2 ]), [ 1, 2 ], false)

