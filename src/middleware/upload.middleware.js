const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const profileUpload = (req, res, next) => {
  upload.single("profileUrl")(req, res, (error) => {
    if (error) {
      return res.status(400).send(error.message);
    }

    if (req.file) {
      req.body.profileUrl = `/uploads/${req.file.filename}`;
    }
    next();
  });
};

module.exports = profileUpload;
