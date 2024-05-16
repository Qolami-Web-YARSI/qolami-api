const { findLessonsTwoContent, findLessonTwoContentById } = require("./lesson_two_content.repository");

const getAllLessonsTwoContent = async (lessonTwoId) => {
  const lessonsTwoContent = await findLessonsTwoContent(lessonTwoId);

  return lessonsTwoContent;
};

const getLessonTwoContentById = async (id) => {
  const lessonTwoContent = await findLessonTwoContentById(id);

  if (!lessonTwoContent) {
    throw new Error("Lesson Two Content not found.");
  }

  return lessonTwoContent;
};

module.exports = {
  getAllLessonsTwoContent,
  getLessonTwoContentById,
};
