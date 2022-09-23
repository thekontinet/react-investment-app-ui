const expressAsyncHandler = require('express-async-handler');
const { PasswordReset, PasswordUpdate } = require('./resetController');
const router = require('express').Router();

router.post('/forgot', expressAsyncHandler(async(req, res) => {
        const {email} = req.body
        await PasswordReset(email)
        res.status(201).json('password reset information has been sent to your mail')
    }
));

router.put('/reset', expressAsyncHandler(async(req, res) => {
    const {password, token} = req.body;
    await PasswordUpdate(password, token)
    res.status(200).json('password reset successful')
}))

module.exports = router