const express = require('express');
var cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // rutas
        this.routes();
    }

    middlewares() {

        // directorio publico
        this.app.use(express.static('public'));
        this.app.use(cors);
    }

    routes() {
        this.app.get('/api', function (req, res) {
            res.json({
                ok: true,
                mensaje: 'Get Api'
            })
        })
        this.app.put('/api', function (req, res) {
            res.json({
                ok: true,
                mensaje: 'Put Api'
            })
        })
        this.app.post('/api', function (req, res) {
            res.json({
                ok: true,
                mensaje: 'Post Api'
            })
        })
        this.app.delete('/api', function (req, res) {
            res.json({
                ok: true,
                mensaje: 'Delete Api'
            })
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor: ', 'http://localhost:' + this.port);
        })
    }
}

module.exports = Server;