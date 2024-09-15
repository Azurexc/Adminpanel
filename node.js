const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/proxy', (req, res) => {
    const { url, body } = req.body;
    request.post(url, { form: body }, (error, response, body) => {
        if (error) {
            return res.status(500).send('Error occurred');
        }
        res.send(body);
    });
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
