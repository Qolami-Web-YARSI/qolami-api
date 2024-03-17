const express = require("express");
const { createExercise, getAllExercises, getExerciseById, editExerciseById, deleteExerciseById } = require("./exercise.service");
const { authenticateToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.use(authenticateToken);

router.post("/", async (req, res) => {
  try {
    const newExerciseData = req.body;
    const userId = req.user.id;
    newExerciseData.userId = userId;
    const exercise = await createExercise(newExerciseData);

    res.status(201).send({
      data: exercise,
      message: "Exercise created successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const exercises = await getAllExercises();

    res.status(200).send({
      data: exercises,
      message: "Exercises retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const exerciseId = parseInt(req.params.id);
    const exercise = await getExerciseById(exerciseId);

    res.status(200).send({
      data: exercise,
      message: "Exercise retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const exerciseId = parseInt(req.params.id);
    const exerciseData = req.body;
    const exercise = await editExerciseById(exerciseId, exerciseData);

    res.status(200).send({
      data: exercise,
      message: "Exercise edited successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const exerciseId = parseInt(req.params.id);

    await deleteExerciseById(exerciseId);

    res.status(200).send({
      message: "Exercise deleted successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
