const express = require("express");
const { createExam, getAllExams, getExamById, editExamById, deleteExamById } = require("./exam.service");
const { authenticateToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", authenticateToken, async (req, res) => {
  try {
    const newExamData = req.body;
    const userId = req.user.id;
    newExamData.userId = userId;
    const exam = await createExam(newExamData);

    res.status(201).send({
      data: exam,
      message: "Exam created successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", authenticateToken, async (req, res) => {
  try {
    const exams = await getAllExams();

    res.status(200).send({
      data: exams,
      message: "Exams retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const examId = parseInt(req.params.id);
    const exam = await getExamById(examId);

    res.status(200).send({
      data: exam,
      message: "Exam retrieved successfully.",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const examId = parseInt(req.params.id);
    const examData = req.body;
    const exam = await editExamById(examId, examData);

    res.status(200).send({
      data: exam,
      message: "Exam edited successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const examId = parseInt(req.params.id);

    await deleteExamById(examId);

    res.status(200).send({
      message: "Exam deleted successfully.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
