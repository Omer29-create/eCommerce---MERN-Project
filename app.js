const express = require('express')








const app = express()
const productRouter = require('./router/productRouter')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

require('./db/db')
// app.get('/', (req, res) => {res.send('index')})
app.use('/products', productRouter)

module.exports=app
