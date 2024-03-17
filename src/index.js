const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userController = require("./user/user.controller");
const lessonController = require("./lesson/lesson.controller");
const lessonContentController = require("./lesson_content/lesson_content.controller");
const exerciseController = require("./exercise/exercise.controller");
const examController = require("./exam/exam.controller");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    teamName: "ART",
    project: "Qolami Web",
  });
});

app.use("/", userController);
app.use("/lessons/contents", lessonContentController);
app.use("/lessons", lessonController);
app.use("/exercises", exerciseController);
app.use("/exams", examController);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
