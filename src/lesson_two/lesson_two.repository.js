const prisma = require("../db/connection");

const insertLessonTwo = async (newLessonTwoData) => {
  const lessonTwo = await prisma.lesson_Two.create({
    data: {
      hurufBerharakatFathah: newLessonTwoData.hurufBerharakatFathah,
      colorCard: newLessonTwoData.colorCard,
      hoverCard: newLessonTwoData.hoverCard,
    },
  });

  return lessonTwo;
};

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
  insertLessonTwo,
  findLessonsTwo,
  findLessonTwoById,
};
