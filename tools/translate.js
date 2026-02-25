import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function translateTool(text, targetLanguage) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a translation engine." },
      { role: "user", content: `Translate to ${targetLanguage}:\n${text}` }
    ],
    temperature: 0
  });

  return response.choices[0].message.content;
}