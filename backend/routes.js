const express = require('express');
const menuController = require('./controllers/menu-controller');
// routes to be added here
router.get('/', menuController.getMenu);
const router = express.Router();
const orderController = require('./controllers/order-controller');
router.post('/checkout', orderController.createOrder);

router.get('/orders', orderController.getAllOrders);



module.exports = router;
