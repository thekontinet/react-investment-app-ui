const createHttpError = require("http-errors");
const User = require("../user/userSchema");
const Joi = require("joi");
const mailerService = require("../../services/mailService");
const Reset = require("./resetPasswordSchema");

const resetEmailValidator = Joi.object({
  email: Joi.string().email().required(),
});

const passwordUpdateValidator = Joi.object({
  password: Joi.string().min(6).max(18).required(),
});

async function PasswordReset(email) {
  const { error } = resetEmailValidator.validate({ email });

  if (error) throw new createHttpError.BadRequest(error.details[0].message);

  const user = await User.findOne({ email });

  if (!user) throw new createHttpError.NotFound("Email not found");

  const token = Date.now().toString(36);

  await Reset.deleteMany({ email });

  await Reset.create({ email, token });

  mailerService.sendUserPasswordResetCode(user, token);
}

async function PasswordUpdate(password, token) {
  const { error } = passwordUpdateValidator.validate({ password });

  if (error) throw new createHttpError.BadRequest(error.details[0].message);

  const resetCode = await Reset.findOne({ token });

  if (!resetCode){
    throw new createHttpError.BadRequest("invalid token provided. Please check your mail and try again");
  }

  if (resetCode.hasExpired()) {
    throw new createHttpError.BadRequest("token expired");
  }

  const user = await User.findOne({ email: resetCode.email });
  user.password = password;
  user.save();

  resetCode.delete();

  return true;
}

module.exports = { PasswordReset, PasswordUpdate };
