// client.js

const url = "http://localhost:3000/mcp";

const apiKey = "potatopaper@2026";

const keyword1 = 'L852'
const keyword2 = 'Grill'
const keyword3 = 'Taylor Company'
const translationText = "There is no greater tool than a home made MCP tool"
const categories = ["Snacks", "Breakfast Cereal", "Dairy",  "Beverages",  "Flours",  "Cookies",  "Baking Items", "Meats", "Poultry" ]
const payload = {
  /*
  prompt: `

    Search the following product -
      ${keyword1}, ${keyword2}, ${keyword3}
      
    Scrape the best matched result 
    
    Extract product specs from scraped content and return in as following JSON 
    
    "ProdSpecs" : { "ProdDesc":"...", "ProdWidth":"...", "ProdHeight":"...", "ProdDepth":"...", "ProdWeight":"..."} 
    
    No Categorization Needed.

    `
  */

/*
prompt: `Translate the following text in German -

    ${translationText}

  Provide the translated text in the following format - 

    "translatedText" : {"language":"...", "text":"..."}. `
*/


prompt: `
  Categorize product with description -
  
  "Yummy and creamy fat-free yogurt" 
  
  into one of the following categories -
  
  ${categories}
  
  Provide the formatted response in following JSON format {"category":"..."}  `
};

async function callMCP() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log("Status Code:", response.status);

    const data = await response.json();
    console.log("Response:");
    console.log(JSON.stringify(data, null, 2));

  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

callMCP();