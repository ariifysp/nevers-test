const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')

const config = require('./config')
const errorHandler = require('./helper/error')

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: '25mb' }))
app.use(bodyParser.urlencoded({ extended:true, limit: '25mb' }))
app.use('/', require('./routes'))
app.use(errorHandler)

app.listen(config.PORT, () => console.log(`App running on port ${config.PORT}`))