const { insertLessonTwo, findLessonsTwo, findLessonTwoById } = require("./lesson_two.repository");

const createLessonTwo = async (newLessonTwoData) => {
  if (!newLessonTwoData.hurufBerharakatFathah || !newLessonTwoData.colorCard || !newLessonTwoData.hoverCard) {
    throw new Error("Lesson Two not found.");
  }

  const lessonTwo = await insertLessonTwo(newLessonTwoData);

  return lessonTwo;
};

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
  createLessonTwo,
  getAllLessonsTwo,
  getLessonTwoById,
};
