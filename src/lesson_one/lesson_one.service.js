const { findLessonsOne, findLessonOneById } = require("./lesson_one.repository");

const getAllLessonsOne = async () => {
  const lessonsOne = await findLessonsOne();

  return lessonsOne;
};

const getLessonOneById = async (id) => {
  const lessonOne = await findLessonOneById(id);

  if (!lessonOne) {
    throw new Error("Lesson One not found.");
  }

  return lessonOne;
};

module.exports = {
  getAllLessonsOne,
  getLessonOneById,
};
