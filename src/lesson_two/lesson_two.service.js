const { findLessonsTwo, findLessonTwoById } = require("./lesson_two.repository");

const getAllLessonsTwo = async () => {
  const lessonsTwo = await findLessonsTwo();

  return lessonsTwo;
};

const getLessonTwoById = async (id) => {
  const lessonTwo = await findLessonTwoById(id);

  if (!lessonTwo) {
    throw new Error("Lesson Two not found.");
  }

  return lessonTwo;
};

module.exports = {
  getAllLessonsTwo,
  getLessonTwoById,
};
