const listRepository = require('../repositories/list.repository')

class CreateListService {
  async execute({ title, description, heroes, user_id }) {
    const list = await listRepository.createList({
      title,
      description,
      heroes,
      user_id,
    })

    return list
  }
}

module.exports = CreateListService