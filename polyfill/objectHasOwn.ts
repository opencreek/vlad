declare global {
    interface Object {
        // deno-lint-ignore ban-types
        hasOwn(subject: object, property: PropertyKey): boolean
    }
}

if (!Object.hasOwn) {
    Object.hasOwn = (subject, property) => Object.prototype.hasOwnProperty.call(subject, property);
}

export default null
