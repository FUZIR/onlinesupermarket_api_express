const express = require('express');
const router = express.Router();
const {updateEmployeeRoute} = require("../controllers/updateEmployee.js");


router.put('/:id', updateEmployeeRoute);

module.exports = router;