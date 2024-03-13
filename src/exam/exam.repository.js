const prisma = require("../db/connection");

const insertExam = async (newExamData) => {
  const exam = await prisma.exam.create({
    data: {
      title: newExamData.title,
      subtitle: newExamData.subtitle,
      image: newExamData.image,
      userId: newExamData.userId,
    },
  });

  return exam;
};

const findExams = async () => {
  const exams = await prisma.exam.findMany();

  return exams;
};

const findExamById = async (id) => {
  const exam = await prisma.exam.findUnique({
    where: {
      id,
    },
  });

  return exam;
};

const editExam = async (id, examData) => {
  const exam = await prisma.exam.update({
    where: {
      id,
    },
    data: {
      title: examData.title,
      subtitle: examData.subtitle,
      image: examData.image,
      userId: examData.userId,
    },
  });

  return exam;
};

const deleteExam = async (id) => {
  const exam = await prisma.exam.delete({
    where: {
      id,
    },
  });

  return exam;
};

const findExamByTitle = async (title) => {
  const exam = await prisma.exam.findFirst({
    where: {
      title,
    },
  });

  return exam;
};

module.exports = {
  insertExam,
  findExams,
  findExamById,
  editExam,
  deleteExam,
  findExamByTitle,
};
