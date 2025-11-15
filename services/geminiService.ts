import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // For this example, we'll log an error.
  console.error("Gemini API key not found. Please set the API_KEY environment variable.");
}

const getAI = () => {
    if (!API_KEY) {
        throw new Error("Gemini API key not found.");
    }
    return new GoogleGenAI({ apiKey: API_KEY });
}

export const generateEventIdeas = async (eventType: string): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please contact support.";
  }

  try {
    const ai = getAI();
    const prompt = `Generate 3 creative and luxurious event ideas for a "${eventType}" in India. Focus on unique themes, locations, and experiences that would appeal to a high-end client. Present the ideas as a numbered list with a title and a short, exciting description for each.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating event ideas:", error);
    return "Sorry, we couldn't generate ideas at this moment. Please try again later.";
  }
};

export const getChatbotResponse = async (history: ChatMessage[]): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please contact support.";
  }

  try {
    const ai = getAI();
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: history,
        config: {
            systemInstruction: "You are the 'KaSha AI Planner', a friendly and professional AI assistant for the KaSha luxury event planning company. Your goal is to help potential clients by answering their questions about our services, process, and brand. Be elegant, concise, and helpful. Do not mention that you are a language model."
        }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating chatbot response:", error);
    return "Sorry, I'm currently unavailable. Please try again later.";
  }
};

export const generateImage = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error("API Key not configured. Please contact support.");
  }

  try {
    const ai = getAI();
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/png',
        aspectRatio: '1:1',
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    } else {
      throw new Error("No image was generated.");
    }
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};