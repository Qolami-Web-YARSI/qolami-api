const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userController = require("./user/user.controller");
const lessonController = require("./lesson/lesson.controller");
const exerciseController = require("./exercise/exercise.controller");
const examController = require("./exam/exam.controller");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Selamat datang di API akuhh");
});

app.use("/", userController);
app.use("/lessons", lessonController);
app.use("/exercises", exerciseController);
app.use("/exams", examController);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
