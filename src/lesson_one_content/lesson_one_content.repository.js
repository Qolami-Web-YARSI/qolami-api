const prisma = require("../db/connection");

const findLessonsOneContent = async (lessonOneId) => {
  const lessonsOneContent = await prisma.lesson_One_Content.findMany({
    where: {
      lessonOneId,
    },
  });

  return lessonsOneContent;
};

const findLessonOneContentById = async (id) => {
  const lessonOneContent = await prisma.lesson_One_Content.findUnique({
    where: {
      id,
    },
  });

  return lessonOneContent;
};

module.exports = {
  findLessonsOneContent,
  findLessonOneContentById,
};
