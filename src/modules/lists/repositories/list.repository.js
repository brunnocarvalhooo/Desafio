const AppError = require('../../../shared/AppError')

const connection = require('../../../shared/database/connection')

module.exports = {
  async getListsByUserId(user_id) {
    try {
      return connection('lists').where({ id }).andWhere({ user_id }).first()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async createList(payload) {
    try {
      const list = await connection('lists')
        .insert(payload)
        .returning('*')

      return list[0]
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async getListById(id, user_id) {
    try {
      return connection('lists').where({ id }).andWhere({ user_id }).first()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async getListsByUserId(user_id) {
    try {
      return connection('lists').where({ user_id })
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async updateList(payload) {
    try {
      const list = await connection('lists')
        .update(payload)
        .where({ id: payload.id })
        .returning('*')

      return list[0]
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async deleteList(id) {
    try {
      return connection('lists').where({ id }).del()
    } catch (err) {
      throw new AppError(err.message)
    }
  },
}