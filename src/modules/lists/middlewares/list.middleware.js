const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        title: Joi.string().required(),
        description: Joi.string().allow(null, ''),
        heroes: Joi.array().required(),
      },
    })
  },

  verifyListIdInParams() {
    return celebrate({
      [Segments.PARAMS]: {
        listId: Joi.string().required(),
      },
    })
  },
}
