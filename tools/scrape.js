import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeTool(url) {
 
  const { data } = await axios.get(url, {
    headers: { "User-Agent": "MCP-Agent/1.0" },
    timeout: 10000
  });

  const $ = cheerio.load(data);
  let text = "";

  $("p").each((i, el) => {
    text += $(el).text() + "\n";
  });

  return text.slice(0, 8000);
}