const express = require("express");
const { getAllLessonsTwoContent, getLessonTwoContentById } = require("./lesson_two_content.service");

const router = express.Router();

router.get("/contents/:id", async (req, res) => {
  try {
    const lessonTwoId = req.params.id;
    const lessonsTwoContent = await getAllLessonsTwoContent(parseInt(lessonTwoId));

    res.status(200).send({
      data: lessonsTwoContent,
      message: "Lessons Two Content retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/content/:id", async (req, res) => {
  try {
    const lessonTwoId = req.params.id;
    const lessonTwoContent = await getLessonTwoContentById(parseInt(lessonTwoId));

    res.status(200).send({
      data: lessonTwoContent,
      message: "Lesson Two Content retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
