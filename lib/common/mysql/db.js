import mysql from 'mysql'

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