const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const Joi = require("joi");
const User = require("./userSchema");
const mailer = require("../../config/mail");
const mailerService = require("../../services/mailService");
const { render } = require("../../utils/view");

const userValidator = Joi.object({
    name: Joi.string().max(200).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(18).required()
})

async function createUser(name, email, password){
    const {error} = userValidator.validate({name, email, password})
    
    if(error) throw new createHttpError.BadRequest(error.details[0].message)

    if(await User.findOne({email})) throw new createHttpError.BadRequest("Email already used")

    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10))

    const verification_code = Math.random().toString().slice(2, 8)
   
    const user = await User.create({name, email, password: hash, verification_code})

    mailerService.sendUserVerificationCode(user)

    return user
}


module.exports = {createUser}