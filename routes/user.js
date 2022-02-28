const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, userUpdate, userCreate, userDelete } = require('../controllers/user');
const { validateEmail } = require('../helpers/validation-db');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/', usersGet)

router.post('/', [
    check('email', 'El correo es obligatorio').not().isEmpty(),
    check('password', 'El contraseña es obligatorio').not().isEmpty(),
    check('password', 'El contraseña debe ser minimo de 6 letras').isLength({min: 6}),
    check('email', 'El correo no es valido').isEmail(),
    check('email', 'El correo no es valido').custom(validateEmail),
    check('role', 'No es un rol valido').isIn('Admin', 'User'),
    validateFields
], userCreate)

router.put('/:id', [
    // check('id', 'No es un ID valido').isMongoId(),
    // validateFields
], userUpdate)

router.delete('/:id', userDelete)

module.exports = router;