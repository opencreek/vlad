// @ts-nocheck

type SomeRecord = { [x: string]: unknown };

export function deepmerge<T extends SomeRecord, U extends SomeRecord>(
  subject: T,
  patch: U,
): T & U {
  const ret = { ...subject };

  for (const key in patch) {
    const value = patch[key];
    const subjectValue = subject[key];

    if (Array.isArray(value) && Array.isArray(subjectValue)) {
      ret[key] = [...subjectValue, ...value];

      continue;
    }

    if (typeof value === "object" && typeof subjectValue === "object") {
      ret[key] = deepmerge(subjectValue, value);

      continue;
    }

    ret[key] = value;
  }

  return ret;
}
