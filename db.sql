CREATE DATABASE IF NOT EXISTS cleaning;
USE cleaning;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(16) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    login VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(16) NOT NULL,
    service_type ENUM('Общий клининг', 'Генеральная уборка', 'Послестроительная уборка', 'Химчистка ковров и мебели', 'Иная услуга') NOT NULL,
    custom_service TEXT NULL,
    preferred_date DATETIME NOT NULL,
    payment_method ENUM('Наличные', 'Банковская карта') NOT NULL,
    status ENUM('новая заявка', 'услуга оказана', 'услуга отменена') DEFAULT 'новая заявка',
    cancel_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
