// client.js

const url = "http://localhost:3000/mcp";

const apiKey = "potatopaper@2026";

const payload = {
prompt: 'search L852 grill and scrape the best matched result and extract product specifications in international units in the following format - "ProdSpecs" : {"ProdDesc":"", "ProdWidth":"","ProdHeight":"", "ProdDepth":"", "ProdWeight":""} '
//prompt: 'Translate the following text in German and provide the result in the following format "translatedText" : {"language":"...", "text":"..."}. The text to be translated is -- "There is no greate tool than a home made MCP tool"'
//prompt: 'Categorize product with description as "Original Cheerios Heart Healthy Cereal" into one of the following categories ---> "Snacks, Breakfast Cereal, Dairy, Beverages, Flours, Cookies, Baking Items, Meats, Poultry". Provide the formatted response in following JSON format {"category":"..."}  '
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