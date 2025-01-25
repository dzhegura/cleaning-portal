const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.get('/', orderController.listOrders);

router.get('/create', orderController.orderPage);
router.post('/create', orderController.createOrder);

router.post('/update', orderController.updateOrderStatus);

module.exports = router;
