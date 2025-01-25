const db = require('../config/db.config');

const User = {
    create: (userData, callback) => {
        const query = 'INSERT INTO users (full_name, phone, email, login, password) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [userData.full_name, userData.phone, userData.email, userData.login, userData.password], callback);
    },

    findByLogin: (login, callback) => {
        const query = 'SELECT * FROM users WHERE login = ?';
        db.query(query, [login], callback);
    }
};

module.exports = User;
