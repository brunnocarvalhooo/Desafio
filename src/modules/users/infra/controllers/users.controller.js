const usersRepository = require('../../repositories/users.repository')

const MailProvider = require('../../../../shared/providers/MailProvider')

const CreateUserService = require('../../services/CreateUserService')
const ListAllUsersService = require('../../services/ListAllUsersService')
const ForgotPasswordService = require('../../services/ForgotPasswordService')
const ResetUserPasswordService = require('../../services/ResetUserPasswordService')

module.exports = {
  async createUser(request, response) {
    const { name, email, password } = request.body

    const createUser = new CreateUserService(usersRepository)

    const user = await createUser.execute({
      name,
      email, 
      password,
    })

    return response.json({ data: user })
  },

  async updateUser(request, response) {
    return response.json({ message: 'User updated' })
  },

  async deleteUser(request, response) {
    return response.json({ message: 'User deleted' })
  },

  async listUser(request, response) {
    return response.json({ message: 'User listed' })
  },

  async listAllUsers(request, response) {
    const listAllUsers = new ListAllUsersService(usersRepository)

    const users = await listAllUsers.execute()
    return response.json({ data: users })
  },

  async forgotPassword(request, reponse) {
    const mailProvider = new MailProvider()

    const forgotPassword = new ForgotPasswordService(
      usersRepository, mailProvider,
    )

    const { email } = request.body

    await forgotPassword.execute({ email })

    return reponse.status(203).send()
  },

  async resetPassword(request, response) {
    const { token } = request.params
    const { password } = request.body

    const resetPassword = new ResetUserPasswordService(usersRepository)

    const updatedPaasword = await resetPassword.execute({ token, password })

    return response.json({ data: updatedPaasword })
  },
}