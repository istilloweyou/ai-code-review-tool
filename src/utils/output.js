export function printResult(result) {
    if (result === "pass") {
        console.log("Code review result: ✅ Pass");
    } else {
        console.log("Code review result: ❌ Not Pass");
    }
}