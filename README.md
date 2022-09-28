# Vlad

Vlad is a very simple data validation standard and utility library

Vlad establishes (type-)definitions of what a validator is and what a validation error looks like. It also offers utilities functions to make data validation
following those standards very easy to write, compose, reuse and consume.

## Core Concepts

Vlad establishes two (type-)definitions

### 1. Validator

A validator is a normal, pure function, taking an optional value and returning an optional validation error. If no error (`undefined`) is returned, the value is considered valid.

To put it in typescript terms:
```ts
type Validator<T> = (value?: T) => ValidationError | undefined
```

### 2. ValidationError

A validation error is a plain object with at least one of two properties:

- `err` containing an array of error messages regarding the value that was passed
- `sub` containing an object mapping properties or indices of the value to validation errors describing errors on that property (when validating objects) or index (when validating arrays)

To put it in typescript terms:
```ts
type ValidationError = {
    err?: string[]
    sub?: {
        [propOrIndex: string | number]: ValidationError
    }
}
```

This means that we can indicate which specific part of a nested structure is invalid in a standardized way that is easy to automatically process.

### Examples

A simple `required` validator that checks if a value is actually present could look like this:

```ts
const requiredValidator = (value?: unknown) => {
    if (value == null)
        return { err: [ "Value is required" ] }
}
```

A validator that checks whether the `optIn` property of an object is `true` could look like this:

```ts
const optInValidator = (value?: { optIn?: boolean }) => {
    if (value?.optIn !== true) {
        return {
            sub: {
                optIn: {
                    err: [ "Opt In must be true" ]
                }
            }
        }
    }
}
```

A validation error indicating that an array needs at least three elements and that the first element needs to be a number could look like this:

```ts
{
    err: [ "Needs at least three elements" ],
    sub: {
        0: {
            err: [ "Needs to be a number" ]
        }
    }
}
```

<details> 
  <summary>Error messages can actually be any type</summary>

  For introduction purposes, we assume that error messages are string. In the actual `vlad` code however, they can be whatever you want, so
  the actual types are.

  ```ts
  type Validator<T, E> = (value?: T) => ValidationError<E> | undefined
  
  type ValidationError<E> = {
      err?: E[]
      sub?: {
          [propOrIndex: string | number]: ValidationError<E>
      }
  }
  ```
</details>

## Composition

Vlad is not just a set of types, it offers utilities to compose validators following those types.

Usually when validating data (e.g. in a form, an API endpoint, a data pipeline...), you need to validate a data structure that is nested
multiple levels deep, but the actual validation on the "leaf" values are often the same.

To make writing validatos for such structures fast and readable while allowing you to reuse your validators, vlad offers composition functions to
build validators for objects and arrays out of other validators.

### `object`

Assume we need to validate that an objects `name` and `age` property are not empty. We can use the `object` utility for that, which takes an object
mapping property names to validators and returns a validators that will apply those validators to their respective property and return their errors
in the correct format (For this example, we will assume that the `required` validator from above is in scope)
is in scope:

```ts
import { object } from "vlad"

type Person = {
    name?: string
    age?: number
}

const validatePerson = object({
    name: required,
    age: required,
})
```

Calling

```ts
validatePerson({})
```

will return

```ts
{
    sub: {
        name: { err: [ "Is required" ] },
        age: { err: [ "Is required" ] },
    }
}
```

But calling

```ts
validateperson({ name: "Sam", age: 36 })
```

will return

```ts
undefined
```

As `object` just returns another validator, it can be nested arbitrarily deep itself:

```ts
type User = {
    name?: string
    contact?: {
        email?: string
        phone?: string
    }
}

const validateUser = object({
    name: required,
    contact: object({
        email: required,
    }),
})
```

Calling

```ts
validateUser({})
```

will return

```ts
{
    sub: {
        name: { err: [ "Is required" ] },
        contact: {
            sub: {
                email: { err: [ "Is required" ] }
            }
        }
    }
}
```

### `allItems`

`allItems` expects a validator and returns a validator that applies the given one to all items of an array,
returning the appropriate error format if any of the do not pass.

Assume wen want to validate that all items in an array are not empty:

```ts
const arrayFullValidator = allItems(required)
```

Calling

```ts
arrayFullValidator([5, undefined, ""])
```

will return

```ts
{
    sub: {
        1: { err: [ "Is required" ] }
    }
}
```

### `all`

`all` expects up to ten validators and returns a validator that applies all of them and merges their results.

Given the following validators

```ts
const even = (value?: number) => {
    if ((value ?? 0) % 2 !== 0) {
        return { err: [ "Must be even" ] }
    }
}

const positive = (value?: number) => {
    if (value < 0) {
        return { err: [ "Must be positive" ] }
    }
}
```

Assume we want to validate that a value is not empty and a positive even number:

```ts
const example = all(required, even, positive)
```

Calling

```ts
example(-3)
```

will return

```ts
{
    err: [ "Must be even", "Must be positive" ]
}
```
