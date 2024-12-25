const Notes = require("../Models/Notes");

const uploadNote = async (req, res) => {
    try {
        const fileName = req.body.file;
        const fileDescription = req.body.description;
        const tags = req.body.tags;
        const file = req.file.filename;
        const uploadedBy = req.body.userId;

        const newFile = new Notes({
            fileName: fileName,
            fileDescription: fileDescription,
            tags: tags,
            files: file,
            uploadedBy: uploadedBy,
        });

        await newFile.save();
        res.send({ status: "Ok" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getNote = async (req, res) => {
    try {
        const { title, tag } = req.query;
        const query = {};

        if (title) {
            query.fileName = { $regex: title, $options: "i" };
        }
        if (tag) {
            query.tags = { $regex: tag, $options: "i" };
        }

        const data = await Notes.find(query);
        res.send({ data: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getNoteByID = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = await Notes.find({ uploadedBy: userId });
        res.json({ data: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { uploadNote, getNote, getNoteByID };
