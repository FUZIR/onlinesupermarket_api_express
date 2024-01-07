const express = require('express');
const router = express.Router();
const {deleteOrderByIdRoute} = require("../controllers/deleteOrderById.js");

router.delete('/:id', deleteOrderByIdRoute);

module.exports = router;