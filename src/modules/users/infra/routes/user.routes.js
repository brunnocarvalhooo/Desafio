const { Router } = require('express')

const {
  createUser,
  forgotPassword,
  resetPassword,
  listAllUsers,
} = require('../controllers/users.controller')

const {
  verifyPayloadForCreation,
  verifyEmailToForgotPassword,
  verifyPayloadForResetPassword,
} = require('../../middlewares/users.middleware')

const userRouters = Router()

userRouters.post('/', verifyPayloadForCreation(), createUser)

userRouters.get('/', listAllUsers)

userRouters.post('/forgot', verifyEmailToForgotPassword(), forgotPassword)

userRouters.patch('/reset-password/:token', verifyPayloadForResetPassword(), resetPassword)

module.exports = userRouters