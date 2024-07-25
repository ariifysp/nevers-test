const express = require('express')
const router = express.Router()

const SmilyController = require('../../controller/smily.controller')

router.post('', SmilyController.smilyController)

module.exports = router