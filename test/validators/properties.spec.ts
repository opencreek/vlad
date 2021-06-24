import test from 'ava'

import { ExecutionContext } from 'ava'
import { requiredPrimitive } from '../../src/validators/requiredPrimitive'
import { minLength } from '../../src/validators/minLength'
import { properties } from '../../src/validators/properties'

type User = {
    age?: number
    name?: string
}

const validator = properties({
    age: requiredPrimitive('Age is required'),
    name: minLength(4, 'Name must be at least 4 characters long'),
})

function propertiesTest(t: ExecutionContext, value: User, expected: ReturnType<typeof validator>): void {
    const validationResult = validator(value)

    t.deepEqual(validationResult, expected)
}

test('fails on age', propertiesTest, { name: 'Carlo' }, { age: [ 'Age is required' ] })
test('fails on short name', propertiesTest, { age: 10, name: 'C' }, { name: [ 'Name must be at least 4 characters long' ] })
test('succeeds on age only', propertiesTest, { age: 15 }, undefined)

