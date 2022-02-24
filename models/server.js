const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // conectar a base de datos
        this.conectDb();

        // Middlewares
        this.middlewares();

        // rutas
        this.routes();
    }

    async conectDb() {
        await dbConnection();
    }

    middlewares() {

        // cors
        this.app.use(cors());

        // parseo y lectura del body
        this.app.use(express.json());

        // directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/user', require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor: ', 'http://localhost:' + this.port);
        })
    }
}

module.exports = Server;