import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function critique(userPrompt, result) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a strict critic agent." },
      { role: "user", content: `
Original Task:
${userPrompt}

Result:
${JSON.stringify(result)}

Is this sufficient and correct?
Answer YES or NO and explain briefly.
` }
    ],
    temperature: 0
  });

  return response.choices[0].message.content;
}