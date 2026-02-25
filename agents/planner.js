import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function createPlan(userPrompt) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a planning agent." },
      { role: "user", content: `
Break this task into ordered tool steps along with input in instructions for each tool.

Available tools:
- search
- scrape
- translate
- categorize
- format

Task:
${userPrompt}

Return JSON array:
"steps":[{ "action": "...", "instruction": "...", "text":"...", "language":"...", "jsonStructure":"", "searchKeywords":"...", "categoryArray":[] }]
` }
    ],
    temperature: 0,
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content);
}