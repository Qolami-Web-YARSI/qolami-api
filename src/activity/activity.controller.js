const express = require("express");
const { createActivity, getAllActivities } = require("./activity.service");
const { generateAccessToken, generateRefreshToken, authenticateToken } = require("../middleware/auth.middleware");
const { user } = require("../db/connection");

const router = express.Router();

router.post("/", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const newActivityData = req.body;
    newActivityData.userId = userId;
    const activity = await createActivity(newActivityData);

    res.status(201).send({
      data: activity,
      message: "Activity created successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const activities = await getAllActivities(userId);

    res.status(200).send({
      data: activities,
      message: "Activities retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
