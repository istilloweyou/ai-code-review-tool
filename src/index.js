const { getDiff } = require('./git/diff');
const { reviewCode } = require('./ai/review');
const { printResult } = require('./utils/output');

const command = process.argv[2];

if (command === 'ai review code') {
    const codeChanges = getDiff();
    const result = reviewCode(codeChanges);
    printResult(result);
} else {
    console.log('Unknown command. Please use "ai review code".');
}