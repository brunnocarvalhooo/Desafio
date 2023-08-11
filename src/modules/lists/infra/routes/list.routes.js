const { Router } = require('express')

const {
  getHeroes,
  getHero,
  createList,
  getListsByUser,
  getListByUser,
  updateList,
  deleteList,
} = require('../controllers/lists.controller')

const {
  verifyPayloadForCreation,
  verifyListIdInParams,
} = require('../../middlewares/list.middleware')

const listRouters = Router()

listRouters.get('/all', getHeroes)

listRouters.get('/hero/', getHero)

listRouters.post('/', verifyPayloadForCreation(), createList)

listRouters.get('/', getListsByUser)

listRouters.get('/:listId', getListByUser)

listRouters.put('/:listId', verifyListIdInParams(), updateList)

listRouters.delete('/:listId', verifyListIdInParams(), deleteList)

module.exports = listRouters