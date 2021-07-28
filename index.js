const express = require('express');

const app = express();

let timeout = 0
app.get('/test/candidate', (req, res, next) => {
    setTimeout(() => {
        res.json([
            {
                "test_result_id": 271,
                "test_url": "https://qa.wisecode.dev.br/invite-test/YW5kcmUudGVzdGVAZ21haWwuY29tfDI3MQ=="
            }
        ])
    }, timeout);
})

app.get('/timeout/:timeout', (req, res, next) => {
    timeout = req.params.timeout
    res.send(timeout)
})

app.listen(process.env.PORT, '0.0.0.0')
