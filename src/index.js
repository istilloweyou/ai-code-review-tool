import { getDiff } from './git/diff.js';
import { reviewCode } from './ai/review.js';
import { printResult } from './utils/output.js';

const command = process.argv[2];

if (command === 'ai review code') {
    const codeChanges = await getDiff();
    console.log('codeChanges', codeChanges);
    const result = await reviewCode(codeChanges);
    printResult(result);
} else {
    console.log('Unknown command. Please use "ai review code".');
}