const { verify } = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    const accessToken = req.header('accessToken')
    if (!accessToken) return res.json({error: 'Usuário não autenticado'})
    try {
        const ok = verify(accessToken, "T4tYUfvRHv-yHF7wFQn7V-95mAAbczAy-vSlU9s723d-c1at8bEytS-9JCwh8YIVh")
        if (ok) {
            next()
        }
        return res.json({error: "token inválido"})
    } catch (err) {
        return res.json({error: err})
    }
}

module.exports = { validateToken }
