const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const employeeRoutes = require('./routes/employeeRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
