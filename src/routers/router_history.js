const express = require('express')
const router = express.Router()

const {
  createOrder,
  readAllOrder,
  deleteOrder
} = require('../controllers/controller_history')

router
  .post('/', createOrder)
  .get('/', readAllOrder)
  .delete('/:id', deleteOrder)
module.exports = router