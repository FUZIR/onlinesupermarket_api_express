const express = require('express')
const router = express.Router();
const {createProductRoute} = require('../controllers/createProduct.js')

router.post('', createProductRoute)

module.exports = router;