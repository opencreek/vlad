import test from 'ava'
import { all } from '../../src/validators/all'
import { is, minItems, maxItems, requiredPrimitive, allItems } from '../../src/vlad'
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
test('should merge errors for two top level object errors', t => {
    const validator = all(
        minItems(3, 'Must have at least 2 items'),
        maxItems(1, 'Must have a maximum of 1 item'),
    )
    const output = validator([ 'asdf', 3 ])

    t.deepEqual(output, { _self: [ 'Must have at least 2 items', 'Must have a maximum of 1 item' ] })
})

test('should correctly type check with multiple validators', t => {
    const validator = all(
        minItems(3, 'Must have at least 2 items'),
        allItems(requiredPrimitive('should be there'))
    )
    const output = validator([ 'asdf', 3 ])
    const a = output?._self
    const b = output?.[1]

    t.deepEqual(a, [ 'Must have at least 2 items' ])
})

