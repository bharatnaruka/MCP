import "./config.js";
import express from "express";
import dotenv from "dotenv";
import { multiAgentController } from "./agents/supervisor.js";

dotenv.config();
const app = express();
app.use(express.json());

// Authentication Middleware
app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${process.env.MCP_API_KEY}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});


app.post("/mcp", async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await multiAgentController(prompt);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`MCP Server running on port ${process.env.PORT}`);
});