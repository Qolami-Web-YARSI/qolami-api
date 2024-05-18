const prisma = require("../db/connection");
const bcrypt = require("bcrypt");

const insertUser = async (newUserData) => {
  const hashedPassword = await bcrypt.hash(newUserData.password, 5);
  const user = await prisma.user.create({
    data: {
      firstName: newUserData.firstName,
      lastName: newUserData.lastName,
      email: newUserData.email,
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

const findUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
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
      firstName: userData.firstName,
      lastName: userData.lastName,
      profileUrl: userData.profileUrl,
    },
  });

  return user;
};

module.exports = {
  insertUser,
  findUserByEmail,
  resetPasswordUserByEmail,
  findUsers,
  findUserById,
  updatePasswordUser,
  editUser,
};
