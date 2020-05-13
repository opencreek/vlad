import test from 'ava'
import { all } from '../../src/validators/all'
import { is, minItems, requiredPrimitive } from '../../src/vlad'
import { min } from '../../src/validators/min'

test('should not change the result of a single is validator', t => {
    const validator = all(
        is(false, 'Should be false')
    )
    const output = validator(false)

    t.is(output, undefined)
})
test('should not change the result of a single min validator', t => {
    const validator = all(
        minItems(5, 'Should have at least 5 items')
    )
    const output = validator([ 1 ])

    t.deepEqual(output, { _self: [ 'Should have at least 5 items' ] })
})
test('should merge errors for two primitive validators', t => {
    const validator = all(
        requiredPrimitive('Is required'),
        min(2, 'Must be at least 2'),
    )
    const output = validator(1)

    t.deepEqual(output, [ 'Must be at least 2' ])
})
