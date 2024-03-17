const express = require("express");
const { createLessonContent, getAllLessonContents, getLessonContentById, editLessonContentById, deleteLessonContentById } = require("./lesson_content.service");
const { generateAccessToken, generateRefreshToken, authenticateToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.use(authenticateToken);

router.post("/", async (req, res) => {
  try {
    const newLessonContentData = req.body;
    const userId = req.user.id;
    const lessonId = parseInt(newLessonContentData.lessonId);
    newLessonContentData.userId = userId;
    newLessonContentData.lessonId = lessonId;
    const lessonContent = await createLessonContent(newLessonContentData);

    res.status(201).send({
      data: lessonContent,
      message: "Lesson Content created successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const lessonContents = await getAllLessonContents();

    res.status(200).send({
      data: lessonContents,
      message: "Lessons Contents retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const lessonContentId = parseInt(req.params.id);
    const lessonContent = await getLessonContentById(lessonContentId);

    res.status(200).send({
      data: lessonContent,
      message: "Lesson Content retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const lessonContentId = parseInt(req.params.id);
    const lessonContentData = req.body;
    const lessonContent = await editLessonContentById(lessonContentId, lessonContentData);

    res.status(200).send({
      data: lessonContent,
      message: "Lesson Content edited successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const lessonContentId = parseInt(req.params.id);

    await deleteLessonContentById(lessonContentId);

    res.status(200).send({
      message: "Lesson Content deleted successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
