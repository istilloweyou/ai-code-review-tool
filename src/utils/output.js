export function printResult(result = '') {
    if (result.includes("review passed")) {
        console.log("✅ Passed");
    } else {
        console.log("❌ Not Passed");
    }
}