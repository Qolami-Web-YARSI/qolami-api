const { insertActivity, findActivies } = require("./activity.repository");

const createActivity = async (newActivityData) => {
  if (!newActivityData.activityName || !newActivityData.date || newActivityData.value === undefined || !newActivityData.status || !newActivityData.userId) {
    throw new Error("Activity not found.");
  }

  const activity = await insertActivity(newActivityData);

  return activity;
};

const getAllActivities = async (userId) => {
  const activities = await findActivies(userId);

  return activities;
};

module.exports = {
  createActivity,
  getAllActivities,
};
