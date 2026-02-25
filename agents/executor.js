import { searchTool } from "file:///C:/Users/bhara/Documents/MCP/tools/search.js";
import { scrapeTool } from "file:///C:/Users/bhara/Documents/MCP/tools/scrape.js";
import { translateTool } from "file:///C:/Users/bhara/Documents/MCP/tools/translate.js";
import { categorizeTool } from "file:///C:/Users/bhara/Documents/MCP/tools/categorize.js";
import { formatTool } from "file:///C:/Users/bhara/Documents/MCP/tools/format.js";

export async function executePlan(plan, userPrompt) {
  let context = {};
  let lastResult = null;
  
  for (const step of plan.steps) {
    switch (step.action) {
      case "search":
//      lastResult = await searchTool(userPrompt);
//       console.log(step.searchKeywords)
        lastResult = await searchTool(step.searchKeywords);
        context.searchResults = lastResult;
        break;

      case "scrape":
        const firstUrl = context.searchResults?.[0]?.link;
        lastResult = await scrapeTool(firstUrl);
        context.scrapedContent = lastResult;
        break;

      case "translate":
        lastResult = await translateTool(
          //step.instructions,
          //"Spanish"
          step.text,
          step.language
        );
        context.translated = lastResult;
        break;

      case "categorize":
        lastResult = await categorizeTool(
          step.text,
          step.categoryArray
        );
        context.category = lastResult;
        break;

      case "format":
        lastResult = await formatTool(
          //context.scrapedContent,
          //["ProdSpec", "ProdDesc", "ProdWidth"]
          lastResult,
          step.jsonStructure
        );
        context.format = lastResult;
        break; 
    } 
  }

  return context;
}