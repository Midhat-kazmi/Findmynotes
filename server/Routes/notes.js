const express = require("express");
const router = express.Router();
const NotesController = require("../Controllers/NotesController");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./files");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({ storage: storage });

// Routes
router.post("/upload", upload.single("file"), NotesController.uploadNote);
router.get("/getFiles", NotesController.getNote);
router.get("/getfiles/:id", NotesController.getNoteByID); // Ensure this matches the exported name

module.exports = router;
