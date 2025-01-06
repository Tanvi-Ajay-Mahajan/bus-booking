const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'tanvi-ajay-mahajan',
    password: 'Mahajan@123',
    database: 'gowheels'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to MySQL Database.');
    }
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Bus Hiring Service!');
});

// Fetch all buses
app.get('/buses', (req, res) => {
    const query = 'SELECT * FROM buses';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error fetching buses');
        } else {
            res.status(200).json(results);
        }
    });
});

// Add a new bus
app.post('/buses', (req, res) => {
    const { name, capacity, price } = req.body;
    const query = 'INSERT INTO buses (name, capacity, price) VALUES (?, ?, ?)';
    db.query(query, [name, capacity, price], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error adding bus');
        } else {
            res.status(201).send('Bus added successfully!');
        }
    });
});

// Server Listener
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
