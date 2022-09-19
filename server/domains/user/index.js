const expressAsyncHandler = require('express-async-handler')
const { createUser } = require('./userController')
const router = require('express').Router()

router.get('/', expressAsyncHandler(function(req, res){
    res.send('list all users')
}))

router.post('/', expressAsyncHandler(async function(req, res){
    const {name, email, password} = req.body
    const user = await createUser(name, email, password)
    res.status(201).json(user)
}))

router.delete('/', expressAsyncHandler(function(req, res){
    const {id} = req.body
    const user = {}
    res.send(user)
}))


module.exports = router