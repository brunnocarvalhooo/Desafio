const listRepository = require('../repositories/list.repository')

class GetListByUserService {
  async execute({ id, user_id }) {
    const list = await listRepository.getListById(id, user_id)

    return list
  }
}

module.exports = GetListByUserService