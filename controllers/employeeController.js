const { sql, poolPromise } = require('../models/db');

const getAllEmployees = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute('GetAllEmployees'); // assuming 'GetAllEmployees' is your stored procedure name
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAllEmployees
};
