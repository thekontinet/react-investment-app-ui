const expressAsyncHandler = require('express-async-handler')
const { createUser, updateUser, deleteUser, getAllUsers, verifyEmail } = require('./userController')
const router = require('express').Router()

router.get('/', expressAsyncHandler(async function(req, res){
    res.send(await getAllUsers())
}))

router.post('/', expressAsyncHandler(async function(req, res){
    const {name, email, password} = req.body
    const user = await createUser(name, email, password)
    res.status(201).json(user)
}))

router.put('/:id', expressAsyncHandler(async function(req, res){
    const {name} = req.body
    const user = await updateUser(req.params.id, {name})
    res.status(200).json(user)
}))

router.delete('/:id', expressAsyncHandler(async function(req, res){
    const {password} = req.body
    await deleteUser(req.params.id, password)
    res.json("done")
}))

router.post('/email/verify', expressAsyncHandler(async function(req, res){
    const {token} = req.body
    await verifyEmail(email, token)
    res.json("done")
}))


module.exports = router