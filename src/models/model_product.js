const { queryHelper } = require('../helpers/helper_query')

module.exports = {
	insertProduct: (data) => {
		return queryHelper('INSERT INTO products SET ?', data)
	},
	getAllProduct: (search, filter, sort, order, limit, offset) => {
		let query = ''
		if (search !== '' && filter !== '') {
			query = `WHERE name LIKE '%${search}%' AND category_id = ${filter}`
		} else if (search !== '' && filter === '') {
			query = `WHERE name LIKE '%${search}%'`
		} else if (filter !== '' && search === '') {
			query = `WHERE category_id = ${filter}`
		}
		return queryHelper(
			`SELECT * FROM products ${query}
			ORDER BY ${sort} ${order} LIMIT ${limit} OFFSET ${offset}`
		)
	},
	getProductById: (id) => {
		return queryHelper('SELECT products.* FROM products WHERE id = ?', id)
	},
	getSearch: (search, filter) => {
		return queryHelper(
			`SELECT * FROM products
			WHERE ${filter ? `category_id = ${filter} AND` : ''
			} name LIKE '%${search}%'`
		)
	},
	getTotal: (filter) => {
		return queryHelper(
			`SELECT COUNT(*) AS total FROM products ${filter ? `WHERE category_id = ${filter}` : ''
			}`
		)
	},
	editProduct: (data, id) => {
		return queryHelper('UPDATE products SET ? WHERE id = ?', [data, id])
	},
	removeProduct: (id) => {
		return queryHelper('DELETE FROM products WHERE id = ?', id)
	}
}
