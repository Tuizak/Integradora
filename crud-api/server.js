const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydatabase'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

const entities = {
    clients: ['Nombre', 'Celular', 'Correo', 'Localidad', 'Direccion', 'Rotoplace', 'Estado', 'Contraseña'],
    employees: ['Nombre', 'Correo', 'Numero', 'Direccion', 'RFC', 'Fecha_Nac', 'CURP', 'Estado', 'Contraseña'],
    administrativos: ['Nombre', 'ClaveUnica', 'Contraseña', 'Fecha_Nac', 'Direccion'],
    rotoplace: ['Litros', 'Cliente_Contrato', 'Estado']
};

Object.keys(entities).forEach(entity => {
    // Create
    app.post(`/api/${entity}`, (req, res) => {
        const data = req.body;
        const columns = Object.keys(data).join(', ');
        const values = Object.values(data);
        const placeholders = values.map(() => '?').join(', ');
        const sql = `INSERT INTO ${entity} (${columns}) VALUES (${placeholders})`;
        db.query(sql, values, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(201).send(result);
        });
    });

    // Read all
    app.get(`/api/${entity}`, (req, res) => {
        const sql = `SELECT * FROM ${entity}`;
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(results);
        });
    });

    // Read by id
    app.get(`/api/${entity}/id/:id`, (req, res) => {
        const { id } = req.params;
        const sql = `SELECT * FROM ${entity} WHERE id = ?`;
        db.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(results);
        });
    });

    // Read by nombre
    app.get(`/api/${entity}/nombre/:nombre`, (req, res) => {
        const { nombre } = req.params;
        const sql = `SELECT * FROM ${entity} WHERE Nombre = ?`;
        db.query(sql, [nombre], (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(results);
        });
    });

    // Update by id
    app.put(`/api/${entity}/id/:id`, (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const columns = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const values = Object.values(data);
        values.push(id);
        const sql = `UPDATE ${entity} SET ${columns} WHERE id = ?`;
        db.query(sql, values, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    });

    // Update by nombre
    app.put(`/api/${entity}/nombre/:nombre`, (req, res) => {
        const { nombre } = req.params;
        const data = req.body;
        const columns = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const values = Object.values(data);
        values.push(nombre);
        const sql = `UPDATE ${entity} SET ${columns} WHERE Nombre = ?`;
        db.query(sql, values, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    });

    // Delete by id
    app.delete(`/api/${entity}/id/:id`, (req, res) => {
        const { id } = req.params;
        const sql = `DELETE FROM ${entity} WHERE id = ?`;
        db.query(sql, [id], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    });

    // Delete by nombre
    app.delete(`/api/${entity}/nombre/:nombre`, (req, res) => {
        const { nombre } = req.params;
        const sql = `DELETE FROM ${entity} WHERE Nombre = ?`;
        db.query(sql, [nombre], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
