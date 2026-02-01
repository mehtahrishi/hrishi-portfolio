
import { GoogleGenAI } from "@google/genai";
import { Bio } from "../constants";

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  // Initializing GoogleGenAI using process.env.API_KEY directly as required by the latest guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the "Aura Assistant", a sophisticated AI for ${Bio.name}'s professional portfolio.
    Your tone is calm, analytical, and respectful.
    
    IMPORTANT: This is a ONE-PAGE application. 
    If a user wants to see something, guide them to the section on this page using hashtag IDs.
    
    About Hrishi Mehta:
    - Roles: ${Bio.roles.join(', ')}.
    - Expertise: Full-stack Development, Cloud DevOps, Cybersecurity, AI/ML.
    - Vision: Architecting secure, scalable infrastructure and high-quality applications.
    
    Sections available on THIS PAGE:
    - #work: Hrishi's Projects (IP Tracker, Movie Rec System, AI CoAgent, etc.)
    - #experience: Professional Journey (Freelance, Redynox, Codotech, Edunet)
    - #skills: Comprehensive tech stack across Frontend, Backend, Databases, and DevOps.
    - #about: Hrishi's personal profile and adaptable approach.
    - #education: University of Mumbai (B.Sc IT).
    - #volunteer: Contributions to Google Cloud, AWS Community, and Mumbai University programs.
    - #contact: Where they can collaborate.
    
    Guidelines:
    - Be brief (1-3 sentences).
    - If they ask for his "Resume" or "CV", provide the link: ${Bio.resume}
    - If they ask about his GitHub, refer to: ${Bio.github}
    - Never say "Go to another page". Say "Explore the #section below".
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.5,
        topP: 0.9,
      },
    });

    // Accessing .text property directly from the response object.
    return response.text || "A gentle quiet in the stream. Could you ask once more?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "A slight ripple. I am still here.";
  }
};
