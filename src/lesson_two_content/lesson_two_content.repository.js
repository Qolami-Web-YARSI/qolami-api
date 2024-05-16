const prisma = require("../db/connection");

const findLessonsTwoContent = async (lessonTwoId) => {
  const lessonsTwoContent = await prisma.lesson_Two_Content.findMany({
    where: {
      lessonTwoId,
    },
  });

  return lessonsTwoContent;
};

const findLessonTwoContentById = async (id) => {
  const lessonTwoContent = await prisma.lesson_Two_Content.findUnique({
    where: {
      id,
    },
  });

  return lessonTwoContent;
};

module.exports = {
  findLessonsTwoContent,
  findLessonTwoContentById,
};
