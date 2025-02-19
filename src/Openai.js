import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAUAWIDoiSCAz_XjQ5LiyWBgMShOH4LMCQ"; // Secure API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(input) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(input);
  return result.response.candidates[0].content.parts[0].text;
}

export default run;
