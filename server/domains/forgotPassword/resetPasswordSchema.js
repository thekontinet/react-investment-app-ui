const {Schema, default:mongoose, model} = require ('mongoose')

const ResetPasswordSchema = new Schema({
    userId: String,
    reset_code: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    expiresAt: {
        type: Date,
        default: Date.now() + (60 * 2) * 1000
    }
});
 
ResetPasswordSchema.methods.toJSON = function(){
    reset = this.toObject()
    delete reset.reset_code
    return reset
}

const Reset = mongoose.model('Reset', ResetPasswordSchema)

module.exports = Reset 