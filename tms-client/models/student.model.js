import { Temporal } from "@js-temporal/polyfill";
export function isStudent(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "name" in value &&
        typeof value.id === "string" &&
        typeof value.name === "string");
}
//# sourceMappingURL=student.model.js.map