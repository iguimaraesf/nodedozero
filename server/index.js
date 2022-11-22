const express = require('express')
const app = express()

const db = require('./models')

// rotas
const postRouter = require('./routes/Posts')
app.use(express.json())
app.use('/posts', postRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Servidor na porta 3001')
    })
})
