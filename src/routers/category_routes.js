const { Router } = require('express')
const {
	insertCategory,
	getAllCategories,
	getCategoryById,
	updateCategory,
	deleteCategory
} = require('../controllers/category_controllers')
const routes = Router()

routes
	.post('/', insertCategory)
	.get('/', getAllCategories)
	.get('/:id', getCategoryById)
	.patch('/:id', updateCategory)
	.delete('/:id', deleteCategory)
module.exports = routes
