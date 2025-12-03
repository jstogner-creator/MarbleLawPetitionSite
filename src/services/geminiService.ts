import { GoogleGenAI } from "@google/genai";

// The API key is injected by vite.config.ts during the build
const apiKey = process.env.API_KEY;

// Initialize the client safely
const ai = new GoogleGenAI({ apiKey: apiKey || 'DUMMY_KEY_FOR_BUILD' });

export const generateFormalComplaint = async (userStory: string): Promise<string> => {
  if (!apiKey || apiKey === 'DUMMY_KEY_FOR_BUILD') {
    return "Configuration Error: API Key is missing. Please check your Vercel Environment Variables.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a legal aid assistant helping a consumer write a formal complaint about a law firm (Marble Law). 
      
      The user will provide their raw experience. You must rewrite this into a professional, formal complaint letter suitable for submission to the Better Business Bureau (BBB) or a State Bar Association.
      
      Focus on facts, dates (if implied), financial loss, and lack of communication. Keep the tone firm but objective. Do not invent facts, only use what is provided or implied by "Consumer reports indicate..." if general context is needed.
      
      User Story: "${userStory}"
      
      Format the output as a formal letter structure.`,
      config: {
        temperature: 0.3, // Low temperature for factual/formal output
      }
    });

    return response.text || "Unable to generate complaint. Please try again.";
  } catch (error) {
    console.error("Gemini generation error:", error);
    return "An error occurred while generating the complaint. Please try again later.";
  }
};

export interface EvidenceResult {
  summary: string;
  sources: Array<{ title: string; uri: string }>;
}

export const searchPublicEvidence = async (): Promise<EvidenceResult> => {
  if (!apiKey || apiKey === 'DUMMY_KEY_FOR_BUILD') {
    return { summary: "API Key missing.", sources: [] };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Search for recent Better Business Bureau complaints, Trustpilot reviews, and Reddit threads regarding Marble Law. Summarize the 3 most common specific grievances found in these public sources. Be specific about the type of complaints (e.g. refund delays, ghosting).",
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.1,
      }
    });

    const summary = response.text || "No recent data found.";
    
    // Extract sources from grounding metadata
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.map((chunk: any) => chunk.web)
      .filter((web: any) => web && web.uri && web.title) || [];

    // Deduplicate sources by URI
    const uniqueSources = Array.from(new Map(sources.map((item: any) => [item.uri, item])).values()) as Array<{ title: string; uri: string }>;

    return {
      summary,
      sources: uniqueSources
    };
  } catch (error) {
    console.error("Evidence search error:", error);
    return { summary: "Unable to load live evidence at this time.", sources: [] };
  }
};