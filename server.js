const OpenAI = require("openai");
const express = require('express');
const cors = require('cors');  // Import the cors package
const app = express();
const port = 3000;

const openai = new OpenAI({
    apiKey: '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',
    baseURL: "https://api.groq.com/openai/v1"
});

// Enable CORS for all origins
app.use(cors());  // Add this line to enable CORS

app.use(express.json());

app.post('/data', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "llama3-70b-8192"
        });

        res.json({
            prompt: prompt,
            response: completion.choices[0].message.content
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
