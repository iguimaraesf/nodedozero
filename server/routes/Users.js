const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const { username, password } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        })
        res.json("SUCCESS")
    })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const user = await Users.findOne({
        where: {
            username: username
        }
    })
    if (!user) {
        res.json({error: "Usuário não encontrado"})
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                res.json({error: "Usuário não encontrado"})
            } else {
                const accessToken = sign(
                    {username: username, id: user.id},
                    "T4tYUfvRHv-yHF7wFQn7V-95mAAbczAy-vSlU9s723d-c1at8bEytS-9JCwh8YIVh")
                res.json(accessToken)
            }
        })
    }
})

module.exports = router
