import { Temporal } from "@js-temporal/polyfill";
export interface Student {
    readonly id: string;
    name: string;
    enrollmentDate: Temporal.Instant;
    gpa?: number;
}
export declare function isStudent(value: unknown): value is Student;
//# sourceMappingURL=student.model.d.ts.map