const { response } = require('express');

const usersGet = (req, res = response) => {

    // const { params } = req.query;
    const params = req.query;

    res.json({
        ok: true,
        mensaje: 'Get /controlador',
        params: params
    })
}
const userCreate = (req, res = response) => {

    const body = req.body;

    res.json({
        ok: true,
        mensaje: 'Post /controlador',
        body: body
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