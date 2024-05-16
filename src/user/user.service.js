const yup = require("yup");
const bcrypt = require("bcrypt");
const { sendEmail } = require("../utils/email.utils");
const { v4: uuidv4 } = require("uuid");
const { insertUser, findUserByEmail, resetPasswordUserByEmail, findUserById, updatePasswordUser, editUser } = require("./user.repository");

const registerSchema = yup.object().shape({
  firstName: yup.string().matches(/^[a-zA-Z ]*$/, "Fullname can only contain letters and spaces."),
  lastName: yup.string().matches(/^[a-zA-Z ]*$/, "Fullname can only contain letters and spaces."),
  email: yup
    .string()
    .required()
    .matches(/^[a-z0-9_.]+@[a-z0-9]+.(com|org|net)$/, "Invalid email format."),
  password: yup.string().required().min(8, "Password must be at least 8 characters."),
});

const registerUser = async (newUserData) => {
  await registerSchema.validate(newUserData, { abortEarly: false });
  const existingUser = await findUserByEmail(newUserData.email);

  if (existingUser) {
    throw new Error("Email is already registered.");
  }

  const user = await insertUser(newUserData);

  return user;
};

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .matches(/^[a-z0-9_.]+@[a-z0-9]+.(com|org|net)$/, "Invalid email format."),
  password: yup.string().required().min(8, "Password must be at least 8 characters."),
});

const loginUser = async (email, password) => {
  await loginSchema.validate({ email, password }, { abortEarly: false });
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("User not found.");
  }

  if (!user.password) {
    throw new Error("Password not set for this user.");
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (passwordValid) {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };
  } else {
    throw new Error("Invalid password.");
  }
};

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .matches(/^[a-z0-9_.]+@[a-z0-9]+.(com|org|net)$/, "Invalid email format."),
});

const forgotPasswordUser = async (email) => {
  await forgotPasswordSchema.validate({ email }, { abortEarly: false });

  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("User not found.");
  }

  const newPassword = uuidv4().slice(0, 12);
  await resetPasswordUserByEmail(email, newPassword);

  const subject = "Password Reset";
  const text = `Your new password is: ${newPassword}`;

  await sendEmail(email, subject, text);
};

const getUserById = async (id) => {
  const user = await findUserById(id);

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};

const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required().min(8, "Password must be at least 8 characters."),
  newPassword: yup.string().required().min(8, "Password must be at least 8 characters."),
  confirmNewPassword: yup.string().required().min(8, "Password must be at least 8 characters."),
});

const changePasswordUser = async (id, oldPassword, newPassword, confirmNewPassword) => {
  await changePasswordSchema.validate({ oldPassword, newPassword, confirmNewPassword }, { abortEarly: false });

  const user = await findUserById(id);

  if (!user) {
    throw new Error("User not found.");
  }

  const passwordValid = await bcrypt.compare(oldPassword, user.password);

  if (!passwordValid) {
    throw new Error("Invalid old password.");
  }

  if (newPassword !== confirmNewPassword) {
    throw new Error("New password and confirm password do not match.");
  }

  await updatePasswordUser(user.email, newPassword);
};

const editUserById = async (id, userData) => {
  await getUserById(id);

  const user = editUser(id, userData);

  return user;
};

module.exports = {
  registerUser,
  loginUser,
  forgotPasswordUser,
  getUserById,
  changePasswordUser,
  editUserById,
};
