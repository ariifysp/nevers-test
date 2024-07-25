const SmilyValidator = require('../validator/smily.validator')
const SmilyService = require('../service/smily.service')
const { defaultHandler } = require('../helper/handler')

const smilyController = async (req) => {
  const data = await SmilyValidator.smilyValidator({...req.body})
  const result = await SmilyService.countSmilyFace(data)
  return {
    status: 1,
    message: 'successfully',
    data: result
  }
}

module.exports = {
  smilyController: defaultHandler({
    handler: smilyController
  }),
}