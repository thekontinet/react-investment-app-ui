const expressAsyncHandler = require('express-async-handler')
const { createUser, updateUser, deleteUser, getAllUsers, verifyEmail, sendVerificationCode } = require('./userController')
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
    res.json("account deleted")
}))

router.post('/email/verify', expressAsyncHandler(async function(req, res){
    const {token} = req.body
    await verifyEmail('632a68267fba8b66837fe6c1', token)
    res.json("email verified")
}))

router.post('/email/resend', expressAsyncHandler(async function(req, res){
    const {email} = req.body
    await sendVerificationCode(email)
    res.json("verification info has been sent to mail")
}))


module.exports = router