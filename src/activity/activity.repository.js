const prisma = require("../db/connection");

const insertActivity = async (newActivityData) => {
  const activity = await prisma.activity.create({
    data: {
      activityName: newActivityData.activityName,
      dateStarted: newActivityData.dateStarted,
      dateFinished: newActivityData.dateFinished,
      value: newActivityData.value,
      passed: newActivityData.passed,
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
