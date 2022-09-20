const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const User = require("./userSchema");
const mailerService = require("../../services/mailService");

const userValidator = Joi.object({
  name: Joi.string().max(200).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(18).required(),
});

async function getAllUsers() {
    return await User.find()
}

async function createUser(name, email, password) {
  const { error, value: data } = userValidator.validate({
    name,
    email,
    password,
  });

  if (error) throw new createHttpError.BadRequest(error.details[0].message);

  if (await User.findOne({ email: data.email }))
    throw new createHttpError.BadRequest("Email already used");

  const user = await User.create(data);

  await sendVerificationCode(user.email);

  return user;
}

async function sendVerificationCode(email) {
  const { error } = Joi.string().email().required().validate(email);

  if (error) throw new createHttpError.BadRequest(error.details.message);

  const user = await User.findOne({ email });

  if (!user) throw new createHttpError.NotFound("Email not found");

  const token = await user.generateVerificationToken();

  mailerService.sendUserVerificationCode(user, token);
}

async function verifyEmail(email, token) {
  const { error, value: data } = Joi.object({
    email: Joi.string().email().required(),
    token: Joi.string().required(),
  }).validate({ email, token });

  if (error) throw new createHttpError.BadRequest(error.details[0].message);

  const user = await User.findOne({ email: data.email });

  if (!user) throw new createHttpError.NotFound("Email not found");

  return await user.verifyToken(data.token);
}

async function updateUser(id, params){
    const {error} = Joi.object({
        id: Joi.string().required()
    }).validate({id})

    if (error) throw new createHttpError.BadRequest(error.details[0].message);

    const user = await User.findOne({_id: id})

    // update necessary values only
    user.name = params.name
    
     await user.save()

     return user
}

async function deleteUser(id, password){
    const user = await User.findById(id)
    if(!user) throw new createHttpError.NotFound('User not found')

    if(await user.comparePassword(password)){
        return await user.delete()
    }
    return false
}

module.exports = { getAllUsers, createUser, sendVerificationCode, verifyEmail, updateUser, deleteUser };
