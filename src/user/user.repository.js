const prisma = require("../db/connection");
const bcrypt = require("bcrypt");

const insertUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 5);
  const user = await prisma.user.create({
    data: {
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      password: hashedPassword,
    },
  });

  return user;
};

const findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

const resetPasswordUserByEmail = async (email, newPassword) => {
  const hashedPassword = await bcrypt.hash(newPassword, 5);
  const user = await prisma.user.update({
    where: {
      email,
    },
    data: {
      password: hashedPassword,
    },
  });

  return user;
};

const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

const updatePasswordUser = async (email, newPassword) => {
  await resetPasswordUserByEmail(email, newPassword);
};

const editUser = async (id, userData) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstname: userData.firstname,
      lastname: userData.lastname,
      urlprofile: userData.urlprofile,
    },
  });

  return user;
};

module.exports = {
  insertUser,
  findUserByEmail,
  resetPasswordUserByEmail,
  findUserById,
  updatePasswordUser,
  editUser,
};
