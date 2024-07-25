const Joi = require('joi')
const CustomError = require('../error/custom.error')

const manipulateValidator = (data) => {
  const schema = Joi.object({
    input: Joi.string().required(),
  })
  const validate = schema.validate(data)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

module.exports = {
  manipulateValidator
}