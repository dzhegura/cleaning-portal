const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/register', userController.registrationPage);
router.post('/register', userController.createUser);
router.get('/login', userController.loginPage);
router.post('/login', userController.authorizeUser);

module.exports = router;
