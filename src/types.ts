// deno-lint-ignore ban-types no-explicit-any
export type Validator<T = any, E = any, C extends {} = {}> = (
  subject: T | undefined,
  context?: C,
) => E | undefined;
export type SubjectType<V extends Validator> = Parameters<V>[0];

export type PrimitiveErrors = Array<string>;
export type ObjectTopLevelError<E> = { _self: E };
