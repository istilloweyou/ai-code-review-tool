import 'dotenv/config';
import { getDiff } from './git/diff.js';
import { reviewCode } from './functions/review.js';
// import openAIReview from './functions/openAIReview.js';
// import genaiReview from './functions/genaiReview.js';
import { printResult } from './utils/output.js';

const codeChanges = await getDiff();
console.log('codeChanges', codeChanges);
const result = reviewCode(codeChanges);
// const result = await openAIReview(codeChanges);
// const result = await genaiReview(codeChanges);
printResult(result);