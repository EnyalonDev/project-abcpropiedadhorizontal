
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `Eres el Asistente Inteligente de "ABC Propiedad Horizontal". 
Tu objetivo es ayudar a copropietarios, residentes y administradores con dudas sobre la gestión de edificios y conjuntos.
Debes basar tus respuestas en la Ley 675 de 2001 (Colombia) y buenas prácticas de convivencia.
Sé profesional, amable y conciso.
Si te preguntan por servicios de ABC, destaca: Administración integral, Contabilidad, Asesoría Jurídica y Convivencia.
No inventes leyes; si no estás seguro, recomienda consultar con el administrador asignado.`;

export async function getGeminiResponse(userPrompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  // Inicialización de la instancia justo antes del uso para asegurar que use la clave más reciente
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "Lo siento, tuve un problema procesando tu solicitud.";
  } catch (error) {
    console.error("Gemini Error:", error);
    // Manejo de error silencioso para el usuario pero informativo
    return "Ocurrió un error al conectar con mi cerebro digital. Por favor intenta más tarde.";
  }
}
