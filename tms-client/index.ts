import { Temporal } from "@js-temporal/polyfill";
import type { Student } from "./models/student.model.js";
import { isStudent } from "./models/student.model.js";

function processStudent(raw: unknown) {
    if (isStudent(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";

        console.log(
            `Student ${raw.name} GPA: ${gpaDisplay}`
        );
    } else {
        console.error("Invalid student data received");
    }
}

processStudent({
    id: "STU-001",
    name: "Hana",
    gpa: 3.7
});

processStudent(42);