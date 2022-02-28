const user = require("../models/user");

const validateEmail = async (email = '') => {
    // verificar si el correo existe
    const emailExist = await user.findOne({ email });

    if (emailExist) {
        throw new Error('El correo ya esta registrado');
    }
}

module.exports = {
    validateEmail
}