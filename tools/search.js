import axios from "axios";

export async function searchTool(query) {
  const response = await axios.get("https://serpapi.com/search.json", {
    params: {
      q: query,
      api_key: process.env.SERPAPI_KEY,
      engine: "google"
    }
  });

  return response.data.organic_results?.slice(0, 5).map(r => ({
    title: r.title,
    link: r.link,
    snippet: r.snippet
  })) || [];
}