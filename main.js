const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({
        message: 'Ahoj',
    });
});

app.get('/test/:id/:test', (req, res) => {
    res.json(req.params);
});

app.post('/neco', (req, res) => {
    res.json(req.body);
});

app.listen(1234, () => {
});
