// // routes/admin.js
// const express = require('express');
// const router = express.Router();
// const Appointment = require('../models/Appointment');

// // Get all appointments
// router.get('/appointments', async (req, res) => {
//   try {
//     const appointments = await Appointment.find().sort({ createdAt: -1 });
//     res.json(appointments);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching appointments', error: error.message });
//   }
// });

// // Update appointment status
// router.patch('/appointments/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;
//     const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
//     res.json(appointment);
//   } catch (error) {
//     res.status(400).json({ message: 'Error updating appointment', error: error.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Get all appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error: error.message });
  }
});

// Update appointment status
router.patch('/appointments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ message: 'Error updating appointment', error: error.message });
  }
});

module.exports = router;