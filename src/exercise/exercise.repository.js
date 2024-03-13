const prisma = require("../db/connection");

const insertExercise = async (newExerciseData) => {
  const exercise = await prisma.exercise.create({
    data: {
      title: newExerciseData.title,
      subtitle: newExerciseData.subtitle,
      image: newExerciseData.image,
      userId: newExerciseData.userId,
    },
  });

  return exercise;
};

const findExercises = async () => {
  const exercises = await prisma.exercise.findMany();

  return exercises;
};

const findExerciseById = async (id) => {
  const exercise = await prisma.exercise.findUnique({
    where: {
      id,
    },
  });

  return exercise;
};

const editExercise = async (id, exerciseData) => {
  const exercise = await prisma.exercise.update({
    where: {
      id,
    },
    data: {
      title: exerciseData.title,
      subtitle: exerciseData.subtitle,
      image: exerciseData.image,
      userId: exerciseData.userId,
    },
  });

  return exercise;
};

const deleteExercise = async (id) => {
  const exercise = await prisma.exercise.delete({
    where: {
      id,
    },
  });

  return exercise;
};

const findExerciseByTitle = async (title) => {
  const exercise = await prisma.exercise.findFirst({
    where: {
      title,
    },
  });

  return exercise;
};

module.exports = {
  insertExercise,
  findExercises,
  findExerciseById,
  editExercise,
  deleteExercise,
  findExerciseByTitle,
};
