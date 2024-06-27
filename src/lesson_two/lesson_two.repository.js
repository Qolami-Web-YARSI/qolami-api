const prisma = require("../db/connection");

const findLessonsTwo = async () => {
  const lessonsTwo = await prisma.lesson_Two.findMany();

  return lessonsTwo;
};

const findLessonTwoById = async (id) => {
  const lessonTwo = await prisma.lesson_Two.findUnique({
    where: {
      id,
    },
  });

  return lessonTwo;
};

module.exports = {
  findLessonsTwo,
  findLessonTwoById,
};
