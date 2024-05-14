const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userController = require("./user/user.controller");
const lessonOneController = require("./lesson_one/lesson_one.controller");
const lessonTwoController = require("./lesson_two/lesson_two.controller");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    teamName: "ART",
    project: "Qolami Web",
  });
});

app.use("/", userController);
app.use("/lesson-one", lessonOneController);
app.use("/lesson-two", lessonTwoController);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
