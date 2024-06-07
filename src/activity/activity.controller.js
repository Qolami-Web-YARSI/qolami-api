const express = require("express");
const { createActivity, getAllActivities } = require("./activity.service");
const { generateAccessToken, generateRefreshToken, authenticateToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", authenticateToken, async (req, res) => {
  try {
    const newActivityData = req.body;
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
    const activities = await getAllActivities();

    res.status(200).send({
      data: activities,
      message: "Activities retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
