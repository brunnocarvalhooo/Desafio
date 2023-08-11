const AppError = require('../../../shared/AppError')

const listRepository = require('../repositories/list.repository')

class UpdateListService {
  async execute({ id, title, description, heroes, user_id }) {
    const list = await listRepository.getListById(id, user_id)
    if (!list) {
      throw new AppError('List not found')
    }

    const listUpdated = await listRepository.updateList({
      id,
      title,
      description,
      heroes: JSON.stringify(heroes),
      user_id,
    })

    return listUpdated
  }
}

module.exports = UpdateListService