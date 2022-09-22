import { requiredPrimitive } from "./validators/requiredPrimitive.ts";
import { is } from "./validators/is.ts";

export type Validator<
  Subject = any,
  Err extends Errors = Errors,
  Context extends Record<never, never> = Record<string, any>,
> = (subject: Subject | undefined, context?: Context) => Err;
export type SubjectType<V extends Validator> = V extends
  Validator<infer S, Errors> ? S
  : never;

export type Errors<E = any> = PrimitiveErrors<E> | CompositeErrors<E>;
export type SelfErrors<E = any> = { _self?: PrimitiveErrors<E> } | undefined;
export type CompositeErrors<E = any> =
  | undefined
  | {
    [field: PropertyKey]: Errors<E> | undefined;
  };
export type PrimitiveErrors<E = any> = undefined | Array<E>;

type ObjectValidator<
  V extends Validator<any, Errors> = Validator<any, Errors>,
> = {
  [property: string]: V;
};

type ObjectValidatorSubject<V extends ObjectValidator> = {
  [property in keyof V]: V[property] extends Validator<infer S, Errors> ? S
    : never;
};

type ObjectValidatorResult<V extends ObjectValidator> = {
  [property in keyof V]: V[property] extends Validator<any, infer E> ? E
    : never;
};
