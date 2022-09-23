const createHttpError = require('http-errors')
const jwt = require('jsonwebtoken')
const User = require('../domains/user/userSchema')

async function auth(req, res, next){
    try{
        const token = req.header('x-auth-token')
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({_id: decode._id})
        if(!user) throw createHttpError.BadRequest("Invalid auth token")
        req.user = user
        next()
    }
    catch(err){
        next(createHttpError.Unauthorized(err.message))
    }
}

module.exports = auth