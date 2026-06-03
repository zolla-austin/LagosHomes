const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/properties', propertyRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the LagosHomes API' });
});

connectDB();

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.listen(PORT, () => {
  console.log(`LagosHomes backend listening on port ${PORT}`);
});
