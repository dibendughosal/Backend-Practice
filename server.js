require('dotenv').config();
const express = require('express');

const app = express()
const PORT = process.env.PORT
app.get('/', (req, res) => {
    res.send(`<h1>Hello World!</h1><p>Server Running at localhost:${PORT}</p>`)
})

app.listen(PORT, () => {
    console.log(`Server Listen at ${PORT}`);
})