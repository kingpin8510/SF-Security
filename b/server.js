const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointments');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/admin', adminRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Add this to your server.js or create a new route file
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
  });