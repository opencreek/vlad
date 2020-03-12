import test from 'ava'
import { all } from '../../src/validators/all'
import { is } from '../../src/vlad'

test('should not change the result of a single is validator', () => {
    const validator = all(is(false, 'Should be false'))
    const output = validator(false)
})