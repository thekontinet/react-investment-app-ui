const expressAsyncHandler = require('express-async-handler');
const { PasswordReset, PasswordUpdate } = require('./resetController');
const router = require('express').Router();

router.post('/forgotPassword', expressAsyncHandler(async(req, res) => {
        const {email} = req.body
        await PasswordReset(email)
        res.status(201).json('Token sent.')
    }
));

router.post('/resetPassword', expressAsyncHandler(async(req, res) => {
    const {password, code} = req.body;
    await PasswordUpdate(password, code)
    res.status(200).end()
}))

module.exports = router