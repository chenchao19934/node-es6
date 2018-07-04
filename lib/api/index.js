import express from 'express'

import InfoRouter from './router/info'

const apiRouter = express.Router()

apiRouter
    .use('/user',InfoRouter)


export default apiRouter