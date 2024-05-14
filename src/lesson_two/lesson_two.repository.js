const prisma = require("../db/connection");

const insertLessonTwo = async (newLessonTwoData) => {
  const lessonTwo = await prisma.lesson_Two.create({
    data: {
      hurufBerharakatFathahName: newLessonTwoData.hurufBerharakatFathahName,
      hurufBerharakatFathah: newLessonTwoData.hurufBerharakatFathah,
      colorCard: newLessonTwoData.colorCard,
      hoverCard: newLessonTwoData.hoverCard,
    },
  });

  return lessonTwo;
};

const findLessonTwo = async () => {
  const lessonTwo = await prisma.lesson_Two.findMany();

  return lessonTwo;
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
  findLessonTwo,
  findLessonTwoById,
};
