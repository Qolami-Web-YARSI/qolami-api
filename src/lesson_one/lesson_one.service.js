const { insertLessonOne, findLessonOne, findLessonOneById } = require("./lesson_one.repository");

const createLessonOne = async (newLessonOneData) => {
  if (!newLessonOneData.hurufHijaiyahImage || !newLessonOneData.colorCard || !newLessonOneData.hoverCard || !newLessonOneData.audio) {
    throw new Error("Lesson One not found.");
  }

  const lessonOne = await insertLessonOne(newLessonOneData);

  return lessonOne;
};

const getAllLessonOne = async () => {
  const lessonsOne = await findLessonOne();

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
  createLessonOne,
  getAllLessonOne,
  getLessonOneById,
};
