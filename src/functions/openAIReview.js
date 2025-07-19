import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function openAIReview(codeChanges) {
    const prompt = `Review the following code changes and reply with "pass" or "not pass" and a short reason:\n${codeChanges}`;
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
    });
    return response.choices[0].message.content;
}