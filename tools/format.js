import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function formatTool(text, format) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a formatter engine." },
      { role: "user", content: `Transform ${text} to ${format}` }
    ],
    temperature: 0
  });

  return response.choices[0].message.content;
}