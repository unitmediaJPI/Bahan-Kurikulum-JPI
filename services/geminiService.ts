
import { GoogleGenAI, Type } from "@google/genai";
import { JawiResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const transliterateToJawi = async (rumiText: string): Promise<JawiResult> => {
  if (!rumiText.trim()) return { rumi: '', jawi: '' };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Transliterasikan teks Rumi berikut ke Jawi (menggunakan ejaan JPI Brunei): "${rumiText}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            rumi: { type: Type.STRING },
            jawi: { type: Type.STRING },
            explanation: { type: Type.STRING, description: "Penerangan ringkas mengenai hukum ejaan yang digunakan." }
          },
          required: ["rumi", "jawi"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result;
  } catch (error) {
    console.error("Error transliterating to Jawi:", error);
    return { rumi: rumiText, jawi: "Ralat Transliterasi", explanation: "Gagal menyambung ke AI." };
  }
};
