const { Schema, default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt')


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verification_code: {
        type: String,
        default: ''
    },
    email_verified_at: {
        type: Date,
        default: null
    }
})

UserSchema.pre('save', function(next){
    if (!this.isModified('password')) return next();

    const user = this

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
})

UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateVerificationToken = async function(){
    const code = Math.random().toString().slice(2, 8)
    this.verification_code = await bcrypt.hash(code, await bcrypt.genSalt(10))
    await this.save()
    return code
}

UserSchema.methods.verifyToken = async function(token){
    if(await bcrypt.compare(token, this.verification_code)){
        this.verification_code = '';
        return await this.save()
    }
    return false
}

UserSchema.methods.toJSON = function(){
    user = this.toObject()
    delete user.password
    delete user.verification_code
    return user
}

const User = mongoose.model('User', UserSchema)

module.exports = User