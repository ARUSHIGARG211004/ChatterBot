require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { 'PRIVATE-KEY': process.env.CHAT_ENGINE_PRIVATE_KEY } } 
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response ? e.response.status : 500).json(e.response ? e.response.data : { error: 'An error occurred' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
