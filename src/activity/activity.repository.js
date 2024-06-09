const prisma = require("../db/connection");

const insertActivity = async (newActivityData) => {
  const activity = await prisma.activity.create({
    data: {
      activityName: newActivityData.activityName,
      date: newActivityData.date,
      value: newActivityData.value,
      status: newActivityData.status,
      userId: newActivityData.userId,
    },
  });

  return activity;
};

const findActivies = async (userId) => {
  const activities = await prisma.activity.findMany({
    where: {
      userId,
    },
  });

  return activities;
};

module.exports = {
  insertActivity,
  findActivies,
};
