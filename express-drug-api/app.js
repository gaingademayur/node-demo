const express = require('express')
const app = express();
const api = require('./api/api')

app.listen(4000, ()=> {
    console.log('server is running at 4000')
})

app.use('/api', api);