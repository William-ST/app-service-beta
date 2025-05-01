const express = require("express");
const { Pool } = require('pg');
require("dotenv").config();

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/employee", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employee");
    if (result.rows.length === 0)
      return res.status(404).json({ mensaje: "No se encontraron datos" });
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/employee", async (req, res) => {
  try {
    const { name, lastname, specialty } = req.body;

    await pool.query(
      `INSERT INTO employee (name, lastname, speciality)
       VALUES ($1, $2, $3)`,
      [name, lastname, specialty]
    );

    res.status(201).json({ mensaje: "¡Empleado registrado!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Microservicio corriendo en puerto 3000"));
