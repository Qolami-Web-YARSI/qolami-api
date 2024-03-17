const prisma = require("../db/connection");

const insertLessonContent = async (newLessonContentData) => {
  const lessonContent = await prisma.lesson_Content.create({
    data: {
      title: newLessonContentData.title,
      description: newLessonContentData.description,
      image: newLessonContentData.image,
      hijaiyah: newLessonContentData.hijaiyah,
      media: newLessonContentData.media,
      userId: newLessonContentData.userId,
      lessonId: newLessonContentData.lessonId,
    },
  });

  return lessonContent;
};

const findLessonContents = async () => {
  const lessonContents = await prisma.lesson_Content.findMany();

  return lessonContents;
};

const findLessonContentById = async (id) => {
  const lessonContent = await prisma.lesson_Content.findUnique({
    where: {
      id,
    },
  });

  return lessonContent;
};

const editLessonContent = async (id, lessonContentData) => {
  const lessonContent = await prisma.lesson_Content.update({
    where: {
      id,
    },
    data: {
      title: lessonContentData.title,
      description: lessonContentData.description,
      image: lessonContentData.image,
      hijaiyah: lessonContentData.hijaiyah,
      media: lessonContentData.media,
      userId: lessonContentData.userId,
      lessonId: lessonContentData.lessonId,
    },
  });

  return lessonContent;
};

const deleteLessonContent = async (id) => {
  const lessonContent = await prisma.lesson_Content.delete({
    where: {
      id,
    },
  });

  return lessonContent;
};

const findLessonContentByTitle = async (title) => {
  const lessonContent = await prisma.lesson_Content.findFirst({
    where: {
      title,
    },
  });

  return lessonContent;
};

module.exports = {
  insertLessonContent,
  findLessonContents,
  findLessonContentById,
  editLessonContent,
  deleteLessonContent,
  findLessonContentByTitle,
};
