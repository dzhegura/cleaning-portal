const db = require('../config/db.config');

const Order = {
    create: (orderData, callback) => {
        const query = `
            INSERT INTO orders (user_id, address, phone, service_type, custom_service, preferred_date, payment_method)
            VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [
            orderData.user_id,
            orderData.address,
            orderData.phone,
            orderData.service_type,
            orderData.custom_service || null,
            orderData.preferred_date,
            orderData.payment_method
        ], callback);
    },

    findByUserId: (user_id, callback) => {
        const query = 'SELECT * FROM orders WHERE user_id = ?';
        db.query(query, [user_id], callback);
    },

    updateStatus: (order_id, status, cancel_reason, callback) => {
        const query = 'UPDATE orders SET status = ?, cancel_reason = ? WHERE id = ?';
        db.query(query, [status, cancel_reason || null, order_id], callback);
    }
};

module.exports = Order;
