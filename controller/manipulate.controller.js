const ManipulateValidator = require('../validator/manipulate.validator')
const ManipulateService = require('../service/manipulate.service')
const { defaultHandler } = require('../helper/handler')

const manipulateController = async (req) => {
  const data = await ManipulateValidator.manipulateValidator({...req.body})
  const result = await ManipulateService.manipulate(data)
  return {
    status: 1,
    message: 'successfully',
    data: result
  }
}

module.exports = {
  manipulateController: defaultHandler({
    handler: manipulateController
  }),
}