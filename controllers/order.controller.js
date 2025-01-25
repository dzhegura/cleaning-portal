const Order = require('../models/order.model');

exports.orderPage = (req, res) => {
    res.render('order');
};

exports.createOrder = (req, res) => {
    const { user_id, address, phone, service_type, custom_service, preferred_date, payment_method } = req.body;

    Order.create({ user_id, address, phone, service_type, custom_service, preferred_date, payment_method }, (err) => {
        if (err) {
            return res.status(500).send('Ошибка при создании заявки');
        }
        res.redirect('/orders');
    });
};

exports.listOrders = (req, res) => {
    const user_id = req.session?.user?.id || 1;

    Order.findByUserId(user_id, (err, orders) => {
        if (err) {
            return res.status(500).send('Ошибка получения заявок');
        }
        res.render('orders', { orders });
    });
};

exports.updateOrderStatus = (req, res) => {
    const { order_id, status, cancel_reason } = req.body;

    Order.updateStatus(order_id, status, cancel_reason, (err) => {
        if (err) {
            return res.status(500).send('Ошибка обновления статуса заявки');
        }
        res.redirect('/admin/orders');
    });
};
