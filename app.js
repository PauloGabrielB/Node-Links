
const express = require('express')

const usuarios = [
    {
        "email" : "paulogabrielborges@outlook.com",
        "senha" : "123"
    },
    {
        "email" : "teste@gmail.com",
        "senha" : "1"
    }
]

const server = express();

server.use(express.json());

server.post('/login', (req, res) => {
    const usuario = req.body;

    const usuarioEncontrado = usuarios.find((u) => u.email == usuario.email);

    if (usuarioEncontrado != null && usuario.senha == usuarioEncontrado.senha) {
        res.send('Ok, Login Aprovado')
    } else {
        res.status(401).send('Não Autorizado');
    }
});

server.listen(8080);