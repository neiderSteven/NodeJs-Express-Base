const { response } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const usersGet = async (req, res = response) => {

    // const { params } = req.query;
    const params = req.query;
    users = await User.find();

    res.json({
        ok: true,
        mensaje: 'Get /controlador',
        users: users
    })
}
const userCreate = async (req, res = response) => {

    const { name, email, password, img, role } = req.body;
    const user = new User({ name, email, password, img, role });

    // Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.json({
        ok: true,
        mensaje: 'Post /controlador',
        user: user
    })
}
const userUpdate = async (req, res = response) => {

    const { id } = req.params;
    const { password, google, ...rest } = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findOneAndUpdate(id, rest);

    res.json({
        ok: true,
        mensaje: 'Put /controlador',
        user: user
    })
}
const userDelete = (req, res = response) => {

    const id = req.body.id;

    res.json({
        ok: true,
        mensaje: 'Delete /controlador',
        id: id
    })
}

module.exports = {
    usersGet,
    userCreate,
    userUpdate,
    userDelete
}