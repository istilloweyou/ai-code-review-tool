import { GoogleGenAI } from "@google/genai";

export default async function genaiReviewCode(codeChanges) {
    const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
    const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Review the following code changes and reply with "pass" or "not pass" and a short reason:\n${codeChanges}`,
  });
  console.log(response.text);
  return response.text;
}
