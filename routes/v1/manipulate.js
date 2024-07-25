const express = require('express')
const router = express.Router()

const ManipulateController = require('../../controller/manipulate.controller')

router.post('', ManipulateController.manipulateController)

module.exports = router