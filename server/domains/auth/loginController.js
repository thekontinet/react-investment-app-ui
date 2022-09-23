const createHttpError = require("http-errors")
const Joi = require("joi")
const jwt = require("jsonwebtoken")
const User = require("../user/userSchema")

const loginValidator = Joi.object({
    email: Joi.string().trim().required(),
    password: Joi.string().required()
})

async function login(email, password){
    const {error} = loginValidator.validate({email, password})

    if(error) throw new createHttpError.BadRequest(error.details[0].message)

    const user = await User.findOne({email})

    if(await user.comparePassword(password)){
        return new Promise(function(resolve, reject){
            const {email, _id} = user
            jwt.sign({email, _id}, process.env.JWT_SECRET,{
                expiresIn: '7d'
            }, function(err, token){
                if(err){
                    return reject(err)
                }
                return resolve(token)
            })
        })
    }

    throw new createHttpError.NotAcceptable("Invalid credentials")
}

module.exports = {login}