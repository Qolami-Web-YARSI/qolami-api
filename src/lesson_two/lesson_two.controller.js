const express = require("express");
const { getAllLessonsTwo, getLessonTwoById } = require("./lesson_two.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const lessonsTwo = await getAllLessonsTwo();

    res.status(200).send({
      data: lessonsTwo,
      message: "Lessons Two retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const lessonTwoId = req.params.id;
    const lessonTwo = await getLessonTwoById(parseInt(lessonTwoId));

    res.status(200).send({
      data: lessonTwo,
      message: "Lesson Two retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
