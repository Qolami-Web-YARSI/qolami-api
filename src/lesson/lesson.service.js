const { insertLesson, findLessons, findLessonById, editLesson, deleteLesson, findLessonByTitle } = require("./lesson.repository");

const createLesson = async (newLessonData) => {
  const findLesson = await findLessonByTitle(newLessonData.title);

  if (findLesson) {
    throw new Error("Lesson title is already exists.");
  }

  if (!newLessonData.title || !newLessonData.subtitle || !newLessonData.description || !newLessonData.image) {
    throw new Error("Lesson not found.");
  }

  const lesson = await insertLesson(newLessonData);

  return lesson;
};

const getAllLessons = async () => {
  const lessons = await findLessons();

  return lessons;
};

const getLessonById = async (id) => {
  const lesson = await findLessonById(id);

  if (!lesson) {
    throw new Error("Lesson not found.");
  }

  return lesson;
};

const editLessonById = async (id, lessonData) => {
  await getLessonById(id);

  if (!(lessonData.title && lessonData.subtitle && lessonData.description && lessonData.image)) {
    throw new Error("Some fields are missing.");
  }

  const lesson = await editLesson(id, lessonData);

  return lesson;
};

const deleteLessonById = async (id) => {
  await getLessonById(id);

  const lesson = await deleteLesson(id);

  return lesson;
};

module.exports = {
  createLesson,
  getAllLessons,
  getLessonById,
  editLessonById,
  deleteLessonById,
};
