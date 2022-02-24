const { response } = require('express');
const User = require('../models/user');

const usersGet = (req, res = response) => {

    // const { params } = req.query;
    const params = req.query;

    res.json({
        ok: true,
        mensaje: 'Get /controlador',
        params: params
    })
}
const userCreate = async (req, res = response) => {

    const body = req.body;
    const user = new User(body);

    await user.save();

    res.json({
        ok: true,
        mensaje: 'Post /controlador',
        user: user
    })
}
const userUpdate = (req, res = response) => {

    const id = req.body.id;

    res.json({
        ok: true,
        mensaje: 'Put /controlador',
        id: id
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