const express = require("express");
const { getAllLessonsOne, getLessonOneById } = require("./lesson_one.service");

const router = express.Router();

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
