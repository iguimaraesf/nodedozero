const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./models')

// rotas
const postRouter = require('./routes/Posts')
const commentRouter = require('./routes/Comments')

app.use(express.json())
app.use(cors())
app.use('/posts', postRouter)
app.use('/comments', commentRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Servidor na porta 3001')
    })
})
