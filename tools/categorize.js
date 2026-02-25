import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export async function categorizeTool(text, categories) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Categorize product with description"${text}" into one of the following Categories: ${categories.join(", ")}`
      }
    ],
    temperature: 0
  });

  return response.choices[0].message.content.trim();
}