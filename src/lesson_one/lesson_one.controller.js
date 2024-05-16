const express = require("express");
const { createLessonOne, getAllLessonsOne, getLessonOneById } = require("./lesson_one.service");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newLessonOneData = req.body;
    const lessonOne = await createLessonOne(newLessonOneData);

    res.status(201).send({
      data: lessonOne,
      message: "Lesson One created successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const lessonsOne = await getAllLessonsOne();

    res.status(200).send({
      data: lessonsOne,
      message: "Lessons One retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const lessonOneId = req.params.id;
    const lessonOne = await getLessonOneById(parseInt(lessonOneId));

    res.status(200).send({
      data: lessonOne,
      message: "Lesson One retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
