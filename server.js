import dotenv from 'dotenv';
dotenv.config();
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: 'What are some best sellers on FashionNova?' }],
    model: 'llama3-8b-8192',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();