const express = require("express");
const { getAllLessonsOneContent, getLessonOneContentById } = require("./lesson_one_content.service");

const router = express.Router();

router.get("/contents/:id", async (req, res) => {
  try {
    const lessonOneId = req.params.id;
    const lessonsOneContent = await getAllLessonsOneContent(parseInt(lessonOneId));

    res.status(200).send({
      data: lessonsOneContent,
      message: "Lessons One Content retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/content/:id", async (req, res) => {
  try {
    const lessonOneId = req.params.id;
    const lessonOneContent = await getLessonOneContentById(parseInt(lessonOneId));

    res.status(200).send({
      data: lessonOneContent,
      message: "Lesson One Content retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
