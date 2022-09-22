const createHttpError = require("http-errors");
const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)
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
  const { error } = userValidator.validate({
    name,
    email,
    password,
  });

  if (error) throw new createHttpError.BadRequest(error.details[0].message);

  if (await User.findOne({ email }))
    throw new createHttpError.BadRequest("Email already used");

  const user = await User.create({name, email, password});

  const token = await user.generateVerificationToken();

  mailerService.sendUserVerificationCode(user, token);

  return user;
}

async function updateUser(id, params){
  const {error} = Joi.object({
      id: Joi.string().required()
  }).validate({id})

  if (error) throw new createHttpError.BadRequest(error.details[0].message);

  const user = await User.findOne({_id: id})

  if(!user) throw createHttpError.NotFound('user not found')

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

async function sendVerificationCode(email) {
  const { error } = Joi.string().email().required().validate(email);

  if (error) throw new createHttpError.BadRequest(error.details.message);

  const user = await User.findOne({ email });

  if (!user) throw new createHttpError.NotFound("Email not found");

  if (user.emailVerified()) throw new createHttpError.Forbidden("Email already verified");

  const token = await user.generateVerificationToken();

  mailerService.sendUserVerificationCode(user, token);
}

async function verifyEmail(id, token) {
  const { error } = Joi.object({
    id: Joi.objectId(),
    token: Joi.string().required(),
  }).validate({ id, token });

  if (error) throw new createHttpError.BadRequest(error.details[0].message);

  const user = await User.findById(id);

  if (!user) throw new createHttpError.NotFound("Account not found");

  if(! await user.verifyToken(token)){
    throw new createHttpError.BadRequest("verification token is not valid")
  }
}

module.exports = { getAllUsers, createUser, sendVerificationCode, verifyEmail, updateUser, deleteUser };
