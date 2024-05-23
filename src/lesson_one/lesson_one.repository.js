const prisma = require("../db/connection");

const insertLessonOne = async (newLessonOneData) => {
  const lessonOne = await prisma.lesson_One.create({
    data: {
      hurufHijaiyah: newLessonOneData.hurufHijaiyah,
      colorCard: newLessonOneData.colorCard,
      hoverCard: newLessonOneData.hoverCard,
    },
  });

  return lessonOne;
};

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
  insertLessonOne,
  findLessonsOne,
  findLessonOneById,
};
