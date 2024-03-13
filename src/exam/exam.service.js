const { insertExam, findExams, findExamById, editExam, deleteExam, findExamByTitle } = require("./exam.repository");

const createExam = async (newExamData) => {
  const findExam = await findExamByTitle(newExamData.title);

  if (findExam) {
    throw new Error("Exam title is already exists.");
  }

  if (!newExamData.title || !newExamData.subtitle || !newExamData.image) {
    throw new Error("Exam not found.");
  }

  const exam = await insertExam(newExamData);

  return exam;
};

const getAllExams = async () => {
  const exams = await findExams();

  return exams;
};

const getExamById = async (id) => {
  const exam = await findExamById(id);

  if (!exam) {
    throw new Error("Exam not found.");
  }

  return exam;
};

const editExamById = async (id, examData) => {
  await getExamById(id);

  if (!(examData.title && examData.subtitle && examData.image)) {
    throw new Error("Some fields are missing.");
  }

  const exam = await editExam(id, examData);

  return exam;
};

const deleteExamById = async (id) => {
  await getExamById(id);

  const exam = await deleteExam(id);

  return exam;
};

module.exports = {
  createExam,
  getAllExams,
  getExamById,
  editExamById,
  deleteExamById,
};
