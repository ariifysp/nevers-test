const OddValidator = require('../validator/odd.validator')
const OddService = require('../service/odd-number.service')
const { defaultHandler } = require('../helper/handler')

const oddController = async (req) => {
  const data = await OddValidator.oddValidator({...req.body})
  const result = await OddService.findOddNumber(data)
  return {
    status: 1,
    message: 'successfully',
    data: result
  }
}

module.exports = {
  oddController: defaultHandler({
    handler: oddController
  }),
}