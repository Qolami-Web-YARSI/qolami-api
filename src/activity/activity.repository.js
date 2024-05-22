const prisma = require("../db/connection");

const insertActivity = async (newActivityData) => {
  const activity = await prisma.activity.create({
    data: {
      activityName: newActivityData.activityName,
      date: newActivityData.date,
      value: newActivityData.value,
      status: newActivityData.status,
    },
  });

  return activity;
};

const findActivies = async () => {
  const activities = await prisma.activity.findMany();

  return activities;
};

module.exports = {
  insertActivity,
  findActivies,
};
