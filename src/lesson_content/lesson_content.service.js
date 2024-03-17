const { insertLessonContent, findLessonContents, findLessonContentById, editLessonContent, deleteLessonContent, findLessonContentByTitle } = require("./lesson_content.repository");

const createLessonContent = async (newLessonContentData) => {
  const findLessonContent = await findLessonContentByTitle(newLessonContentData.title);

  if (findLessonContent) {
    throw new Error("Lesson Content title is already exists.");
  }

  if (!newLessonContentData.title || !newLessonContentData.description || !newLessonContentData.image || !newLessonContentData.hijaiyah || !newLessonContentData.media) {
    throw new Error("Lesson Content not found.");
  }

  const lessonContent = await insertLessonContent(newLessonContentData);

  return lessonContent;
};

const getAllLessonContents = async () => {
  const lessonContents = await findLessonContents();

  return lessonContents;
};

const getLessonContentById = async (id) => {
  const lessonContent = await findLessonContentById(id);

  if (!lessonContent) {
    throw new Error("Lesson Content not found.");
  }

  return lessonContent;
};

const editLessonContentById = async (id, lessonContentData) => {
  await getLessonContentById(id);

  if (!(lessonContentData.title && lessonContentData.description && lessonContentData.image && lessonContentData.hijaiyah && lessonContentData.media)) {
    throw new Error("Some fields are missing.");
  }

  const lessonContent = await editLessonContent(id, lessonContentData);

  return lessonContent;
};

const deleteLessonContentById = async (id) => {
  await getLessonContentById(id);

  const lessonContent = await deleteLessonContent(id);

  return lessonContent;
};

module.exports = {
  createLessonContent,
  getAllLessonContents,
  getLessonContentById,
  editLessonContentById,
  deleteLessonContentById,
};
