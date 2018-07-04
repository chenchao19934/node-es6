import express from 'express'
import user from '../../controller/login'

const infoRouter = express.Router()

infoRouter
    .get('/info/:userId', async(req, res) => {
		const {userId} = req.params;
		const result = await user.getUserInfo(userId);
		res.json(result);
	})
	
	.get('/login/:username/:password', async(req,res) => {
		const {username,password} = req.params;
		const result = await user.isLogin(username,password);
		res.json(result);
	})

export default infoRouter