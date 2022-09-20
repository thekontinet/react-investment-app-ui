const createHttpError = require("http-errors");
const User = require("../user/userSchema");
const Joi = require("joi");
const mailerService = require("../../services/mailService");
const { render } = require("../../utils/view");
const bcrypt = require("bcrypt");
const Reset = require("./resetPasswordSchema");
const { where, updateOne } = require("../user/userSchema");

const resetEmailValidator = Joi.object({
    email: Joi.string().email().required()
})

const passwordUpdateValidator = Joi.object({
    password: Joi.string().min(6).max(18).required(),
})

async function PasswordReset(email) {
    const { error } = resetEmailValidator.validate({ email })
    if (error) throw new createHttpError.BadRequest(error.details[0].message)

    const user = await User.findOne({ email })

    if (!user) throw new createHttpError.BadRequest('Reset failed. Invalid user email!')

    const reset_code = Math.random().toString().slice(2, 8)

    await Reset.deleteMany({ userId: user._id })

    const reset = await Reset.create({ userId: user._id, reset_code })

    mailerService.sendPasswordResetCode(user, reset)

    return true
}
async function PasswordUpdate(password, code) {
    const { error } = passwordUpdateValidator.validate({ password });

    if (error) throw new createHttpError.BadRequest(error.details[0].message)

    const resetCode = await Reset.findOne({ reset_code: code })

    if (!resetCode) throw new createHttpError.BadRequest('Invalid code. Resend email.')

    const currentTime = Date.now()
    const expireTime = resetCode.expiresAt.getTime()

    if (currentTime > expireTime) {
        throw new createHttpError.BadRequest('Expired token!')
    }
    
    const user = await User.findOne({_id:resetCode.userId})
    user.password = password
    user.save()

    resetCode.delete()

    return true
}

module.exports = { PasswordReset, PasswordUpdate }