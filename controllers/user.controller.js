const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.registrationPage = (req, res) => {
    res.render('register');
};

exports.createUser = (req, res) => {
    const { full_name, phone, email, login, password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).send('Ошибка при хешировании пароля');
        }

        User.create({ full_name, phone, email, login, password: hashedPassword }, (err) => {
            if (err) {
                return res.status(500).send('Ошибка при регистрации');
            }
            res.redirect('/auth/login');
        });
    });
};

exports.loginPage = (req, res) => {
    res.render('login');
};

exports.authorizeUser = (req, res) => {
    const { login, password } = req.body;

    User.findByLogin(login, (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).send('Неверный логин или пароль');
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (isMatch) {
                res.send('Добро пожаловать!');
            } else {
                res.status(401).send('Неверный логин или пароль');
            }
        });
    });
};
