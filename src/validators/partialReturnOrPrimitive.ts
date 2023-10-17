import { PrimitiveErrors, Validator } from "../types.ts";

export type PartialReturnOrPrimitive<V extends Validator> =
  ReturnType<V> extends PrimitiveErrors | undefined ? NonNullable<ReturnType<V>>
    : Partial<ReturnType<V>>;
