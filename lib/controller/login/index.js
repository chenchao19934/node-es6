export default class User {
    /**
	 * [getUserInfo 获取用户信息]
	 * @param  {[type]} userId      [用户id]
	 */
    static async getUserInfo(userId) {
        let sql = `
                SELECT user_id,phone,nick_name,sign,logo 
                FROM t_user_info 
                WHERE user_id = ?
                `
        const userInfo = await query(sql,[userId]).catch(err => {
            console.log(err)
        })
        if (userInfo.length !== 0) {
            return {
                code : 1,
                data : userInfo[0],
                message : 'success'
            }
        }else {
            return {
                code : -1,
                message : '查无此用户！'
            }
        }
    }
    static async isLogin(userName,password) {
        let sql = `
                SELECT * 
                FROM t_user 
                WHERE username=? AND password=?
                `
        const result = await queryUser(sql,[userName,password]).catch(err => {
            console.log(err);
        })
        if (result !== undefined) {
            return {
                code : 1,
                data : result[0],
                message : 'success'
            }
        }else {
            return {
                code : -1,
                message : '用户名或密码错误！'
            }
        }
    }
}