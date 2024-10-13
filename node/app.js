const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '../')));

app.get('/endpoint', async (req, res) => {
    const ipaddr = req.query.ip;
    console.log(`Request received for IP: ${ipaddr}`); // Log the client's IP

    const ipgeolocation_api_key = process.env.IPGEOLOCATION_API_KEY; // This will now be set from the ENV variable
    const ipgeolocation_url = `https://api.ipgeolocation.io/timezone?apiKey=${ipgeolocation_api_key}&ip=${ipaddr}`;

    try {
        const response = await axios.get(ipgeolocation_url);
        const timezone = response.data.timezone;
        if (timezone) {
            res.send(`
                <p>IP Address: ${ipaddr}</p>
                <p>Timezone: ${timezone}</p>
            `);
        } else {
            res.status(404).send('Timezone not found');
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// http://localhost:3000/endpoint?ip=8.8.8.8