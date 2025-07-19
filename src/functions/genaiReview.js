import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export default async function genaiReviewCode(codeChanges) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Review the following code changes and reply with "✅ Passed" or "❌ Not Passed" and a short reason:\n${codeChanges}`,
  });
  console.log(response.text);
  return response.text;
}
