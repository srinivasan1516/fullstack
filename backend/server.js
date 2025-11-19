require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


// simple health
app.get('/api/health', (req, res) => {
res.json({ status: 'ok', time: new Date().toISOString() });
});


// demo message
app.get('/api/message', (req, res) => {
res.json({ message: process.env.APP_MESSAGE || 'Hello from backend!' });
});


// optional: serve static build from a 'public' folder if you choose
// app.use(express.static(path.join(__dirname, '..', 'frontend')));


app.listen(PORT, () => {
console.log(`Backend listening on port ${PORT}`);
});