//import openai from 'openai';
import OpenAi from '../config/openai.js';
import InputPrompt from '../model/input-model.js';

export const sendText = async(request, response) => {

  const openAiAPI = OpenAi.configuration();
  const inputModel = new InputPrompt(request.body);

  try {
    const result = await openAiAPI.createCompletion(
      OpenAi.textCompletion(inputModel)
    );

    return response.status(200).json({ 
      success: true,
      data: result.data.choices[0].text
     });

  } catch (error) {
    return response.status(400).json({
      success: false,
      error: error.response ? error.response.data : 'Erro no servidor'
    });
  }
}