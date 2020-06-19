export type Validator<T = any, E = any> = (subject: T | undefined, context?: object) => E | undefined
export type SubjectType<V extends Validator> = Parameters<V>[0]

export type PrimitiveErrors = Array<string>
export type ObjectTopLevelError<E> = { _self?: E }
