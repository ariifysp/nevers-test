const Joi = require('joi')
const CustomError = require('../error/custom.error')

const oddValidator = (data) => {
  const schema = Joi.object({
    input: Joi.array().items(Joi.number()).required(),
  })
  const validate = schema.validate(data)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

module.exports = {
  oddValidator
}