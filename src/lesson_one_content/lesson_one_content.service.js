const { findLessonsOneContent, findLessonOneContentById } = require("./lesson_one_content.repository");

const getAllLessonsOneContent = async (lessonOneId) => {
  const lessonsOneContent = await findLessonsOneContent(lessonOneId);

  return lessonsOneContent;
};

const getLessonOneContentById = async (id) => {
  const lessonOneContent = await findLessonOneContentById(id);

  if (!lessonOneContent) {
    throw new Error("Lesson One Content not found.");
  }

  return lessonOneContent;
};

module.exports = {
  getAllLessonsOneContent,
  getLessonOneContentById,
};
