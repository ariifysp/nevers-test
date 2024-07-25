const express = require('express')
const router = express.Router()

const OddController = require('../../controller/odd.controller')

router.post('', OddController.oddController)

module.exports = router