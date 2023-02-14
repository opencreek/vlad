// deno-lint-ignore ban-types no-explicit-any
export type Validator<Subject = any, Err = any, Context extends {} = {}> = (
  subject: Subject | undefined,
  context?: Context,
) => Err | undefined;
export type SubjectType<V extends Validator> = Parameters<V>[0];
export type ContextType<V extends Validator> = Parameters<V>[1];

export type PrimitiveErrors = Array<string>;
export type ObjectTopLevelError<E> = { _self: E };
