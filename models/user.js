const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'El correo es Obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    role: {
        type: String,
        enum: ['Admin', 'User']
    },
    img: {
        type: String
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = model('User', UserSchema);