import { requiredObject } from "../../src/validators/requiredObject.ts"
import { requiredPrimitive } from "../../src/validators/requiredPrimitive.ts"
import { assertEquals } from "../testingDeps.ts"
import { buildValidatorTest } from "../validator-macro.ts"

const testMessage = "This is required"
const validator = requiredObject(testMessage)
const requiredTest = buildValidatorTest(validator, { _self: [ testMessage ] })

Deno.test("fails on undefined", () => {
    requiredTest(undefined, false)
})
Deno.test("succeeds on empty array", () => {
    requiredTest([], true)
})
Deno.test("succeeds on filled array", () => {
    requiredTest([ 0 ], true)
})
Deno.test("succeeds on object", () => {
    requiredTest({}, true)
})


const validatorWithObject = requiredObject(testMessage, {
    foo: requiredPrimitive(testMessage),
})

Deno.test("should pass through on validator map", () => {
    assertEquals(validatorWithObject(undefined), { _self: [ testMessage ], foo: [ testMessage ] })
    assertEquals(validatorWithObject({}), { foo: [ testMessage ] })
    assertEquals(validatorWithObject({ foo: "bar" }), undefined)
})
