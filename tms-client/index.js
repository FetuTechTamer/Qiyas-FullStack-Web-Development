import { Temporal } from "@js-temporal/polyfill";
import { isStudent } from "./models/student.model.js";
function processStudent(raw) {
    if (isStudent(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    }
    else {
        console.error("Invalid student data received");
    }
}
processStudent({
    id: "STU-001",
    name: "Hana",
    gpa: 3.7
});
processStudent(42);
//# sourceMappingURL=index.js.map