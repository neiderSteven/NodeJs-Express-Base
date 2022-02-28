const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('...Conexión establecida con DB...');
    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar base de datos');
    }
}

module.exports = {
    dbConnection
}