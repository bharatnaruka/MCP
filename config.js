import dotenv from "dotenv";
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY not found in environment");
  process.exit(1);
}

if (!process.env.SERPAPI_KEY) {
  console.error("❌ SERPAPI_KEY not found in environment");
  process.exit(1);
}

if (!process.env.MCP_API_KEY) {
  console.error("❌ MCP_API_KEY not found in environment");
  process.exit(1);
}

console.log("✅ Environment variables loaded");