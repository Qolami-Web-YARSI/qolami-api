const prisma = require("../db/connection");

const findLessonsOne = async () => {
  const lessonsOne = await prisma.lesson_One.findMany();

  return lessonsOne;
};

const findLessonOneById = async (id) => {
  const lessonOne = await prisma.lesson_One.findUnique({
    where: {
      id,
    },
  });

  return lessonOne;
};

module.exports = {
  findLessonsOne,
  findLessonOneById,
};
