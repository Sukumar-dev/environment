const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecosphere', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected')).catch(err => console.error('❌ MongoDB error:', err));

app.get('/health', (req, res) => {
    res.json({ status: 'EcoSphere API running', timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🌍 EcoSphere running on port ${PORT}`);
});

module.exports = app;