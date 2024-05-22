const { insertActivity, findActivies } = require("./activity.repository");

const createActivity = async (newActivityData) => {
  if (!newActivityData.activityName || !newActivityData.dateStarted || !newActivityData.dateFinished || !newActivityData.value || !newActivityData.passed) {
    throw new Error("Activity not found.");
  }

  const activity = await insertActivity(newActivityData);

  return activity;
};

const getAllActivities = async () => {
  const activities = await findActivies();

  return activities;
};

module.exports = {
  createActivity,
  getAllActivities,
};
