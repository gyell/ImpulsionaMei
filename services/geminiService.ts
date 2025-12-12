import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "A chave da API não está configurada. Por favor, configure a API_KEY para usar o assistente virtual.";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      Você é o "ImpulsaBot", um assistente virtual inteligente da empresa ImpulsaMEI.
      Sua persona é profissional, encorajadora e especialista em microempreendedorismo (MEI).
      A empresa é liderada por Elza Maria, uma administradora renomada no Norte/Noroeste Fluminense e Rio de Janeiro capital.
      A ImpulsaMEI oferece consultoria e um app de precificação.
      
      Seu objetivo é responder dúvidas curtas sobre gestão, precificação e formalização de MEI.
      Mantenha as respostas concisas (máximo 3 parágrafos) e sempre convide o usuário para agendar uma consultoria com a Elza Maria para casos mais complexos.
      Use um tom otimista.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro ao conectar com o servidor de inteligência artificial. Tente novamente mais tarde.";
  }
};