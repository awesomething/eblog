import { Configuration, OpenAIApi } from 'openai';

// 1. After adding API key in env, add this line
export default async function handler(req, res) {
    // 4. add config
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(config);

    const topic = 'bitcoin trader'
    const keywords = 'first-time bitcoin owner, trade signals'

    const response = await openai.createChatCompletion({
        model: 'gpt-4-turbo',
        messages : [{
            role: 'system',
            content: 'You are an SEO friendly professional blog post generator. You are designed to output markdown without frontmatter.'
        },
        {
            role: 'user',
            content: `Generate a blog post on the following topic delimited by triple hyphens: 
            ---
            ${topic}
            ---
            Targeting the following comma separated keywords delimited by triple hyphens
            ---
            ${keywords}
            ---
            `
        },
        {
            role: 'assistant'
        }
    ]
    })
    res.status(200).json({ name: 'generate post' })
  }
  