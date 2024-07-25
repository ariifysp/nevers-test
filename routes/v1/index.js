const express = require('express')
const router = express.Router()

router.use('/odd', require('./odd'))
router.use('/manipulate', require('./manipulate'))
router.use('/smily', require('./smily'))

module.exports = router