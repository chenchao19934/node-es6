import Express from 'express';

import apiRouter from './api/index' //api
import {query,queryUser} from './common/mysql/db'

let app = Express();

global.query = query
global.queryUser = queryUser

app.use('/api', apiRouter)

app.listen(3000,() => {
    console.log('server running http://localhost:3000,hahah');
})