const express = require('express');
const router = express.Router();
const {getUserOrders} = require('../controllers/getUserOrders.js')

router.get('/:id/orders',getUserOrders )

module.exports = router;