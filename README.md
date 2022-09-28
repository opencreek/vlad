# Vlad

Simple, functional, unified validation

## Core Concepts

Vlad is a very simple standard for data validation, establishing three core rules:

### 1. Validator

A validator is a normal, pure function, taking an optional value and returning an optional validation error. If no error (`undefined`) is returned, the value is considered valid.

To put it in typescript terms:
```ts
type Validator<T> = (value?: T) => ValidationError | undefined
```

### 2. ValidationError
A validation error is a plain object with at least one of two properties:
    - `err`, containing an array of error messages regarding the value that was passed
    - `sub` containing an object mapping properties or indices of the value to validation errors describing errors on that property or index

To put it in typescript terms:
```ts
type ValidationError = {
    err?: string[]
    sub?: {
        [propOrIndex: string | number]: ValidationError
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

Examples:

```ts
{
    sub: {
        name: {
            err: [ "Name is required" ]
        }
    }
}
```

Example:
```ts
const isEven = (value?: number) => {
    if ((value ?? 0) % 2 > 0) {
        return {
            err: [ "Needs to be even" ]
        }
    }
}
```
