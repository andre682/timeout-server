const express = require('express');

const app = express();

let timeout = 0
app.get('/test/candidate', (req, res, next) => {
    setTimeout(() => {
        res.json({})
    }, timeout);
})

app.get('/timeout/:timeout', (req, res, next) => {
    timeout = req.params.timeout
    res.send(timeout)
})

app.listen(process.env.PORT, '0.0.0.0')
