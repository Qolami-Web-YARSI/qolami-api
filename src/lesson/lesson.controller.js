const express = require("express");
const { createLesson, getAllLessons, getLessonById, editLessonById, deleteLessonById } = require("./lesson.service");
const { authenticateToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", authenticateToken, async (req, res) => {
  try {
    const newLessonData = req.body;
    const userId = req.user.id;
    newLessonData.userId = userId;
    const lesson = await createLesson(newLessonData);

    res.status(201).send({
      data: lesson,
      message: "Lesson created successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", authenticateToken, async (req, res) => {
  try {
    const lessons = await getAllLessons();

    res.status(200).send({
      data: lessons,
      message: "Lessons retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const lessonId = parseInt(req.params.id);
    const lesson = await getLessonById(lessonId);

    res.status(200).send({
      data: lesson,
      message: "Lesson retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const lessonId = parseInt(req.params.id);
    const lessonData = req.body;
    const lesson = await editLessonById(lessonId, lessonData);

    res.status(200).send({
      data: lesson,
      message: "Lesson edited successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const lessonId = parseInt(req.params.id);

    await deleteLessonById(lessonId);

    res.status(200).send({
      message: "Lesson deleted successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
