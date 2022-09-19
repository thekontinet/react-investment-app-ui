const { Schema, default: mongoose } = require("mongoose");


const userSchema = new Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    verification_code: {
        type: String,
        default: ''
    },
})

userSchema.methods.toJSON = function(){
    user = this.toObject()
    delete user.password
    return user
}

const User = mongoose.model('User', userSchema)

module.exports = User