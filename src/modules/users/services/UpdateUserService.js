const AppError = require('../../../shared/AppError')

class UpdateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ id, name, email }) {
    const user = await this.usersRepository.getUserById(id)
    if (!user) {
      throw new AppError('User not found')
    }

    const userUpdated = await this.usersRepository.updateUser({
      id,
      name,
      email,
    })

    return userUpdated
  }
}

module.exports = UpdateUserService