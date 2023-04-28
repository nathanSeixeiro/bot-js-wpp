import { Configuration, OpenAIApi } from "openai"

// gpt
const getDavinciResponse = async (clientText) => {
    const options = {
        model: "text-davinci-003", 
        prompt: clientText,
        temperature: 1,
        max_tokens: 4000 
    }
    
    try {
        const response = await openai.createCompletion(options)
        let botResponse = ""
        response.data.choices.forEach(({ text }) => {
            botResponse += text
        })
        return `Chat GPT 🤖\n\n ${botResponse.trim()}`
    } catch (e) {
        return `❌ OpenAI Response Error: ${e.response.data.error.message}`
    }
}
