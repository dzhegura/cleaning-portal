const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '$MySQL!Server_7Qf9e&2024',
    database: 'cleaning'
});

connection.connect(err => {
    if (err) {
        console.error('Ошибка подключения к БД:', err);
        return;
    }
    console.log('Подключено к MySQL');
});

module.exports = connection;
