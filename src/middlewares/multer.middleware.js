import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //ab more than one file ka naam bhi same he, to no problem because this will only remain in server for friction of second
  },
});

export const upload = multer({
  storage,
});
