const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration ({apiKey: "your-api-key",});
const openai = new OpenAIApi(config)

export async function sendMessageToOpenAi(message){
    const res = await openai.createCompletion({
        model:'text-davinci-003',
        prompt: message,
        temperature : 0.7,
        max_token : 256,
        top_p : 1,
        frequency_penalty:0,
        presense_penalty: 0
    });
    return res.data.choices[0].text
}