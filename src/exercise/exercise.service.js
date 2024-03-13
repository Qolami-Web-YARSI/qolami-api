const { insertExercise, findExercises, findExerciseById, editExercise, deleteExercise, findExerciseByTitle } = require("./exercise.repository");

const createExercise = async (newExerciseData) => {
  const findExercise = await findExerciseByTitle(newExerciseData.title);

  if (findExercise) {
    throw new Error("Exercise title is already exists.");
  }

  if (!newExerciseData.title || !newExerciseData.subtitle || !newExerciseData.image) {
    throw new Error("Exercise not found.");
  }

  const exercise = await insertExercise(newExerciseData);

  return exercise;
};

const getAllExercises = async () => {
  const exercises = await findExercises();

  return exercises;
};

const getExerciseById = async (id) => {
  const exercise = await findExerciseById(id);

  if (!exercise) {
    throw new Error("Exercise not found.");
  }

  return exercise;
};

const editExerciseById = async (id, exerciseData) => {
  await getExerciseById(id);

  if (!(exerciseData.title && exerciseData.subtitle && exerciseData.image)) {
    throw new Error("Some fields are missing.");
  }

  const exercise = await editExercise(id, exerciseData);

  return exercise;
};

const deleteExerciseById = async (id) => {
  await getExerciseById(id);

  const exercise = await deleteExercise(id);

  return exercise;
};

module.exports = {
  createExercise,
  getAllExercises,
  getExerciseById,
  editExerciseById,
  deleteExerciseById,
};
