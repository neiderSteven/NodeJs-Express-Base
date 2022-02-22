const { Router } = require('express');
const { usersGet, userUpdate, userCreate, userDelete } = require('../controllers/user');

const router = Router();

router.get('/', usersGet)

router.post('/', userCreate)

router.put('/:id', userUpdate)

router.delete('/:id', userDelete)

module.exports = router;