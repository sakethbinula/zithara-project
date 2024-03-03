const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'swetha',
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// API endpoints will go here
app.get('/customers', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM customers');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching customers', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
