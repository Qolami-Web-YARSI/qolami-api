const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const userController = require("./user/user.controller");
const lessonOneController = require("./lesson_one/lesson_one.controller");
const lessonTwoController = require("./lesson_two/lesson_two.controller");
const lessonOneContentController = require("./lesson_one_content/lesson_one_content.controller");
const lessonTwoContentController = require("./lesson_two_content/lesson_two_content.controller");
const activityController = require("./activity/activity.controller");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send({
    teamName: "ART",
    project: "Qolami Web",
  });
});

app.use("/users", userController);
app.use("/lessons-one", lessonOneController);
app.use("/lessons-one", lessonOneContentController);
app.use("/lessons-two", lessonTwoController);
app.use("/lessons-two", lessonTwoContentController);
app.use("/activity", activityController);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
