const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    database: "gymbob",
    user: "root",
    password: "Jesuscondor1*"
})

app.post('/signup', (req, res) => {
    const fechaNacimiento = new Date(req.body.fecha_nacimiento).toISOString().slice(0, 10);
    const sql = "INSERT INTO Cliente (`contrasenia`, `correo`, `apellido`, `nombre`, `dni`, `fecha_nacimiento`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.contrasenia,
        req.body.correo,
        req.body.apellido,
        req.body.nombre,
        req.body.dni,
        fechaNacimiento
    ];

    console.log("Valores a insertar en la base de datos:", values); 

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error al insertar en la base de datos:", err); 
            return res.json("Error");
        }
        if (data.affectedRows > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});

app.get('/signup', (req, res) => {
    const sql = "SELECT * FROM Cliente";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error al consultar la base de datos:", err); 
            return res.json("Error");
        }
        console.log("Contenido de la base de datos (clientes):", data); 
        return res.json(data);
    });
});

app.get('/cardio', (req, res) => {
    const idCategoriaDeseada = 1; 
    const sql = "SELECT * FROM maquina WHERE id_tipo = ?"; 
    db.query(sql, [idCategoriaDeseada], (err, data) => {
        if (err) {
            console.error("Error al consultar la base de datos:", err);
            return res.json("Error");
        }
        console.log("Contenido de la base de datos (clientes):", data); 
        return res.json(data);
    });
});

app.get('/maquinas', (req, res) => {
    const idCategoriaDeseada = 2; 
    const sql = "SELECT * FROM maquina WHERE id_tipo = ?"; 
    db.query(sql, [idCategoriaDeseada], (err, data) => {
        if (err) {
            console.error("Error al consultar la base de datos:", err);
            return res.json("Error");
        }
        console.log("Contenido de la base de datos (clientes):", data); 
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const { correo, contrasenia } = req.body;
    const sql = "SELECT * FROM cliente WHERE `contrasenia` = ? AND `correo` = ?";
    db.query(sql, [contrasenia, correo], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});

app.listen(8081, () => {
    console.log("listening");
})