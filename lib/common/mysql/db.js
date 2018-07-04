import mysql from 'mysql'
const pool = mysql.createPool({
	host: '120.25.76.109',
	port: '3306',
	user: 'scw',
	password: 'jingwa123',
	database: 'scw3',
	debug: true
})
export const query = function (sql, values) {
	// 返回一个 Promise
	return new Promise((resolve, reject) => {
		pool.getConnection(function (err, connection) {
			if (err) {
				reject(err)
			} else {
				connection.query(sql, values, (err, rows) => {
					if (err) {
						reject(err)
					} else {
						resolve(rows)
					}
					// 结束会话
					connection.release()
				})
			}
		})
	})
}

const poolUser = mysql.createPool({
	host: '120.25.76.109',
	port: '3306',
	user: 'scw',
	password: 'jingwa123',
	database: 'user3',
	debug: true
})
export const queryUser = function (sql, values) {
	// 返回一个 Promise
	return new Promise((resolve, reject) => {
		poolUser.getConnection(function (err, connection) {
			if (err) {
				reject(err)
			} else {
				connection.query(sql, values, (err, rows) => {
					if (err) {
						reject(err)
					} else {
						resolve(rows)
					}
					// 结束会话
					connection.release()
				})
			}
		})
	})
}