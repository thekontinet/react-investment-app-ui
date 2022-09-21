const {Schema, default:mongoose, model} = require ('mongoose')

const ResetPasswordSchema = new Schema({
    email: String,
    token: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    expiresAt: {
        type: Date,
        default: Date.now() + (60 * 15) * 1000
    }
});

ResetPasswordSchema.methods.hasExpired = function(){
    return Date.now() > this.expiresAt.getTime()
}

const Reset = mongoose.model('Reset', ResetPasswordSchema)

module.exports = Reset 