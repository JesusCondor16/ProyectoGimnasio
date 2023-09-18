const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const TOKEN_KEY = "x4TvnErxREbVcqaLl5";

const verifyToken=(req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader);
    if(token==null)
        return res.status(401).send("Token requerido");
    jwt.verify(token, TOKEN_KEY, (err, user)=>{
        if(err) return res.status(403).send("Token invalido");
        console.log(user);
        req.user = user;
        next();
    });
}

app.post("/usuario/login", (req, res)=>{
    const usuario = req.body.usuario;
    const clave = req.body.clave;
    if(usuario=='mrique' && clave=='123456'){
        const datos ={
            id: "123",
            nombre: "mrique",
            email: "mrique@gmail.com",
            codigo: "ABDE456-LK"
        };
        const token = jwt.sign(
            {userId:datos.id, email:datos.email},
            TOKEN_KEY,
            {expiressIn: "2h"}    
        );
        let nDatos = {...datos, token};
        res.status(200).json(nDatos);
    }else{
        res.status(400).send("Creedenciales incorrectas");
    }
});

app.get("/usuario/:id/ventas", verifyToken, (req, res)=>{
    const datos = [
        {id: 1,cliente:"Empresa A", total:2500,fecha:"2023-10-09"},
        {id: 2,cliente:"Empresa B", total:200,fecha:"2023-01-09"},
        {id: 3,cliente:"Empresa C", total:250,fecha:"2023-11-09"},
    ];
    res.json(datos);
});

app.listen(3001, ()=> {
    console.log("Servidor inciado en el puerto 3001");
});