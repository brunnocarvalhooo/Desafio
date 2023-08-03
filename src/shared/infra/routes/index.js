const { Router } = require('express')

const userRouters = require('../../../modules/users/infra/routes/user.routes')
const loginRouter = require('../../../modules/users/infra/routes/login.routes')

const ensureAuthenticated = require('../../middlewares/ensure-autenticated')

const routes = Router()

routes.use('/users', userRouters)

routes.use('/login', loginRouter)

routes.use(ensureAuthenticated)

module.exports = routes