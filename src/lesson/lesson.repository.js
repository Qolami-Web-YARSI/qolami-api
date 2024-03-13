const prisma = require("../db/connection");

const insertLesson = async (newlessonData) => {
  const lesson = await prisma.lesson.create({
    data: {
      title: newlessonData.title,
      subtitle: newlessonData.subtitle,
      description: newlessonData.description,
      image: newlessonData.image,
      userId: newlessonData.userId,
    },
  });

  return lesson;
};

const findLessons = async () => {
  const lessons = await prisma.lesson.findMany();

  return lessons;
};

const findLessonById = async (id) => {
  const lesson = await prisma.lesson.findUnique({
    where: {
      id,
    },
  });

  return lesson;
};

const editLesson = async (id, lessonData) => {
  const lesson = await prisma.lesson.update({
    where: {
      id,
    },
    data: {
      title: lessonData.title,
      subtitle: lessonData.subtitle,
      description: lessonData.description,
      image: lessonData.image,
      userId: lessonData.userId,
    },
  });

  return lesson;
};

const deleteLesson = async (id) => {
  const lesson = await prisma.lesson.delete({
    where: {
      id,
    },
  });

  return lesson;
};

const findLessonByTitle = async (title) => {
  const lesson = await prisma.lesson.findFirst({
    where: {
      title,
    },
  });

  return lesson;
};

module.exports = {
  insertLesson,
  findLessons,
  findLessonById,
  editLesson,
  deleteLesson,
  findLessonByTitle,
};
