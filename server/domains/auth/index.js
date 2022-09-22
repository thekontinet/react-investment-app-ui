const expressAsyncHandler = require('express-async-handler')
const { login } = require('./loginController')

const router = require('express').Router()


router.post('/login', expressAsyncHandler(async function(req, res){
    const {email, password} = req.body
    const token = await login(email, password)
    res.json(token)
}))

module.exports = router